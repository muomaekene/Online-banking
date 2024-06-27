import styled from "styled-components";

const WelcomeMsg = () => {
  return <Container>Welcome back, Robbin</Container>;
};

export default WelcomeMsg;

const Container = styled.div`
  font-size: ${({ theme }) => theme.typography.main.fontSize[3]};
  font-weight: ${({ theme }) => theme.typography.main.fontWeight[0]};
  text-transform: capitalize;
`;
