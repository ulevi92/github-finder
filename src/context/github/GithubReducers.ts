import {
  GetUserReposType,
  // GetDataProps,
  GetUserType,
  // GetUsersType,
} from "../../api/getGithubTypes";
import { GithubProviderState } from "./GithubContext";

export enum GithubActionTypes {
  GET_USERS = "[github] GET_USERS",
  GET_USER = "[github] GET_USER",
  SET_LOADING = "[github] SET_LOADING",
  CLEAR_USERS = "[github] CLEAR_USERS",
  GET_REPOS = "[github] GET_REPOS",
}

export type GithubReducerType =
  | {
      type: GithubActionTypes.GET_USERS;
      payload: GetUserType[];
    }
  | { type: GithubActionTypes.GET_USER; payload: GetUserType }
  | { type: GithubActionTypes.GET_REPOS; payload: GetUserReposType[] }
  | { type: GithubActionTypes.CLEAR_USERS }
  | { type: GithubActionTypes.SET_LOADING };

export const GithubReducer = (
  state: GithubProviderState,
  action: GithubReducerType
) => {
  switch (action.type) {
    case GithubActionTypes.GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };

    case GithubActionTypes.GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };

    case GithubActionTypes.GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };

    case GithubActionTypes.SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    case GithubActionTypes.CLEAR_USERS:
      return {
        ...state,
        users: [],
      };

    default:
      return state;
  }
};
