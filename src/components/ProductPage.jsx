import { useParams } from "react-router-dom";
import { AllProducts } from "../Products";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  decreaseSingleCount,
  increaseSingleCount,
  removeItem,
} from "../Store";

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

  return (
    <div>
      <p>{item.itemName}</p>
      <p>{item.discount}</p>
      {!overallCount[index2]?.count ? (
        <span
          className="text-center bg-sky-400 mx-auto block max-w-[150px] rounded-full p-1 uppercase mt-2 hover:cursor-pointer"
          onClick={() => {
            const newItem = {
              itemName: id,
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
    </div>
  );
}

export default ProductPage;
