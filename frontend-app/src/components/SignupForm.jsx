import { Link } from "react-router-dom";
import { useForm } from "../utils/useForm";
import { SIGNUP_CONTROLS } from "../utils/formControls";
import { validations } from "../utils/validations";

import SignupInput from "./SignupInput";
import CustomBtn from "./CustomBtn";

import styled from "styled-components";
import Select from "./Select";

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
      <h2 className="form-title">Register a profile</h2>

      {SIGNUP_CONTROLS.map((items) => (
        <fieldset key={items.title} className="input-group">
          <legend className="field-title">{items.title}</legend>
          {items.attributes.map((attribute) => (
            <SignupInput
              key={attribute.id}
              {...attribute}
              value={data[attribute.name]}
              handleChange={handleChange}
              errors={errors}
            />
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
              // required
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
  background: ${({ theme }) => theme.palette.main};
  width: 60%;
  padding: 25px 35px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  border-radius: 10px;
  margin-top: 40px;

  .form-title {
    font-size: ${({ theme }) => theme.typography.main.fontSize[3]};
    font-weight: ${({ theme }) => theme.typography.main.fontWeight[1]};
    margin-bottom: 30px;
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
    border-radius: 10px;
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

  .field-title {
    font-size: ${({ theme }) => theme.typography.main.fontSize[2]};
    font-weight: ${({ theme }) => theme.typography.main.fontWeight[1]};
    margin-bottom: ${({ theme }) => theme.spacing(1)};
    color: ${({ theme }) => theme.palette.altText};
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
