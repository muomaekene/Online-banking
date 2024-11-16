import { useState } from "react";
import { Link } from "react-router-dom";

import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

import CustomBtn from "./CustomBtn";
import AuthInput from "./AuthInput";

import { LOGIN_CONTROLS } from "../utils/formControls";
import styled from "styled-components";

const LoginForm = () => {
  const [loginValues, setLoginValues] = useState("");
  const [inputType, setInputType] = useState("password");

  const handleChange = (e) => {
    setLoginValues({ ...loginValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(loginValues));
  };

  const togglePassw = () => {
    if (inputType === "password") {
      setInputType("text");
      return;
    }
    setInputType("password");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <fieldset className="form-group">
        <legend className="form-title">e-Banking login</legend>

        <div className="inputs">
          {LOGIN_CONTROLS.map((attribute) => (
            <AuthInput
              key={attribute.id}
              name={attribute.name}
              placeholder={attribute.placeholder}
              type={attribute.id === 1 ? "text" : inputType}
              value={loginValues[attribute.name]}
              handleChange={handleChange}
            />
          ))}
        </div>

        <button type="button" className="show-passw" onClick={togglePassw}>
          {loginValues.password &&
            (inputType === "password" ? (
              <EyeSlashIcon width="15" />
            ) : (
              <EyeIcon width="15" />
            ))}
        </button>
      </fieldset>

      <p className="reset-passw">
        <Link to="#" className="reset-link">
          Forgot password?
        </Link>
      </p>

      <CustomBtn>Login</CustomBtn>

      <div className="bottom-links">
        <Link to="/create-profile" className="link">
          Create banking profile
        </Link>
        <Link to="#" className="link">
          Learn more
        </Link>
      </div>
    </Form>
  );
};

export default LoginForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 350px;
  height: 20rem;
  padding: 25px 35px;
  background: ${({ theme }) => theme.palette.main};
  border-radius: ${({ theme }) => theme.borderRadius[1]};
  border: 1px solid ${({ theme }) => theme.palette.border};

  .form-title {
    font-size: ${({ theme }) => theme.typography.main.fontSize[3]};
    font-weight: ${({ theme }) => theme.typography.main.fontWeight[1]};
    margin-bottom: ${({ theme }) => theme.spacing(1)};
    color: ${({ theme }) => theme.palette.text};
  }

  .form-group {
    position: relative;
    border: none;
  }

  .inputs {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .show-passw {
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
    position: absolute;
    top: 70px;
    right: 16px;
  }

  .form-actions {
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  .reset-passw {
    font-weight: ${({ theme }) => theme.typography.main.fontWeight[0]};
    font-size: ${({ theme }) => theme.typography.main.fontSize[1]};
    color: ${({ theme }) => theme.palette.text};
    margin: 10px 0;
  }

  .reset-link {
    :hover {
      text-decoration: underline;
      color: #d22626;
    }
  }

  .bottom-links {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    width: 80%;
    font-weight: ${({ theme }) => theme.typography.main.fontWeight[0]};
    font-size: ${({ theme }) => theme.typography.main.fontSize[1]};
    color: ${({ theme }) => theme.palette.altText};
  }

  .link {
    font-size: ${({ theme }) => theme.typography.main.fontSize[2]};

    :hover {
      text-decoration: underline;
      color: ${({ theme }) => theme.palette.solid};
    }
  }
`;
