import styled from "styled-components";

const Logo = () => {
  return <Container>cunj</Container>;
};

export default Logo;

const Container = styled.h1`
  font-family: ${({ theme }) => theme.typography.header.fontFamily};
  font-size: ${({ theme }) => theme.typography.header.fontSize};
  color: ${({ theme }) => theme.palette.altText};
  text-transform: uppercase;
`;
