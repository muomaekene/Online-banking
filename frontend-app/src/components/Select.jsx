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
        <p className="select-title">{selected || placeholder}</p>
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
            <li key={Math.random()} className="select-option">
              <button
                className="select-option-btn"
                onClick={onOptionClicked(option)}
              >
                {option}
              </button>
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

  .select-header {
    z-index: 666;
    width: 100%;
    height: 45px;
    display: flex;
    align-items: center;
    padding: 2px 12px;
    border-radius: ${({ theme }) => theme.borderRadius[0]};
    background: ${({ theme }) => theme.palette.main};
    color: ${({ theme }) => theme.palette.text};
    border: 1px solid ${({ theme }) => theme.palette.border};
    font-size: 12px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    z-index: 666;
  }

  .select-title {
    font-size: inherit;
    font-weight: 500;
    text-transform: capitalize;
  }

  .select-options {
    position: absolute;
    background: ${({ theme }) => theme.palette.main};
    border-radius: ${({ theme }) => theme.borderRadius[0]};
    border: 1px solid ${({ theme }) => theme.palette.border};
    width: 100%;
    list-style-type: none;
    padding: 8px 0 5px 0;
    font-size: 12px;
    font-weight: 500;
    margin-top: 5px;
    z-index: 667;
  }

  .select-option {
    cursor: pointer;
  }

  .select-option-btn {
    background: none;
    border: none;
    padding: 8px 12px;
    color: ${({ theme }) => theme.palette.altText};
    font-weight: 400;
    width: 100%;
    display: flex;
    font-size: 12px;

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
