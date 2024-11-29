import { SendRounded } from "@mui/icons-material";

import CustomBtn from "./CustomBtn";
import Select from "./Select";
import TransferInput from "./TransferInput";

import styled from "styled-components";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

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
          "SmartPlus Savings (...9792)",
          "SmartPlus Checking (...9548)",
          "Venture Rewards Visa Card (...5632)",
          "Customized Cash Rewards Visa Card (...5376)",
        ]}
      />

      <TransferInput icon="$" placeholder="Enter amount" />
      <TransferInput icon="#" placeholder="Account no." />
      <TransferInput icon="#" placeholder="Routing no." />

      <CustomBtn>
        Send money
        <ChevronRightIcon width="15px" />
      </CustomBtn>
    </Form>
  );
};

export default TransferForm;

const Form = styled.form`
  margin-top: 25px;
  width: 88%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
