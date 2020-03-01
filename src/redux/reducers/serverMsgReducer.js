import { SERVER_MSG } from "../actions/types";

const initialState = {
  msg: "",
  showed: 0
};

export const serverMsgReducer = (state = initialState, action) => {
  switch (action.type) {

    case SERVER_MSG:
      return {
        msg: action.payload,
        showed: state.showed + 1
      };

    default:
      return state;
  }
};
