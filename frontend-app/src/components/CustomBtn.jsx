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
  padding: 14px 0;
  border-radius: ${({ theme }) => theme.borderRadius[0]};
  border: none;
  font-size: ${({ theme }) => theme.typography.main.fontSize[1]};
  text-transform: capitalize;
  background: ${({ theme }) => theme.palette.solid};
  color: ${({ theme }) => theme.palette.activeText};
  font-family: inherit;
  cursor: pointer;

  :hover {
    background: ${({ theme }) => theme.palette.light};
  }
`;
