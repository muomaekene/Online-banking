import { useState } from "react";
import { Link } from "react-router-dom";

import {
  InformationCircleIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

import styled from "styled-components";

const AccountBanner = ({ account }) => {
  const [showMessage, setShowMessage] = useState(false);
  const [showLockInfo, setShowLockInfo] = useState(false);

  const { type, bal, desc, msg, img: Image, alt: altText } = account;

  return (
    <Container to="/accounts">
      <img className="account-icon" src={Image} alt={altText} />
      <div>
        <div
          className="account-lock"
          onMouseEnter={() => {
            setShowLockInfo(true);
          }}
          onMouseLeave={() => {
            setShowLockInfo(false);
          }}
        >
          <LockClosedIcon className="lock-icon" />
        </div>
        <p className="account-type">{type}</p>
        <p className="account-bal">{bal}</p>
        <p className="desc">
          {desc}
          <span
            onMouseEnter={() => {
              setShowMessage(true);
            }}
            onMouseLeave={() => {
              setShowMessage(false);
            }}
          >
            <InformationCircleIcon className="icon" />
          </span>
        </p>
        {showMessage && <p className="account-info">{msg}</p>}
        {showLockInfo && (
          <p className="lock-info">
            This account has been locked due to security concerns. <br />
            Visit our nearest branch to get this resolved.
          </p>
        )}
      </div>
    </Container>
  );
};

export default AccountBanner;

const Container = styled(Link)`
  padding: 10px 15px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  background: ${({ theme }) => theme.palette.primary};
  color: ${({ theme }) => theme.palette.altText};
  position: relative;

  .account-icon {
    width: 35px;
    height: 35px;
    margin-right: ${({ theme }) => theme.spacing(2)};
  }

  .account-lock {
    position: absolute;
    right: 15px;
    background: none;
    border: 1px solid ${({ theme }) => theme.palette.text};
    border-radius: 50%;
    height: 20px;
    width: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    :hover {
      background: ${({ theme }) => theme.palette.secondary};
    }

    .lock-icon {
      width: 13px;
      height: 13px;
      color: ${({ theme }) => theme.palette.text};
    }
  }

  .account-type {
    color: ${({ theme }) => theme.palette.text};
    font-weight: ${({ theme }) => theme.typography.main.fontWeight[1]};
    text-transform: capitalize;
    font-size: ${({ theme }) => theme.typography.main.fontSize[0]};
    margin-bottom: 10px;
  }

  .account-bal {
    font-size: ${({ theme }) => theme.typography.main.fontSize[1]};
    font-weight: ${({ theme }) => theme.typography.main.fontWeight[1]};
    color: ${({ theme }) => theme.palette.text};
  }

  .desc {
    font-size: ${({ theme }) => theme.typography.main.fontSize[0]};
    position: relative;

    span {
      position: absolute;
      margin-top: 1.5px;
      margin-left: 2px;

      .icon {
        width: 12px;
        height: 12px;
        color: ${({ theme }) => theme.palette.altText};
      }
    }
  }

  .account-info {
    position: absolute;
    top: 23px;
    background: ${({ theme }) => theme.palette.main};
    color: ${({ theme }) => theme.palette.altText};
    border-radius: 2px;
    font-size: 11px;
    z-index: 666;
  }

  .lock-info {
    position: absolute;
    font-size: 11px;
    top: 35px;
    background: ${({ theme }) => theme.palette.main};
    color: ${({ theme }) => theme.palette.altText};
  }
`;
