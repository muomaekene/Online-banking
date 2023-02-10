import styled from "styled-components";

const Logo = () => {
  return <Container>cunj</Container>;
};

export default Logo;

const Container = styled.h1`
  font-family: "Teko", sans-serif;
  font-size: 30px;
  color: ${(props) => props.theme.primary};
  text-transform: uppercase;
`;
