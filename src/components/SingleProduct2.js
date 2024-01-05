import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import {
  addItem,
  decreaseSingleCount,
  increaseSingleCount,
  removeItem,
} from "../Store";

function SingleProduct2({ category, itemName, discount, priceInDollars }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const overallCount = useSelector((store) => store.cartItems);
  const index = overallCount.findIndex((e) => {
    return e.itemName === itemName;
  });
  const index2 = index === -1 ? null : index;

  if (index2 === 0) {
    return (
      <div
        className={` relative rounded-md border-2  m-2 p-3 pb-6 shadow-md shadow-cyan-500 before:content-[""] before:w-full before:h-0.5  before:absolute before:bg-pink-500  before:top-0 before:left-0 before:scale-0 hover:before:scale-100 transition-colors before:duration-75 before:origin-left after:content-[""] after:w-full after:h-0.5  after:absolute after:bg-pink-500 after:-bottom-[2px] after:left-0 after:scale-0 hover:after:scale-100  after:duration-75 after:delay-[225ms] after:origin-right`}
        id="animation"
      >
        <span className="animation1"></span>
        <span className="animation2"></span>
        <div
          onClick={() => navigate(`/productpage/${itemName}`)}
          className="hover:cursor-pointer"
        >
          <div className="w-full h-52 mt-4">
            <img
              src={`../${category}/${itemName}.jpg`}
              alt={itemName}
              className="object-contain h-full mx-auto "
            />
          </div>

          {discount && (
            <p className="absolute top-1 left-1 w-auto bg-gradient-to-r from-pink-500 rounded-tl-md rounded-br-md p-1">
              {discount * 100}% off
            </p>
          )}
          <p className=" font-medium">
            {parseInt(priceInDollars * 75 * (1 - discount))} &#8377;{" "}
            {discount && (
              <span className=" line-through decoration-red-500 decoration-2 border rounded-md border-black ml-3 p-1 px-2 bg-gradient-to-l from-slate-400">
                {parseInt(priceInDollars * 75)} &#8377;
              </span>
            )}
          </p>
          <p className="my-4 font-semibold tracking-wide uppercase text-pink-500 ">
            {itemName}
          </p>
        </div>
        {!overallCount[index]?.count ? (
          <span
            className="text-center bg-gradient-to-r from-cyan-500 mx-auto block max-w-[150px]  p-1 uppercase mt-2 hover:cursor-pointer shadow-btn"
            onClick={() => {
              const newItem = {
                itemName: itemName,
                count: 1,
                category: category,
              };
              dispatch(addItem(newItem));
            }}
          >
            Add to cart
          </span>
        ) : (
          <div className="text-center bg-gradient-to-l from-cyan-500 mx-auto  max-w-[150px]  p-1 uppercase mt-2 hover:cursor-pointer flex justify-between overflow-hidden shadow-btn">
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
            <span className="font-medium">{overallCount[index2].count}</span>
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
    <div
      className={` relative rounded-md border-2  m-2 p-3 pb-6 shadow-md shadow-cyan-500 before:content-[""] before:w-full before:h-0.5  before:absolute before:bg-pink-500  before:top-0 before:left-0 before:scale-0 hover:before:scale-100 transition-colors before:duration-75 before:origin-left after:content-[""] after:w-full after:h-0.5  after:absolute after:bg-pink-500 after:-bottom-[2px] after:left-0 after:scale-0 hover:after:scale-100  after:duration-75 after:delay-[225ms] after:origin-right`}
      id="animation"
    >
      <span className="animation1"></span>
      <span className="animation2"></span>
      <div
        onClick={() => navigate(`/productpage/${itemName}`)}
        className="hover:cursor-pointer"
      >
        <div className="w-full h-52 mt-4">
          <img
            src={`../${category}/${itemName}.jpg`}
            alt={itemName}
            className="object-contain h-full mx-auto"
          />
        </div>

        {discount && (
          <p className="absolute top-1 left-1 w-auto bg-gradient-to-r from-pink-500 rounded-tl-md rounded-br-md p-1">
            {discount * 100}% off
          </p>
        )}
        <p className=" font-medium">
          {parseInt(priceInDollars * 75 * (1 - discount))} &#8377;{" "}
          {discount && (
            <span className=" line-through decoration-red-500 decoration-2 border rounded-md border-black ml-3 p-1 px-2 bg-gradient-to-l from-slate-400">
              {parseInt(priceInDollars * 75)} &#8377;
            </span>
          )}
        </p>
        <p className="my-4 font-semibold tracking-wide uppercase text-pink-500 ">
          {itemName}
        </p>
      </div>
      {!index2 || overallCount[index2].count < 0 ? (
        <span
          className="text-center bg-gradient-to-r from-cyan-500 mx-auto block max-w-[150px]  p-1 uppercase mt-2 hover:cursor-pointer shadow-btn font-medium"
          onClick={() => {
            const newItem = {
              itemName: itemName,
              count: 1,
              category: category,
            };
            dispatch(addItem(newItem));
          }}
        >
          Add to cart
        </span>
      ) : (
        <div className="text-center bg-gradient-to-l from-cyan-500 mx-auto  max-w-[150px]  p-1 uppercase mt-2 hover:cursor-pointer flex justify-between overflow-hidden shadow-btn">
          <span
            onClick={() => {
              dispatch(decreaseSingleCount(itemName));
              if (overallCount[index2].count === 1) {
                dispatch(removeItem(itemName));
              }
            }}
            className="bg-gray-400 w-6 scale-150 hover:bg-yellow-300 "
          >
            -
          </span>
          <span className="font-medium">{overallCount[index2].count}</span>
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

export default SingleProduct2;
