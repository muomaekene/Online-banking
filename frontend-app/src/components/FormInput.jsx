import styled from "styled-components";

const FormInput = ({ inputs }) => {
  return <Input type={inputs.type} placeholder={inputs.placeholder} />;
};

export default FormInput;

const Input = styled.input`
  font-family: inherit;
  padding: 0 ${({ theme }) => theme.spacing(2)};
  height: 40px;
  border-radius: 10px;
  background: none;
  border: 1px solid ${({ theme }) => theme.palette.border};
  outline: none;

  :focus-within {
    border: 1px solid ${({ theme }) => theme.palette.solid};
    background: none;
  }

  ::placeholder {
    font-size: 12px;
  }
`;
