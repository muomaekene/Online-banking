import TransactionData from "./TransactionData";
import { MAIN_TABLE } from "../utils/COMPONENT_DATA";

import styled from "styled-components";

const TableMain = () => {
  return (
    <Table>
      <thead>
        <tr>
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
  border-spacing: 5px;

  thead {
    tr {
      th {
        text-align: left;
        text-transform: capitalize;
        font-size: ${({ theme }) => theme.typography.main.fontSize[2]};
        font-weight: ${({ theme }) => theme.typography.main.fontWeight[1]};
        color: ${({ theme }) => theme.palette.altText};
        padding: 10px 20px;
      }
    }
  }
`;
