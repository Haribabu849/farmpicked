import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearItem,
  decreaseSingleCount,
  increaseSingleCount,
  removeItem,
} from "./Store";

function CartPage() {
  const cartItems = useSelector((store) => store.cartItems);
  const dispatch = useDispatch();
  const total = cartItems.slice().reduce((acc, curr) => {
    return acc + curr.count;
  }, 0);

  console.log(cartItems);
  return (
    <div>
      {cartItems.map((e) => {
        return (
          <div key={e.itemName}>
            <div className="border border-black">
              <img
                src={`./${e.category}/${e.itemName}.jpg`}
                alt={e.itemName}
                width={200}
                height={200}
                className="contain"
              />
              <p>{e.itemName}</p>
              <p>{e.count}</p>
              <button onClick={() => dispatch(removeItem(e.itemName))}>
                x
              </button>
              <button
                onClick={() => {
                  dispatch(increaseSingleCount(e.itemName));
                }}
              >
                +
              </button>
              <button
                onClick={() => {
                  if (e.count > 1) {
                    dispatch(decreaseSingleCount(e.itemName));
                  }
                  if (e.count === 1) {
                    dispatch(removeItem(e.itemName));
                  }
                }}
              >
                -
              </button>
            </div>
          </div>
        );
      })}
      <button onClick={() => dispatch(clearItem())}>clear</button>
      <p>{total}</p>
    </div>
  );
}

export default CartPage;
