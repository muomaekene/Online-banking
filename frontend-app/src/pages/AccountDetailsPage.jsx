import NavigationBtn from "../components/NavigationBtn";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const AccountDetailsPage = () => {
  const params = useParams();

  return (
    <Container>
      <NavigationBtn />

      <h4>{params.id}</h4>
    </Container>
  );
};

export default AccountDetailsPage;

const Container = styled.div`
  height: 100%;
  width: 70%;

  h4 {
    margin-top: 10px;
  }
`;
