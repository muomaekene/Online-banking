import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import VirtualCard from "./VirtualCard";

import styled from "styled-components";

const VirtualCards = () => {
  return (
    <Section>
      <div className="arrow-left">
        <ChevronLeft className="icon" />
      </div>
      <VirtualCard />
      <div className="arrow-right">
        <ChevronRight className="icon" />
      </div>

      <button className="card-btn">
        <span>+</span>Create New Card
      </button>
    </Section>
  );
};

export default VirtualCards;

const Section = styled.section`
  position: relative;

  .card-btn {
    height: 3rem;
    width: 100%;
    color: ${({ theme }) => theme.palette.text};
    border-radius: 10px;
    border-radius: ${({ theme }) => theme.button.radius};
    border: none;
    background: ${({ theme }) => theme.palette.main};
    margin: ${({ theme }) => theme.border.margin} 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    font-weight: 400;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
      rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;

    :active {
      background: ${({ theme }) => theme.palette.secondary};
      background-size: 100%;
      border: none;
    }

    span {
      margin-right: 5px;
      font-size: 16px;
    }
  }

  .icon {
    width: 20px;
    height: 20px;
    color: white;
  }

  .arrow-left {
    background-color: rgba(0, 0, 0, 0.3);
    position: absolute;
    height: 2rem;
    display: flex;
    align-items: center;
    top: 25%;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    cursor: pointer;
  }

  .arrow-right {
    background-color: rgba(0, 0, 0, 0.3);
    position: absolute;
    height: 2rem;
    right: 0;
    top: 25%;
    display: flex;
    align-items: center;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    cursor: pointer;
  }
`;
