import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { ThirdStepTaxesTableStyles } from "../../../../types/styles";
import { makeStyles, type Theme } from "mui-styles-hook";

const useStyles = makeStyles<ThirdStepTaxesTableStyles>((theme: Theme) => ({
  tableContainer: { mb: 4 },
  tableRow: { "&:last-child td, &:last-child th": { border: 0 } },
  icon: { verticalAlign: "bottom" },
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

function createData(taxes: string, amount: string) {
  return { taxes, amount };
}

const rows = [createData("State and local taxes", "$0.60")];

const TaxesTable = () => {
  const styles = useStyles();
  return (
    <TableContainer component={Paper} sx={styles.tableContainer}>
      <Table aria-label="taxes table">
        <TableHead>
          <TableRow>
            <TableCell>Taxes</TableCell>
            <TableCell>Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.taxes} sx={styles.tableRow}>
              <TableCell>
                <KeyboardArrowUpIcon sx={styles.icon} /> {row.taxes}&nbsp;
                <Link
                  href="#"
                  variant="body2"
                  underline="hover"
                  className="inside-table-cell"
                >
                  (View breakup)
                </Link>
              </TableCell>
              <TableCell>{row.amount}</TableCell>
            </TableRow>
          ))}
          <TableRow key={"none"} sx={styles.lastTableRow}>
            <TableCell>State and Local taxes</TableCell>
            <TableCell sx={styles.lastTableCell}>$0.60</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TaxesTable;
