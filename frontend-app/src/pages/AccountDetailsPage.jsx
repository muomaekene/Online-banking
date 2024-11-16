import NavigationBtn from "../components/NavigationBtn";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const AccountDetailsPage = () => {
  const params = useParams();

  return (
    <Container>
      <NavigationBtn>All accounts</NavigationBtn>

      <h1>{params.id}</h1>
    </Container>
  );
};

export default AccountDetailsPage;

const Container = styled.div`
  height: 100%;
  width: 70%;
`;
