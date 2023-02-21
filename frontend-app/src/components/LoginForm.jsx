import { useState } from "react";
import { Link } from "react-router-dom";

import {
  ArrowRightOnRectangleIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/outline";

import Logo from "../components/Logo";
import styled from "styled-components";

const LoginForm = () => {
  const [inputType, setInputType] = useState("password");
  const [inputValue, setInputValue] = useState("");

  const showPassw = () => {
    if (inputType === "password") {
      setInputType("text");
      return;
    }
    setInputType("password");
  };

  return (
    <Form className="login-form">
      <div className="brand">
        <Logo />
      </div>

      <fieldset className="input-group">
        <legend className="caption">e-Banking login</legend>
        <input
          id="mail"
          className="input-bar"
          type="email"
          placeholder="Email"
          maxLength="32"
          required
        />
        <input
          className="input-bar"
          type={inputType}
          placeholder="Password"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          minLength="6"
          maxLength="32"
          required
        />
        <button type="button" className="show-passw" onClick={showPassw}>
          {inputValue &&
            (inputType === "password" ? (
              <EyeSlashIcon className="icon" />
            ) : (
              <EyeIcon className="icon" />
            ))}
        </button>
      </fieldset>

      <div className="form-actions">
        <p className="reset-passw">
          <Link to="#" className="reset-link">
            Forgot password?
          </Link>
        </p>

        <button type="submit" className="login-btn">
          <ArrowRightOnRectangleIcon className="icon" />
          <span>Login</span>
        </button>
      </div>

      <div className="form-links">
        <Link to="/create-account">Open bank account</Link>
        <Link to="#">Learn more</Link>
      </div>
    </Form>
  );
};

export default LoginForm;

const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 320px;
  padding: 40px 25px;
  border-radius: 5px;
  border: 1.5px solid #e8e8e8;
  background: #fff;

  .brand {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
  }

  .caption {
    font-size: 17px;
    font-weight: 500;
    margin-bottom: 5px;
    color: #000;
  }

  .input-group {
    position: relative;
    border: none;
  }

  .input-bar {
    margin-bottom: 8px;
    border-radius: 5px;
    border: 1px solid #d5d5d5;
    background: #f1f3f4;
    padding: 0 40px 0 20px;
    outline: none;
    width: 100%;
    height: 42px;

    ::placeholder {
      font-size: 14px;
      font-weight: 400;
      font-family: "Hind", sans-serif;
    }

    :focus-within {
      background: #f1f3f4;
      border: 1px solid #25304b;
      border-radius: 5px;
    }
  }

  .show-passw {
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
    position: absolute;
    top: 62px;
    right: 16px;
  }

  .form-actions {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    height: 40px;
  }

  .login-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
    width: 100px;
    height: 100%;
    cursor: pointer;
    background: #25304b;
    color: #fff;
    border-radius: 5px;
    border: none;
    font-family: "Hind", sans-serif;
    font-size: 14px;
    font-weight: 400;

    :hover {
      background: #3d455d;
    }

    span {
      margin-left: 5px;
    }
  }

  .icon {
    height: 17px;
    width: 17px;
  }

  .reset-passw {
    font-weight: 400;
    font-size: 14px;
    margin: 10px 0 20px 0;
  }

  .reset-link {
    :hover {
      text-decoration: underline;
      color: #d22626;
    }
  }

  .form-links {
    display: flex;
    justify-content: space-between;
    width: 80%;
    text-decoration: underline;
    font-size: 14px;
    font-weight: 400;
    color: #000;
  }
`;
