import styled from "styled-components";

const BrandTitle = () => {
  return <Title>Credit Union of New Jersey</Title>;
};

export default BrandTitle;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.typography.header.fontFamily};
  color: ${({ theme }) => theme.palette.solid};
  font-size: 20px;
`;
