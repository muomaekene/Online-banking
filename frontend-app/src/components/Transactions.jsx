import { useMemo } from "react";
import { useTable } from "react-table";

import { COLUMNS } from "./Columns";
import MOCK_DATA from "../utils/MOCK_DATA.json";

import styled from "styled-components";

const TransTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  const truncateString = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <Table {...getTableProps()}>
      <thead className="table-header">
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

export default TransTable;

const Table = styled.table`
  border-collapse: collapse;
  display: table;
  table-layout: fixed;
  width: 100%;
  font-size: 11px;
  font-weight: 600;
  border-radius: 6px;
  overflow: hidden;

  thead {
    font-size: 12px;
    tr {
      background: ${(props) => props.theme.main};
      color: ${(props) => props.theme.secondary};
      text-align: left;
    }
  }
  th,
  td {
    padding: 12px 15px;
  }
  tbody {
    tr {
      border-bottom: thin solid #dddddd;
      :nth-of-type(even) {
        background-color: ${(props) => props.theme.primary};
      }

      :last-of-type {
        border-bottom: 2px solid ${(props) => props.theme.main};
      }
    }
  }
`;
