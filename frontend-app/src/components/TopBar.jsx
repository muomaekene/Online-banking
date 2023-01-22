import { Link } from "react-router-dom";

import {
  BellIcon,
  MagnifyingGlassIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from "@heroicons/react/24/outline";

import styled from "styled-components";

const TopBar = () => {
  return (
    <Container>
      <div className="left-topbar">
        <h1 className="welcome-message">Good morning, Robbin</h1>
        <form className="search-bar">
          <div className="icon-nowrap">
            <MagnifyingGlassIcon className="icon" />
          </div>
          <input
            className="input-bar"
            type="text"
            placeholder="Search dashboard"
          />
        </form>
      </div>

      <div className="right-topbar">
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

  .left-topbar {
    width: 68%;
    display: flex;
    align-items: center;
    padding-left: 30px;
  }

  .welcome-message {
    font-size: 19px;
    margin-right: 100px;
    font-weight: 500;
  }

  .search-bar {
    width: 50%;
    height: 80%;
    display: flex;
    align-items: center;
    padding: 0 10px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    background: none;
    border-radius: 10px;
    transition: all 0.5s ease;

    :focus-within {
      background: ${(props) => props.theme.primary};
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

      ::placeholder {
        color: ${(props) => props.theme.altText};
        font-size: 14px;
        letter-spacing: 0;
        font-family: "Urbanist", sans-serif;
      }
    }
  }

  .right-topbar {
    width: 32%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 30px;
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

    :hover {
      padding: 5px;
      border-radius: 25%;
      background: ${(props) => props.theme.primary};
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
      background: ${(props) => props.theme.border};
    }
  }

  .icon {
    width: 22px;
    height: 22px;
    color: ${(props) => props.theme.main};
  }

  .profile {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 25px;
  }

  .profile-name {
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    color: ${(props) => props.theme.altText};
  }

  .avatar {
    cursor: pointer;
    font-size: 12px;
    font-weight: 600;
    margin-right: 5px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: ${(props) => props.theme.main};
    color: ${(props) => props.theme.primary};
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
