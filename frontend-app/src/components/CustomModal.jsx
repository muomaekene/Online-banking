import { XMarkIcon } from "@heroicons/react/24/outline";
import styled from "styled-components";

const CustomModal = ({ customProps, setShowModal }) => {
  const {
    account,
    accountNo,
    balance,
    interestRate,
    interestPaidNow,
    interestPaidThen,
    tier,
  } = customProps;

  return (
    <Overlay onClick={() => setShowModal(false)}>
      <Modal onClick={(event) => event.stopPropagation()}>
        <CloseButton onClick={() => setShowModal(false)}>
          <XMarkIcon />
        </CloseButton>

        <ModalContent>
          <h3>{account}</h3>
          <hr />
          <p>
            Account no.: <span>{accountNo}</span>
          </p>
          <p>
            Available bal: <span>${balance}</span>
          </p>

          <p>
            Interest rate: <span> {interestRate}%</span>
          </p>
          <p>
            Interest paid this year: <span>${interestPaidNow}</span>
          </p>
          <p>
            Interest paid last year: <span>${interestPaidThen}</span>
          </p>
          <p>
            Account tier: <span>{tier}</span>
          </p>
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
  width: 45%;
  height: 30rem;
  background: ${({ theme }) => theme.palette.main};
  border-radius: ${({ theme }) => theme.borderRadius[1]};
  box-shadow: 0px 20px 24px -4px rgba(16, 24, 40, 0.1),
    0px 8px 8px -4px rgba(16, 24, 40, 0.04);
  transition: all 0.5s ease;
`;

const CloseButton = styled.button`
  width: 25px;
  position: absolute;
  right: 20px;
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
  h3 {
    font-size: ${({ theme }) => theme.typography.main.fontSize[6]};
    font-weight: ${({ theme }) => theme.typography.main.fontWeight[2]};
    color: ${({ theme }) => theme.palette.text};
    text-transform: capitalize;
  }

  p {
    padding-bottom: 5px;
    font-size: ${({ theme }) => theme.typography.main.fontSize[2]};
    color: ${({ theme }) => theme.palette.altText};
  }

  hr {
    border-color: ${({ theme }) => theme.palette.hr};
    margin: 10px -20px 10px;
  }

  span {
    font-weight: ${({ theme }) => theme.typography.main.fontWeight[2]};
    color: ${({ theme }) => theme.palette.text};
    position: absolute;
    right: 20px;
    text-transform: capitalize;
  }
`;
