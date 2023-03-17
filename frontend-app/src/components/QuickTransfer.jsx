import { useState } from "react";
import { SendRounded } from "@mui/icons-material";
import { ACCOUNT_TYPE } from "../utils/uiData";
import {
  COMMA_SEPARATOR_REGEX,
  HYPHEN_SEPARATOR_REGEX,
  createPattern,
  removeNonNumerals,
} from "../utils/REGEX";

import ActionBtn from "../components/ActionBtn";
import SelectOption from "./SelectOption";

import styled from "styled-components";

const QuickTransfer = () => {
  const [amount, setAmount] = useState("");
  const [account, setAccount] = useState("");
  const [routing, setRouting] = useState("");

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
  margin-top: 5px;
  width: 88%;

  .input-group {
    margin-bottom: 10px;
  }

  .input-wrap {
    margin-top: 10px;
    width: 100%;
    border-radius: 10px;
    height: 40px;
    display: flex;
    align-items: center;
    border: 1px solid transparent;
    background: ${({ theme }) => theme.palette.primary};
    position: relative;

    :focus-within {
      background: ${({ theme }) => theme.palette.secondary};
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
    height: 60%;
    outline: none;
    border: none;
    padding: 0 30px;
    background: none;
    font-family: inherit;
    font-size: 12px;
    color: ${({ theme }) => theme.palette.altText};

    ::placeholder {
      color: ${({ theme }) => theme.palette.altText};
      font-size: 12px;
    }
  }
`;
