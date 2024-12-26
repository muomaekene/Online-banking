import Heading from "../components/Heading";
import Subheading from "../components/Subheading";
import TransferCard from "../components/TransferCard";

import { TRANSFER_DATA } from "../utils/uiData";

import styled from "styled-components";

const AllTransfers = () => {
  return (
    <Container>
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
            url={card.url}
          />
        ))}
      </div>
    </Container>
  );
};

export default AllTransfers;

const Container = styled.div`
  padding-right: ${({ theme }) => theme.spacing(2)};
  width: 70%;

  .all-transfers {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${({ theme }) => theme.spacing(2)};
  }
`;
