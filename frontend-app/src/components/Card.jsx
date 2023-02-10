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
  background: rgb(102, 195, 34);
  background: linear-gradient(
    0deg,
    rgba(102, 195, 34, 1) 0%,
    rgba(21, 101, 192, 1) 58%
  );
  color: #fff;
  height: 9.5rem;
  width: 100%;
  border-radius: 15px;
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
