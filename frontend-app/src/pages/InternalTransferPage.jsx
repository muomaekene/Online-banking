import NavigationBtn from "../components/NavigationBtn";
import Heading from "../components/Heading";
import Subheading from "../components/Subheading";
import CustomBtn from "../components/CustomBtn";
import InternalTransferForm from "../components/InternalTransferForm";
import CancelBtn from "../components/CancelBtn";

import styled from "styled-components";

const InternalTransferPage = () => {
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
          <CancelBtn />
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
`;
