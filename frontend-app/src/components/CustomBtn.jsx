import styled from "styled-components";

const CustomBtn = ({ children }) => {
  return <Button>{children}</Button>;
};

export default CustomBtn;

const Button = styled.button`
  display: flex;
  align-content: center;
  justify-content: center;
  width: 100%;
  padding: 12px 0;
  border-radius: ${({ theme }) => theme.border.radius};
  border: none;
  font-size: ${({ theme }) => theme.typography.main.fontSize[1]};
  background: ${({ theme }) => theme.palette.solid};
  color: ${({ theme }) => theme.palette.main};
  font-family: inherit;
  cursor: pointer;

  :hover {
    background: ${({ theme }) => theme.palette.light};
  }
`;
