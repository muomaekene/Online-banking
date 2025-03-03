import styled from "styled-components";

const InputBar = ({ placeholder }) => {
  return (
    <Wrap>
      <input
        name="amount"
        className="input"
        placeholder={placeholder}
        type="tel"
      />
    </Wrap>
  );
};

export default InputBar;

const Wrap = styled.div`
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius[0]};
  height: 45px;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.palette.main};
  position: relative;
  border: 1px solid ${({ theme }) => theme.palette.border};

  .input {
    width: 100%;
    height: 100%;
    outline: none;
    padding: 0 10px;
    background: none;
    font-family: inherit;
    font-size: ${({ theme }) => theme.typography.main.fontSize[1]};
    font-weight: ${({ theme }) => theme.typography.main.fontWeight[1]};
    color: ${({ theme }) => theme.palette.text};
    border: 1px solid transparent;

    ::placeholder {
      color: ${({ theme }) => theme.palette.text};
      font-size: 12px;
    }

    :focus-within {
      background: ${({ theme }) => theme.palette.focus};
    }

    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;
