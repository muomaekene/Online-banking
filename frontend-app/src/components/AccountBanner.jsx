import {
  ChevronRightIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";

import { Link } from "react-router-dom";

import styled from "styled-components";

const AccountBanner = ({ account }) => {
  const { type, bal, desc, info, img: Image, alt: altText } = account;

  return (
    <Container>
      <div className="left">
        <img className="account-icon" src={Image} alt={altText} />
        <div>
          <p className="account-type">
            <Link to="#">{type}</Link>
          </p>
          <p className="more-info">{info}</p>
        </div>
      </div>

      <div className="right">
        <p className="account-bal">{bal}</p>
        <div className="actions">
          <button>
            View activity <ChevronRightIcon width="12px" />
          </button>
          <button>
            Make a transfer <ChevronRightIcon width="12px" />
          </button>
          <button>
            <EllipsisHorizontalIcon width="12px" />
          </button>
        </div>
      </div>
    </Container>
  );
};

export default AccountBanner;

const Container = styled.div`
  padding: 15px 20px;
  height: 6.2rem;
  border: 1px solid transparent;
  background: ${({ theme }) => theme.palette.main};
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.palette.altText};
  position: relative;
  border-bottom: 1px solid ${({ theme }) => theme.palette.border};

  :first-child {
    border-top-left-radius: ${({ theme }) => theme.borderRadius[1]};
    border-top-right-radius: ${({ theme }) => theme.borderRadius[1]};
  }

  :last-child {
    border: none;
    border-bottom-left-radius: ${({ theme }) => theme.borderRadius[1]};
    border-bottom-right-radius: ${({ theme }) => theme.borderRadius[1]};
  }

  .left {
    display: flex;
    align-items: start;
  }

  .account-icon {
    width: 45px;
    height: 45px;
    margin-right: ${({ theme }) => theme.spacing(1)};
    border-radius: 4px;
  }

  .account-type {
    color: ${({ theme }) => theme.palette.text};
    font-size: ${({ theme }) => theme.typography.main.fontSize[2]};
    font-weight: ${({ theme }) => theme.typography.main.fontWeight[1]};
    text-transform: capitalize;
    display: flex;
    gap: 2px;
  }

  .more-info {
    font-size: ${({ theme }) => theme.typography.main.fontSize[1]};
    font-weight: ${({ theme }) => theme.typography.main.fontWeight[1]};
    color: ${({ theme }) => theme.palette.altText};
  }

  .account-bal {
    font-size: ${({ theme }) => theme.typography.main.fontSize[2]};
    font-weight: ${({ theme }) => theme.typography.main.fontWeight[1]};
    color: ${({ theme }) => theme.palette.text};
    text-align: end;
    cursor: pointer;
  }

  .desc {
    font-size: ${({ theme }) => theme.typography.main.fontSize[0]};
    font-weight: ${({ theme }) => theme.typography.main.fontWeight[1]};
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

  .actions {
    margin-top: 5px;
    display: flex;
    gap: 5px;

    button {
      display: flex;
      align-items: center;
      padding: 4px 6px;
      background: none;
      border: 1px solid ${({ theme }) => theme.palette.border};
      color: ${({ theme }) => theme.palette.text};
      font-size: ${({ theme }) => theme.typography.main.fontSize[1]};
      font-weight: ${({ theme }) => theme.typography.main.fontWeight[1]};
      border-radius: 4px;
      cursor: pointer;

      :active {
        background: ${({ theme }) => theme.palette.focus};
        background-size: 100%;
        border: 1px solid transparent;
      }
    }
  }
`;
