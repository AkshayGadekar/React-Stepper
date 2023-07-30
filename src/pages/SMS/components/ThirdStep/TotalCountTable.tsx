import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ThirdStepTotalCountTableStyles } from "../../../../types/styles";
import { makeStyles, type Theme } from "mui-styles-hook";
import {
  TABLE_BORDER_COLOR,
  TOTAL_CHARGES_LABEL,
  TOTAL_CHARGES,
} from "../../../../config";

const useStyles = makeStyles<ThirdStepTotalCountTableStyles>(
  (theme: Theme) => ({
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
  })
);

function createData(label: string, quantity: string, className: string) {
  return { label, quantity, className };
}

const rows = [
  createData("Charges after Discounts and Pro-rates:", "$4.00", "pro-rates"),
  createData("State and Local taxes", "$0.60", "taxes"),
  createData("Subtotal", "$4.60", "subtotal"),
  createData(`${TOTAL_CHARGES_LABEL}:`, TOTAL_CHARGES, "charges"),
];

const TotalCountTable = () => {
  const styles = useStyles();

  return (
    <TableContainer component={Paper} sx={styles.tableContainer}>
      <Table aria-label="count table">
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
