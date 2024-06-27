import AccountSummary from "../components/AccountSummary";
import Info from "../components/Info";
import { ACCOUNT_DATA, CC_DATA } from "../utils/uiData";

import styled from "styled-components";

const AllAccountsPage = () => {
  return (
    <Container>
      <h1 className="section-title">Manage Accounts</h1>
      <hr className="divider" />

      <Info />

      {/* BANK ACCOUNTS ---- Checking, Savings and CD */}
      <div className="group-section">
        <h2 className="group-title">Checking, Savings & CDs</h2>
        {ACCOUNT_DATA.map((item) => (
          <AccountSummary item={item} key={item.number} />
        ))}
      </div>

      {/* CREDIT CARDS */}
      <div className="group-section">
        <h2 className="group-title">Credit Cards</h2>
        {CC_DATA.map((item) => (
          <AccountSummary item={item} key={item.number} />
        ))}
      </div>
    </Container>
  );
};

export default AllAccountsPage;

const Container = styled.section`
  width: 67%;
  height: 100%;
  overflow-x: hidden !important;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: ${({ theme }) => theme.palette.scrollbar};
  }

  .divider {
    border: 0;
    height: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(232, 229, 229, 0.4);
    margin-right: 15px;
    margin-bottom: 10px;
  }

  .section-title {
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 10px;
  }

  .group-title {
    background: ${({ theme }) => theme.palette.solid};
    color: ${({ theme }) => theme.palette.activeText};
    font-size: 14px;
    font-weight: 300;
    padding: 18px;
    border-top-right-radius: ${({ theme }) => theme.borderRadius[1]};
    border-top-left-radius: ${({ theme }) => theme.borderRadius[1]};
  }

  .group-section {
    margin-bottom: 15px;
    margin-right: 15px;
  }
`;
