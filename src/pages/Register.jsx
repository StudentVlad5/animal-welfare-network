import RegisterForm from 'components/RegisterForm/RegisterForm';
import { SEO } from 'utils/SEO';

const Register = () => {
  return (
    <>
      <SEO title="Register" description="Register your account" />
      <RegisterForm />
    </>
  );
};

export default Register;
