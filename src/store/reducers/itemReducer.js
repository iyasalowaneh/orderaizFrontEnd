//actions
import * as actionTypes from "../actions/types";

const initialState = {
  items: [],
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ITEMS:
      return {
        ...state,
        items: action.payload,
      };
    case actionTypes.CREATE_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload.newItem],
      };

    default:
      return state;
  }
};
export default itemReducer;
