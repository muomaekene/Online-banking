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
        placeholder="Choose a bill"
        options={[
          "AT&T internet",
          "Pacific Gas & Electric",
          "Amazon Prime subscription",
          "24 Hour Fitness Gym",
        ]}
      />
      <Select
        placeholder="Choose an account"
        options={[
          "SmartPlus Savings ...9792",
          "SmartPlus Checking ...9548",
          "Venture Rewards Visa Card ...5632",
          "Customized Cash Rewards Visa ...5376",
        ]}
      />

      <TransferInput placeholder="MM/DD/YY" />
      <TransferInput icon="$" placeholder="Enter amount" />

      <CustomBtn>Review & pay</CustomBtn>
      <button className="secondary-btn">View Activity</button>
    </Form>
  );
};

export default TransferForm;

const Form = styled.form`
  margin-top: 10px;
  width: 88%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  .secondary-btn {
    background: none;
    height: 45px;
    border-radius: ${({ theme }) => theme.borderRadius[0]};
    border: 1px solid ${({ theme }) => theme.palette.solid};
    color: ${({ theme }) => theme.palette.text};
    font-size: ${({ theme }) => theme.typography.main.fontSize[1]};
    font-weight: 500;
    cursor: pointer;

    :active {
      background: ${({ theme }) => theme.palette.focus};
      background-size: 100%;
      border: 1px solid transparent;
    }
  }
`;
