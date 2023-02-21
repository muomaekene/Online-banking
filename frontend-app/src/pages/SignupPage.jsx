import SignupForm from "../components/SignupForm";

import styled from "styled-components";

const SignupPage = () => {
  return (
    <Container>
      <header className="header">
        <h1 className="title">Credit Union of New Jersey</h1>
      </header>
      <main className="main">
        <SignupForm />
      </main>
    </Container>
  );
};

export default SignupPage;

const Container = styled.div`
  font-family: "Hind", sans-serif;

  .header {
    background: #fff;
    padding: 15px 30px;
    border-bottom: 1px solid #e5e5e5;
  }

  .title {
    font-size: 22px;
    font-family: "Teko", sans-serif;
  }

  .main {
    display: flex;
    justify-content: center;
    background: #f1f3f4;
    width: 100%;
  }
`;
