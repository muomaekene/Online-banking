import styled from "styled-components";

const Option = ({ value, name }) => {
  return <Item value={value}>{name}</Item>;
};

export default Option;

const Item = styled.option`
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.main};
`;
