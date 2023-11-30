import {
  BellIcon,
  SunIcon,
  MoonIcon,
  ChatBubbleOvalLeftIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

import {
  messagesDropdown,
  notificationsDropdown,
  profileDropdown,
} from "../utils/uiData";

import WelcomeMsg from "./WelcomeMsg";
import Searchbar from "./Searchbar";
import Dropdown from "./Dropdown";
import NavIcon from "./NavIcon";
import Avatar from "./Avatar";
import ToggleMenu from "./ToggleMenu";

import styled from "styled-components";

const TopBar = ({ theme, themeToggler }) => {
  return (
    <Container>
      <div className="left-topbar">
        <ToggleMenu />
        <WelcomeMsg />
        <Searchbar />
      </div>
      <div className="right-topbar">
        <NavIcon themeToggler={themeToggler}>
          {theme === "dark" ? (
            <SunIcon className="icon" />
          ) : (
            <MoonIcon className="icon" />
          )}
        </NavIcon>
        <Dropdown
          name="Messages"
          link="View all"
          triggerElement={
            <NavIcon>
              <ChatBubbleOvalLeftIcon className="icon" />
            </NavIcon>
          }
          data={messagesDropdown}
        />
        <Dropdown
          name="Notifications"
          icon={<Cog6ToothIcon style={{ width: "15px", height: "15px" }} />}
          triggerElement={
            <NavIcon>
              <BellIcon className="icon" />
            </NavIcon>
          }
          data={notificationsDropdown}
        />
        <Dropdown
          name="Robbin J. Eckert"
          userID="@user_1039"
          triggerElement={<Avatar>RE</Avatar>}
          data={profileDropdown}
        />
      </div>
    </Container>
  );
};

export default TopBar;

const Container = styled.div`
  display: flex;
  height: 48px;
  margin-bottom: 10px;

  .left-topbar {
    width: 70%;
    display: flex;
    align-items: center;
  }

  .right-topbar {
    width: 30%;
    display: flex;
    align-items: center;
    padding: 0 5px;
  }

  .icon {
    width: 20px;
    height: 20px;
    color: inherit;
  }
`;
