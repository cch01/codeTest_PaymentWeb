import { usersTableReducer } from "./usersTableReducer";
import { transactionsTableReducer } from "./transactionsTableReducer";
import { postTransactionReducer } from "./postTransactionReducer";
import { combineReducers } from "redux";
import { errorReducer } from "./errorReducer";

export default combineReducers({
  userTable: usersTableReducer,
  transactionTable: transactionsTableReducer,
  posts: postTransactionReducer,
  error: errorReducer
});
