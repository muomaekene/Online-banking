import NavigationBtn from "../components/NavigationBtn";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const TransferDetailsPage = () => {
  const params = useParams();

  return (
    <Container>
      <NavigationBtn>Perform a transaction</NavigationBtn>

      <h4>{params.id}</h4>
    </Container>
  );
};

export default TransferDetailsPage;

const Container = styled.div`
  height: 100%;
  width: 70%;

  h4 {
    margin-top: 10px;
  }
`;
