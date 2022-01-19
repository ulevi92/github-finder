import { createContext, FC, useContext, useReducer } from "react";
import { GetUserReposType, GetUserType } from "../../api/getGithubTypes";

// import {
//   getUserGithubData,
//   getUserRepos,
//   getUsersData,
// } from "../../api/getGithubData";
import {
  GithubReducer,
  // GithubActionTypes,
  GithubReducerType,
} from "./GithubReducers";

export interface GithubProviderState {
  users: [] | GetUserType[];
  user?: GetUserType;
  loading: boolean;
  repos: [] | GetUserReposType[];
}

interface ContextProps extends GithubProviderState {
  dispatch: React.Dispatch<GithubReducerType>;
}

const Context = createContext<ContextProps | null>(null);

export const useGithubProvider = () => {
  const ctx = useContext(Context);

  if (!ctx)
    throw new Error("useGithubProvider must be used within GithubProvider");

  return ctx;
};

const GithubProvider: FC = ({ children }) => {
  const initialState: GithubProviderState = {
    users: [],
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // const setLoading = () => dispatch({ type: GithubActionTypes.SET_LOADING });

  // const clearUsers = () => dispatch({ type: GithubActionTypes.CLEAR_USERS });

  // const getUser = async (login: string) => {
  //   setLoading();

  //   await getUserData(login).then((data) => {
  //     if (data) {
  //       return dispatch({
  //         type: GithubActionTypes.GET_USER,
  //         payload: data,
  //       });
  //     }
  //   });
  // };

  // const getRepos = async (login: string) => {
  //   await getUserRepos(login).then((data) =>
  //     dispatch({
  //       type: GithubActionTypes.GET_REPOS,
  //       payload: data,
  //     })
  //   );
  // };

  return (
    <Context.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default GithubProvider;
