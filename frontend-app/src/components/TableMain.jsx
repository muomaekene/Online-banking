import TransactionData from "./TransactionData";
import { MAIN_TABLE } from "../utils/COMPONENT_DATA";

import styled from "styled-components";

const TableMain = () => {
  return (
    <Table>
      <thead>
        <tr>
          <th scope="col">Account</th>
          <th scope="col">Date</th>
          <th scope="col">Description</th>
          <th scope="col">Amount</th>
          <th scope="col">Balance</th>
        </tr>
      </thead>
      <tbody>
        {MAIN_TABLE.map((transaction) => (
          <TransactionData transaction={transaction} key={transaction.id} />
        ))}
      </tbody>
    </Table>
  );
};

export default TableMain;

const Table = styled.table`
  border-collapse: collapse;
  display: table;
  width: 100%;
  overflow: hidden;

  thead {
    tr {
      th {
        text-align: left;
        text-transform: uppercase;
        font-size: ${({ theme }) => theme.typography.main.fontSize[0]};
        font-weight: ${({ theme }) => theme.typography.main.fontWeight[0]};
        color: ${({ theme }) => theme.palette.altText};
        padding: 10px 20px;
      }
    }
  }

  tbody {
    tr {
      color: ${({ theme }) => theme.palette.text};

      :nth-of-type(odd) {
        background-color: ${({ theme }) => theme.palette.focus};
      }
    }
  }
`;
