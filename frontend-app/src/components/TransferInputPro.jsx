import styled from "styled-components";

const TransferInputPro = ({ labelTxt, placeholderTxt, regex }) => {
  return (
    <Container>
      <label>{labelTxt}</label>
      <input type="text" placeholder={placeholderTxt} pattern={regex} />
    </Container>
  );
};

export default TransferInputPro;

const Container = styled.div`
  border: 1px solid ${({ theme }) => theme.palette.border};
  border-radius: ${({ theme }) => theme.borderRadius[0]};
  padding: 10px 15px;
  cursor: pointer;

  :focus-within {
    background: ${({ theme }) => theme.palette.focus};
  }

  label {
    font-size: ${({ theme }) => theme.typography.main.fontSize[1]};
    font-weight: ${({ theme }) => theme.typography.main.fontWeight[1]};
    color: ${({ theme }) => theme.palette.altText};
  }

  input {
    border: none;
    outline: none;
    width: 100%;
    background: none;
    color: ${({ theme }) => theme.palette.text};
    font-size: ${({ theme }) => theme.typography.main.fontSize[1]};

    ::placeholder {
      color: ${({ theme }) => theme.palette.text};
    }
  }
`;
