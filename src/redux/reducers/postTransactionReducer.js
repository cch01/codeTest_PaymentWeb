import { POST_TRANSACTION } from "../actions/types";

const initialState = {
  postedCount: 0
};


export const postTransactionReducer = (state = initialState, action) => {
  switch (action.type) {

    case POST_TRANSACTION:
      return {
        postedCount: state.postedCount + 1
      };

    default:
      return state;
  }
};
