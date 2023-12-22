import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { pink } from "@mui/material/colors";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(true);
  const navigate = useNavigate();

  return (
    <nav className="flex justify-between items-center fixed w-[100%] left-0 top-0 pt-2 lg:hidden border-b-2 pl-2 pr-2 pb-2 shadow-sm shadow-pink-500 z-50 bg-white">
      <div className="flex space-x-4 items-center">
        <div onClick={() => setToggleMenu((prevState) => !prevState)}>
          {toggleMenu ? (
            <MenuIcon
              sx={{ color: pink[500], fontSize: 50 }}
              className="hover:cursor-pointer"
            />
          ) : (
            <CloseIcon
              sx={{ color: pink[500], fontSize: 50 }}
              className="hover:cursor-pointer"
            />
          )}
        </div>
        <div>
          <img src="./icons/home-icon.png" alt="home-icon" className="w-16" />
        </div>
      </div>
      <div>
        <div className="flex space-x-4">
          <div onClick={() => navigate("./cartpage")}>
            <ShoppingCartOutlinedIcon
              sx={{ color: pink[500], fontSize: 40 }}
              className="hover:cursor-pointer"
            />
          </div>
          <div>
            <Person2OutlinedIcon
              sx={{ color: pink[500], fontSize: 40 }}
              className="hover:cursor-pointer"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
