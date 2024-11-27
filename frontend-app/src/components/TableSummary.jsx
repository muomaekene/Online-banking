import TransactionData from "./TransactionData";
import styled from "styled-components";

const TableSummary = ({ transactions }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th scope="col">Transaction ID</th>
          <th scope="col">Date</th>
          <th scope="col">Description</th>
          <th scope="col">Amount</th>
          <th scope="col">Balance</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <TransactionData
            transaction={transaction}
            key={transaction.transactionNum}
          />
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
        text-transform: uppercase;
        font-size: ${({ theme }) => theme.typography.main.fontSize[1]};
        font-weight: ${({ theme }) => theme.typography.main.fontWeight[0]};
        color: ${({ theme }) => theme.palette.altText};
        padding: 10px 20px;
      }
    }
  }
`;
