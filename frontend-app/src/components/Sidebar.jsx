import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../utils/navlinkData";

import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/solid";
import Container from "./Styles/SidebarStyles";

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
          <button className="sidebar-botton">
            <ArrowLeftOnRectangleIcon className="logout-icon" />
            Logout
          </button>
        </Link>
      </div>
    </Container>
  );
};

export default Sidebar;
