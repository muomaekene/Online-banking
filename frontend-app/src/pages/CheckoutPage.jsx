import NavigationBtn from "../components/NavigationBtn";
import styled from "styled-components";

const CheckoutPage = () => {
  return (
    <Container>
      <NavigationBtn>Back to accounts</NavigationBtn>
      <h1>Hello world!</h1>
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
`;
