import masterCard from "../assets/images/masterCard.png";
import More from "./More";

import styled from "styled-components";

const DebitCard = () => {
  return (
    <Container>
      <div className="card-body">
        <div className="group-item">
          <p>Debit</p>
          <More />
        </div>

        <div className="group-item">
          <img className="card-logo" src={masterCard} alt="visa-logo" />
          <p>
            <i>917</i>
          </p>
          <p className="card-no">8834 ****</p>
        </div>
      </div>

      <div className="card-band">
        <div>
          <p>Card balance</p>
          <p>$13 528.31</p>
        </div>
        <div>
          <p>Expiry date</p>
          <p>10/26</p>
        </div>
      </div>
    </Container>
  );
};

export default DebitCard;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #fff;
  height: 9.6rem;
  width: 100%;
  cursor: pointer;
  font-weight: 400;
  margin-bottom: 15px;

  .card-body {
    background: rgb(46, 104, 154);

    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    height: 65%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .group-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    font-size: 12px;
  }

  .card-logo {
    width: 40px;
    height: 40px;
  }
  .card-no {
    font-size: 14px;
    letter-spacing: 1px;
  }

  .card-band {
    background: ${({ theme }) => theme.palette.primary};
    color: ${({ theme }) => theme.palette.altText};
    font-weight: 500;
    height: 35%;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
    padding: 0 20px;
  }
`;
