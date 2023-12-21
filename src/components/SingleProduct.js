import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

function SingleProduct({ category, itemName, discount, priceInDollars }) {
  const [count, setCount] = useState(0);

  const navigate = useNavigate();

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
      {!count ? (
        <span
          className="text-center bg-sky-400 mx-auto block max-w-[150px] rounded-full p-1 uppercase mt-2 hover:cursor-pointer"
          onClick={() => setCount(1)}
        >
          Add to cart
        </span>
      ) : (
        <div className="text-center bg-sky-400 mx-auto  max-w-[150px] rounded-full p-1 uppercase mt-2 hover:cursor-pointer flex justify-between overflow-hidden">
          <span
            onClick={() => setCount(count - 1)}
            className="bg-gray-400 w-6 scale-150 hover:bg-yellow-300"
          >
            -
          </span>
          <span>{count}</span>
          <span
            onClick={() => setCount(count + 1)}
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
