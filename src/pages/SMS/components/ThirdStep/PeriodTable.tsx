import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ThirdStepPeriodTableStyles } from "../../../../types/styles";
import { makeStyles, type Theme } from "mui-styles-hook";

const useStyles = makeStyles<ThirdStepPeriodTableStyles>((theme: Theme) => ({
  tableContainer: { mb: 4 },
  tableRow: { "&:last-child td, &:last-child th": { border: 0 } },
  lastTableRow: {
    "& > *": {
      fontSize: "1rem!important",
      fontWeight: "500!important",
    },
    "&:last-child td, &:last-child th": { border: 0 },
  },
  lastTableCell: {
    color: theme.palette.primary.dark,
  },
}));

function createData(
  period: string,
  charges: string,
  unitPrice: string,
  amount: number,
  quantity: string
) {
  return { period, charges, unitPrice, amount, quantity };
}

const rows = [
  createData(
    "One time charge",
    "10DLC SMS TCR Registration - Standard brand",
    "$4.00",
    1,
    "$4.00"
  ),
];

const PeriodTable = () => {
  const styles = useStyles();

  return (
    <TableContainer component={Paper} sx={styles.tableContainer}>
      <Table aria-label="period table">
        <TableHead>
          <TableRow>
            <TableCell>Period</TableCell>
            <TableCell>Charges & Credits</TableCell>
            <TableCell>Unit Price</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Quantity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.period} sx={styles.tableRow}>
              <TableCell>{row.period}</TableCell>
              <TableCell>{row.charges}</TableCell>
              <TableCell>{row.unitPrice}</TableCell>
              <TableCell>{row.amount}</TableCell>
              <TableCell>{row.quantity}</TableCell>
            </TableRow>
          ))}
          <TableRow key={"none"} sx={styles.lastTableRow}>
            <TableCell colSpan={4}>
              Charges after Discounts and Pro-rates:
            </TableCell>
            <TableCell sx={styles.lastTableCell}>$4.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PeriodTable;
