import styled from "styled-components";

const FormInput = ({ inputs }) => {
  return <Input type={inputs.type} placeholder={inputs.placeholder} />;
};

export default FormInput;

const Input = styled.input`
  font-family: inherit;
  padding: 12px 15px;
  border-radius: 5px;
  background: none;
  border: 1px solid ${({ theme }) => theme.secondary};
  outline: none;

  :focus-within {
    background: #f9f8f8;
    border: 1px solid ${({ theme }) => theme.solid};
    border-radius: 5px;
  }

  ::placeholder {
    font-size: 13px;
  }
`;
