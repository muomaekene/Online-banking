import TransactionData from "./TransactionData";
import styled from "styled-components";

const TableSummary = ({ transactions }) => {
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
        {transactions.map((item) => (
          <TransactionData transaction={item} key={item.transactionId} />
        ))}
      </tbody>
    </Table>
  );
};

export default TableSummary;

const Table = styled.table`
  border-collapse: collapse;
  display: table;
  width: 100%;
  overflow: hidden;

  thead {
    tr {
      th {
        text-align: left;
        text-transform: capitalize;
        font-size: ${({ theme }) => theme.typography.main.fontSize[1]};
        font-weight: ${({ theme }) => theme.typography.main.fontWeight[1]};
        color: ${({ theme }) => theme.palette.altText};
        padding: 10px 20px;
      }
    }
  }
`;
