import styled from "styled-components";

const Paragraph = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Paragraph;

const Container = styled.p`
  font-weight: ${({ theme }) => theme.typography.main.fontWeight[1]};
  font-size: ${({ theme }) => theme.typography.main.fontSize[1]};
`;
