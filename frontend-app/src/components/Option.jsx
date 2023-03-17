import styled from "styled-components";

const Option = ({ value, name }) => {
  return <option value={value}>{name}</option>;
};

export default Option;

// const Item = styled.option`
//   color: ${({ theme }) => theme.text};
//   background: ${({ theme }) => theme.main};
// `;
