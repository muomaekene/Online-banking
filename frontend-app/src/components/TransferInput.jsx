import styled from "styled-components";

const InputBar = ({ icon, placeholder }) => {
  return (
    <Wrap>
      <span>{icon}</span>
      <input
        name="amount"
        className="input"
        placeholder={placeholder}
        type="number"
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

  span {
    position: absolute;
    left: 15px;
    font-weight: 500;
    font-size: 13px;
    color: ${({ theme }) => theme.palette.altText};
  }

  .input {
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    padding: 0 30px;
    background: none;
    font-family: inherit;
    font-size: 12px;
    font-weight: 300;
    color: ${({ theme }) => theme.palette.text};
    border: 1px solid transparent;

    ::placeholder {
      color: ${({ theme }) => theme.palette.altText};
      font-size: 12px;
      text-transform: capitalize;
    }

    :focus-within {
      border: 1px solid ${({ theme }) => theme.palette.focus};
      background: ${({ theme }) => theme.palette.main};
      border-radius: ${({ theme }) => theme.borderRadius[0]};
    }

    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;
