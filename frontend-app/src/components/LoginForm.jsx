import { useState } from "react";
import { Link } from "react-router-dom";

import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { LoginRounded } from "@mui/icons-material";

import Logo from "../components/Logo";
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
      <div className="brand">
        <Logo />
      </div>
      <>
        <fieldset className="form-group">
          <legend className="form-header">e-Banking login</legend>
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

        <div className="form-actions">
          <p className="reset-passw">
            <Link to="#" className="reset-link">
              Forgot password?
            </Link>
          </p>
          <CustomBtn title="Login">
            <LoginRounded style={{ fontSize: "15px", marginRight: "2px" }} />
          </CustomBtn>
        </div>
      </>

      <div className="bottom-links">
        <Link to="/create-account" className="link">
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
  width: 320px;
  height: 22rem;
  padding: 25px 25px;
  border: 1px solid ${({ theme }) => theme.palette.border};
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
    margin-bottom: 4rem;
  }

  .form-header {
    font-size: ${({ theme }) => theme.typography.main.fontSize[1]};
    font-weight: ${({ theme }) => theme.typography.main.fontWeight[1]};
    margin-bottom: ${({ theme }) => theme.spacing(1)};
    color: ${({ theme }) => theme.palette.text};
  }

  .form-group {
    position: relative;
    border: none;
  }

  .input-bar {
    margin-bottom: 8px;
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
    top: 60px;
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
    width: 80%;
    font-weight: ${({ theme }) => theme.typography.main.fontWeight[0]};
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
