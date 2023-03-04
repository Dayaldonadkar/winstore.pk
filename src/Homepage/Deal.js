import React, { Component } from "react";

export default class Deal extends Component {
  render() {
    return (
      <div className="flex justify-center bg-[#F6F6F6] py-10 ">
        <div className="w-10/12 flex justify-between">
          <div className="text-4xl w-3/12 space-y-10">
            <div>
              <h1 className="">
                Deals of <span className="text-[#00B9C5]">The</span>
              </h1>
              <h1 className="text-[#00B9C5]">Day</h1>
            </div>
            <h1 className="text-sm  ">
              You cannot inspect quality into the product; it is already there.
              I am not a product of my circumstances. I am a product of my
              decisions.
            </h1>

            <button className="text-sm bg-[#14B1F0] text-white px-5 py-2 rounded-md font-thin ">
              View More
            </button>
          </div>

          <div className="flex space-x-28">
            <div className="relative bg-white font-light py-3 pl-3 shadow-slate-900 shadow-lg rounded-lg">
              <img className="" src="Iphone.png" alt="" />
              <div className="absolute bottom-0 right-5">
                <h1 className="text-[#15ADB7] ">Add to Cart</h1>
                <p>Rs 30,000</p>
              </div>
            </div>

            <div className="relative bg-white py-3 font-light shadow-slate-600 shadow-lg rounded-lg">
              <img src="Smartwatch.png" alt="" />
              <div className="absolute bottom-0 right-5 ">
                <h1 className="text-[#15ADB7]">Add to Cart</h1>
                <p>Rs 30,000</p>
              </div>
            </div>

            <div className="relative bg-white py-3 pr-4 font-light shadow-slate-600 shadow-lg rounded-lg">
              <img className="" src="Datac.png" alt="" />
              <div className="absolute bottom-0 right-3 ">
                <h1 className="text-[#15ADB7]">Add to Cart</h1>
                <p>Rs 30,000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
