import { accountInfo } from "../utils/uiData";
import { FISCAL_YEAR } from "../utils/uiData";
import {
  AddRounded,
  ChevronRightRounded,
  ExpandMoreRounded,
} from "@mui/icons-material";

import MainLayout from "../components/MainLayout";
import Accounts from "../components/Accounts";
import Transactions from "../components/Transactions";
import LineChart from "../components/LineChart";
import Card from "../components/Card";
import ActionBtn from "../components/ActionBtn";
import SectionTitle from "../components/SectionTitle";
import SectionDetails from "../components/SectionDetails";
import SelectOption from "../components/SelectOption";
import QuickTransfer from "../components/QuickTransfer";

import styled from "styled-components";

const Overview = () => {
  return (
    <MainLayout>
      <Container>
        <div className="flex-left">
          <section className="accounts">
            {accountInfo.map((info) => (
              <Accounts account={info} key={info.key} />
            ))}
          </section>
          <section className="transactions">
            <div className="title-cover">
              <SectionTitle
                title="Recent transactions"
                details={
                  <SectionDetails
                    source="/transactions"
                    detail="See all"
                    icon={<ChevronRightRounded className="icon" />}
                  />
                }
              />
            </div>
            <Transactions />
          </section>
          <section className="stats">
            <div className="title-cover">
              <SectionTitle title="Fiscal analytics" />
              <div className="tooltip">
                {<SelectOption data={FISCAL_YEAR} />}
              </div>
            </div>
            <LineChart />
          </section>
        </div>

        <div className="flex-right">
          <section>
            <SectionTitle
              title="Your cards"
              details={
                <SectionDetails
                  source=""
                  detail="All cards"
                  icon={<ExpandMoreRounded className="icon" />}
                />
              }
            />
            <Card />
            <ActionBtn
              icon={
                <AddRounded style={{ fontSize: "15px", marginRight: "2px" }} />
              }
              title="Add card"
            />
          </section>
          <section className="quick-transfer">
            <SectionTitle title="Quick transfer" />
            <QuickTransfer />
          </section>
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
    margin-right: 20px;
  }

  .accounts {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
  }

  .transactions {
    margin: 15px 0;
    padding-bottom: 5px;
    border-radius: 10px;
    background: ${({ theme }) => theme.main};
    border: 1px solid ${({ theme }) => theme.secondary};
  }

  .stats {
    position: relative;
    border-radius: 10px;
    width: 100%;
    background: ${({ theme }) => theme.main};
    border: 1px solid ${({ theme }) => theme.secondary};
  }

  .flex-right {
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .quick-transfer {
    padding: 10px 20px;
    height: 19rem;
    width: 100%;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.secondary};
    background: ${({ theme }) => theme.main};
    position: relative;
  }

  .title-cover {
    padding: 10px 15px;
  }

  .tooltip {
    width: 110px;
    position: absolute;
    right: 15px;
    top: 10px;
    z-index: 666;
  }

  .icon {
    font-size: 17px;
    margin-left: 1px;
  }
`;
