import DebitCard from "./DebitCard";

import styled from "styled-components";

const VirtualCards = () => {
  return (
    <Section>
      <DebitCard />
      <div className="card-details">Some other details about card</div>
    </Section>
  );
};

export default VirtualCards;

const Section = styled.section`
  .card-details {
    height: 2.5rem;
    background: ${({ theme }) => theme.palette.primary};
    border-radius: 10px;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    font-size: 12px;
  }
`;
