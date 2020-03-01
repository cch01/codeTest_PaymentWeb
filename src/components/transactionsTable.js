import React, { useEffect } from "react";
import {
  TableContainer,
  TableBody,
  Table,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Typography
} from "@material-ui/core";
import { useStyles } from "./styles/tablesStyles";
import { useSelector, useDispatch } from "react-redux";
import { fetchTransactionsTable } from "../redux/actions";


export default () => {

  const classes = useStyles();
  const dispatch = useDispatch();

  const transactions = useSelector(
    state => state.transactionTable.transactions
  );
  const table = transactions.map(row => {
    return (
      <TableRow key={row.link_id}>
        <TableCell component="th" scope="row">
          {row.link_id}
        </TableCell>
        <TableCell align="right">{row.payer_id}</TableCell>
        <TableCell align="right">{row.payee_id}</TableCell>
        <TableCell align="right">{row.amount}</TableCell>
      </TableRow>
    );
  });

  const postedCount = useSelector(state => state.posts.postedCount);
  useEffect(() => {
    dispatch(fetchTransactionsTable());
  }, [postedCount]);



  return (
    <TableContainer
      component={Paper}
      elevation={9}
      className={classes.container}
    >
      <Typography variant="h6">Transactions</Typography>
      <Table className={classes.table} size="small">
        <TableHead>
          <TableRow>
            <TableCell>link_id</TableCell>
            <TableCell align="right">Payer_id</TableCell>
            <TableCell align="right">Payee_id</TableCell>
            <TableCell align="right">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{table}</TableBody>
      </Table>
    </TableContainer>
  );
};
