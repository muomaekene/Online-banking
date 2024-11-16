import { NavLink } from "react-router-dom";
import { navLinks } from "../utils/uiData";

import Logo from "./Logo";

import styled from "styled-components";

const Sidebar = () => {
  return (
    <Container>
      <div className="sidebar-header">
        <Logo />
      </div>

      <div className="sidebar-navs">
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
    </Container>
  );
};

export default Sidebar;

const Container = styled.aside`
  height: 100%;
  width: 100%;
  font-size: ${({ theme }) => theme.typography.main.fontSize[1]};
  font-weight: ${({ theme }) => theme.typography.main.fontWeight[0]};
  display: flex;
  flex-direction: column;
  padding: 25px 10px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.palette.altText};

  .sidebar-header {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 10px;
    position: relative;
  }

  .sidebar-navs {
    margin-bottom: 40px;
  }

  .navs {
    list-style: none;

    .nav-item {
      :hover {
        background: ${({ theme }) => theme.palette.secondary};
        color: ${({ theme }) => theme.palette.text};
        border-radius: ${({ theme }) => theme.borderRadius[0]};
      }

      .active {
        background: ${({ theme }) => theme.palette.solid};
        color: ${({ theme }) => theme.palette.activeText};
        border-radius: ${({ theme }) => theme.borderRadius[1]};
      }
    }
    .nav-item:nth-child(7) {
      margin-bottom: 60px;
    }

    .nav-link {
      padding: 14px 30px;
      display: flex;
      align-items: center;
    }

    .icon {
      width: 18px;
      height: 18px;
      margin-right: 10px;
    }
  }
`;
