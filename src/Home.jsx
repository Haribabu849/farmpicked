import React from "react";
import SingleProduct from "./components/SingleProduct";
import { AllProducts } from "./Products";
import { useNavigate } from "react-router-dom";
const productOne = AllProducts[0];
const productTwo = AllProducts[1];

function Home() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-wrap">
      <p onClick={() => navigate("/cartpage")}>cart page</p>
      <SingleProduct {...productOne} />
      <SingleProduct {...productTwo} />
    </div>
  );
}

export default Home;
