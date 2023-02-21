import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../utils/uiData";

import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";
import Logo from "./Logo";

import styled from "styled-components";

const Sidebar = () => {
  return (
    <Container>
      <div className="top-sidebar">
        <Logo />
      </div>
      <div className="mid-sidebar">
        <ul className="navs">
          {navLinks.map(({ key, name, icon: Icon, to }) => (
            <li className="nav-item" key={key}>
              <NavLink className="nav-link" to={to}>
                <Icon className="icon" />
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="bottom-sidebar">
        <Link to="/login">
          <button className="logout-botton">
            <ArrowLeftOnRectangleIcon className="logout-icon" />
            Logout
          </button>
        </Link>
      </div>
    </Container>
  );
};

export default Sidebar;

const Container = styled.aside`
  height: 100%;
  width: 100%;
  font-size: 12px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  padding: 25px 10px;

  .top-sidebar {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 20px;
  }

  .mid-sidebar {
    margin-bottom: 40px;
  }

  .navs {
    list-style: none;

    .nav-item {
      :hover {
        background: ${({ theme }) => theme.border};
        border-radius: 10px;
      }
      .nav-link {
        padding: 12px 30px;
        display: flex;
        align-items: center;

        .icon {
          width: 18px;
          height: 18px;
          margin-right: 8px;
        }
      }

      .active {
        background: ${({ theme }) => theme.primary};
        color: ${({ theme }) => theme.activeText};
        border-radius: 10px;
      }
    }
    .nav-item:nth-child(6) {
      margin-bottom: 50px;
    }
  }

  .bottom-sidebar {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .logout-botton {
    display: flex;
    align-items: center;
    padding: 10px 18px;
    font-weight: 500;
    font-size: inherit;
    cursor: pointer;
    border: none;
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.activeText};
    border-radius: 20px;
    font-family: inherit;
    margin-bottom: 10px;

    :hover {
      background: ${({ theme }) => theme.hover};
    }

    .logout-icon {
      width: 18px;
      height: 18px;
      margin-right: 4px;
    }
  }
`;
