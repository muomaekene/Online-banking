import { Link } from "react-router-dom";
import { acctSummary } from "../utils/uiData";
import { ChevronRight, ExpandMore } from "@mui/icons-material";

import Layout from "../components/Layout";
import Accounts from "../components/Accounts";
import Transactions from "../components/Transactions";
import LineChart from "../components/LineChart";
import Card from "../components/Card";

import styled from "styled-components";

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
                <option value="">Select year</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
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
  height: calc(100vh - 49px);

  .flex-left {
    width: 70%;
    margin-right: 20px;
  }

  .accounts {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    height: 6rem;
    gap: 20px;
  }

  .transactions {
    box-shadow: ${(props) => props.theme.shadow};
    border-radius: 10px;
    height: 11rem;
    margin: 15px 0;
    background: ${(props) => props.theme.box};
  }

  .stats {
    position: relative;
    box-shadow: ${(props) => props.theme.shadow};
    border-radius: 10px;
    height: 14.5rem;
    width: 100%;
    background: ${(props) => props.theme.box};
    padding: 10px 15px;
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
    border: 1.5px solid ${(props) => props.theme.border};
    border-radius: 4px;
    color: ${(props) => props.theme.altText};
    outline: none;
  }

  .title-header {
    font-size: 14px;
    font-weight: 500;
  }

  .details {
    font-weight: 500;
    font-size: 13px;
    color: ${(props) => props.theme.altText};
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
    color: ${(props) => props.theme.text};
    border: 1.5px solid ${(props) => props.theme.border};
    font-family: inherit;
    font-weight: 500;
    margin: 6px 0 10px 0;

    :hover {
      background: ${(props) => props.theme.hover};
      color: ${(props) => props.theme.activeText};
      border: 1.5px solid transparent;
    }
  }

  .boxx {
    height: 19.2rem;
    width: 100%;
    border-radius: 10px;
    box-shadow: ${(props) => props.theme.shadow};
    background: ${(props) => props.theme.box};
  }
`;
