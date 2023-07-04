import { useState } from "react";
import { Link } from "react-router-dom";

import {
  EyeIcon,
  EyeSlashIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";

import CustomBtn from "./CustomBtn";

import styled from "styled-components";

const LoginForm = () => {
  const [inputType, setInputType] = useState("password");
  const [loginValues, setLoginValues] = useState({ userID: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(loginValues));
  };

  const handleChange = (e) => {
    setLoginValues({ ...loginValues, [e.target.name]: e.target.value });
  };

  const showPassw = () => {
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
        <input
          className="input-bar"
          name="userID"
          type="text"
          placeholder="User ID"
          value={loginValues.userID}
          onChange={handleChange}
          required
        />
        <input
          className="input-bar"
          name="password"
          type={inputType}
          placeholder="Password"
          value={loginValues.password}
          onChange={handleChange}
          required
        />
        <button type="button" className="show-passw" onClick={showPassw}>
          {loginValues.password &&
            (inputType === "password" ? (
              <EyeSlashIcon className="icon" />
            ) : (
              <EyeIcon className="icon" />
            ))}
        </button>
      </fieldset>

      <p className="reset-passw">
        <Link to="#" className="reset-link">
          Forgot password?
        </Link>
      </p>

      <CustomBtn>
        <ArrowRightOnRectangleIcon
          style={{ width: "18px", marginRight: "4px" }}
        />
        Login
      </CustomBtn>

      <div className="bottom-links">
        <Link to="/create-profile" className="link">
          Open bank account
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
  border: 1px solid ${({ theme }) => theme.palette.border};
  background: ${({ theme }) => theme.palette.main};
  border-radius: 10px;
  position: absolute;
  left: 0;
  right: 0;
  margin: 120px auto;

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

  .input-bar {
    margin-top: 8px;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.palette.border};
    background: ${({ theme }) => theme.palette.main};
    padding: 0 15px;
    outline: none;
    width: 100%;
    height: 40px;

    ::placeholder {
      font-size: 12px;
      font-weight: 400;
    }

    :focus-within {
      border: 1px solid ${({ theme }) => theme.palette.solid};
      background: ${({ theme }) => theme.palette.main};
    }
  }

  .show-passw {
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
    position: absolute;
    top: 68px;
    right: 16px;
  }

  .form-actions {
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  .icon {
    height: 15px;
    width: 15px;
  }

  .reset-passw {
    font-weight: ${({ theme }) => theme.typography.main.fontWeight[0]};
    font-size: ${({ theme }) => theme.typography.main.fontSize[0]};
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
    margin-top: 10px;
    width: 80%;
    font-weight: ${({ theme }) => theme.typography.main.fontWeight[1]};
    font-size: ${({ theme }) => theme.typography.main.fontSize[1]};
    color: ${({ theme }) => theme.palette.altText};
  }

  .link {
    :hover {
      text-decoration: underline;
      color: ${({ theme }) => theme.palette.solid};
    }
  }
`;
