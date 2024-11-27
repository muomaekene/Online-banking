import {
  ChevronDoubleRightIcon,
  InformationCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import CustomBtn from "../components/CustomBtn";
import styled from "styled-components";
import { MONTHS, YEARS } from "../utils/uiData";

const CustomModal = ({ accountName, setShowModal }) => {
  return (
    <Overlay>
      <Modal onClick={(event) => event.stopPropagation()}>
        <div className="top">
          <div>Open account</div>
          {/* <h1>{accountName}</h1> */}

          <CloseButton onClick={() => setShowModal(false)}>
            <XMarkIcon />
          </CloseButton>
        </div>

        <ModalContent>
          <div className="contact-info">
            <div className="title">Your account information</div>
            <h1>{accountName}</h1>

            <div className="title">Your personal information</div>
            <div className="data">
              <p>
                SSN: <span>332-78-8254</span>
              </p>
              <p>
                Street address: <span>3714 Lake Forest Drive</span>
              </p>
              <p>
                City: <span>White Plains</span>
              </p>
              <p>
                State: <span>NY</span>
              </p>
              <p>
                Zip code: <span>10601</span>
              </p>
            </div>

            <div className="title">Upload government issued ID</div>
            <input type="file" />
          </div>

          {/* <hr /> */}
          {/* <div>Initial deposit with debit card</div> */}
          <div className="payment-info">
            <form action="">
              {/* <label htmlFor="holder-name">Cardholder Name:</label> */}
              <input
                placeholder="Cardholder name"
                type="text"
                name="holder-name"
              />
              <input placeholder="Card number" type="text" name="card-number" />
              <div>Expiry date</div>
              <fieldset>
                <input type="number" placeholder="Month" />
                <input type="number" placeholder="Year" />
                <input type="number" placeholder="CCV" />
              </fieldset>
              <fieldset>
                <input id="agreement" type="checkbox" />
                <label htmlFor="agreement">
                  I have read and accept the bank's terms of use, rules of
                  flight and privacy policy
                </label>
              </fieldset>
              <CustomBtn>
                Pay and open account <ChevronDoubleRightIcon width="15px" />
              </CustomBtn>
            </form>
          </div>
        </ModalContent>
      </Modal>
    </Overlay>
  );
};

export default CustomModal;

const Overlay = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(52, 64, 84, 0.6);
  backdrop-filter: blur(8px);
  animation: fadein 0.5s;
  z-index: 999;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Modal = styled.div`
  padding: 20px;
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 50rem;
  height: 35rem;
  background: ${({ theme }) => theme.palette.main};
  border-radius: ${({ theme }) => theme.borderRadius[1]};
  box-shadow: 0px 20px 24px -4px rgba(16, 24, 40, 0.1),
    0px 8px 8px -4px rgba(16, 24, 40, 0.04);
  transition: all 0.5s ease;

  .top {
    display: flex;
    justify-content: space-between;
  }

  h1 {
    font-size: 20px;
    font-weight: ${({ theme }) => theme.typography.main.fontWeight[2]};
    color: ${({ theme }) => theme.palette.text};
    text-transform: capitalize;
  }
`;

const CloseButton = styled.button`
  width: 22px;
  display: flex;
  cursor: pointer;
  border: 1px solid transparent;
  background: none;
  color: ${({ theme }) => theme.palette.text};

  :hover {
    border: 1px solid ${({ theme }) => theme.palette.border};
  }
`;

const ModalContent = styled.div`
  display: flex;
  border-top: 1px solid ${({ theme }) => theme.palette.border};
  padding-top: 10px;
  margin-top: 10px;

  h2 {
    font-size: ${({ theme }) => theme.typography.main.fontSize[4]};
    font-weight: ${({ theme }) => theme.typography.main.fontWeight[2]};
    margin-bottom: 5px;
  }

  .contact-info {
    margin-bottom: 10px;
    flex: 1;

    .data {
      margin-bottom: 20px;
    }
  }

  p {
    padding-bottom: 5px;
    font-size: ${({ theme }) => theme.typography.main.fontSize[2]};
    font-weight: ${({ theme }) => theme.typography.main.fontWeight[2]};
    color: ${({ theme }) => theme.palette.altText};
  }

  span {
    font-weight: ${({ theme }) => theme.typography.main.fontWeight[2]};
    color: ${({ theme }) => theme.palette.text};
    text-transform: capitalize;
  }

  .payment-info {
    border-left: 1px solid ${({ theme }) => theme.palette.border};
    padding-left: 10px;

    flex: 1;
    /* margin-top: 10px; */
    width: 50% /* border: 1px solid ${({ theme }) => theme.palette.border}; */
      /* border-radius: ${({ theme }) => theme.borderRadius[0]}; */
      /* padding: 15px; */ h3 {
      text-align: center;
      font-weight: ${({ theme }) => theme.typography.main.fontWeight[1]};
      font-size: ${({ theme }) => theme.typography.main.fontSize[4]};
      margin-bottom: 5px;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 10px;

      input {
        width: 100%;
        height: 45px;
        outline: none;
        border: 1px solid ${({ theme }) => theme.palette.border};
        border-radius: ${({ theme }) => theme.borderRadius[0]};
        padding: 0 15px;
        /* background: none; */
        font-family: inherit;
        font-size: ${({ theme }) => theme.typography.main.fontSize[1]};
        font-weight: ${({ theme }) => theme.typography.main.fontWeight[0]};
        color: ${({ theme }) => theme.palette.text};

        ::placeholder {
          color: ${({ theme }) => theme.palette.altText};
          font-size: 12px;
        }

        :focus {
          border: 1px solid ${({ theme }) => theme.palette.solid};
          border-radius: ${({ theme }) => theme.borderRadius[0]};
        }

        ::-webkit-outer-spin-button,
        ::-webkit-inner-spin-button {
          /* display: none; <- Crashes Chrome on hover */
          -webkit-appearance: none;
          margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
        }
      }

      fieldset {
        display: flex;
        align-items: center;
        gap: 10px;
        border: none;
      }

      label {
        font-size: ${({ theme }) => theme.typography.main.fontSize[0]};
      }

      #agreement {
        width: 15px;
      }
    }
  }
`;
