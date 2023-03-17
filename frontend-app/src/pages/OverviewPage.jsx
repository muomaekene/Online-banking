import { Link } from "react-router-dom";

import { accountInfo } from "../utils/uiData";
import { FISCAL_YEAR } from "../utils/uiData";
import { ChevronRightRounded } from "@mui/icons-material";

import MainLayout from "../components/MainLayout";
import Accounts from "../components/Accounts";
import Transactions from "../components/Transactions";
import LineChart from "../components/LineChart";
import Card from "../components/Card";
import SelectOption from "../components/SelectOption";
import QuickTransfer from "../components/QuickTransfer";
import More from "../components/More";

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
              <p>Recent transactions</p>
              <Link to="/transactions" className="link-to">
                <p>See all</p>
                <ChevronRightRounded className="icon" />
              </Link>
            </div>
            <Transactions />
          </section>

          <section className="stats">
            <div className="title-cover">
              <p>Fiscal analytics</p>
              <div className="tooltip">
                {<SelectOption data={FISCAL_YEAR} />}
              </div>
            </div>
            <LineChart />
          </section>
        </div>

        <div className="flex-right">
          <section>
            <Card />
          </section>

          <section className="card-details"></section>

          <section className="quick-transfer">
            <div className="title-cover">
              <p>Quick transfer</p>
              <More />
            </div>
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
    margin-right: ${({ theme }) => theme.spacing(3)};
  }

  .accounts {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: ${({ theme }) => theme.spacing(2)};
  }

  .transactions {
    margin: ${({ theme }) => theme.spacing(2)} 0;
    padding-bottom: 5px;
    border-radius: 10px;
    background: ${({ theme }) => theme.palette.main};
    border: 1px solid ${({ theme }) => theme.palette.border};
  }

  .stats {
    position: relative;
    border-radius: 10px;
    background: ${({ theme }) => theme.palette.main};
    border: 1px solid ${({ theme }) => theme.palette.border};
  }

  .flex-right {
    width: 30%;
    display: flex;
    flex-direction: column;
  }

  .quick-transfer {
    height: 19rem;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.palette.border};
    background: ${({ theme }) => theme.palette.main};
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .title-cover {
    padding: 10px 20px 10px 15px;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .tooltip {
    width: 100px;
    position: absolute;
    right: 20px;
    top: 10px;
  }

  .icon {
    font-size: 17px;
    margin-left: 1px;
  }

  .card-details {
    height: 3rem;
    background: ${({ theme }) => theme.palette.primary};
    border-radius: 10px;
    margin-bottom: 15px;
  }

  .link-to {
    display: flex;
    color: ${({ theme }) => theme.palette.altText};

    :hover {
      color: ${({ theme }) => theme.palette.text};
    }
  }
`;
