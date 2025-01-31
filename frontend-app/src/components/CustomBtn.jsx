import styled from "styled-components";

const CustomBtn = ({ children }) => {
  return <Button>{children}</Button>;
};

export default CustomBtn;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 3rem;
  border-radius: ${({ theme }) => theme.borderRadius[1]};
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
