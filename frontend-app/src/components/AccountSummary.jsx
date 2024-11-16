import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import TableSummary from "../components/TableSummary";

import styled from "styled-components";

const AccountSummary = ({
  item: { accountId, account, accountNo, balance, transactions },
}) => {
  const [open, setOpen] = useState(false);
  const [boxHeight, setBoxHeight] = useState(4);

  useEffect(() => {
    if (open) {
      setBoxHeight(18);
    } else {
      setBoxHeight(5);
    }
  }, [open]);

  return (
    <Container style={{ height: `${boxHeight}rem` }}>
      <div className="account-info">
        <Link to={accountId} className="account-type">
          {account} | ...{accountNo}
        </Link>

        <p className="account-bal">${balance}</p>
      </div>

      <button className="dropdown-btn" onClick={() => setOpen(!open)}>
        {open ? " - Hide" : " + Recent transactions"}
      </button>

      {open && (
        <>
          <div className="transactions-table">
            <TableSummary transactions={transactions} />
          </div>
          <p className="more-transactions">
            <Link to="/transactions">See all transactions</Link>
          </p>
        </>
      )}
    </Container>
  );
};

export default AccountSummary;

const Container = styled.div`
  background: ${({ theme }) => theme.palette.main};
  position: relative;
  margin-bottom: 5px;

  .account-info {
    display: flex;
    justify-content: space-between;
    padding: 20px 20px 0px 20px;
  }

  .account-type {
    font-size: ${({ theme }) => theme.typography.main.fontSize[2]};
    font-weight: ${({ theme }) => theme.typography.main.fontWeight[1]};
    text-transform: capitalize;
    color: ${({ theme }) => theme.palette.text};
    cursor: pointer;
    border: 1px solid transparent;
    background: none;

    :hover {
      text-decoration: underline;
      color: ${({ theme }) => theme.palette.link};
    }
  }

  .account-bal {
    font-size: ${({ theme }) => theme.typography.main.fontSize[2]};
    font-weight: ${({ theme }) => theme.typography.main.fontWeight[1]};
    color: ${({ theme }) => theme.palette.text};
  }

  .dropdown-btn {
    cursor: pointer;
    background: none;
    border: 1px solid transparent;
    font-size: ${({ theme }) => theme.typography.main.fontSize[0]};
    font-weight: ${({ theme }) => theme.typography.main.fontWeight[0]};
    color: ${({ theme }) => theme.palette.altText};
    margin-left: 20px;

    :hover {
      border: 1px solid ${({ theme }) => theme.palette.border};
    }
  }

  .transactions-table {
    color: ${({ theme }) => theme.palette.text};
    border-top: 1px solid ${({ theme }) => theme.palette.border};
    border-bottom: 1px solid ${({ theme }) => theme.palette.border};
    left: 0;
    top: 60px;
    width: 100%;
    height: 11.2rem;
    margin-top: 5px;
    font-size: ${({ theme }) => theme.typography.main.fontSize[0]};
    font-weight: ${({ theme }) => theme.typography.main.fontWeight[1]};
  }

  .more-transactions {
    font-size: ${({ theme }) => theme.typography.main.fontSize[0]};
    padding: 12px 15px;

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
