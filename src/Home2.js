import Button from "./components/Button";
import React from "react";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import Category from "./components/Category";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CategoryIcon from "@mui/icons-material/Category";
import TrendingProducts from "./components/TrendingProducts";
import FeaturedProducts from "./components/FeaturedProducts";

function Home2() {
  return (
    <section>
      <div
        className="flex space-y-12 flex-col bg-cover p-8 relative md:space-y-16 lg:space-y-20 bg-center rounded-lg overflow-hidden "
        id="background-image"
        aria-label="hero"
      >
        <p
          className="absolute w-full h-full bg-gradient-to-r  from-slate-700 top-0 left-0 "
          aria-label="overlay"
        ></p>
        <h1 className="font-bold text-2xl max-w-sm md:max-w-md lg:max-w-7xl text-white z-10 ">
          Stay Home, & Get Your Daily Need's
        </h1>
        <p className="text-white z-10">
          Start your daily shopping with Jamcart.
        </p>
        <Button data="Order Now" maxWidth="200px">
          <ArrowForwardOutlinedIcon />
        </Button>
      </div>
      <h1 className="mt-8 text-2xl uppercase pl-2">Top Categories</h1>
      <div aria-label="categories" className="mt-8">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 grid-rows-2">
          <Category categoryName="Fruits and Vegetables" id="category1" />
          <Category categoryName="beverages" id="category2" />
          <Category categoryName="breakfast" id="category3" />
          <Category categoryName="dairy" id="category4" />
        </div>
      </div>
      <div className="my-8">
        <Button data="See All Categories" maxWidth="300px">
          <ArrowForwardOutlinedIcon />
        </Button>
      </div>
      <h1 className="my-8 text-2xl uppercase pl-2">Trending Products</h1>
      <TrendingProducts />
      <h1 className="my-8 text-2xl uppercase pl-2">featured products</h1>
      <FeaturedProducts />
      <div
        aria-label="How it works "
        className="border border-black p-2 my-8 rounded-lg"
      >
        <h1 className="text-2xl pl-2 text-center">How It Works</h1>
        <p className="pl-2 my-4 text-center">
          Luxury goods straight from the same manufacturers as your favorite
          brands.
        </p>
        <div className="flex flex-col space-y-4 md:flex-row md:flex-wrap md:space-y-0 items-center my-4 mb-8">
          <HowItWorksDetails
            heading="Select Your order"
            paragraph="It is a long established fact that a reader will be distracted."
          >
            <ShoppingBagIcon sx={{ fontSize: 40 }} />
          </HowItWorksDetails>
          <HowItWorksDetails
            heading="Preparing your cart items"
            paragraph="It is a long established fact that a reader will be distracted."
          >
            <CategoryIcon sx={{ fontSize: 40 }} />
          </HowItWorksDetails>
          <HowItWorksDetails
            heading="Delivery To Your Home"
            paragraph="It is a long established fact that a reader will be distracted."
          >
            <LocalShippingIcon sx={{ fontSize: 40 }} />
          </HowItWorksDetails>
        </div>
      </div>
      <div
        className="flex space-y-12 flex-col bg-cover p-8 relative md:space-y-16 lg:space-y-20 bg-center rounded-lg overflow-hidden my-8"
        id="background2"
        aria-label="second-hero"
      >
        <p
          className="absolute w-full h-full bg-gradient-to-r  from-slate-700 top-0 left-0 "
          aria-label="overlay"
        ></p>
        <h1 className="font-bold text-2xl max-w-sm md:max-w-md lg:max-w-7xl text-white z-10 ">
          Fast, Free Shipping, Contactless Delivery.
        </h1>
        <p className="text-white z-10">Try it now, risk free!</p>
        <Button data="Shop Now" maxWidth="200px">
          <ArrowForwardOutlinedIcon />
        </Button>
      </div>
    </section>
  );
}

export default Home2;

function HowItWorksDetails({ children, heading, paragraph }) {
  return (
    <div className="flex flex-row items-center md:pl-4 md:w-1/2 lg:w-1/3 md:flex-col md:space-y-2">
      {children}
      <div className="flex flex-col space-y-2 pl-2">
        <h1 className="text-xl font-normal md:text-center">{heading}</h1>
        <p className="md:text-center">{paragraph}</p>
      </div>
    </div>
  );
}
