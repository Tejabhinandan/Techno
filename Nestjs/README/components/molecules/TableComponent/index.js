import InputBoxComponent from "@/atoms/InputBoxComponent";
import {
  Box,
  InputAdornment,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import DatePickerComponent from "@/atoms/DatePickerComponent";

const useStyles = makeStyles({
  tableHeader: {
    fontWeight: "700",
    fontSize: "16px",
  },
  tableRows: {
    border: "none",
    color: "#373737",
    fontWeight: "700",
    fontSize: "14px",
  },
});

const TableComponent = ({
  tableRows = [],
  tableColumns = [],
  hideHeader = false,
  headerBgColor = "#333333",
  headerTextColor = "#FFFFFF",
  rowBgColor = "#FBFBFB",
}) => {
  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([]);
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [date, setDate] = useState(null);
  const rowsPerPage = 10;

  const classes = useStyles();

  const emptyRows = Math.max(0, (1 + page) * rowsPerPage - rows.length);

  useEffect(() => {
    if (tableRows.length && tableColumns.length) {
      const count = Math.ceil(tableRows.length / rowsPerPage);
      setPageCount(count);
      setRows(tableRows);
      setColumns(tableColumns);
    }
  }, [tableRows, tableColumns]);

  useEffect(() => {
    if (searchText) {
      const filteredData = tableRows?.filter(item => {
        const data = [];
        Object.values(item).map(item => {
          data.push(item);
        });
        return data.join("").toLowerCase().includes(searchText.toLowerCase());
      });
      setRows(filteredData);
    } else {
      setRows(tableRows);
    }
  }, [searchText]);

  return (
    <>
      <Box className="mb-1 d-flex align-items-center justify-content-between">
        <Box>
          <DatePickerComponent value={date} onChange={val => setDate(val)} />
        </Box>
        <Box>
          <InputBoxComponent
            placeholder="Search..."
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Box>
      <TableContainer>
        <Table className="w-100">
          {!hideHeader && (
            <TableHead>
              <TableRow>
                {columns.length > 0 &&
                  columns.map((item, index) => (
                    <TableCell
                      key={index}
                      className="ff-MS px-lg-5 px-sm-5 px-sm-0 py-3"
                      classes={{ root: classes.tableHeader }}
                      sx={{
                        display: item.hideColumn && "none",
                        background: headerBgColor,
                        color: headerTextColor,
                        minWidth: item.width || "auto",
                      }}
                      align={item.alignHeader || "left"}
                    >
                      {item.label}
                    </TableCell>
                  ))}
              </TableRow>
            </TableHead>
          )}
          <TableBody>
            {rows.length > 0 &&
              rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((item, index, val) => (
                  <TableRow key={index}>
                    {columns.length > 0 &&
                      columns.map((ele, ind) => {
                        const value = item[ele.id];
                        return (
                          <TableCell
                            key={ind}
                            className="ff-MS px-lg-5 px-sm-5 px-sm-0 py-2"
                            classes={{ root: classes.tableRows }}
                            sx={{
                              display: ele.hideColumn && "none",
                              background: rowBgColor,
                            }}
                            align={ele.alignRow || "left"}
                          >
                            {value}
                          </TableCell>
                        );
                      })}
                  </TableRow>
                ))}
            {emptyRows > 0 && (
              <TableRow
                sx={{
                  height: 37 * emptyRows,
                  background: "#FBFBFB",
                }}
              >
                <TableCell
                  classes={{ root: classes.tableRows }}
                  colSpan={columns.length + 1}
                />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      {rows.length > 0 ? (
        <Box className="d-flex justify-content-center my-3">
          <Pagination
            count={pageCount}
            sx={{
              "& .Mui-selected": {
                background: "#333333 !important",
                color: "#FFFFFF",
              },
            }}
            onChange={(e, newPage) => setPage(newPage - 1)}
          />
        </Box>
      ) : null}
    </>
  );
};

export default TableComponent;
