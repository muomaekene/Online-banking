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
  margin-bottom: 20px;
  padding: 15px 20px;
  border-bottom: 1px solid #ebe043;
`;
