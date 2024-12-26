import styled from "styled-components";
import NavigationBtn from "../components/NavigationBtn";

const InternalTransferPage = () => {
  return (
    <Container>
      <NavigationBtn />
      InternalTransferPage
    </Container>
  );
};

export default InternalTransferPage;

const Container = styled.div`
  height: 100%;
  width: 70%;
  overflow-x: hidden !important;
`;
