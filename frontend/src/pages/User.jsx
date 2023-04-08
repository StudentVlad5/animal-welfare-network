import { UserComp } from 'components/UserComp/UserComp';
import { SEO } from 'utils/SEO';

const UserPage = () => {
  return (
    <>
      <SEO title="Profile" description="User profile" />
      <UserComp />
    </>
  );
};

export default UserPage;
