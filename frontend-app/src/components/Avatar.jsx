import styled from "styled-components";

const Avatar = ({ children }) => {
  return <Cover>{children}</Cover>;
};

export default Avatar;

const Cover = styled.button`
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: none;
  background: ${({ theme }) => theme.palette.solid};
  color: ${({ theme }) => theme.palette.activeText};
  display: flex;
  align-items: center;
  justify-content: center;
`;
