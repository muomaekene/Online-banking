import { Link } from "react-router-dom";

import { CHOOSE_ACCT, SIGNUP_VALUES } from "../utils/uiData";

import FormInput from "./FormInput";
import ActionBtn from "./ActionBtn";
import SelectOption from "./SelectOption";

import styled from "styled-components";

const SignupForm = () => {
  return (
    <Form className="form">
      <h2 className="form-title">Open bank account</h2>
      <fieldset className="select-group">
        <legend className="field-title">Account type</legend>
        <SelectOption data={CHOOSE_ACCT} />
      </fieldset>

      {SIGNUP_VALUES.map((item) => (
        <fieldset key={item.title} className="input-group">
          <legend className="field-title">{item.title}</legend>
          {item.values.map((inputs) => (
            <FormInput key={inputs.id} inputs={inputs} />
          ))}
        </fieldset>
      ))}

      <fieldset className="checkbox-group">
        <ul className="checkbox-items">
          <li className="checkbox-item">
            <input className="checkbox" type="checkbox" id="tos" required />
            <label htmlFor="tos">
              I have read and accepted the &#160;
              <Link to="#" className="terms-of-service">
                Terms of Service
              </Link>
            </label>
          </li>
          <li className="checkbox-item">
            <input className="checkbox" type="checkbox" id="subscribe" />
            <label htmlFor="subscribe">Subscibe to our newsletters</label>
          </li>
        </ul>
      </fieldset>
      <ActionBtn title="Create account" />
    </Form>
  );
};

export default SignupForm;

const Form = styled.form`
  width: 60%;
  padding-top: ${({ theme }) => theme.spacing(3)};
  margin-left: auto;
  margin-right: auto;

  .form-title {
    font-weight: ${({ theme }) => theme.typography.main.fontWeight[1]};
    font-size: 22px;
    margin-bottom: ${({ theme }) => theme.spacing(3)};
  }

  .select-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    border: none;
    width: 32%;
  }

  .input-group {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: ${({ theme }) => theme.spacing(2)};
    margin-bottom: ${({ theme }) => theme.spacing(3)};
    border: none;
  }

  .field-title {
    font-size: ${({ theme }) => theme.typography.main.fontSize[1]};
    font-weight: ${({ theme }) => theme.typography.main.fontWeight[0]};
    margin-bottom: ${({ theme }) => theme.spacing(1)};
    color: ${({ theme }) => theme.palette.altText};
  }

  .checkbox-group {
    margin-bottom: ${({ theme }) => theme.spacing(3)};
    border: none;
    color: ${({ theme }) => theme.palette.altText};
  }

  .checkbox-items {
    list-style-type: none;
    font-size: 14px;
    font-weight: ${({ theme }) => theme.typography.main.fontWeight[0]};
  }

  .checkbox-item {
    display: flex;
    align-items: center;
  }

  .checkbox {
    margin-right: 7px;
  }

  .terms-of-service {
    text-decoration: underline;

    :hover {
      color: ${({ theme }) => theme.palette.text};
    }
  }
`;
