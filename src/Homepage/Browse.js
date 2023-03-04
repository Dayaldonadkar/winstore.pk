import React, { Component } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

export default class Browse extends Component {
  render() {
    return (
      <div className="flex justify-center bg-[#0E3B3E] text-white">
        <div className=" flex justify-between w-11/12 py-4">
          <div className="flex text-sm items-center space-x-5">
            <MenuIcon className="" />
            <h1 className="text-lg">Browse by Category</h1>
            <h1>Home</h1>
            <h1>Easy Monthly Installments</h1>
            <h1>Shop by Brands</h1>
            <h1>Become Easy Vendor</h1>
          </div>

          <div className="space-x-7">
            <FacebookIcon fontSize="large" />
            <TwitterIcon fontSize="large" />
            <LinkedInIcon fontSize="large" />
            <InstagramIcon fontSize="large" />
          </div>
        </div>
      </div>
    );
  }
}
