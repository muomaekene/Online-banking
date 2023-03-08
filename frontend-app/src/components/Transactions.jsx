import { useMemo } from "react";
import { useTable } from "react-table";
import { COLUMNS } from "../utils/uiData";

import MOCK_DATA from "../utils/MOCK_DATA.json";
import styled from "styled-components";

const Transactions = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <Table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default Transactions;

const Table = styled.table`
  border-collapse: collapse;
  display: table;
  table-layout: fixed;
  width: 100%;
  font-size: 12px;
  overflow: hidden;

  thead {
    tr {
      background-color: ${({ theme }) => theme.primary};
      text-align: left;
    }
  }
  th,
  td {
    padding: 7px 15px;
    font-weight: 400;
  }

  tbody {
    tr {
      :nth-of-type(even) {
        background-color: ${({ theme }) => theme.primary};
      }
    }
  }
`;
