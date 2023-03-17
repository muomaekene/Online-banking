import { Link } from "react-router-dom";

import {
  BellIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";

import styled from "styled-components";
import Searchbar from "./Searchbar";

const TopBar = ({ theme, themeToggler }) => {
  return (
    <Container>
      <div className="left-topbar">
        <h2 className="welcome-message">Good morning, Shaun</h2>
        <Searchbar />
      </div>
      <div className="right-topbar">
        <div className="icon-wrap" onClick={themeToggler}>
          {theme === "dark" ? (
            <SunIcon className="icon" />
          ) : (
            <MoonIcon className="icon" />
          )}
        </div>
        <div className="icon-wrap">
          <ChatBubbleOvalLeftEllipsisIcon className="icon" />
        </div>
        <div className="icon-wrap">
          <BellIcon className="icon" />
        </div>
        <div className="profile">
          <div className="avatar">RE</div>
          <div className="profile-name">
            <Link to="/profile">Shaun Eckert</Link>
          </div>
        </div>
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
    width: 68%;
    display: flex;
    align-items: center;
  }

  .welcome-message {
    font-size: 19px;
    margin-right: 100px;
    font-weight: 500;
  }

  .right-topbar {
    width: 32%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .icon-wrap {
    display: flex;
    align-items: center;
    padding: 5px;
    border-radius: 25%;
    position: relative;
    cursor: pointer;
    margin-left: 15px;
    border: 1px solid transparent;
    background: ${({ theme }) => theme.palette.primary};
    color: ${({ theme }) => theme.palette.text};

    :hover {
      background: ${({ theme }) => theme.palette.secondary};
      color: ${({ theme }) => theme.palette.text};
    }
  }

  .icon {
    width: 22px;
    height: 22px;
    color: inherit;
  }

  .profile {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 25px;
  }

  .profile-name {
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    color: ${({ theme }) => theme.palette.text};

    :hover {
      color: ${({ theme }) => theme.palette.altText};
    }
  }

  .avatar {
    cursor: pointer;
    font-size: 12px;
    font-weight: 600;
    margin-right: 5px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: ${({ theme }) => theme.palette.secondary};
    color: ${({ theme }) => theme.palette.text};
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
