import MainLayout from "../components/MainLayout";

import Accounts from "../components/Accounts";
import Transactions from "../components/Transactions";
import Analytics from "../components/Analytics";
import VirtualCards from "../components/VirtualCards";
import QuickTransfer from "../components/QuickTransfer";

import styled from "styled-components";

const Overview = () => {
  return (
    <MainLayout>
      <Container>
        <div className="flex-left">
          <Accounts />
          <Transactions />
          <Analytics />
        </div>
        <div className="flex-right">
          <VirtualCards />
          <QuickTransfer />
        </div>
      </Container>
    </MainLayout>
  );
};

export default Overview;

const Container = styled.div`
  display: flex;
  flex-direction: row;

  .flex-left {
    width: 70%;
    margin-right: ${({ theme }) => theme.spacing(3)};
  }

  .flex-right {
    width: 30%;
    display: flex;
    flex-direction: column;
  }
`;
