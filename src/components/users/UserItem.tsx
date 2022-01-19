import { FC } from "react";
import { Link } from "react-router-dom";
import { useGithubProvider } from "../../context/github/GithubContext";
import { GithubActionTypes } from "../../context/github/GithubReducers";

interface UserItemProps {
  user: string;
  userImg: string;
}

const UserItem: FC<UserItemProps> = ({ user, userImg }) => {
  const { dispatch } = useGithubProvider();

  const onUserClick = () => dispatch({ type: GithubActionTypes.CLEAR_USERS });

  return (
    <div className='card shadow-md compact side bg-base-100'>
      <div className='flex-row items-center space-x-4 card-body'>
        <div className='avatar'>
          <div className='rounded-full shadow w-14 h-14'>
            <img src={userImg} alt={`${user} avatar`} />
          </div>
        </div>

        <div>
          <h2 className='card-title'>{user}</h2>
          <Link
            className='text-base-content text-opacity-40'
            to={`/user/${user}`}
            onClick={onUserClick}
          >
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
