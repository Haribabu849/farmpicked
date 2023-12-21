import React, { useState } from "react";
import SingleProduct from "./components/SingleProduct";
import { AllProducts } from "./Products";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [products, setProducts] = useState(AllProducts);
  const [search, setSearch] = useState("");
  const [showAllProducts, setShowAllProducts] = useState(false);
  console.log(search.length);
  const submitHandler = (e) => {
    e.preventDefault();
    if (!search) {
      return;
    }
    setShowAllProducts(true);

    setProducts(
      AllProducts.filter((e) => {
        return e.itemName.toLowerCase().includes(search.trim().toLowerCase());
      })
    );
    setSearch("");
  };

  return (
    <div className="flex flex-wrap items-center">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="border-2 "
          id="search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button type="submit">submit</button>
        {showAllProducts && (
          <button
            onClick={() => {
              setShowAllProducts(false);
              setProducts(AllProducts);
            }}
          >
            show all products
          </button>
        )}
      </form>
      <p onClick={() => navigate("/cartpage")} className="fixed top-0 right-10">
        cart page
      </p>

      {products.map((e) => {
        return <SingleProduct {...e} />;
      })}
    </div>
  );
}

export default Home;
