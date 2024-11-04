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
        <span>+</span>Add New Card
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
    border-radius: ${({ theme }) => theme.borderRadius[0]};
    border: 1px solid ${({ theme }) => theme.palette.border};
    margin: ${({ theme }) => theme.spacing(2)} 0;
    background: ${({ theme }) => theme.palette.main};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    font-weight: 400;
    cursor: pointer;

    :hover {
      border: 1px solid ${({ theme }) => theme.palette.border};
    }

    :active {
      background: ${({ theme }) => theme.palette.focus};
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
