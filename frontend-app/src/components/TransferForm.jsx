import { SendRounded } from "@mui/icons-material";

import CustomBtn from "./CustomBtn";
import Select from "./Select";
import TransferInput from "./TransferInput";

import styled from "styled-components";

const TransferForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Transaction successful!");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Select
        placeholder="Select account"
        options={[
          "Classic Savings (...9792)",
          "Venture Rewards Visa (...5632)",
          "Classic Checking (...9548)",
        ]}
      />

      <TransferInput icon="$" placeholder="Enter Amount" />
      <TransferInput icon="#" placeholder="Account No" />
      <TransferInput icon="#" placeholder="Routing No" />

      <CustomBtn>
        <SendRounded style={{ fontSize: "15px", marginRight: "4px" }} />
        Send money
      </CustomBtn>
    </Form>
  );
};

export default TransferForm;

const Form = styled.form`
  margin-top: 5px;
  width: 88%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
