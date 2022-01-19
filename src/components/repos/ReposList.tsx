import { FC } from "react";
import { GetUserReposType } from "../../api/getGithubTypes";
import RepoItem from "./ReposItem";

interface ReposListProps {
  repos: GetUserReposType[];
}

const ReposList: FC<ReposListProps> = ({ repos }) => {
  const RenderRepos = repos.map((repo) => (
    <RepoItem key={repo.id} repo={repo} />
  ));

  return (
    <div className='rounded-lg shadow-lg card bg-base-100'>
      <div className='card-body'>
        <h2 className='text-3xl my-4 font-bold card-title'>
          Latest Repositories
        </h2>
        {RenderRepos}
      </div>
    </div>
  );
};

export default ReposList;
