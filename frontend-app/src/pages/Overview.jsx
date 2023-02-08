import { Link } from "react-router-dom";

import Layout from "../components/Layout";
import Accounts from "../components/Accounts";
import Transactions from "../components/Transactions";
import LineChart from "../components/LineChart";
import Cards from "../components/Cards";

import { acctSummary } from "../utils/uiData";

import styled from "styled-components";

import { ChevronDownIcon } from "@heroicons/react/24/solid";

const Overview = () => {
  return (
    <Layout>
      <Container>
        <div className="flex-left">
          <div className="accounts">
            {acctSummary.map((account) => (
              <Accounts account={account} key={account.key} />
            ))}
          </div>
          <div className="transactions">
            <div className="group-title">
              <h2 className="title">Recent transactions</h2>
              <Link to="/transactions">
                <p className="details">
                  View all
                  <ChevronDownIcon className="icon" />
                </p>
              </Link>
            </div>
            <Transactions />
          </div>
          <div className="stats">
            <LineChart />
          </div>
        </div>
        <div className="flex-right">
          <div className="my-cards">
            <div className="group-title">
              <h2 className="title">My cards</h2>
              <p className="details">
                All cards
                <ChevronDownIcon className="icon" />
              </p>
            </div>
            <Cards />
            <button className="add-card">+ &nbsp; Add new card</button>
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

  .flex-left {
    width: 68%;
    padding: 10px 25px 0 25px;
  }

  .accounts {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    height: 6.5rem;
    gap: 25px;
    margin-bottom: 10px;
  }

  .transactions {
    border-radius: 10px;
  }

  .stats {
    display: flex;
    border-radius: 10px;
    flex-direction: column;
    height: 225px;
    width: 100%;
    margin-top: 17px;
  }

  .group-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;
    margin-bottom: 2px;
  }

  .title {
    font-size: 14px;
    font-weight: 600;
  }

  .details {
    font-weight: 600;
    font-size: 13px;
    color: ${(props) => props.theme.altText};
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .icon {
    width: 15px;
    margin-left: 2px;
  }

  .flex-right {
    height: calc(100vh - 49px);
    width: 32%;
    border-left: 1.5px solid ${(props) => props.theme.primary};
    padding: 0 25px;
    top: 45px;
    right: 0;
  }

  .add-card {
    border-radius: 20px;
    border: none;
    padding: 7px 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 13px;
    background: none;
    color: ${(props) => props.theme.text};
    border: 1.5px solid ${(props) => props.theme.border};
    font-family: inherit;
    font-weight: 600;
  }

  .boxx {
    margin-top: 10px;
    height: 19.3rem;
    width: 100%;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }
`;
