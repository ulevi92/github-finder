export interface GetDataProps {
  incomplete_results: boolean;
  items: GetUserType[];
  total_count: number;
}

export type GetUserType = {
  id: number;
  name: string;
  type: string;
  avatar_url: string;
  location: string;
  bio: string;
  blog: string;
  twitter_username: string;
  login: string;
  html_url: string;
  followers: number;
  following: number;
  public_repos: number;
  public_gists: number;
  hireable: string;
};

export type GetUserReposType = {
  name: string;
  description: string;
  html_url: string;
  forks: number;
  open_issues: number;
  watchers_count: number;
  stargazers_count: number;
  id: number;
};
