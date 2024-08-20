import styled from "styled-components";

const Heading = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Heading;

const Container = styled.h2`
  margin-bottom: 10px;
`;
