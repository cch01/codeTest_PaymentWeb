import { usersTableReducer } from "./usersTableReducer";
import { transactionsTableReducer } from "./transactionsTableReducer";
import { postTransactionReducer } from "./postTransactionReducer";
import { combineReducers } from "redux";
import { serverMsgReducer } from "./serverMsgReducer";

export default combineReducers({
  userTable: usersTableReducer,
  transactionTable: transactionsTableReducer,
  posts: postTransactionReducer,
  serverMsg: serverMsgReducer
});
