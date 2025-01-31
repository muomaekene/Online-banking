import { useState } from "react";

import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

import styled from "styled-components";

const Select = ({ placeholder, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const toggler = () => {
    setIsOpen(!isOpen);
  };

  const onOptionClicked = (value) => () => {
    setSelected(value);
    setIsOpen(false);
  };

  return (
    <Container>
      <button className="select-header" onClick={toggler}>
        <span>{selected || placeholder}</span>
        <>
          {isOpen ? (
            <ChevronUpIcon className="icon" />
          ) : (
            <ChevronDownIcon className="icon" />
          )}
        </>
      </button>
      {isOpen && (
        <ul className="select-options">
          {options.map((option) => (
            <li
              onClick={onOptionClicked(option)}
              key={Math.random()}
              className="select-option"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
};

export default Select;

const Container = styled.div`
  position: relative;
  width: 100%;

  .select-header {
    z-index: 666;
    width: 100%;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    font-weight: 500;
    border-radius: ${({ theme }) => theme.borderRadius[0]};
    border: 1px solid ${({ theme }) => theme.palette.border};
    background: ${({ theme }) => theme.palette.main};
    color: ${({ theme }) => theme.palette.text};
    font-size: ${({ theme }) => theme.typography.main.fontSize[1]};
    cursor: pointer;
    z-index: 666;

    :active {
      background: ${({ theme }) => theme.palette.focus};
    }
  }

  .select-options {
    position: absolute;
    background: ${({ theme }) => theme.palette.main};
    border-radius: ${({ theme }) => theme.borderRadius[0]};
    border: 1px solid ${({ theme }) => theme.palette.border};
    width: 100%;
    list-style-type: none;
    font-size: ${({ theme }) => theme.typography.main.fontSize[1]};
    margin-top: 10px;
    z-index: 667;
    /* padding: 10px 0; */
  }

  .select-option {
    padding-left: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    text-transform: capitalize;
    font-weight: 500;
    color: ${({ theme }) => theme.palette.text};
    cursor: pointer;

    :hover {
      background: ${({ theme }) => theme.palette.secondary};
      color: ${({ theme }) => theme.palette.text};
    }
  }

  .icon {
    width: 12px;
    height: 12px;
    color: inherit;
  }
`;
