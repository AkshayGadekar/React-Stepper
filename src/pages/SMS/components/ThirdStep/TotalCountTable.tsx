import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { type Theme } from "@mui/material/styles";
import useStyles from "../../../../hooks/useStyles";
import { TABLE_BORDER_COLOR } from "../../../../config";

const makeStyles = (theme: Theme, dependencies: any[]) => ({
  tableContainer: { mb: 4, border: "none" },
  tableRow: {
    "&:last-child td, &:last-child th": { border: 0 },
    "&:is(.pro-rates, .taxes) > *": {
      fontSize: "1rem!important",
      fontWeight: "500!important",
      border: "none",
    },
    "&:is(.subtotal, .charges) > *": {
      fontSize: "1.25rem!important",
      fontWeight: "500!important",
      borderBottom: `1px solid ${TABLE_BORDER_COLOR}!important`,
    },
  },
  lastTableCell: {
    color: theme.palette.primary.dark,
  },
});

function createData(label: string, quantity: string, className: string) {
  return { label, quantity, className };
}

const rows = [
  createData("Charges after Discounts and Pro-rates:", "$4.00", "pro-rates"),
  createData("State and Local taxes", "$0.60", "taxes"),
  createData("Subtotal", "$4.60", "subtotal"),
  createData("Total charges to Credit Card:", "$4.60", "charges"),
];

const TotalCountTable = () => {
  const styles = useStyles(makeStyles, []);

  return (
    <TableContainer component={Paper} sx={styles.tableContainer}>
      <Table aria-label="period table">
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.className}
              className={row.className}
              sx={styles.tableRow}
            >
              <TableCell>{row.label}</TableCell>
              <TableCell sx={styles.lastTableCell}>{row.quantity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TotalCountTable;
