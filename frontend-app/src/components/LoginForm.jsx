import { useState } from "react";
import { Link } from "react-router-dom";

import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { LoginRounded } from "@mui/icons-material";

import Logo from "../components/Logo";
import ActionBtn from "./ActionBtn";

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
    <Form>
      <div className="brand">
        <Logo />
      </div>

      <div>
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

          <ActionBtn
            icon={
              <LoginRounded style={{ fontSize: "15px", marginRight: "2px" }} />
            }
            title="Login"
          />
        </div>
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
  flex-direction: column;
  justify-content: space-around;
  width: 320px;
  height: 22rem;
  padding: 40px 25px;
  border: 1px solid ${({ theme }) => theme.secondary};
  border-radius: 10px;
  position: absolute;
  left: 0;
  right: 0;
  top: 50px;
  margin-right: auto;
  margin-left: auto;

  .brand {
    display: flex;
    justify-content: center;
  }

  .caption {
    font-size: 15px;
    font-weight: 500;
    margin-bottom: 7px;
    color: ${({ theme }) => theme.text};
  }

  .input-group {
    position: relative;
    border: none;
  }

  .input-bar {
    margin-bottom: 8px;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.secondary};
    background: none;
    padding: 0 40px 0 20px;
    outline: none;
    width: 100%;
    height: 42px;

    ::placeholder {
      font-size: 13px;
      font-weight: 400;
      font-family: "Figtree", sans-serif;
    }

    :focus-within {
      background: #f8f8f8;
      border: 1px solid ${({ theme }) => theme.solid};
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
    align-items: center;
    align-content: center;
    justify-content: space-between;
  }

  .icon {
    height: 17px;
    width: 17px;
  }

  .reset-passw {
    font-weight: 400;
    font-size: 13px;
    color: ${({ theme }) => theme.text};
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
    font-size: 13px;
    font-weight: 400;
  }
`;
