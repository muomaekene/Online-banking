import { Link } from "react-router-dom";

import { SIGNUP_VALUES } from "../utils/uiData";
import { ACCT_TYPE } from "../utils/uiData";

import FormInput from "./FormInput";
import Option from "./Option";

import styled from "styled-components";

const SignupForm = () => {
  return (
    <Form className="form">
      <h2 className="form-title">Open bank account</h2>
      <fieldset className="select-group">
        <legend className="caption">Account type</legend>
        <select className="select-acct">
          {ACCT_TYPE.map((type) => (
            <Option key={type.id} name={type.name} value={type.value} />
          ))}
        </select>
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
          <input type="checkbox" name="tos" required />
          &nbsp;
          <label htmlFor="tos">
            I have read and accepted the <Link to="#">Terms of Service</Link>
          </label>
        </div>
        <div className="consent-box">
          <input type="checkbox" name="subscribe" />
          &nbsp;
          <label htmlFor="subscribe">Subscibe to our newsletters</label>
        </div>
      </fieldset>

      <button type="submit" className="signup-btn">
        Complete registration
      </button>
    </Form>
  );
};

export default SignupForm;

const Form = styled.form`
  width: 70%;
  background: #fff;
  padding: 20px 20px;
  margin: 20px 0;
  border-radius: 5px;
  border: 1px solid #e8e8e8;

  .form-title {
    font-weight: 400;
    font-size: 22px;
    margin-bottom: 20px;
  }

  .select-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    border: none;
  }

  .select-acct {
    width: 32%;
    padding: 10px 10px;
    outline: none;
    border-radius: 5px;
    border: 1px solid #e5e5e5;
    background: #f1f3f4;
    color: #606060;
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
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 2px;
  }

  .signup-btn {
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    background: #25304b;
    color: #fff;
    font-size: 14px;
    text-decoration: none;
    cursor: pointer;
    font-family: inherit;
  }

  .consent {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    border: none;
  }

  .consent-box {
    display: flex;
    align-content: center;
    font-size: 15px;
  }
`;
