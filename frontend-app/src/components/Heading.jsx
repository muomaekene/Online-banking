import styled from "styled-components";

const Heading = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Heading;

const Container = styled.h1`
  margin-bottom: 5px;
  font-size: ${({ theme }) => theme.typography.main.fontSize[5]};
  font-weight: ${({ theme }) => theme.typography.main.fontWeight[2]};
`;
