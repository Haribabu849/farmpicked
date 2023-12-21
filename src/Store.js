import { createStore } from "redux";

const initialState = {
  totalCartValue: 0,
  cartItems: [],
};

const reducer = (state = initialState, action) => {
  if (action.type === "INCREASE_COUNT") {
    return { ...state, totalCartValue: state.totalCartValue + 1 };
  }
  if (action.type === "DECREASE_COUNT") {
    return { ...state, totalCartValue: state.totalCartValue - 1 };
  }
  if (action.type === "ADD_CART_ITEM") {
    return {
      ...state,
      cartItems: [...state.cartItems, action.payload.cartItem],
    };
  }
  if (action.type === "REMOVE_ITEM") {
    return {
      ...state,
      cartItems: state.cartItems.filter((e) => {
        return e.itemName !== action.payload.id;
      }),
    };
  }
  if (action.type === "CLEAR_ITEM") {
    return {
      ...state,
      cartItems: [],
    };
  }
  if (action.type === "INCREASE_SINGLE_COUNT") {
    return {
      ...state,
      cartItems: state.cartItems.map((e) => {
        return e.itemName === action.payload.item
          ? { ...e, count: e.count + 1 }
          : e;
      }),
    };
  }
  if (action.type === "DECREASE_SINGLE_COUNT") {
    return {
      ...state,
      cartItems: state.cartItems.map((e) => {
        return e.itemName === action.payload.item
          ? { ...e, count: e.count - 1 }
          : e;
      }),
    };
  }
  return state;
};

export function addItem(item) {
  return { type: "ADD_CART_ITEM", payload: { cartItem: item } };
}
export function increaseSingleCount(item) {
  return { type: "INCREASE_SINGLE_COUNT", payload: { item } };
}
export function decreaseSingleCount(item) {
  return { type: "DECREASE_SINGLE_COUNT", payload: { item } };
}
export function removeItem(id) {
  return { type: "REMOVE_ITEM", payload: { id } };
}
export function clearItem() {
  return { type: "CLEAR_ITEM" };
}
export function increaseCount() {
  return { type: "INCREASE_COUNT" };
}
export function decreaseCount() {
  return { type: "DECREASE_COUNT" };
}

export const store = createStore(reducer);

console.log(store.getState());
