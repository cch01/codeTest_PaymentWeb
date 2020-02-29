import { SERVER_MSG } from "../actions/types";

const initialState = {
  errorMsg: "",
  showed: 0
};

export const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SERVER_MSG:
      return {
        errorMsg: action.payload,
        showed: state.showed + 1
      };

    default:
      return state;
  }
};
