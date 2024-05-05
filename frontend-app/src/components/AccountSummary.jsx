import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const AccountSummary = ({ item }) => {
  const [open, setOpen] = useState(false);
  const [boxHeight, setBoxHeight] = useState(4);

  useEffect(() => {
    if (open) {
      setBoxHeight(16);
    } else {
      setBoxHeight(5);
    }
  }, [open]);

  return (
    <Container style={{ height: `${boxHeight}rem` }}>
      <div className="account-info">
        <p className="account-type">
          {item.type} | {item.number}
        </p>
        <p className="account-bal">${item.amount}</p>
      </div>
      <button className="dropdown-btn" onClick={() => setOpen(!open)}>
        {open ? "Hide" : "Show transactions"}
      </button>
      {open && (
        <>
          <div className="transactions-table">Transactions table goes here</div>
          <p className="more-transactions">
            <Link to="">See all transactions</Link>
          </p>
        </>
      )}
    </Container>
  );
};

export default AccountSummary;

const Container = styled.section`
  margin-bottom: 10px;
  margin-right: 15px;
  background: ${({ theme }) => theme.palette.main};
  border-radius: ${({ theme }) => theme.border.radius};
  position: relative;

  .account-info {
    display: flex;
    justify-content: space-between;
    padding: 20px 20px 0 20px;
  }

  .account-type {
    font-size: 13px;
    font-weight: 500;
    text-transform: capitalize;
    color: ${({ theme }) => theme.palette.link};
    cursor: pointer;

    :hover {
      text-decoration: underline;
      text-decoration-thickness: 1px;
    }
  }

  .account-bal {
    font-size: 13px;
    font-weight: 400;
  }

  .dropdown-btn {
    cursor: pointer;
    border: none;
    background: none;
    font-size: 12px;
    color: ${({ theme }) => theme.palette.text};
    margin-left: 20px;
  }

  .transactions-table {
    background: ${({ theme }) => theme.palette.secondary};
    color: ${({ theme }) => theme.palette.text};
    border-top: 2px solid ${({ theme }) => theme.palette.border};
    border-bottom: 2px solid ${({ theme }) => theme.palette.border};
    left: 0;
    top: 60px;
    width: 100%;
    height: 9.5rem;
    padding-left: 15px;
    padding-top: 10px;
    margin-top: 5px;
    font-size: 12px;
    z-index: 666;
  }

  .more-transactions {
    font-size: 12px;
    padding-left: 15px;
    padding-top: 10px;

    a {
      text-decoration: underline;

      :hover {
        color: ${({ theme }) => theme.palette.altText};
      }
    }
  }

  .icon {
    width: 10px;
    height: 10px;
    color: ${({ theme }) => theme.palette.text};
    margin-left: 4px;
  }
`;
