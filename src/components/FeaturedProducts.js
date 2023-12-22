import React from "react";
import { AllProducts } from "../Products";
import SingleProduct from "./SingleProduct";
const products = [1, 3, 5, 9, 12, 16, 22, 25, 14, 32];

function FeaturedProducts() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2  lg:grid-cols-3 xl:grid-cols-4">
        {products.map((e) => {
          return <SingleProduct {...AllProducts[e + 3]} />;
        })}
      </div>
    </div>
  );
}

export default FeaturedProducts;
