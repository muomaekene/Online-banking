import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Heading from "./Heading";
import VirtualCard from "./VirtualCard";

import styled from "styled-components";

const VirtualCards = () => {
  return (
    <Section>
      <div className="actions">
        <Heading>Cards</Heading>
        <p>
          <Link to="/cards">+ Manage cards</Link>
        </p>
      </div>
      <button className="arrow-left">
        <ChevronLeft className="icon" />
      </button>
      <VirtualCard />
      <button className="arrow-right">
        <ChevronRight className="icon" />
      </button>
    </Section>
  );
};

export default VirtualCards;

const Section = styled.section`
  position: relative;
  margin-bottom: 15px;

  .actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;

    > p {
      cursor: pointer;
      text-decoration: underline;
      font-weight: ${({ theme }) => theme.typography.main.fontWeight[1]};
    }
  }

  .icon {
    width: 20px;
    height: 20px;
    color: white;
  }

  button {
    background-color: rgba(0, 0, 0, 0.3);
    position: absolute;
    height: 2rem;
    display: flex;
    align-items: center;
    top: 50%;
    cursor: pointer;
    border: none;
  }
  .arrow-left {
    position: absolute;
    top: 50%;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  .arrow-right {
    background-color: rgba(0, 0, 0, 0.3);
    position: absolute;
    height: 2rem;
    right: 0;
    top: 50%;
    display: flex;
    align-items: center;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    cursor: pointer;
  }
`;
