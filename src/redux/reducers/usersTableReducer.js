import { FETCH_USER_TABLE } from "../actions/types";

const initialState = {
  users: []
};

export const usersTableReducer = (state = initialState, action) => {
  switch (action.type) {

    case FETCH_USER_TABLE:
      return {
        users: action.payload === state.users
          ? state.users
          : action.payload
      };

    default:
      return state;
  }
};
