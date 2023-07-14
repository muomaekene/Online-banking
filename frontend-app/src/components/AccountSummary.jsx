import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

import styled from "styled-components";

const AccountSummary = ({ item }) => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <div className="account-info">
        <p className="account-type">
          {item.type} | {item.number}
        </p>
        <p className="account-bal">${item.amount}</p>
      </div>
      <button className="dropdown-btn" onClick={() => setOpen(!open)}>
        <p>View transactions</p>
        {open ? (
          <ChevronUpIcon className="icon" />
        ) : (
          <ChevronDownIcon className="icon" />
        )}
      </button>
    </Container>
  );
};

export default AccountSummary;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 15px;
  margin-bottom: 15px;
  padding: 15px;
  height: 65px;
  background: ${({ theme }) => theme.palette.primary};
  border-radius: 10px;

  .account-info {
    display: flex;
    justify-content: space-between;
  }

  .account-type {
    font-size: 12px;
    font-weight: 600;
    color: ${({ theme }) => theme.palette.link};
    cursor: pointer;

    :hover {
      text-decoration: underline;
      text-decoration-thickness: 1px;
    }
  }

  .account-bal {
    font-size: 12px;
    font-weight: 500;
  }

  .dropdown-btn {
    width: fit-content;
    display: flex;
    align-items: center;
    cursor: pointer;
    border: none;
    background: ${({ theme }) => theme.palette.secondary};

    p {
      font-size: 12px;
      color: ${({ theme }) => theme.palette.text};
      margin-right: 2px;
    }
  }

  .icon {
    width: 10px;
    height: 10px;
    color: ${({ theme }) => theme.palette.text};
  }
`;
