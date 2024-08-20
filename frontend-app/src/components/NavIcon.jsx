import styled from "styled-components";

const NavIcon = ({ children, themeToggler }) => {
  return <Button onClick={themeToggler}>{children}</Button>;
};

export default NavIcon;

const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: ${({ theme }) => theme.borderRadius[1]};
  position: relative;
  cursor: pointer;
  border: 1px solid transparent;
  color: ${({ theme }) => theme.palette.text};
  background: ${({ theme }) => theme.palette.main};
  border: 1px solid ${({ theme }) => theme.palette.border};

  :active {
    background: ${({ theme }) => theme.palette.secondary};
    border: 1px solid transparent;
    background-size: 100%;
  }

  :hover {
    border: 1px solid ${({ theme }) => theme.palette.border};
  }
`;
