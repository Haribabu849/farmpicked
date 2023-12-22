import Button from "./components/Button";
import React from "react";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

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
      <div aria-label="categories"></div>
    </section>
  );
}

export default Home2;
