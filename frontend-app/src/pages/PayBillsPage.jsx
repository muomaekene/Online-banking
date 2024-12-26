import styled from "styled-components";
import NavigationBtn from "../components/NavigationBtn";

const PayBillsPage = () => {
  return (
    <Container>
      <NavigationBtn />
      PayBillsPage
    </Container>
  );
};

export default PayBillsPage;

const Container = styled.div`
  height: 100%;
  width: 70%;
  overflow-x: hidden !important;
`;
