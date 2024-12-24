import styled from "styled-components";

const TransactionData = ({
  transaction: { date, description, amount, balance },
}) => {
  return (
    <TableRow>
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
    font-size: ${({ theme }) => theme.typography.main.fontSize[1]};
    font-weight: ${({ theme }) => theme.typography.main.fontWeight[1]};
    text-transform: capitalize;
    padding: 10px 0px 10px 20px;
  }
`;
