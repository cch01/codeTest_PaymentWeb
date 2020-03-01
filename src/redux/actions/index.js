import {
  FETCH_USER_TABLE,
  FETCH_TRANSACTION_TABLE,
  POST_TRANSACTION,
  SERVER_MSG
} from "./types";


export const fetchUsersTable = () => dispatch => {
  fetch("http://localhost:3002/api/get/users", {
    method: "GET"
  })
    .then(response => {
      if (!response.ok)
        response.text()
          .then(msg => dispatch({ type: SERVER_MSG, payload: msg }));

      else return response.json();
    })
    .then(result => {
      dispatch({ type: FETCH_USER_TABLE, payload: result });
    })
    .catch(err => console.log(err));
};


export const fetchTransactionsTable = () => dispatch => {
  fetch("http://localhost:3002/api/get/transactions", {
    method: "GET"
  })
    .then(response => {
      if (!response.ok)
        response.text()
          .then(msg => dispatch({ type: SERVER_MSG, payload: msg }));

      else return response.json();
    })
    .then(result => {
      dispatch({ type: FETCH_TRANSACTION_TABLE, payload: result });
    })
    .catch(err => console.log(err));
};


export const postTransaction = transObj => dispatch => {
  fetch("http://localhost:3002/api/post/transaction", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({ transaction: transObj })
  })
    .then(response => {
      response.text()
        .then(msg => dispatch({ type: SERVER_MSG, payload: msg }));

      if (response.ok) dispatch({ type: POST_TRANSACTION });
    })
    .catch(err => console.log(err));
};
