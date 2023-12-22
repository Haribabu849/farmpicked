import React, { useState } from "react";
import Button from "./Button";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

function Category({ categoryName, id }) {
  const [viewDetails, setViewDetails] = useState(false);
  return (
    <div
      className="overflow-hidden   hover:cursor-pointer rounded-lg"
      id={id}
      onMouseEnter={() => setViewDetails(true)}
      onMouseLeave={() => setViewDetails(false)}
    >
      <div className="relative border  overflow-hidden h-40 md:h-52 lg:h-60 flex items-center justify-start md:justify-center rounded-lg ">
        <img
          className="absolute -z-20 w-full h-full object-cover"
          src={`./images/${categoryName}.jpg`}
          alt="fruits
           and vegetables"
        />
        <p
          aria-label="overlay"
          className="absolute bg-gradient-to-r from-cyan-600  w-full -z-10 h-full"
        ></p>
        <div className="flex flex-col justify-center items-center space-y-2">
          <h1 className="text-white text-start pl-4 text-lg">{categoryName}</h1>
          {viewDetails && (
            <p className="ml-4 ">
              <Button data="View Details ">
                <ArrowForwardOutlinedIcon />
              </Button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Category;
