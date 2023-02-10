import { Link } from "react-router-dom";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";

import styled from "styled-components";
import Logo from "../components/Logo";

const Login = () => {
  return (
    <Container>
      <form action="" className="login-form">
        <div className="login-top">
          <Logo />
        </div>
        <h2 className="title">e-Banking login</h2>
        <input className="input-bar" type="email" placeholder="Email" />
        <input className="input-bar" type="password" placeholder="Password" />
        <Link to="/overview" className="login">
          <button className="login-btn">
            <ArrowRightOnRectangleIcon className="login-icon" />
            Login
          </button>
        </Link>

        <p className="reset-passw">
          <Link to="#" className="reset-link">
            Reset password
          </Link>
        </p>

        <div className="bottom">
          <Link to="/create-account">Open bank account</Link>
          <Link to="#">Learn more</Link>
        </div>
      </form>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Hind", sans-serif;
  color: #25304b;
  font-weight: 500;
  height: 100vh;
  width: 100vw;
  background: #25304b;

  a {
    text-decoration: none;
    color: inherit;

    &:focus,
    &:visited,
    &:link,
    &:active {
      text-decoration: none;
    }
  }

  .login-form {
    background: lightgray;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 320px;
    padding: 40px 25px;
    background: none;
    border-radius: 10px;
    background-color: #fff;
  }

  .login-top {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
  }

  .title {
    font-size: 17px;
    font-weight: 500;
    margin-bottom: 5px;
  }

  .form-label {
    margin: 5px 0;
    font-size: 15px;
  }

  .input-bar {
    border-radius: 20px;
    padding: 12px 20px;
    margin-bottom: 10px;
    background: #e3e3e3;
    border: 1.5px solid transparent;
    outline: none;

    :focus-within {
      background: #fff;
      border: 1.5px solid #25304b;
      border-radius: 20px;
    }

    ::-webkit-input-placeholder {
      font-size: 14px;
      font-weight: 500;
      font-family: "Hind", sans-serif;
    }
  }

  .image {
    width: 40px;
  }

  .login {
    width: 110px;
    height: 40px;
  }
  .login-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px 20px;
    width: 110px;
    cursor: pointer;
    background: #25304b;
    color: #fff;
    border-radius: 50px;
    border: none;
    font-family: "Hind", sans-serif;
    font-size: 14px;

    :hover {
      background: #3d455d;
    }
  }

  .login-icon {
    height: 17px;
    width: 17px;
    margin-right: 5px;
  }

  .reset-passw {
    font-size: 14px;
    margin: 10px 0 20px 0;
  }

  .reset-link {
    :hover {
      text-decoration: underline;
      color: #d22626;
    }
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    width: 80%;
    text-decoration: underline;
    font-size: 14px;
    color: #25304b;
  }
`;
