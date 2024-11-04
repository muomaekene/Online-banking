import Select from "../components/Select";

import { YEARS, MONTHS, ACCOUNTS_OWNED } from "../utils/uiData";
import { ArrowDownward } from "@mui/icons-material";

import styled from "styled-components";

const Statements = () => {
  return (
    <Page>
      <StatementForm>
        <div className="account-selector">
          <Select placeholder="Select account" options={ACCOUNTS_OWNED} />
        </div>

        <div className="date-selector">
          <div className="date">
            <Select placeholder="Month" options={MONTHS} />
          </div>
          <div className="date">
            <Select placeholder="Year" options={YEARS} />
          </div>
        </div>
      </StatementForm>

      <StatementResult>
        <div className="result">
          <p className="selected-account">SmartPlus Savings (...9792)</p>
        </div>

        <hr />
        <div className="result">
          <p>
            Account statement for <a href="#">July 2024</a>
          </p>
          <button href="#">
            <ArrowDownward style={{ fontSize: "15px", marginRight: "2px" }} />
            Download
          </button>
        </div>

        <hr />
        <div className="result">
          <p>
            If you want a copy of the statement mailed to you,{" "}
            <a href="#">order a copy</a>
          </p>
        </div>
      </StatementResult>
    </Page>
  );
};

export default Statements;

const Page = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  font-weight: ${({ theme }) => theme.typography.main.fontWeight[0]};
  font-size: ${({ theme }) => theme.typography.main.fontSize[0]};
`;

const StatementForm = styled.section`
  background: ${({ theme }) => theme.palette.main};
  border: 1px solid ${({ theme }) => theme.palette.border};
  border-radius: ${({ theme }) => theme.borderRadius[1]};
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: row;

  .account-selector {
    width: 100%;
    margin-right: 10px;
  }

  .date-selector {
    width: 100%;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;

    .date {
      flex: 1;
    }
  }
`;

const StatementResult = styled.section`
  background: ${({ theme }) => theme.palette.main};
  border: 1px solid ${({ theme }) => theme.palette.border};
  border-radius: ${({ theme }) => theme.borderRadius[1]};
  width: 100%;
  padding: 20px;
  color: ${({ theme }) => theme.palette.altText};

  .result {
    flex: 1;
    display: flex;
    justify-content: space-between;
  }

  .selected-account {
    font-size: ${({ theme }) => theme.typography.main.fontSize[1]};
    font-weight: ${({ theme }) => theme.typography.main.fontWeight[1]};
    color: ${({ theme }) => theme.palette.text};
  }

  button {
    display: flex;
    border: none;
    background: none;
    color: ${({ theme }) => theme.palette.link};
    cursor: pointer;
    font-size: ${({ theme }) => theme.typography.main.fontSize[0]};
  }

  hr {
    border-color: ${({ theme }) => theme.palette.hr};
    margin: 10px -20px 10px;
  }

  a {
    color: ${({ theme }) => theme.palette.link};
    font-weight: ${({ theme }) => theme.typography.main.fontWeight[0]};
  }
`;
