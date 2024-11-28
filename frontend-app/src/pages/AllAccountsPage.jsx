import AccountSummary from "../components/AccountSummary";
import Subheading from "../components/Subheading";
import InfoBar from "../components/InfoBar";
import Heading from "../components/Heading";

import { ACCOUNT_SUMMARY, CREDIT_CARDS } from "../utils/COMPONENT_DATA";

import styled from "styled-components";

const AllAccountsPage = () => {
  return (
    <Container>
      <Heading>Manage Accounts</Heading>
      <Subheading>
        Interact with your accounts and view recent transactions
      </Subheading>

      <InfoBar />

      <section className="group-section">
        <h2 className="group-title">Checking, Savings & CDs</h2>
        {ACCOUNT_SUMMARY.map((item) => (
          <AccountSummary item={item} key={item.accountId} />
        ))}
      </section>

      <section className="group-section">
        <h2 className="group-title">Credit Cards</h2>
        {CREDIT_CARDS.map((item) => (
          <AccountSummary item={item} key={item.accountId} />
        ))}
      </section>
    </Container>
  );
};

export default AllAccountsPage;

const Container = styled.div`
  width: 70%;
  height: 100%;
  overflow-x: hidden !important;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: ${({ theme }) => theme.palette.scrollbar};
  }

  .group-title {
    background: ${({ theme }) => theme.palette.solid};
    color: ${({ theme }) => theme.palette.activeText};
    font-size: ${({ theme }) => theme.typography.main.fontSize[2]};
    font-weight: ${({ theme }) => theme.typography.main.fontWeight[0]};
    border-top-right-radius: ${({ theme }) => theme.borderRadius[1]};
    border-top-left-radius: ${({ theme }) => theme.borderRadius[1]};
    padding: 18px;
  }

  .group-section {
    margin-bottom: 15px;
    margin-right: 15px;
  }
`;
