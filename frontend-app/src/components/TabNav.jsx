import { NavLink } from "react-router-dom";
import styled from "styled-components";

const TabNav = () => {
  return (
    <Nav>
      <ul>
        <li>
          <NavLink to="all" className="tab-link">
            All Accounts
          </NavLink>
        </li>
        <li>
          <NavLink to="statements" className="tab-link">
            Statements & Documents
          </NavLink>
        </li>
        <li>
          <NavLink to="open-new-account" className="tab-link">
            Open New Account
          </NavLink>
        </li>
      </ul>
    </Nav>
  );
};

export default TabNav;

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: right;
  height: 100%;
  width: 30%;
  border-left: 1px solid ${({ theme }) => theme.palette.border};
  padding-left: 15px;
  position: static;

  ul {
    list-style-type: none;
  }

  .tab-link {
    width: fit-content;
    height: 35px;
    border-radius: 20px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    background: ${({ theme }) => theme.palette.main};
    color: ${({ theme }) => theme.palette.altText};
    cursor: pointer;
    font-size: ${({ theme }) => theme.typography.main.fontSize[1]};
    font-weight: ${({ theme }) => theme.typography.main.fontWeight[0]};
    padding: 15px;
  }

  .active {
    background: ${({ theme }) => theme.palette.solid};
    color: ${({ theme }) => theme.palette.activeText};
    border: none;
  }
`;
