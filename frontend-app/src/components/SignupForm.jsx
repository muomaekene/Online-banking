import { Link } from "react-router-dom";
import { useForm } from "../utils/useForm";
import { SIGNUP_CONTROLS } from "../utils/formControls";
import { validations } from "../utils/validations";

import SignupInput from "./SignupInput";
import CustomBtn from "./CustomBtn";
import ErrorMsg from "./ErrorMsg";

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
    <Form className="form" onSubmit={handleSubmit}>
      <h2 className="form-title">Open bank account</h2>
      <fieldset className="select-group">
        <legend className="field-title">Select account</legend>
        <ul className="select-items">
          <li className="select-item">
            <input
              id="savings"
              name="accountType"
              className="select-option"
              type="radio"
              value="savings"
              checked={data.accountType === "savings"}
              onChange={handleChange}
            />
            <label htmlFor="savings">Savings account</label>
          </li>
          <li className="select-item">
            <input
              id="checking"
              name="accountType"
              className="select-option"
              type="radio"
              value="checking"
              checked={data.accountType === "checking"}
              onChange={handleChange}
            />
            <label htmlFor="checking">Checking account</label>
          </li>
        </ul>
        {errors.accountType && <ErrorMsg message={errors.accountType} />}
      </fieldset>

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

      <fieldset className="select-group">
        <ul className="select-items">
          <li className="select-item">
            <input
              id="tos"
              name="tos"
              className="select-option"
              type="checkbox"
              required
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
        <CustomBtn>Create account</CustomBtn>
      </div>
    </Form>
  );
};

export default SignupForm;

const Form = styled.form`
  width: 60%;
  padding-top: ${({ theme }) => theme.spacing(3)};
  padding-bottom: ${({ theme }) => theme.spacing(3)};
  margin-left: auto;
  margin-right: auto;

  .form-title {
    font-weight: ${({ theme }) => theme.typography.main.fontWeight[1]};
    font-size: 22px;
    margin-bottom: ${({ theme }) => theme.spacing(3)};
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
