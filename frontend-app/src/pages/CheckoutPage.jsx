import { InformationCircleIcon } from "@heroicons/react/24/outline";
import FileUpload from "../components/FileUpload";
import NavigationBtn from "../components/NavigationBtn";
import Payment from "../components/Payment";

import styled from "styled-components";

const CheckoutPage = () => {
  return (
    <Container>
      <NavigationBtn />
      <div className="page-content">
        <div className="page-title">Checkout</div>
        <div className="contact-details">
          <h1>Robbin J. Eckert</h1>
          <div>
            <p>3714 Lake Forest Drive, White Plains, NY, 10601</p>
            <p>Email: robbin121eckert@gmail.com</p>
            <p>SSN: 332-78-8254</p>
          </div>
        </div>

        <div className="title">
          Upload government-issued ID <InformationCircleIcon width="16px" />
        </div>
        <FileUpload />

        <div className="title">Your account summary</div>
        <div className="account-details">
          <h1>High Yield Money Market Account</h1>
          <p>High-interest savings account with easy access.</p>
          <ul>
            <li>24/7 deposits and withdrawals</li>
            <li>Peace of mind knowing your money is safe and insured</li>
            <li>Earn dividends on balances of $25 or more</li>
          </ul>

          <div className="amount">
            Min. deposit:<span> $250.00</span>
          </div>
        </div>

        <div className="title">Choose your payment method</div>
        <Payment />
      </div>
    </Container>
  );
};

export default CheckoutPage;

const Container = styled.div`
  height: 100%;
  width: 70%;
  overflow-x: hidden !important;
  padding-bottom: 15px;
  font-size: ${({ theme }) => theme.typography.main.fontSize[2]};
  font-weight: ${({ theme }) => theme.typography.main.fontWeight[0]};
  padding-right: 15px;

  .page-content {
    border-radius: ${({ theme }) => theme.borderRadius[1]};
    padding: 20px;
    margin-top: 10px;
    background: ${({ theme }) => theme.palette.main};

    .page-title {
      font-size: ${({ theme }) => theme.typography.main.fontSize[4]};
      margin-bottom: 15px;
      text-decoration: underline;
      text-decoration-color: ${({ theme }) => theme.palette.solid};
    }

    .contact-details {
      border: 1px solid ${({ theme }) => theme.palette.border};
      border-radius: ${({ theme }) => theme.borderRadius[1]};
      padding: 15px 20px;
      width: fit-content;
    }

    h1 {
      font-size: ${({ theme }) => theme.typography.main.fontSize[2]};
      font-weight: ${({ theme }) => theme.typography.main.fontWeight[2]};
      text-transform: capitalize;
    }

    p {
      font-weight: ${({ theme }) => theme.typography.main.fontWeight[0]};
      font-size: ${({ theme }) => theme.typography.main.fontSize[2]};
    }

    .title {
      font-weight: ${({ theme }) => theme.typography.main.fontWeight[0]};
      margin-top: 20px;
      margin-bottom: 10px;
      text-transform: uppercase;
      display: flex;
      gap: 5px;
    }

    ul {
      margin-left: 25px;
      margin-top: 10px;
      line-height: 1.3rem;
    }

    .account-details {
      border: 1px solid ${({ theme }) => theme.palette.border};
      border-radius: ${({ theme }) => theme.borderRadius[1]};
      padding: 20px;
      width: fit-content;

      .amount {
        border-top: 1px solid ${({ theme }) => theme.palette.border};
        margin-top: 10px;
        color: ${({ theme }) => theme.palette.altText};
        padding-top: 10px;
        font-weight: ${({ theme }) => theme.typography.main.fontWeight[1]};

        span {
          color: ${({ theme }) => theme.palette.text};
          font-weight: ${({ theme }) => theme.typography.main.fontWeight[2]};
        }
      }
    }
  }
`;
