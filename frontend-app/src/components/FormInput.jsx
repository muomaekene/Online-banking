import styled from "styled-components";

const FormInput = ({ inputs }) => {
  return <Input type={inputs.type} placeholder={inputs.placeholder} />;
};

export default FormInput;

const Input = styled.input`
  font-family: inherit;
  padding: 10px 15px;
  border-radius: 5px;
  background: #f1f3f4;
  border: 1px solid #e5e5e5;
  outline: none;

  :focus-within {
    background: #f9f8f8;
    border: 1px solid #25304b;
    border-radius: 5px;
  }

  ::placeholder {
    font-size: 14px;
  }
`;
