import { useState } from "react";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Clear } from "@mui/icons-material";

import styled from "styled-components";

const Searchbar = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <Form>
      <div className="icon-nowrap">
        <MagnifyingGlassIcon className="icon" />
      </div>
      <input
        className="input-bar"
        type="text"
        placeholder="Search dashboard"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      {inputValue && (
        <Clear className="clear-input" onClick={() => setInputValue("")} />
      )}
    </Form>
  );
};

const Form = styled.form`
  position: relative;
  width: 50%;
  height: 80%;
  display: flex;
  align-items: center;
  padding: 0 ${({ theme }) => theme.spacing(1)};
  background: ${({ theme }) => theme.palette.primary};
  border-radius: 10px;

  :focus-within {
    background: ${({ theme }) => theme.palette.secondary};
  }

  .icon-nowrap {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: ${({ theme }) => theme.spacing(0)};

    :hover {
      padding: ${({ theme }) => theme.spacing(0)};
      border-radius: 50%;
      background: ${({ theme }) => theme.palette.primary};
    }
  }

  .input-bar {
    padding: 0 ${({ theme }) => theme.spacing(0)};
    font-weight: ${({ theme }) => theme.typography.main.fontWeight[0]};
    font-size: ${({ theme }) => theme.typography.main.fontSize[1]};
    color: ${({ theme }) => theme.palette.text};
    width: calc(100% - 24px);
    background: none;
    border: none;
    outline: none;

    ::placeholder {
      color: ${({ theme }) => theme.palette.text};
      font-family: ${({ theme }) => theme.typography.main.fontFamily};
    }
  }

  .clear-input {
    cursor: pointer;
    font-size: 20px;
    position: absolute;
    right: 15px;
  }
`;

export default Searchbar;
