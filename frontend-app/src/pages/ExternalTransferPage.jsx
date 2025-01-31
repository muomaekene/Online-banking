import styled from "styled-components";

import NavigationBtn from "../components/NavigationBtn";
import Heading from "../components/Heading";
import Subheading from "../components/Subheading";
import ExternalTransferForm from "../components/ExternalTransferForm";
import CustomBtn from "../components/CustomBtn";
import CancelBtn from "../components/CancelBtn";

const ExternalTransferPage = () => {
  return (
    <Container>
      <NavigationBtn />
      <div className="page-content">
        <Heading>External transfers</Heading>
        <Subheading>
          Send money from your First Florida bank accounts to external accounts{" "}
        </Subheading>
        <ExternalTransferForm />
        <div className="buttons">
          <CancelBtn />
          <CustomBtn>Review & send</CustomBtn>
        </div>
      </div>
    </Container>
  );
};

export default ExternalTransferPage;

const Container = styled.div`
  height: 100%;
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
