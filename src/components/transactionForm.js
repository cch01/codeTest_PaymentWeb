import React, { useState } from "react";
import { TextField, Button, Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { postTransaction } from "../redux/actions";
import { useStyles } from "./styles/formStyles";

export default () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [transactionObj, setTransactionObj] = useState({
    payer_user_id: 0,
    payee_user_id: 0,
    amount: 0
  });

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(postTransaction(transactionObj));
  };

  const handleChange = event => {
    event.preventDefault();
    setTransactionObj({
      ...transactionObj,
      [event.target.name]: Number(event.target.value)
    });
  };

  return (
    <form onSubmit={event => handleSubmit(event)}>
      <Typography className={classes.title} variant="h6">
        New Transaction
      </Typography>

      <TextField
        label="Payer"
        name="payer_user_id"
        variant="filled"
        onChange={handleChange}
        className={classes.textField}
      />
      <br />
      <TextField
        className={classes.textField}
        label="Payee"
        name="payee_user_id"
        variant="filled"
        onChange={handleChange}
      />
      <br />
      <TextField
        className={classes.textField}
        label="Amount"
        name="amount"
        variant="filled"
        onChange={handleChange}
      />
      <br />
      <Button
        color="secondary"
        variant="outlined"
        className={classes.button}
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
};
