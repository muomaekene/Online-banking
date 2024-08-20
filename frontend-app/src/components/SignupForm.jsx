import { Link } from "react-router-dom";
import { useForm } from "../utils/useForm";
import { SIGNUP_CONTROLS } from "../utils/formControls";
import { validations } from "../utils/validations";

import AuthInput from "./AuthInput";
import CustomBtn from "./CustomBtn";
import Select from "./Select";

import styled from "styled-components";

const SignupForm = () => {
  const { handleChange, handleSubmit, data, errors } = useForm({
    validations,
    onSubmit: () => {
      console.log(data);
      alert("Form submitted!");
    },
  });

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="form-title">
        Get started: Create an online banking profile
      </h2>

      {SIGNUP_CONTROLS.map((items) => (
        <fieldset key={items.title} className="input-group">
          <legend className="field-title">{items.title}</legend>
          {items.attributes.map((attribute) => (
            <div className="input-container" key={attribute.id}>
              <AuthInput
                {...attribute}
                value={data[attribute.name]}
                handleChange={handleChange}
              />
              {errors[attribute.name] && (
                <p id="error-msg">{errors[attribute.name]}</p>
              )}
            </div>
          ))}
        </fieldset>
      ))}

      <fieldset className="input-group">
        <legend className="field-title">Employment & finances</legend>
        <Select
          placeholder="Employment status"
          options={[
            "Employed",
            "Retired",
            "Self-employed",
            "Student",
            "Unemployed",
          ]}
        />
        <Select
          placeholder="Source of income"
          options={[
            "Employment income",
            "Inheritance or trust",
            "Invesment income",
            "Retirement income",
            "Household income/other",
          ]}
        />
      </fieldset>

      <fieldset className="select-group">
        <ul className="select-items">
          <li className="select-item">
            <input
              id="tos"
              name="tos"
              className="select-option"
              type="checkbox"
            />
            <label htmlFor="tos">
              I have read and I accept the &#160;
              <Link to="#" className="terms-of-service">
                Terms of Service
              </Link>
            </label>
          </li>
          <li className="select-item">
            <input className="select-option" type="checkbox" id="subscribe" />
            <label htmlFor="subscribe">Subscibe to our newsletters</label>
          </li>
        </ul>
      </fieldset>
      <div className="btn-cover">
        <CustomBtn>Sign up</CustomBtn>
      </div>
    </Form>
  );
};

export default SignupForm;

const Form = styled.form`
  border: 1px solid ${({ theme }) => theme.palette.border};
  background: ${({ theme }) => theme.palette.main};
  padding: 50px 40px;
  width: 65%;
  height: fit-content;
  box-sizing: border-box;
  border-radius: ${({ theme }) => theme.borderRadius[1]};

  .form-title {
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 30px;
    text-transform: capitalize;
    color: ${({ theme }) => theme.palette.text};
  }

  .select-group {
    margin-bottom: ${({ theme }) => theme.spacing(2)};
    border: none;
    color: ${({ theme }) => theme.palette.altText};
  }

  .select-items {
    list-style-type: none;
    font-size: 12px;
    font-weight: ${({ theme }) => theme.typography.main.fontWeight[0]};
    background: ${({ theme }) => theme.palette.primary};
    color: ${({ theme }) => theme.palette.text};
    border-radius: 2px;
    padding: 12px 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 60px;
  }

  .select-item {
    display: flex;
    cursor: pointer;
  }

  .select-option {
    margin-right: 5px;
  }

  .input-group {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: ${({ theme }) => theme.spacing(2)};
    margin-bottom: ${({ theme }) => theme.spacing(3)};
    border: none;
  }

  .input-container {
    display: flex;
    flex-direction: column;
  }

  #error-msg {
    color: #e64848;
    font-size: 12px;
    padding: 5px;
  }

  .field-title {
    font-size: ${({ theme }) => theme.typography.main.fontSize[2]};
    font-weight: ${({ theme }) => theme.typography.main.fontWeight[1]};
    margin-bottom: ${({ theme }) => theme.spacing(1)};
    color: ${({ theme }) => theme.palette.text};
    text-transform: capitalize;
  }

  .terms-of-service {
    text-decoration: underline;

    :hover {
      color: ${({ theme }) => theme.palette.text};
    }
  }

  .btn-cover {
    width: 15rem;
  }
`;
