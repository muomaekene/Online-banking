import { useMemo } from "react";
import { useTable } from "react-table";
import { COLUMNS } from "../utils/uiData";

import MOCK_DATA from "../utils/MOCK_DATA.json";
import styled from "styled-components";

const Table = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <Container {...getTableProps()}>
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
    </Container>
  );
};

export default Table;

const Container = styled.table`
  border-collapse: collapse;
  display: table;
  table-layout: fixed;
  width: 100%;
  font-size: ${({ theme }) => theme.typography.main.fontSize[0]};
  overflow: hidden;

  thead {
    tr {
      background-color: ${({ theme }) => theme.palette.primary};
      text-align: left;
    }
  }
  th,
  td {
    padding: 7px 15px;
    font-weight: ${({ theme }) => theme.typography.main.fontWeight[0]};
  }

  tbody {
    tr {
      :nth-of-type(even) {
        background-color: ${({ theme }) => theme.palette.primary};
      }
    }
  }
`;
