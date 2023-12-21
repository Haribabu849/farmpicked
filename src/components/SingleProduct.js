import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import {
  addItem,
  decreaseSingleCount,
  increaseSingleCount,
  removeItem,
} from "../Store";

function SingleProduct({ category, itemName, discount, priceInDollars }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const overallCount = useSelector((store) => store.cartItems);
  const index = overallCount.findIndex((e) => {
    return e.itemName === itemName;
  });
  const index2 = index === -1 ? null : index;

  if (index2 === 0) {
    return (
      <div className=" w-1/2 relative rounded-md border-2  m-2 p-2 md:w-1/3 lg:w-1/4">
        <div
          onClick={() => navigate(`/productpage/${itemName}`)}
          className="hover:cursor-pointer"
        >
          <div className="w-full h-52 mt-4">
            <img
              src={`./${category}/${itemName}.jpg`}
              alt={itemName}
              className="object-contain h-full mx-auto"
            />
          </div>

          {discount && (
            <p className="absolute top-0 left-0 w-auto bg-pink-400 rounded-tl-md rounded-br-md p-1">
              {discount * 100}% off
            </p>
          )}
          <p>
            {(priceInDollars * 75 * (1 - discount)).toFixed(2)}{" "}
            {discount && (
              <span className=" line-through decoration-pink-400">
                {(priceInDollars * 75).toFixed(2)}
              </span>
            )}
          </p>
          <p>{itemName}</p>
        </div>
        {!overallCount[index2].count ? (
          <span
            className="text-center bg-sky-400 mx-auto block max-w-[150px] rounded-full p-1 uppercase mt-2 hover:cursor-pointer"
            onClick={() => {
              const newItem = {
                itemName: itemName,
                count: 1,
              };
              dispatch(addItem(newItem));
            }}
          >
            Add to cart
          </span>
        ) : (
          <div className="text-center bg-sky-400 mx-auto  max-w-[150px] rounded-full p-1 uppercase mt-2 hover:cursor-pointer flex justify-between overflow-hidden">
            <span
              onClick={() => {
                dispatch(decreaseSingleCount(itemName));
                if (overallCount[index2].count === 1) {
                  dispatch(removeItem(itemName));
                }
              }}
              className="bg-gray-400 w-6 scale-150 hover:bg-yellow-300"
            >
              -
            </span>
            <span>{overallCount[index2].count}</span>
            <span
              onClick={() => {
                dispatch(increaseSingleCount(itemName));
              }}
              className="bg-gray-400 w-6 scale-150 hover:bg-yellow-300"
            >
              +
            </span>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className=" w-1/2 relative rounded-md border-2  m-2 p-2 md:w-1/3 lg:w-1/4">
      <div
        onClick={() => navigate(`/productpage/${itemName}`)}
        className="hover:cursor-pointer"
      >
        <div className="w-full h-52 mt-4">
          <img
            src={`./${category}/${itemName}.jpg`}
            alt={itemName}
            className="object-contain h-full mx-auto"
          />
        </div>

        {discount && (
          <p className="absolute top-0 left-0 w-auto bg-pink-400 rounded-tl-md rounded-br-md p-1">
            {discount * 100}% off
          </p>
        )}
        <p>
          {(priceInDollars * 75 * (1 - discount)).toFixed(2)}{" "}
          {discount && (
            <span className=" line-through decoration-pink-400">
              {(priceInDollars * 75).toFixed(2)}
            </span>
          )}
        </p>
        <p>{itemName}</p>
      </div>
      {!index2 || overallCount[index2].count < 0 ? (
        <span
          className="text-center bg-sky-400 mx-auto block max-w-[150px] rounded-full p-1 uppercase mt-2 hover:cursor-pointer"
          onClick={() => {
            const newItem = {
              itemName: itemName,
              count: 1,
            };
            dispatch(addItem(newItem));
          }}
        >
          Add to cart
        </span>
      ) : (
        <div className="text-center bg-sky-400 mx-auto  max-w-[150px] rounded-full p-1 uppercase mt-2 hover:cursor-pointer flex justify-between overflow-hidden">
          <span
            onClick={() => {
              dispatch(decreaseSingleCount(itemName));
              if (overallCount[index2].count === 1) {
                dispatch(removeItem(itemName));
              }
            }}
            className="bg-gray-400 w-6 scale-150 hover:bg-yellow-300"
          >
            -
          </span>
          <span>{overallCount[index2].count}</span>
          <span
            onClick={() => {
              dispatch(increaseSingleCount(itemName));
            }}
            className="bg-gray-400 w-6 scale-150 hover:bg-yellow-300"
          >
            +
          </span>
        </div>
      )}
    </div>
  );
}

export default SingleProduct;
