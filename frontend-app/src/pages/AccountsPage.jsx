import MainLayout from "../components/MainLayout";

import { Outlet } from "react-router-dom";
import styled from "styled-components";
import TabNav from "../components/TabNav";

const Accounts = () => {
  return (
    <MainLayout>
      <MainContent>
        <Outlet />
        <TabNav />
      </MainContent>
    </MainLayout>
  );
};

export default Accounts;

const MainContent = styled.div`
  display: flex;
  height: calc(100vh - 70px);
  margin-top: 15px;
`;
