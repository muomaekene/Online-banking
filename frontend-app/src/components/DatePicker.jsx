import { useState } from "react";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";

import styled from "styled-components";

const DatePicker = () => {
  const [dateValue, setDateValue] = useState("yyyy-mm-dd");

  return (
    <Container>
      <p>{dateValue}</p>

      <div className="datepicker-toggle">
        <span className="datepicker-toggle-button">
          <CalendarDaysIcon width="20" />
        </span>
        <input
          type="date"
          className="datepicker-input"
          onChange={(e) => setDateValue(e.target.value)}
        />
      </div>
    </Container>
  );
};

export default DatePicker;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  height: 45px;
  border: 1px solid ${({ theme }) => theme.palette.border};
  border-radius: ${({ theme }) => theme.borderRadius[1]};

  p {
    font-size: 12px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    border-radius: 10px;
    height: 100%;
    width: 100%;
    background: ${({ theme }) => theme.palette.main};
  }

  .datepicker-toggle {
    display: inline-block;
    position: relative;
    width: 18px;
    height: 19px;
  }

  .datepicker-toggle-button {
    position: absolute;
    left: -12px;
    top: 0;
    width: 100%;
    height: 100%;
  }

  .datepicker-input {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
    box-sizing: border-box;
  }

  .datepicker-input::-webkit-calendar-picker-indicator {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    cursor: pointer;
  }
`;
