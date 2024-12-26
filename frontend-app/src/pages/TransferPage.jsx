import MainLayout from "../components/MainLayout";
import Activity from "../components/Activity";

import styled from "styled-components";
import { Outlet } from "react-router-dom";

const TransferPage = () => {
  return (
    <MainLayout>
      <Container>
        <Outlet />
        <Activity />
      </Container>
    </MainLayout>
  );
};

export default TransferPage;

const Container = styled.div`
  display: flex;
  padding-bottom: 15px;
  width: 100%;
`;
