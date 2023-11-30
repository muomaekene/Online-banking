import styled from "styled-components";

const SignupInput = (props) => {
  const { handleChange, type, name, value, ...others } = props;

  return (
    <Input
      type={type}
      name={name}
      value={value || ""}
      onChange={handleChange}
      {...others}
    />
  );
};

export default SignupInput;

const Input = styled.input`
  padding: 0 ${({ theme }) => theme.spacing(2)};
  height: 40px;
  border-radius: 2px;
  border: 1px solid ${({ theme }) => theme.palette.border};
  background: ${({ theme }) => theme.palette.main};
  outline: none;

  ::placeholder {
    font-size: 12px;
  }

  :focus-within {
    border: 1px solid ${({ theme }) => theme.palette.solid};
    background: ${({ theme }) => theme.palette.main};
  }

  :invalid {
    border: 1px solid red;
  }
`;
