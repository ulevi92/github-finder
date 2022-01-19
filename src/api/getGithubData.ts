import {} from "react-router-dom";
import { GetDataProps, GetUserReposType, GetUserType } from "./getGithubTypes";

export const gitUrl = process.env.REACT_APP_GITHUB_URL;
export const gitToken = process.env.REACT_APP_GITHUB_TOKEN;

export const getUsersGithubData = async (text: string) => {
  const params = new URLSearchParams({
    q: text,
  });

  const res = await fetch(`${gitUrl}/search/users?${params}`, {
    headers: {
      Authorization: `token ${gitToken}`,
    },
  });

  const data: GetDataProps = await res.json();

  return data.items;
};

export const getUserGithubData = async (login: string) => {
  const res = await fetch(`${gitUrl}/users/${login}`, {
    headers: {
      Authorization: `token ${gitToken}`,
    },
  });

  if (res.status === 404) {
    window.location.replace("/notfound");
  }

  const data: GetUserType = await res.json();

  return data;
};

export const getUserGithubRepos = async (login: string) => {
  const params = new URLSearchParams({
    sort: "created",
    per_page: "10",
  });

  const res = await fetch(`${gitUrl}/users/${login}/repos?${params}`, {
    headers: {
      Authorization: `token ${gitToken}`,
    },
  });

  const data: GetUserReposType[] = await res.json();

  return data;
};
