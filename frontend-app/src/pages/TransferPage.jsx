import MainLayout from "../components/MainLayout";
import Heading from "../components/Heading";
import Subheading from "../components/Subheading";
import TransferCard from "../components/TransferCard";

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
                key={card.title}
                title={card.title}
                desc={card.description}
                action={card.action}
              />
            ))}
          </div>
        </div>

        <div className="transfer-info">
          <p>No activities. Perform a transaction to get started.</p>
        </div>
      </Container>
    </MainLayout>
  );
};

export default TransferPage;

const Container = styled.div`
  display: flex;
  height: calc(100vh - 70px);

  .transfers {
    padding-right: ${({ theme }) => theme.spacing(2)};
  }

  .all-transfers {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${({ theme }) => theme.spacing(2)};
    margin-top: ${({ theme }) => theme.spacing(2)};
  }

  .transfer-info {
    border-left: 1px solid ${({ theme }) => theme.palette.border};
    padding-left: 15px;

    p {
      font-size: ${({ theme }) => theme.typography.main.fontSize[1]};
      font-weight: ${({ theme }) => theme.typography.main.fontWeight[0]};
    }
  }
`;
