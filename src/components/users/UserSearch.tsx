import React, { useState } from "react";
import { getUsersGithubData } from "../../api/getGithubData";
import { useAlertContext } from "../../context/alert/AlertContext";
import { useGithubProvider } from "../../context/github/GithubContext";
import { GithubActionTypes } from "../../context/github/GithubReducers";

const UserSearch = () => {
  const { users, dispatch } = useGithubProvider();

  const { setAlert } = useAlertContext();

  const [text, setText] = useState<string>("");

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);

  const onSearchSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (text === "") {
      return setAlert("Please Enter Somthing", "error");
    } else {
      dispatch({ type: GithubActionTypes.SET_LOADING });
      const usersData = await getUsersGithubData(text);
      dispatch({ type: GithubActionTypes.GET_USERS, payload: usersData });
    }
  };

  const onClearClick = () => dispatch({ type: GithubActionTypes.CLEAR_USERS });

  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
      <div>
        <form onSubmit={onSearchSubmit}>
          <div className='form-control'>
            <div className='relative'>
              <input
                type='text'
                className='w-full pr-40 bg-gray-200 input input-lg text-black'
                placeholder='Search'
                value={text}
                onChange={onInputChange}
              />
              <button
                type='submit'
                className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>

      {users.length >= 1 && (
        <div>
          <button className='btn btn-ghost btn-lg' onClick={onClearClick}>
            Clear
          </button>
        </div>
      )}
    </div>
  );
};

export default UserSearch;
