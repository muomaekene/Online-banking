import styled from "styled-components";

const Logo = () => {
  return <Container>cunj</Container>;
};

export default Logo;

const Container = styled.h1`
  font-family: "Gloock", serif;
  font-size: 25px;
  color: ${({ theme }) => theme.solid};
  text-transform: uppercase;
`;
