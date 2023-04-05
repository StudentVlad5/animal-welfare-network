import { LoginForm } from 'components/LoginForm/LoginForm';
import { SEO } from 'utils/SEO';

const Login = () => {
  return (
    <>
      <SEO title="Log in" description="Log in to your account" />
      <LoginForm />
    </>
  );
};

export default Login;
