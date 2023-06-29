import ErrorMsg from "./ErrorMsg";

import styled from "styled-components";

const SignupInput = (props) => {
  const { handleChange, errors, type, name, value, ...others } = props;

  return (
    <Container>
      <input
        {...others}
        type={type}
        name={name}
        value={value || ""}
        onChange={handleChange}
      />
      {errors[name] && <ErrorMsg message={errors[name]} />}
    </Container>
  );
};

export default SignupInput;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  input {
    padding: 0 ${({ theme }) => theme.spacing(2)};
    height: 40px;
    border-radius: 10px;
    background: white;
    border: 1px solid ${({ theme }) => theme.palette.border};
    outline: none;

    ::placeholder {
      font-size: 12px;
    }

    :focus-within {
      border: 1px solid ${({ theme }) => theme.palette.solid};
      background: none;
    }

    :invalid {
      border: 1px solid #e64848;
    }
  }
`;
