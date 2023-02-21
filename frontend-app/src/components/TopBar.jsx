import { useState } from "react";
import { Link } from "react-router-dom";

import {
  BellIcon,
  MagnifyingGlassIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";

import { Clear } from "@mui/icons-material";

import styled from "styled-components";

const TopBar = ({ theme, themeToggler }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <Container>
      <div className="left-topbar">
        <h2 className="welcome-message">Good morning, Robbin</h2>
        <form className="search-bar">
          <div className="icon-nowrap">
            <MagnifyingGlassIcon className="icon" />
          </div>
          <input
            className="input-bar"
            type="text"
            placeholder="Search dashboard"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />

          {inputValue && (
            <Clear className="clear-input" onClick={() => setInputValue("")} />
          )}
        </form>
      </div>
      <div className="right-topbar">
        <div className="icon-wrap" onClick={themeToggler}>
          {theme === "light" ? (
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
            <Link to="/profile">Robbin Eckert</Link>
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

  .search-bar {
    position: relative;
    width: 50%;
    height: 80%;
    display: flex;
    align-items: center;
    padding: 0 10px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    background: ${({ theme }) => theme.box};
    border-radius: 10px;

    :focus-within {
      background: ${({ theme }) => theme.border};
      border-radius: 10px;
      box-shadow: none;
    }
    .input-bar {
      padding: 0px 5px;
      background: none;
      border: none;
      outline: none;
      width: calc(100% - 24px);
      font-weight: 500;
      font-size: 14px;
      color: ${({ theme }) => theme.primary};

      ::placeholder {
        color: ${({ theme }) => theme.altText};
        font-size: 14px;
        letter-spacing: 0;
        font-family: "Hind", sans-serif;
      }
    }

    .clear-input {
      cursor: pointer;
      font-size: 20px;
      position: absolute;
      right: 15px;
    }
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
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    background: ${({ theme }) => theme.box};

    :hover {
      padding: 5px;
      border-radius: 25%;
      background: ${({ theme }) => theme.border};
    }
  }

  .icon-nowrap {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 4px;

    :hover {
      padding: 4px;
      border-radius: 50%;
      background: ${({ theme }) => theme.border};
    }
  }

  .icon {
    width: 22px;
    height: 22px;
    color: ${({ theme }) => theme.primary};
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
    color: ${({ theme }) => theme.altText};

    :hover {
      text-decoration: underline;
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
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.activeText};
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
