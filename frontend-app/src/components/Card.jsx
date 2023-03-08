import masterCard from "../assets/img/masterCard.png";

import styled from "styled-components";

const Cards = () => {
  return (
    <Container>
      <img className="card-logo" src={masterCard} alt="visa-logo" />
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
  background: linear-gradient(0deg, rgba(102, 195, 34, 1) 0%, #0eb69d 58%);
  color: #fff;
  height: 9.4rem;
  width: 100%;
  border-radius: 15px;
  cursor: pointer;
  font-weight: 400;
  margin-bottom: 10px;
  margin-top: 5px;

  .card-logo {
    width: 50px;
    height: 50px;
    margin-left: 15px;
    margin-top: 5px;
  }

  .card-number {
    margin-top: 10px;
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
