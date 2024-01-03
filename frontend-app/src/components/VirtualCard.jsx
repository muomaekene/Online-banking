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
          <p className="card-no">5102 6684 ****</p>
        </div>
      </div>

      <div className="card-band">
        <div>
          <p>Card balance</p>
          <p>$3 528.31</p>
        </div>
        <div>
          <p>Expiry date</p>
          <p>10/24</p>
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
  height: 10rem;
  width: 100%;
  cursor: pointer;
  font-weight: 400;

  .card-body {
    background: rgb(46, 104, 154);
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    height: 65%;
    display: flex;
    flex-direction: column;
  }

  .group-item-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    font-size: 12px;
    margin-bottom: 20px;
  }

  .group-item-bottom {
    display: flex;
    justify-content: center;
  }

  .card-logo {
    width: 40px;
    height: 40px;
  }
  .card-no {
    font-size: 12px;
    letter-spacing: 1px;
  }

  .card-band {
    background: ${({ theme }) => theme.palette.primary};
    color: ${({ theme }) => theme.palette.altText};
    font-weight: 500;
    font-size: 12px;
    height: 35%;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
  }
`;
