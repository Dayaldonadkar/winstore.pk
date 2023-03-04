import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default class Banner extends Component {
  render() {
    return (
      <Carousel showArrows={true} showThumbs={false}>
        <div className="relative">
          <img src="./Laptop.png"></img>
          <div className="absolute top-16 left-36 space-y-4 ">
            <div className="text-6xl flex flex-col items-start">
              <h1>
                Shop <span className="text-[#0AAEB9]">Computer</span>
              </h1>
              <h1 className="text-[#0AAEB9]">& Experience</h1>
            </div>

            <div className="text-xs flex flex-col items-start">
              <p>You cannot inspect quality into the product; it is already </p>
              <p>there.</p>
              <p>
                I am not a product of my circumstances. I am a product of my
              </p>
              <p>decisions.</p>
            </div>

            <button className="bg-[#14B1F0] flex justify-start text-sm px-10 text-white py-2 rounded-md">
              View More
            </button>
          </div>
        </div>
        <div>
          <img src="Laptop.png" />
        </div>
      </Carousel>
    );
  }
}
