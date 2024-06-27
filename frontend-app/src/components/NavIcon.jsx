import styled from "styled-components";

const NavIcon = ({ children, themeToggler }) => {
  return <Cover onClick={themeToggler}>{children}</Cover>;
};

export default NavIcon;

const Cover = styled.button`
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 25%;
  position: relative;
  cursor: pointer;
  border: 1px solid transparent;
  color: ${({ theme }) => theme.palette.text};
  background: ${({ theme }) => theme.palette.main};
  box-shadow: ${({ theme }) => theme.palette.boxShadow};

  :active {
    background: ${({ theme }) => theme.palette.secondary};
    border: 1px solid transparent;
    background-size: 100%;
  }

  :hover {
    border: 1px solid ${({ theme }) => theme.palette.border};
    /* box-shadow: none; */
  }
`;
