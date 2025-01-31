import styled from "styled-components";

import SelectPro from "./SelectPro";
import TransferInputPro from "./TransferInputPro";

const InternalTransferForm = () => {
  const accounts = [
    {
      account: "SmartPlus Checking ...3472",
      balance: "-$125.00",
    },
    {
      account: "SmartPlus Savings ...4572",
      balance: "$22,560.00",
    },
    {
      account: "Venture Rewards Mastercard ...5632",
      balance: "$8,255.00",
    },
  ];

  return (
    <Container>
      <SelectPro labelTxt="From" options={accounts} />
      <SelectPro labelTxt="To" options={accounts} />

      <TransferInputPro labelTxt="Amount" placeholderTxt="$0.00" />
      <TransferInputPro
        labelTxt="Transfer date"
        placeholderTxt="MM/DD/YY"
        regex=""
      />
      <TransferInputPro
        labelTxt="Memo (optional)"
        placeholderTxt="Describe transaction"
      />
    </Container>
  );
};

export default InternalTransferForm;

const Container = styled.form`
  display: flex;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.borderRadius[1]};
  background: ${({ theme }) => theme.palette.main};
  padding: 20px;
  gap: 10px;
`;
