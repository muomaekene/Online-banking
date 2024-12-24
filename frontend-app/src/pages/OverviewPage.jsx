import { Suspense, lazy } from "react";
import MainLayout from "../components/MainLayout";

import ClipLoader from "react-spinners/ClipLoader";

import styled from "styled-components";

const AccountBanners = lazy(() => import("../components/AccountBanners"));
const Transactions = lazy(() => import("../components/Transactions"));
const VirtualCards = lazy(() => import("../components/VirtualCards"));
const QuickTransfer = lazy(() => import("../components/QuickTransfer"));

const override = {
  display: "block",
  margin: "20% auto",
  borderColor: "#bbbaba",
};

const OverviewPage = () => {
  return (
    <MainLayout>
      <Container>
        <Suspense
          fallback={
            <ClipLoader
              cssOverride={override}
              size={70}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          }
        >
          <div className="flex-left">
            <AccountBanners />
            <Transactions />
          </div>
          <div className="flex-right">
            <VirtualCards />
            <QuickTransfer />
          </div>
        </Suspense>
      </Container>
    </MainLayout>
  );
};

export default OverviewPage;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 10px;
  justify-content: space-between;

  .flex-left {
    margin-right: ${({ theme }) => theme.spacing(3)};
    width: 67%;
  }

  .flex-right {
    width: 32%;
    display: flex;
    flex-direction: column;
  }
`;
