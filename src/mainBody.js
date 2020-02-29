import React, { Fragment } from "react";
import { Container, Paper } from "@material-ui/core";
import AppBar from "./components/Banner";
import TransactionForm from "./components/transactionForm";
import TransactionsTable from "./components/transactionsTable";
import UsersTable from "./components/usersTable";
import AlertDialog from "./components/alertDialog";
export default () => {
  return (
    <Fragment>
      <AppBar />
      <Container style={{ marginTop: 20, marginBottom: 20 }}>
        <AlertDialog />
        <Paper style={{ padding: 15 }}>
          <TransactionForm />
          <UsersTable />
          <TransactionsTable />
        </Paper>
      </Container>
    </Fragment>
  );
};
