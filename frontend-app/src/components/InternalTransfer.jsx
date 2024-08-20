import CustomBtn from "./CustomBtn";
import Select from "./Select";
import TransferInput from "./TransferInput";

import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";

import styled from "styled-components";

const InternalTransfer = () => {
  return (
    <Container>
      <Heading>Internal Transfers</Heading>
      <Paragraph>Manage money between your FCU accounts</Paragraph>

      <div className="form">
        <Select
          placeholder="Transfer From"
          options={[
            "Classic Savings (...9792)",
            "Venture Rewards Visa (...5632)",
            "Classic Checking (...9548)",
          ]}
        />
        <Select
          placeholder="Transfer To"
          options={[
            "Classic Savings (...9792)",
            "Venture Rewards Visa (...5632)",
            "Classic Checking (...9548)",
          ]}
        />
        <TransferInput icon="$" placeholder="Enter Amount" />

        <div className="check-check">
          <input type="checkbox" name="repeat" id="repeat" />
          <label htmlFor="repeat">Repeat this transfer</label>
        </div>

        <CustomBtn>Send Transfer</CustomBtn>
      </div>
    </Container>
  );
};

export default InternalTransfer;

const Container = styled.section`
  width: 18rem;

  .form {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .check-check {
    display: flex;
    gap: 5px;

    label {
      font-size: ${({ theme }) => theme.typography.main.fontSize[0]};
    }
  }
`;
