import MainLayout from "../components/MainLayout";

import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

const Accounts = () => {
  return (
    <MainLayout>
      <MainContent>
        <Outlet />
        <nav className="tab-nav">
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
              <NavLink to="open-new" className="tab-link">
                Open Account
              </NavLink>
            </li>
          </ul>
        </nav>
      </MainContent>
    </MainLayout>
  );
};

export default Accounts;

const MainContent = styled.div`
  display: flex;
  height: calc(100vh - 70px);
  margin-top: 15px;

  .tab-nav {
    display: flex;
    flex-direction: column;
    align-items: right;
    width: calc(100%-67%);
    height: 100%;
    border-left: 1px solid ${({ theme }) => theme.palette.border};
    padding-left: 15px;
    position: static;

    ul {
      list-style-type: none;
    }

    .tab-link {
      width: fit-content;
      height: 30px;
      border-radius: 20px;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      border: 1px solid transparent;
      border: 1px solid ${({ theme }) => theme.palette.border};
      background: ${({ theme }) => theme.palette.main};
      color: ${({ theme }) => theme.palette.altText};

      cursor: pointer;
      font-size: 12px;
      font-weight: 400;
      padding: 15px;
    }

    .active {
      background: ${({ theme }) => theme.palette.solid};
      color: ${({ theme }) => theme.palette.activeText};
      border: none;
    }
  }
`;
