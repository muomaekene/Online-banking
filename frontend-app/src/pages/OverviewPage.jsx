import { Link } from "react-router-dom";
import { acctSummary, FISCAL_YEAR } from "../utils/uiData";
import { ChevronRight, ExpandMore } from "@mui/icons-material";

import Layout from "../components/Layout";
import Accounts from "../components/Accounts";
import Transactions from "../components/Transactions";
import LineChart from "../components/LineChart";
import Card from "../components/Card";
import Option from "../components/Option";

import styled from "styled-components";

//there are quite a number of repeated styles in this component
//refactor codebase and create a reusable styled component to fix this

const Overview = () => {
  return (
    <Layout>
      <Container>
        <div className="flex-left">
          <Link to="/accounts" className="accounts">
            {acctSummary.map((account) => (
              <Accounts account={account} key={account.key} />
            ))}
          </Link>

          <div className="transactions">
            <div className="transaction-title">
              <h3 className="title-header">Recent transactions</h3>
              <Link to="/transactions">
                <p className="details">
                  <span>See all</span>
                  <ChevronRight className="icon" />
                </p>
              </Link>
            </div>
            <Transactions />
          </div>

          <div className="stats">
            <div className="stats-title">
              <h3 className="title-header">Annual analytics</h3>
              <select className="select-year">
                {FISCAL_YEAR.map((year) => (
                  <Option key={year.id} name={year.name} value={year.value} />
                ))}
              </select>
            </div>
            <LineChart />
          </div>
        </div>

        <div className="flex-right">
          <div className="my-cards">
            <div>
              <div className="card-title">
                <h3 className="title-header">Your cards</h3>
                <p className="details">
                  <span>All cards</span>
                  <ExpandMore className="icon" />
                </p>
              </div>
            </div>
            <Card />
            <button className="add-card">+ Add card</button>
          </div>
          <div className="activities">
            <div className="boxx"></div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default Overview;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100% - 48px);

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
    border-radius: 10px;
    margin: 15px 0;
    background: ${({ theme }) => theme.box};
    box-shadow: ${({ theme }) => theme.shadow};
  }

  .stats {
    position: relative;
    padding: 10px 15px;
    border-radius: 10px;
    width: 100%;
    background: ${({ theme }) => theme.box};
    box-shadow: ${({ theme }) => theme.shadow};
  }

  .transaction-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 15px 8px 15px;
  }

  .card-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .stats-title {
    margin-bottom: 7px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .select-year {
    font-family: "Hind", sans-serif;
    background: none;
    font-size: 13px;
    font-weight: 500;
    padding: 1px 4px;
    border: 1.5px solid ${({ theme }) => theme.border};
    border-radius: 4px;
    color: ${({ theme }) => theme.altText};
    outline: none;
    cursor: pointer;
  }

  .title-header {
    font-size: 14px;
    font-weight: 500;
  }

  .details {
    font-weight: 500;
    font-size: 13px;
    color: ${({ theme }) => theme.altText};
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .icon {
    font-size: 17px;
    margin-left: 1px;
  }

  .flex-right {
    width: 30%;
    top: 45px;
    right: 0;
  }

  .add-card {
    border-radius: 20px;
    border: none;
    padding: 6px 0;
    width: 32%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 13px;
    background: none;
    color: ${({ theme }) => theme.text};
    border: 1.5px solid ${({ theme }) => theme.border};
    font-family: inherit;
    font-weight: 500;
    margin: 6px 0 10px 0;

    :hover {
      background: ${({ theme }) => theme.hover};
      color: ${({ theme }) => theme.activeText};
      border: 1.5px solid transparent;
    }
  }

  .boxx {
    height: 19.5rem;
    width: 100%;
    border-radius: 10px;
    box-shadow: ${({ theme }) => theme.shadow};
    background: ${({ theme }) => theme.box};
  }
`;
