import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../utils/uiData";
import { LogoutRounded } from "@mui/icons-material";

import Logo from "./Logo";
import ActionBtn from "./ActionBtn";
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
          <ActionBtn
            icon={
              <LogoutRounded style={{ fontSize: "15px", marginRight: "2px" }} />
            }
            title="Logout"
          />
        </Link>
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
  background: ${({ theme }) => theme.palette.main};

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
        background: ${({ theme }) => theme.palette.secondary};
        color: ${({ theme }) => theme.palette.text};
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
        background: ${({ theme }) => theme.palette.solid};
        color: ${({ theme }) => theme.palette.main};
        border-radius: 10px;
        font-weight: 500;
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
`;
