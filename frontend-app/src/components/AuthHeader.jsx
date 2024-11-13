import Logo from "../components/Logo";

import styled from "styled-components";

const AuthHeader = () => {
  return (
    <Container>
      <Logo />
    </Container>
  );
};

export default AuthHeader;

const Container = styled.header`
  background: ${({ theme }) => theme.palette.main};
  margin-bottom: 15px;
  padding: 20px;
  border-bottom: 1px solid #ebe043;
`;
