import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import TableSummary from "../components/TableSummary";

import styled from "styled-components";

const AccountSummary = ({
  item: { account, accountNo, balance, transactions },
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
        <p className="account-type">
          {account} | ...{accountNo}
        </p>
        <p className="account-bal">${balance}</p>
      </div>

      <button className="dropdown-btn" onClick={() => setOpen(!open)}>
        {open ? "Hide" : "Show transactions"}
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

const Container = styled.section`
  background: ${({ theme }) => theme.palette.main};
  position: relative;
  margin-bottom: 5px;

  .account-info {
    display: flex;
    justify-content: space-between;
    padding: 20px 20px 0 20px;
  }

  .account-type {
    font-size: ${({ theme }) => theme.typography.main.fontSize[2]};
    font-weight: ${({ theme }) => theme.typography.main.fontWeight[0]};
    text-transform: capitalize;
    color: ${({ theme }) => theme.palette.link};
    cursor: pointer;

    :hover {
      text-decoration: underline;
      text-decoration-thickness: 0.5px;
    }
  }

  .account-bal {
    font-size: ${({ theme }) => theme.typography.main.fontSize[1]};
    font-weight: ${({ theme }) => theme.typography.main.fontWeight[0]};
    color: ${({ theme }) => theme.palette.text};
  }

  .dropdown-btn {
    cursor: pointer;
    border: none;
    background: none;
    font-size: ${({ theme }) => theme.typography.main.fontSize[0]};
    font-weight: ${({ theme }) => theme.typography.main.fontWeight[0]};
    color: ${({ theme }) => theme.palette.altText};
    margin-left: 20px;
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
    z-index: 666;
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
