import { FETCH_SMURFS, ADD_SMURFS } from "../actions/index";

const initialState = {
  smurfs: []
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURFS:
      return {
        ...state,smurfs: action.payload
      };
    case ADD_SMURFS:
      return {
        ...state, smurfs: action.payload
      };
    default:
      return state;
  }
};
