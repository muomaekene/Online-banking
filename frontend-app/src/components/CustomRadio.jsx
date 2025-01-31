import React from "react";
import styled from "styled-components";

const CustomRadio = ({ labelTitle }) => {
  return (
    <Label>
      <input
        type="radio"
        id="debit-card"
        name="radio"
        value="debit-card"
        checked
      />
      {labelTitle}
    </Label>
  );
};

export default CustomRadio;

const Label = styled.label`
  font-weight: ${({ theme }) => theme.typography.main.fontWeight[2]};
  display: flex;
  align-items: center;
  gap: 10px;

  input[type="radio"] {
    /* Add if not using autoprefixer */
    -webkit-appearance: none;
    appearance: none;
    /* For iOS < 15 to remove gradient background */
    background-color: transparent;
    /* Not removed via appearance */
    margin: 0;
    font: inherit;
    width: 1.4em;
    height: 1.4em;
    border: 1px solid gray;
    border-radius: 50%;
    transform: translateY(-0.075em);
    display: grid;
    place-content: center;
  }

  input[type="radio"]::before {
    content: "";
    width: 0.7em;
    height: 0.7em;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em ${({ theme }) => theme.palette.link};
  }

  input[type="radio"]:checked::before {
    transform: scale(1);
  }

  input[type="radio"]:checked {
    border: 1px solid ${({ theme }) => theme.palette.link};
  }
`;
