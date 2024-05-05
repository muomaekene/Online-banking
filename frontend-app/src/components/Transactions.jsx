import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

import SectionHeader from "./SectionHeader";
import Table from "./Table";

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
      <Table />
    </Section>
  );
};

export default Transactions;

const Section = styled.section`
  margin: ${({ theme }) => theme.border.margin} 0;
  padding-bottom: 15px;
  border-radius: ${({ theme }) => theme.border.radius};
  background: ${({ theme }) => theme.palette.main};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;

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
