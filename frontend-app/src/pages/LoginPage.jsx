import AuthLayout from "../components/AuthLayout";
import BrandTitle from "../components/BrandTitle";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <AuthLayout>
      <BrandTitle />
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;
