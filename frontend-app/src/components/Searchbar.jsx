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
  padding: 0 10px;
  border: 1px solid ${({ theme }) => theme.secondary};
  background: ${({ theme }) => theme.main};
  border-radius: 10px;

  :focus-within {
    background: ${({ theme }) => theme.primary};
    border-radius: 10px;
    box-shadow: none;
    border: 1px solid ${({ theme }) => theme.primary};
  }

  .icon-nowrap {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 5px;

    :hover {
      padding: 5px;
      border-radius: 50%;
      background: ${({ theme }) => theme.primary};
    }
  }

  .input-bar {
    padding: 0px 5px;
    background: none;
    border: none;
    outline: none;
    width: calc(100% - 24px);
    font-weight: 500;
    font-size: 14px;
    color: ${({ theme }) => theme.text};

    ::placeholder {
      color: ${({ theme }) => theme.text};
      font-size: 14px;
      letter-spacing: 0;
      font-family: "Figtree", sans-serif;
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
