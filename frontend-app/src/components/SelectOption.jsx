import Option from "./Option";

import styled from "styled-components";

const SelectOption = ({ data }) => {
  return (
    <Container>
      <label className="select-wrap">
        <select className="select">
          {data.map((item) => (
            <Option key={item.id} name={item.name} value={item.value} />
          ))}
        </select>
      </label>
    </Container>
  );
};

export default SelectOption;

const Container = styled.div`
  .select-wrap {
    position: relative;
  }

  .select {
    width: 100%;
    height: 40px;
    padding: 2px 12px;
    font-size: 13px;
    font-family: inherit;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.altText};
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
    cursor: pointer;
    background: none;
  }

  .select-wrap:after {
    content: "<>";
    font: 11px "Consolas", monospace;
    color: ${({ theme }) => theme.altText};
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    transform: rotate(90deg);
    right: 15px;
    top: 6px;
    padding: 0 0 2px;
    position: absolute;
    pointer-events: none;
  }

  .select-wrap:before {
    content: "";
    right: 6px;
    top: 0px;
    width: 20px;
    height: 20px;
    background: none;
    position: absolute;
    pointer-events: none;
    display: block;
  }
`;
