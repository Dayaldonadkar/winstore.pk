import React, { Component } from "react";

import SearchIcon from "@mui/icons-material/Search";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import HeadsetIcon from "@mui/icons-material/Headset";
import Person2Icon from "@mui/icons-material/Person2";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default class Navbar extends Component {
  render() {
    return (
      <div className="flex justify-center bg-[#03484D]">
        <div className=" flex text-white items-center justify-between py-3 w-11/12">
          <img src="Winlogo.png" alt="winlogo" />
          <div className="bg-white rounded-md ">
            <select
              name="Categories"
              className="h-10 text-xs bg-white text-[#ABA3A3] px-7 rounded-md "
            >
              <option className="" value="All categories">
                All Categories
              </option>
              <option value="Footwear">Footwear</option>
              <option value="Mobile">Mobile</option>
              <option value="Cars">Cars</option>
            </select>

            <input
              className="h-10 w-96 placeholder:pl-10 text-base "
              type="text"
              placeholder="Search for products"
            />
            <SearchIcon />
          </div>
          <div className="text-xs space-y-1 ">
            <p className="items center">
              <AirportShuttleIcon fontSize="small" className="text-white" />
              Orders and Tracking
            </p>
            <div className="flex items-center  ">
              <img className="w-4 h-3" src="Pakistan.png" />
              <p>Delivery in Pakistan</p>
            </div>
            <div className="flex items-center">
              <img className="w-3 h-3" src="Vector.png" alt="return" />
              <p>Return</p>
            </div>
          </div>
          <div className="text-xs space-y-1  ">
            <p>Call Now</p>
            <p className="text-sm">
              <HeadsetIcon />
              +011 5827918
            </p>
            <p>Sign in</p>
          </div>

          <div className="flex space-x-10 font-san">
            <Person2Icon />
            <FavoriteBorderIcon />
            <h1>
              <ShoppingCartIcon />
              Cart
            </h1>
          </div>
        </div>
      </div>
    );
  }
}
