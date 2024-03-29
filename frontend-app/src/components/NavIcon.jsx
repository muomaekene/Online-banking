import styled from "styled-components";

const NavIcon = ({ children, themeToggler }) => {
  return <Cover onClick={themeToggler}>{children}</Cover>;
};

export default NavIcon;

const Cover = styled.button`
  display: flex;
  align-items: center;
  padding: 5px;
  border-radius: 25%;
  position: relative;
  cursor: pointer;
  border: 1px solid transparent;
  background: ${({ theme }) => theme.palette.primary};
  color: ${({ theme }) => theme.palette.text};

  :active {
    background: ${({ theme }) => theme.palette.secondary};
    border: 1px solid transparent;
    background-size: 100%;
  }
`;
