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
import { fetchUsersTable } from "../redux/actions";


export default () => {

  const classes = useStyles();
  const dispatch = useDispatch();

  const users = useSelector(state => state.userTable.users);
  const table = users.map(row => {
    return (
      <TableRow key={row.user_id}>
        <TableCell component="th" scope="row">
          {row.user_id}
        </TableCell>
        <TableCell align="right">{row.balance}</TableCell>
      </TableRow>
    );
  });

  const postedCount = useSelector(state => state.posts.postedCount);

  useEffect(() => {
    dispatch(fetchUsersTable());
  }, [postedCount]);

  return (
    <TableContainer
      component={Paper}
      elevation={9}
      className={classes.container}
    >
      <Typography className={classes.title} variant="h6">
        Users
      </Typography>
      <Table className={classes.table} size="small">
        <TableHead>
          <TableRow>
            <TableCell>User_id</TableCell>
            <TableCell align="right">Balance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{table}</TableBody>
      </Table>
    </TableContainer>
  );
};
