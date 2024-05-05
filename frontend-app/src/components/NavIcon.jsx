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
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;

  :active {
    background: ${({ theme }) => theme.palette.secondary};
    border: 1px solid transparent;
    background-size: 100%;
  }
`;
