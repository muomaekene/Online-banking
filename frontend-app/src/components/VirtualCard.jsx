import masterCard from "../assets/images/masterCard.png";

import styled from "styled-components";

const VirtualCard = () => {
  return (
    <Container>
      <div className="card-body">
        <div className="group-item-top">
          <p>Debit</p>
          <img className="card-logo" src={masterCard} alt="visa-logo" />
        </div>
        <div className="group-item-bottom">
          <p className="card-no">**** **** **** 6684</p>
          <i>375</i>
        </div>
      </div>

      <div className="card-band">
        <div>
          <p>Card bal.</p>
          <p className="figure">$1 628.31</p>
        </div>
        <div>
          <p>Expiry date</p>
          <p className="figure">10/22</p>
        </div>
      </div>
    </Container>
  );
};

export default VirtualCard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #fff;
  height: 11rem;
  width: 100%;
  cursor: pointer;
  font-weight: 400;
  padding-bottom: 15px;
  border-radius: 15px;
  background: #fc466b;
  background: -webkit-linear-gradient(to right, #3f5efb, #fc466b);
  background: linear-gradient(to right, #3f5efb, #fc466b);

  p {
    color: ${({ theme }) => theme.palette.active};
  }

  .card-body {
    height: 65%;
    display: flex;
    flex-direction: column;
  }

  .group-item-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    font-size: 13px;
    margin-bottom: 20px;
  }

  .group-item-bottom {
    display: flex;
    justify-content: space-around;

    i {
      font-size: 13px;
    }
  }

  .card-logo {
    width: 55px;
    height: 55px;
  }
  .card-no {
    font-size: 14px;
    letter-spacing: 1px;
  }

  .card-band {
    font-size: 12px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;

    .figure {
      font-size: 13px;
    }
  }
`;
