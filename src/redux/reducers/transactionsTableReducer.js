import { FETCH_TRANSACTION_TABLE } from "../actions/types";

const initialState = {
  transactions: []
};

export const transactionsTableReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TRANSACTION_TABLE:
      return {
        transactions:
          state.transactions === action.payload
            ? state.transactions
            : action.payload
      };

    default:
      return state;
  }
};
