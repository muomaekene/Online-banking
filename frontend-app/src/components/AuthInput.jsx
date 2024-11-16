import styled from "styled-components";

const AuthInput = (props) => {
  const { name, type, placeholder, value, handleChange } = props;

  return (
    <Input
      name={name}
      type={type}
      placeholder={placeholder}
      value={value || ""}
      onChange={handleChange}
    />
  );
};

export default AuthInput;

const Input = styled.input`
  padding: 0 ${({ theme }) => theme.spacing(2)};
  height: 45px;
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius[0]};
  border: 1px solid ${({ theme }) => theme.palette.border};
  background: ${({ theme }) => theme.palette.main};
  outline: none;

  ::placeholder {
    font-size: ${({ theme }) => theme.typography.main.fontSize[1]};
    text-transform: capitalize;
  }

  :focus-within {
    border: 1px solid ${({ theme }) => theme.palette.focus};
    background: ${({ theme }) => theme.palette.main};
    border-radius: ${({ theme }) => theme.borderRadius[0]};
  }

  :invalid {
    border: 1px solid red;
  }
`;
