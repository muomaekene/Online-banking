import paypal from "../assets/images/paypal.svg";
import visaCard from "../assets/images/visaCard.svg";
import masterCard from "../assets/images/masterCard.svg";
import discoverCard from "../assets/images/discoverCard.svg";
import amexCard from "../assets/images/amexCard.svg";

import styled from "styled-components";

const Payment = () => {
  return (
    <Container>
      <fieldset className="method">
        <label className="radio-control">
          <input
            type="radio"
            id="debit-card"
            name="radio"
            value="debit-card"
            // checked
          />
          Credit or Debit Card
        </label>
        <div className="cards">
          <img width="30px" src={masterCard} alt="masterCard-logo" />
          <img width="30px" src={visaCard} alt="visaCard-logo" />
          <img width="30px" src={discoverCard} alt="discovery-logo" />
          <img width="30px" src={amexCard} alt="americanExpress-logo" />
        </div>
      </fieldset>

      <fieldset className="method">
        <label className="radio-control">
          <input type="radio" id="paypal" name="radio" value="paypal" />
          <img width="65px" src={paypal} alt="paypal-logo" />
        </label>
      </fieldset>
    </Container>
  );
};

export default Payment;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 14px;

  .method {
    padding: 0 20px;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    border: 1px solid ${({ theme }) => theme.palette.border};
    border-radius: ${({ theme }) => theme.borderRadius[1]};

    .radio-control {
      font-weight: ${({ theme }) => theme.typography.main.fontWeight[2]};
      display: flex;
      align-items: center;
      gap: 10px;
    }

    input[type="radio"] {
      /* Add if not using autoprefixer */
      -webkit-appearance: none;
      appearance: none;
      /* For iOS < 15 to remove gradient background */
      background-color: transparent;
      /* Not removed via appearance */
      margin: 0;
      font: inherit;
      width: 1.4em;
      height: 1.4em;
      border: 1px solid gray;
      border-radius: 50%;
      transform: translateY(-0.075em);
      display: grid;
      place-content: center;
    }

    input[type="radio"]::before {
      content: "";
      width: 0.7em;
      height: 0.7em;
      border-radius: 50%;
      transform: scale(0);
      transition: 120ms transform ease-in-out;
      box-shadow: inset 1em 1em ${({ theme }) => theme.palette.link};
    }

    input[type="radio"]:checked::before {
      transform: scale(1);
    }

    input[type="radio"]:checked {
      border: 1px solid ${({ theme }) => theme.palette.link};
    }

    .cards {
      display: flex;
      gap: 5px;
      height: 65px;
    }
  }
`;
