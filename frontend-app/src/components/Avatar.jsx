import styled from "styled-components";

const Avatar = ({ children }) => {
  return <Cover>{children}</Cover>;
};

export default Avatar;

const Cover = styled.button`
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
  width: 31px;
  height: 31px;
  border-radius: 50%;
  border: none;
  background: ${({ theme }) => theme.palette.solid};
  color: ${({ theme }) => theme.palette.primary};
  display: flex;
  align-items: center;
  justify-content: center;
`;
