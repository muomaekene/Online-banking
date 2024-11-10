import { useState } from "react";
import { Link } from "react-router-dom";

import { InformationCircleIcon } from "@heroicons/react/24/outline";

import styled from "styled-components";

const AccountBanner = ({ account }) => {
  const [showMessage, setShowMessage] = useState(false);

  const { type, bal, desc, msg, img: Image, alt: altText } = account;

  return (
    <Container to="/accounts">
      <img className="account-icon" src={Image} alt={altText} />
      <div>
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
      </div>
    </Container>
  );
};

export default AccountBanner;

const Container = styled(Link)`
  padding: 0 25px;
  height: 100%;
  border-radius: ${({ theme }) => theme.borderRadius[1]};
  border: 1px solid ${({ theme }) => theme.palette.border};
  background: ${({ theme }) => theme.palette.main};
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.palette.altText};
  position: relative;

  :hover {
    border: 1px solid ${({ theme }) => theme.palette.border};
  }

  :active {
    background: ${({ theme }) => theme.palette.focus};
    border: 1px solid transparent;
    background-size: 100%;
  }

  .account-icon {
    width: 35px;
    height: 35px;
    margin-right: ${({ theme }) => theme.spacing(2)};
  }

  .account-type {
    color: ${({ theme }) => theme.palette.link};
    font-weight: ${({ theme }) => theme.typography.main.fontWeight[0]};
    font-size: ${({ theme }) => theme.typography.main.fontSize[2]};
    text-transform: capitalize;
  }

  .account-bal {
    font-size: ${({ theme }) => theme.typography.main.fontSize[2]};
    font-weight: ${({ theme }) => theme.typography.main.fontWeight[0]};
    color: ${({ theme }) => theme.palette.text};
    margin: 2px 0;
  }

  .desc {
    font-size: ${({ theme }) => theme.typography.main.fontSize[0]};
    font-weight: ${({ theme }) => theme.typography.main.fontWeight[0]};
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
    top: 0;
    background: ${({ theme }) => theme.palette.main};
    color: ${({ theme }) => theme.palette.altText};
    font-size: 11px;
    padding: 5px 0;
    z-index: 666;
  }
`;
