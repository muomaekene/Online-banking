import { Link } from "react-router-dom";

import { ACCOUNT_TYPE, SIGNUP_VALUES } from "../utils/uiData";

import FormInput from "./FormInput";
import ActionBtn from "./ActionBtn";

import styled from "styled-components";
import SelectOption from "./SelectOption";

const SignupForm = () => {
  return (
    <Form className="form">
      <h2 className="form-title">Open bank account</h2>
      <fieldset className="select-group">
        <legend className="caption">Account type</legend>
        <SelectOption data={ACCOUNT_TYPE} />
      </fieldset>

      {SIGNUP_VALUES.map((item) => (
        <fieldset key={item.title} className="input-group">
          <legend className="caption">{item.title}</legend>
          {item.values.map((inputs) => (
            <FormInput key={inputs.id} inputs={inputs} />
          ))}
        </fieldset>
      ))}

      <fieldset className="consent">
        <div className="consent-box">
          <input className="checkbox" type="checkbox" name="tos" required />
          <label htmlFor="tos">
            I have read and accepted the{" "}
            <Link to="#" className="terms-of-service">
              Terms of Service
            </Link>
          </label>
        </div>
        <div className="consent-box">
          <input className="checkbox" type="checkbox" name="subscribe" />

          <label htmlFor="subscribe">Subscibe to our newsletters</label>
        </div>
      </fieldset>

      <ActionBtn title="Create account" />
    </Form>
  );
};

export default SignupForm;

const Form = styled.form`
  width: 60%;
  padding-top: 20px;
  margin-left: auto;
  margin-right: auto;

  .form-title {
    font-weight: 400;
    font-size: 25px;
    margin-bottom: 30px;
  }

  .select-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    border: none;
    width: 32%;
  }

  .select-acct {
    width: 32%;
    padding: 12px 10px;
    outline: none;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.secondary};
    background: none;
    color: ${({ theme }) => theme.altText};
    cursor: pointer;
  }

  .input-group {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
    margin-bottom: 20px;
    border: none;
  }

  .caption {
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 5px;
  }

  .consent {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 20px;
    border: none;
    height: 40px;
  }

  .consent-box {
    display: flex;
    align-content: center;
    font-size: 14px;
    font-weight: 400;
  }

  .checkbox {
    margin-right: 7px;
  }

  .terms-of-service {
    text-decoration: underline;

    :hover {
      color: ${({ theme }) => theme.altText};
    }
  }
`;
