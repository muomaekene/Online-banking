import AccountSummary from "../components/AccountSummary";
import { ACCOUNT_DATA, CC_DATA } from "../utils/uiData";

import styled from "styled-components";

const AllAccountsPage = () => {
  return (
    <Container>
      <h1 className="page-title">My Accounts</h1>
      <hr className="divider" />
      <h2 className="section-title">Checking, Savings & CDs</h2>

      {ACCOUNT_DATA.map((item) => (
        <AccountSummary item={item} key={item.number} />
      ))}

      <hr className="divider" />
      <h2 className="section-title">Credit Cards</h2>

      {CC_DATA.map((item) => (
        <AccountSummary item={item} key={item.number} />
      ))}
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
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    margin-right: 15px;
  }

  .page-title {
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 10px;
  }

  .section-title {
    font-size: 14px;
    font-weight: 400;
    padding: 10px 0;
  }
`;
