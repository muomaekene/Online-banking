import styled from "styled-components";

import Select from "../components/Select";
import CustomBtn from "../components/CustomBtn";
import DatePicker from "../components/DatePicker";
import Heading from "../components/Heading";

const AccountStatementsPage = () => {
  return (
    <Container>
      <Heading>Generate Statements</Heading>
      <div className="statement-gen">
        <Select
          placeholder="Select account"
          options={[
            "ADV Plus Savings (...9792)",
            "Venture Rewards Visa (...5632)",
            "ADV Smart Rewards Checking (...9548)",
          ]}
        />

        <div className="title">
          <p>From:</p>
          <p>To:</p>
        </div>
        <div className="date-pickers">
          <DatePicker />
          <DatePicker />
        </div>

        <CustomBtn>Generate </CustomBtn>
      </div>
    </Container>
  );
};

export default AccountStatementsPage;

const Container = styled.section`
  width: 67%;
  padding-right: 15px;

  .statement-gen {
    margin-top: 10px;
    width: 18rem;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .title {
    width: 100%;
    display: flex;

    p {
      font-size: 14px;
      width: 50%;
    }
  }

  .date-pickers {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
`;
