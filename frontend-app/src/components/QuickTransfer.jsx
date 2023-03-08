import { useState } from "react";
import { ACCOUNT_TYPE } from "../utils/uiData";
import { SendRounded } from "@mui/icons-material";

import ActionBtn from "../components/ActionBtn";
import SelectOption from "./SelectOption";

import styled from "styled-components";

const QuickTransfer = () => {
  const [amount, setAmount] = useState(null);
  const [account, setAccount] = useState(null);
  const [routing, setRouting] = useState(null);

  const COMMA_SEPARATOR_REGEX = /\B(?=(\d{3})+(?!\d))/g;
  const HYPHEN_SEPARATOR_REGEX = /\B(?=(\d{4})+(?!\d))/g;
  const REMOVE_TEXT_REGEX = /[^0-9]/g;

  const createPattern = (num, regex, char) =>
    num.toString().replace(regex, char);

  const removeNonNumerals = (num) =>
    num.toString().replace(REMOVE_TEXT_REGEX, "");

  const handleAmount = (event) =>
    setAmount(
      createPattern(
        removeNonNumerals(event.target.value),
        COMMA_SEPARATOR_REGEX,
        ","
      )
    );

  const handleAccount = (event) =>
    setAccount(
      createPattern(
        removeNonNumerals(event.target.value),
        HYPHEN_SEPARATOR_REGEX,
        "-"
      )
    );

  const handleRouting = (event) =>
    setRouting(
      createPattern(
        removeNonNumerals(event.target.value),
        HYPHEN_SEPARATOR_REGEX,
        "-"
      )
    );

  return (
    <Form>
      <SelectOption data={ACCOUNT_TYPE} />
      <div className="input-group">
        <div className="input-wrap">
          <span>$</span>
          <input
            className="input"
            placeholder="Enter amount"
            type="text"
            value={amount}
            onInput={handleAmount}
            maxLength="5"
            minLength="1"
            required
          />
        </div>
        <div className="input-wrap">
          <span>#</span>
          <input
            className="input"
            placeholder="Account no."
            type="text"
            value={account}
            onInput={handleAccount}
            maxLength="12"
            minLength="12"
            required
          />
        </div>
        <div className="input-wrap">
          <span>#</span>
          <input
            className="input"
            placeholder="Routing no."
            type="text"
            value={routing}
            onInput={handleRouting}
            maxLength="11"
            minLength="11"
            required
          />
        </div>
      </div>
      <ActionBtn
        icon={<SendRounded style={{ fontSize: "15px", marginRight: "4px" }} />}
        title="Send money"
      />
    </Form>
  );
};

export default QuickTransfer;

const Form = styled.form`
  margin-top: 20px;

  .input-group {
    margin-bottom: 10px;
  }

  .input-wrap {
    margin-top: 10px;
    width: 100%;
    border-radius: 5px;
    height: 40px;
    display: flex;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.secondary};
    position: relative;

    :focus-within {
      background: ${({ theme }) => theme.primary};
      border: 1px solid ${({ theme }) => theme.primary};
    }

    span {
      position: absolute;
      left: 15px;
      font-weight: 500;
      font-size: 13px;
      color: ${({ theme }) => theme.altText};
    }
  }

  .input {
    width: 100%;
    height: 60%;
    outline: none;
    border: none;
    padding: 0 30px;
    background: none;
    font-family: inherit;
    z-index: 666;
    color: ${({ theme }) => theme.text};

    ::placeholder {
      color: ${({ theme }) => theme.text};
      font-size: 13px;
    }
  }
`;
