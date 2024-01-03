import { NavLink } from "react-router-dom";
import { navLinks } from "../utils/uiData";

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
    </Container>
  );
};

export default Sidebar;

const Container = styled.aside`
  height: 100%;
  width: 100%;
  font-size: ${({ theme }) => theme.typography.main.fontSize[0]};
  font-weight: ${({ theme }) => theme.typography.main.fontWeight[1]};
  display: flex;
  flex-direction: column;
  padding: 25px 10px;
  color: ${({ theme }) => theme.palette.altText};
  border-right: 1px solid ${({ theme }) => theme.palette.border};
  background: ${({ theme }) => theme.palette.overlay};

  .top-sidebar {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 20px;
    position: relative;
  }

  .mid-sidebar {
    margin-bottom: 40px;
  }

  .navs {
    list-style: none;

    .nav-item {
      :hover {
        background: ${({ theme }) => theme.palette.secondary};
        color: ${({ theme }) => theme.palette.text};
        border-radius: ${({ theme }) => theme.border.radius};
      }

      .active {
        background: ${({ theme }) => theme.palette.solid};
        color: ${({ theme }) => theme.palette.main};
        border-radius: ${({ theme }) => theme.border.radius};
        font-weight: 500;
      }
    }
    .nav-item:nth-child(7) {
      margin-bottom: 50px;
    }

    .nav-link {
      padding: 12px 30px;
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
