import styled from "styled-components";

const Title = ({ children }) => {
  return <H2>{children}</H2>;
};

export default Title;

const H2 = styled.h2`
  font-weight: 700;
  font-size: ${({ theme }) => theme.typography.main.fontSize[5]};
  text-transform: capitalize;
`;
