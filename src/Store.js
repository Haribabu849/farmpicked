import { createStore } from "redux";

const initialState = {
  totalCartValue: 0,
};

const reducer = (state = initialState, action) => {
  if (action.type === "EREN") {
    return { ...state, totalCartValue: state.totalCartValue + 1 };
  } else if (action.type === "GRISHA") {
    return {
      ...state,
      [action.payload.name]:
        action.payload.name >= 1 ? action.payload.name + 1 : 1,
    };
  }
  return state;
};

export const store = createStore(reducer);
store.getState().something = 1;
