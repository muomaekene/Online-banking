import styled from "styled-components";

const WelcomeMsg = () => {
  return <Container>Welcome back, Robbin</Container>;
};

export default WelcomeMsg;

const Container = styled.div`
  font-size: 16px;
  font-weight: 400;
  text-transform: capitalize;
`;
