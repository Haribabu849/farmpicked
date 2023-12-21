import React from "react";
import SingleProduct from "./components/SingleProduct";
import { AllProducts } from "./Products";
const productOne = AllProducts[0];
const productTwo = AllProducts[1];

function Home() {
  return (
    <div className="flex flex-wrap">
      <SingleProduct {...productOne} />
      <SingleProduct {...productTwo} />
      <SingleProduct {...AllProducts[3]} />
      <SingleProduct {...AllProducts[4]} />
      <SingleProduct {...AllProducts[5]} />
      <SingleProduct {...AllProducts[6]} />
      <SingleProduct {...AllProducts[7]} />
    </div>
  );
}

export default Home;
