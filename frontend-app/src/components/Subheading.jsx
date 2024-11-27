import styled from "styled-components";

const Subheading = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Subheading;

const Container = styled.p`
  margin-bottom: 15px;
  font-size: ${({ theme }) => theme.typography.main.fontSize[2]};
  font-weight: ${({ theme }) => theme.typography.main.fontWeight[0]};
  color: ${({ theme }) => theme.palette.text};
`;
