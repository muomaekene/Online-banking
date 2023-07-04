import SignupForm from "../components/SignupForm";

import AuthLayout from "../components/AuthLayout";

import styled from "styled-components";
import BrandTitle from "../components/BrandTitle";

const SignupPage = () => {
  return (
    <AuthLayout>
      <BrandTitle />
      <SignupForm />
    </AuthLayout>
  );
};

export default SignupPage;
