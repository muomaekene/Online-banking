import visaCard from "../assets/img/visaCard.png";

import styled from "styled-components";

const Cards = () => {
  return (
    <Container>
      <img className="card-logo" src={visaCard} alt="visa-logo" />
      <p className="card-number">6574 &nbsp; 7584 &nbsp; 8743 &nbsp; 0595</p>
      <div className="card-bottom">
        <p>Robbin Eckert</p>
        <p className="exp-date">12/25</p>
        <p>CVV &nbsp;***</p>
      </div>
    </Container>
  );
};

export default Cards;

const Container = styled.div`
  background: #1565c0;
  color: #fff;
  height: 9.5rem;
  width: 100%;
  border-radius: 15px;
  margin-bottom: 8px;
  font-family: "Outfit", sans-serif;
  cursor: pointer;
  font-weight: 400;

  .card-logo {
    width: 60px;
    height: 60px;
    margin-left: 10px;
  }

  .card-number {
    margin-left: 20px;
    font-size: 16px;
  }

  .card-bottom {
    display: flex;
    margin: 25px 0 0 20px;
    font-size: 13px;
  }

  .exp-date {
    margin: 0 20px;
  }
`;
