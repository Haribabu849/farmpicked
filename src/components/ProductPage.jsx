import { useParams } from "react-router-dom";
import { AllProducts } from "../Products";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  decreaseSingleCount,
  increaseSingleCount,
  removeItem,
} from "../Store";

import SingleProduct2 from "./SingleProduct2";

function ProductPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const index = AllProducts.findIndex((e) => {
    return e.itemName === id;
  });
  const item = AllProducts[index];
  console.log(item);
  const overallCount = useSelector((store) => store.cartItems);
  const index2 = overallCount.findIndex((e) => {
    return e.itemName === id;
  });
  const relatedProducts = AllProducts.filter((e) => {
    return e.subcategory === item.subcategory && e.itemName !== item.itemName;
  });

  return (
    <div className="relative">
      <div className="flex flex-col md:flex-row md:justify-start">
        <div className="w-full h-72 md:h-80 lg:h-96 md:w-1/2 md:border-r-2 md:border-pink-500">
          <img
            src={`../${item.category}/${item.itemName}.jpg`}
            alt={item.itemName}
            className="object-contain h-full"
          />
        </div>
        <div className="flex flex-col  md:justify-center md:ml-6 md:space-y-6 space-y-4 ">
          <p className="text-3xl md:text-4xl md:font-bold">{item.itemName}</p>
          <p className="hidden md:block">{item.details.description}</p>

          <div>
            {item.discount && (
              <p className="absolute top-1 left-1 w-auto bg-gradient-to-r from-pink-500 rounded-tl-md rounded-br-md p-1">
                {item.discount * 100}% off
              </p>
            )}
            <p className="  text-2xl text-pink-500 font-bold">
              {parseInt(item.priceInDollars * 75 * (1 - item.discount))} &#8377;{" "}
              {item.discount && (
                <sup className=" line-through text-base text-gray-400">
                  {parseInt(item.priceInDollars * 75)} &#8377;
                </sup>
              )}
            </p>
          </div>
          {!overallCount[index2]?.count ? (
            <span
              className="text-center bg-sky-400  block max-w-[150px] rounded-full p-1 uppercase  hover:cursor-pointer "
              onClick={() => {
                const newItem = {
                  itemName: id,
                  count: 1,
                  category: item.category,
                };
                dispatch(addItem(newItem));
              }}
            >
              Add to cart
            </span>
          ) : (
            <div className="text-center bg-sky-400  max-w-[150px] rounded-full p-1 uppercase  hover:cursor-pointer flex justify-between overflow-hidden">
              <span
                onClick={() => {
                  dispatch(decreaseSingleCount(id));
                  if (overallCount[index2].count === 1) {
                    dispatch(removeItem(id));
                  }
                }}
                className="bg-gray-400 w-6 scale-150 hover:bg-yellow-300"
              >
                -
              </span>
              <span>{overallCount[index2].count}</span>
              <span
                onClick={() => {
                  dispatch(increaseSingleCount(id));
                }}
                className="bg-gray-400 w-6 scale-150 hover:bg-yellow-300"
              >
                +
              </span>
            </div>
          )}
          <p className="">
            <span className="bg-gray-300 p-1 px-2  capitalize">category</span> :{" "}
            {item.category}
          </p>
          <p>
            <span className="bg-gray-300 p-1 px-2  capitalize">
              sub-category
            </span>{" "}
            : {item.subcategory}
          </p>
        </div>
      </div>
      <hr className="mt-4" />
      <h1 className="uppercase text-2xl my-6">details</h1>
      <p className="my-6">{item.details.description}</p>
      <hr />
      <h1 className="uppercase text-2xl my-6">Related Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2  lg:grid-cols-3 xl:grid-cols-4">
        {relatedProducts.map((e) => {
          return <SingleProduct2 {...e} />;
        })}
      </div>
    </div>
  );
}

export default ProductPage;
