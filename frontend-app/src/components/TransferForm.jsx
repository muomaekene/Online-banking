import { SendRounded } from "@mui/icons-material";

import CustomBtn from "./CustomBtn";
import Select from "./Select";

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
          "ADV Plus Savings (...9792)",
          "Venture Rewards Visa (...5632)",
          "ADV Smart Rewards Checking (...9548)",
        ]}
      />
      <div className="input-group">
        <div className="input-wrap">
          <span>$</span>
          <input
            name="amount"
            className="input"
            placeholder="Enter amount"
            type="text"
            maxLength="7"
          />
        </div>
        <div className="input-wrap">
          <span>#</span>
          <input
            name="account"
            className="input"
            placeholder="Account no."
            type="number"
          />
        </div>
        <div className="input-wrap">
          <span>#</span>
          <input
            name="routing"
            className="input"
            placeholder="Routing no."
            type="number"
          />
        </div>
      </div>
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

  .input-group {
    margin-bottom: 10px;
  }

  .input-wrap {
    margin-top: 10px;
    width: 100%;
    border-radius: 2px;
    height: 40px;
    display: flex;
    align-items: center;
    border: 1px solid transparent;
    background: ${({ theme }) => theme.palette.primary};
    position: relative;

    :focus-within {
      background: ${({ theme }) => theme.palette.main};
      border: 1px solid ${({ theme }) => theme.palette.border};
    }

    span {
      position: absolute;
      left: 15px;
      font-weight: 500;
      font-size: 13px;
      color: ${({ theme }) => theme.palette.altText};
    }
  }

  .input {
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    padding: 0 30px;
    background: none;
    font-family: inherit;
    font-size: 12px;
    color: ${({ theme }) => theme.palette.text};

    ::placeholder {
      color: ${({ theme }) => theme.palette.altText};
      font-size: 12px;
    }

    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;
