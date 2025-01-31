import styled from "styled-components";

import SelectPro from "./SelectPro";
import TransferInputPro from "./TransferInputPro";

const ExternalTransferForm = () => {
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
      <div className="modal-link">View all dollar limits</div>

      <div className="delivery-speed">
        <h2 className="title">Choose a delivery speed</h2>
        <p className="info">You pay no fees for any transfer</p>

        <div className="radio-select">
          <label>
            <input type="radio" name="delivery" value="instant" />
            Arrives instantly
          </label>
          <label>
            <input type="radio" name="delivery" value="later" />
            Arrives in 1 - 3 business days
          </label>
          <p className="info">Send by 8 p.m. CT except weekends and holidays</p>
        </div>
      </div>

      <div className="modal-link">More about transfer options</div>

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

export default ExternalTransferForm;

const Container = styled.form`
  display: flex;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.borderRadius[1]};
  background: ${({ theme }) => theme.palette.main};
  padding: 20px;
  gap: 10px;

  .title {
    font-weight: ${({ theme }) => theme.typography.main.fontWeight[2]};
    font-size: ${({ theme }) => theme.typography.main.fontSize[3]};
  }

  .info {
    color: ${({ theme }) => theme.palette.altText};
    font-size: ${({ theme }) => theme.typography.main.fontSize[0]};
  }

  .delivery-speed {
    margin: 10px 0;
  }

  .modal-link {
    color: ${({ theme }) => theme.palette.link};
    font-size: ${({ theme }) => theme.typography.main.fontSize[2]};
    font-weight: ${({ theme }) => theme.typography.main.fontWeight[1]};
    cursor: pointer;
  }

  .radio-select {
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-top: 10px;

    label {
      width: fit-content;
      display: flex;
      gap: 5px;
      font-size: ${({ theme }) => theme.typography.main.fontSize[1]};
      font-weight: ${({ theme }) => theme.typography.main.fontWeight[1]};
    }
  }
`;
