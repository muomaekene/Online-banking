import SectionHeader from "./SectionHeader";
import TableMain from "./TableMain";
import Select from "./Select";

import styled from "styled-components";

const Transactions = () => {
  return (
    <Section>
      <SectionHeader title="Last transactions">
        <div className="tooltip">
          <Select
            placeholder="Sort: Status - Completed"
            options={["Scheduled", "Pending", "Completed"]}
          />
        </div>
      </SectionHeader>

      <TableMain />
    </Section>
  );
};

export default Transactions;

const Section = styled.section`
  margin: ${({ theme }) => theme.spacing(2)} 0;
  padding-bottom: ${({ theme }) => theme.spacing(2)};
  border-radius: ${({ theme }) => theme.borderRadius[1]};
  background: ${({ theme }) => theme.palette.main};

  .link-to {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.palette.altText};

    :hover {
      color: ${({ theme }) => theme.palette.text};
    }

    p {
      color: ${({ theme }) => theme.palette.text};
    }
  }

  .icon {
    width: 12px;
    height: 12px;
    color: ${({ theme }) => theme.palette.text};
  }
`;
