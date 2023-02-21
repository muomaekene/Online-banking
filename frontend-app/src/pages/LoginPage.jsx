import LoginForm from "../components/LoginForm";

import styled from "styled-components";

//create a layout component for Login and Signup pages

const LoginPage = () => {
  return (
    <Container>
      <LoginForm />
    </Container>
  );
};

export default LoginPage;

const Container = styled.div`
  font-family: "Hind", sans-serif;
  background: #f1f3f4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #25304b;
  font-weight: 500;
  height: 100vh !important;
  overflow: auto;
`;
