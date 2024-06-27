import styled from "styled-components";

import Select from "../components/Select";
import CustomCalender from "../components/CustomCalender";

const AccountStatementsPage = () => {
  return (
    <Container>
      <h1>Generate account statements and other documents</h1>
      <Select
        placeholder="Select account"
        options={[
          "ADV Plus Savings (...9792)",
          "Venture Rewards Visa (...5632)",
          "ADV Smart Rewards Checking (...9548)",
        ]}
      />

      <CustomCalender />
    </Container>
  );
};

export default AccountStatementsPage;

const Container = styled.section`
  width: 67%;
  padding-right: 15px;
`;
