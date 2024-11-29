import MainLayout from "../components/MainLayout";
import Heading from "../components/Heading";
import Subheading from "../components/Subheading";
import TransferCard from "../components/TransferCard";
import Activity from "../components/Activity";

import { TRANSFER_DATA } from "../utils/uiData";

import styled from "styled-components";

const TransferPage = () => {
  return (
    <MainLayout>
      <Container>
        <div className="transfers">
          <Heading>Transfer & Payments</Heading>
          <Subheading>
            Make external and internal transfers, pay and manage your bills
          </Subheading>

          <div className="all-transfers">
            {TRANSFER_DATA.map((card) => (
              <TransferCard
                key={card.id}
                id={card.id}
                title={card.title}
                desc={card.description}
                action={card.action}
              />
            ))}
          </div>
        </div>

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

  .transfers {
    padding-right: ${({ theme }) => theme.spacing(2)};
    width: 68%;
  }

  .all-transfers {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${({ theme }) => theme.spacing(2)};
  }
`;
