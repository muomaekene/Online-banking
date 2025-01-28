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
      <div className="account-details">
        <div className="account-type">
          <Link to={accountId} className="name">
            {account} | ...{accountNo}
          </Link>

          <div className="account-action">
            <button className="dropdown-btn" onClick={() => setOpen(!open)}>
              {open ? " - Hide" : " + Recent transactions"}
            </button>
          </div>
        </div>

        <div className="account-bal">
          <p className="amount">${balance}</p>
          <p className="desc">Available balance</p>
        </div>
      </div>

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
  border-bottom: 1px solid ${({ theme }) => theme.palette.border};

  :last-child {
    border: none;
  }

  .account-details {
    display: flex;
    justify-content: space-between;
    padding: 20px 20px 0px 20px;
  }

  .name {
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

  .amount {
    font-size: ${({ theme }) => theme.typography.main.fontSize[2]};
    font-weight: ${({ theme }) => theme.typography.main.fontWeight[1]};
    color: ${({ theme }) => theme.palette.text};
    text-align: end;
  }

  .desc {
    font-size: ${({ theme }) => theme.typography.main.fontSize[0]};
    font-weight: ${({ theme }) => theme.typography.main.fontWeight[0]};
    color: ${({ theme }) => theme.palette.altText};
  }

  .dropdown-btn {
    cursor: pointer;
    background: none;
    border: 1px solid transparent;
    font-size: ${({ theme }) => theme.typography.main.fontSize[0]};
    font-weight: ${({ theme }) => theme.typography.main.fontWeight[0]};
    color: ${({ theme }) => theme.palette.altText};

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
