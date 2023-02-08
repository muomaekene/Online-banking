import { Link } from "react-router-dom";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";

import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <form action="" className="login-form">
        <div className="login-top">
          <img
            className="image"
            src="https://www.cunj.com/wpcms/wp-content/themes/cunj/images/ocblogo.png"
          />
        </div>
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
          <Link to="/signup">Open bank account</Link>
          <Link to="/signup">Learn more</Link>
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
  font-family: "Urbanist", sans-serif;
  color: #717171;
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
    width: 340px;
    padding: 40px 25px;
    background: none;
    border-radius: 10px;
    background-color: #fff;
  }

  .login-top {
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
  }

  .form-label {
    margin: 5px 0;
    font-size: 15px;
  }

  .input-bar {
    border-radius: 20px;
    padding: 12px 20px;
    border: 1px solid #25304b;
    margin-bottom: 10px;
    outline: none;

    ::placeholder {
      font-size: 14px;
      font-weight: 500;
      font-family: "Urbanist", sans-serif;
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
    transition: all 0.5s ease;

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
    color: #25304b;

    :hover {
      text-decoration: underline;
    }
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    width: 80%;
    text-decoration: underline;
    font-size: 14px;
  }
`;
