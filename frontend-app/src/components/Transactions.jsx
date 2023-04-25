import { Link } from "react-router-dom";
import { ChevronRightRounded } from "@mui/icons-material";

import SectionHeader from "./SectionHeader";
import Table from "./Table";

import styled from "styled-components";

const Transactions = () => {
  return (
    <Section>
      <SectionHeader title="Recent transactions">
        <Link to="/transactions" className="link-to">
          <p>see all</p>
          <ChevronRightRounded className="icon" />
        </Link>
      </SectionHeader>
      <Table />
    </Section>
  );
};

export default Transactions;

const Section = styled.section`
  margin: ${({ theme }) => theme.spacing(2)} 0;
  padding-bottom: 5px;
  border-radius: 10px;
  background: ${({ theme }) => theme.palette.main};
  border: 1px solid ${({ theme }) => theme.palette.border};

  .link-to {
    display: flex;
    color: ${({ theme }) => theme.palette.altText};

    :hover {
      color: ${({ theme }) => theme.palette.text};
    }

    p {
      font-size: inherit;
      font-weight: 500;
    }
  }

  .icon {
    font-size: 17px;
  }
`;
