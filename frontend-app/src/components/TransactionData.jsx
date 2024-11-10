import styled from "styled-components";

const TransactionData = ({
  transaction: {
    transactionNum,
    accountName,
    date,
    description,
    amount,
    balance,
  },
}) => {
  return (
    <TableRow>
      <td>{transactionNum || accountName}</td>
      <td>{date}</td>
      <td>{description}</td>
      <td>${amount}</td>
      <td>${balance}</td>
    </TableRow>
  );
};

export default TransactionData;

const TableRow = styled.tr`
  color: ${({ theme }) => theme.palette.text};

  :nth-of-type(odd) {
    background-color: ${({ theme }) => theme.palette.focus};
  }

  td {
    padding: 10px 20px;
    font-size: ${({ theme }) => theme.typography.main.fontSize[1]};
    font-weight: ${({ theme }) => theme.typography.main.fontWeight[0]};
    text-transform: capitalize;
  }
`;
