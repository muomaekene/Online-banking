import NavigationBtn from "../components/NavigationBtn";
import Heading from "../components/Heading";
import Subheading from "../components/Subheading";
import CustomBtn from "../components/CustomBtn";
import InternalTransferForm from "../components/InternalTransferForm";

import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const InternalTransferPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <NavigationBtn />
      <div className="page-content">
        <Heading>Internal transfers</Heading>
        <Subheading>
          Manage money between your First Florida bank accounts
        </Subheading>

        <InternalTransferForm />
        <div className="buttons">
          <button onClick={() => navigate(-1)} className="cancel-btn">
            Cancel
          </button>
          <CustomBtn>Review & send</CustomBtn>
        </div>
      </div>
    </Container>
  );
};

export default InternalTransferPage;

const Container = styled.div`
  width: 70%;
  overflow-x: hidden !important;

  .page-content {
    margin-top: 10px;
  }

  .buttons {
    display: flex;
    gap: 10px;
    width: 50%;
    margin-top: 15px;
  }

  .cancel-btn {
    width: 100%;
    border-radius: ${({ theme }) => theme.borderRadius[1]};
    background: ${({ theme }) => theme.palette.main};
    color: ${({ theme }) => theme.palette.text};
    border: none;
    cursor: pointer;
    font-size: ${({ theme }) => theme.typography.main.fontSize[1]};

    :hover {
      background: ${({ theme }) => theme.palette.secondary};
      border: 1px solid ${({ theme }) => theme.palette.border};
    }
  }
`;
