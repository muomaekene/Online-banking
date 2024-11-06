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
  border: 1px solid ${({ theme }) => theme.palette.border};

  .link-to {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.palette.altText};

    :hover {
      color: ${({ theme }) => theme.palette.text};
    }

    p {
      font-size: inherit;
      font-weight: 400;
    }
  }

  .icon {
    width: 12px;
    height: 12px;
  }
`;
