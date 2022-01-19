import { useGithubProvider } from "../../context/github/GithubContext";
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";

const UserResults = () => {
  // console.log();

  const { users, loading } = useGithubProvider();

  const renderUsers = users.map((user) => (
    <UserItem key={user!.id} user={user!.login} userImg={user!.avatar_url} />
  ));

  if (!loading)
    return (
      <div className='grid grind-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
        {renderUsers}
      </div>
    );

  return <Spinner />;
};

export default UserResults;
