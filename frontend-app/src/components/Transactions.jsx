import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

import SectionHeader from "./SectionHeader";
import TableMain from "./TableMain";

import styled from "styled-components";

const Transactions = () => {
  return (
    <Section>
      <SectionHeader title="Recent transactions">
        <Link to="/transactions" className="link-to">
          <p>see all</p>
          <ChevronRightIcon className="icon" />
        </Link>
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
