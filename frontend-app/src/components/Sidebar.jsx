import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../utils/uiData";

import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";

import styled from "styled-components";

const Sidebar = () => {
  return (
    <Container>
      <div className="top-sidebar">
        <div className="logo">
          <NavLink to="/overview">
            <img
              className="image"
              src="https://www.cunj.com/wpcms/wp-content/themes/cunj/images/ocblogo.png"
            />
          </NavLink>
        </div>
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
  position: fixed;
  height: 100vh;
  top: 0;
  left: 0;
  height: 100%;
  width: 240px;
  background: none;
  font-size: 12px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  padding: 25px 10px;
  color: ${(props) => props.theme.altText};
  border-right: 1px solid ${(props) => props.theme.border};

  .top-sidebar {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .logo {
    display: block;
    margin-bottom: 20px;

    .image {
      width: 35px;
    }
  }

  .mid-sidebar {
    margin-bottom: 40px;
  }

  .navs {
    list-style: none;

    .nav-item {
      transition: all 0.7s ease;

      :hover {
        background: ${(props) => props.theme.border};
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
        background: ${(props) => props.theme.main};
        color: ${(props) => props.theme.secondary};
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
    background: ${(props) => props.theme.main};
    color: ${(props) => props.theme.secondary};
    border-radius: 20px;
    transition: all 0.5s ease;
    font-family: inherit;

    :hover {
      background: ${(props) => props.theme.hover};
    }

    .logout-icon {
      width: 18px;
      height: 18px;
      margin-right: 4px;
    }
  }
`;
