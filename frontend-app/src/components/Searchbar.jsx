import { useState } from "react";

import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";

import styled from "styled-components";

const Searchbar = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <button className="icon-wrap">
        <MagnifyingGlassIcon className="icon" />
      </button>
      <input
        className="input-bar"
        type="text"
        placeholder="Search dashboard"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      {inputValue && (
        <XMarkIcon className="clear-input" onClick={() => setInputValue("")} />
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

  .icon-wrap {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: ${({ theme }) => theme.spacing(0)};
    color: ${({ theme }) => theme.palette.text};
    background: none;
    border: none;
    transition: 0.3ms ease all;

    :hover {
      padding: ${({ theme }) => theme.spacing(0)};
      border-radius: 50%;
      background: ${({ theme }) => theme.palette.primary};
    }

    :active {
      background: ${({ theme }) => theme.palette.secondary};
    }
  }

  .input-bar {
    padding: 0 ${({ theme }) => theme.spacing(0)};
    font-weight: ${({ theme }) => theme.typography.main.fontWeight[0]};
    font-size: ${({ theme }) => theme.typography.main.fontSize[1]};
    color: ${({ theme }) => theme.palette.text};
    width: calc(100% - 50px);
    background: none;
    border: none;
    outline: none;
    display: flex;

    ::placeholder {
      color: ${({ theme }) => theme.palette.text};
    }
  }

  .clear-input {
    cursor: pointer;
    position: absolute;
    right: 15px;
    width: 18px;
    height: 18px;
  }
`;

export default Searchbar;
