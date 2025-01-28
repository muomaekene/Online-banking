import { useState } from "react";
import styled from "styled-components";

const SelectPro = ({ options, labelTxt }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(undefined);

  const onOptionClicked = (option) => {
    setSelectedItem(option);
    setIsOpen(false);
  };

  return (
    <Wrapper>
      <div
        className="select-btn"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <label className="select-title">{labelTxt}</label>

        <p>{selectedItem?.account || "Select account"}</p>
        <p>{selectedItem?.balance}</p>
      </div>

      {isOpen && (
        <ul className="select-options">
          {options.map((option) => (
            <li
              key={Math.random()}
              className="select-option"
              onClick={() => onOptionClicked(option)}
            >
              {option.account} <br />
              {option.balance}
            </li>
          ))}
        </ul>
      )}
    </Wrapper>
  );
};

export default SelectPro;

const Wrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.palette.border};
  border-radius: ${({ theme }) => theme.borderRadius[0]};
  padding: 10px 15px;
  cursor: pointer;

  :active {
    background: ${({ theme }) => theme.palette.focus};
  }

  .select-btn {
    border: none;
    text-align: left;
    width: 100%;
    cursor: pointer;
  }

  .select-title {
    font-size: ${({ theme }) => theme.typography.main.fontSize[1]};
    font-weight: ${({ theme }) => theme.typography.main.fontWeight[1]};
    color: ${({ theme }) => theme.palette.altText};
  }

  .select-options {
    background: none;
    width: fit-content;
    list-style-type: none;
    font-size: ${({ theme }) => theme.typography.main.fontSize[1]};
    z-index: 667;
    padding-top: 5px;
  }

  .select-option {
    padding-bottom: 5px;
    padding-top: 5px;
    text-transform: capitalize;
    color: ${({ theme }) => theme.palette.text};
    cursor: pointer;
    font-weight: ${({ theme }) => theme.typography.main.fontWeight[1]};
    font-size: ${({ theme }) => theme.typography.main.fontSize[1]};

    :hover {
      background: ${({ theme }) => theme.palette.secondary};
      color: ${({ theme }) => theme.palette.text};
    }
  }
`;
