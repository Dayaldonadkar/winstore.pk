import React, { Component } from "react";

export default class Cards extends Component {
  details = [
    {
      id: 1,
      img: "Televison.png",
      Name: "Samsung 40N5300 S..",
      price1: "Rs.60,000",
      price2: "Rs.56,000",
    },
    {
      id: 2,
      img: "./WashingM.png",
      Name: "Samsung Automatic...",
      price1: "Rs.60,000",
      price2: "Rs.56,000",
    },
    {
      id: 3,
      img: "./AirC.png",
      Name: "SHaier HSU-12HFMAC ..",
      price1: "Rs.60,000",
      price2: "Rs.56,000",
    },
    {
      id: 4,
      img: "Roti.png",
      Name: "Anex Roti Maker ..",
      price1: "Rs.60,000",
      price2: "Rs.56,000",
    },
    {
      id: 5,
      img: "Ac2.png",
      Name: "Gree GS-12FITH.",
      price1: "Rs.60,000",
      price2: "Rs.56,000",
    },
    {
      id: 6,
      img: "Refri.png",
      Name: "Gree GS-12FITH.",
      price1: "Rs.60,000",
      price2: "Rs.56,000",
    },
  ];

  constructor() {
    super();
    this.state = {
      details: this.details,
    };
  }
  render() {
    return (
      <>
        <div className="flex justify-center">
          <div className="w-10/12 pt-10 pb-5">
            <h1 className="text-4xl">
              <span className="text-[#00B9C5]">New</span> Arrival
            </h1>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex w-10/12 justify-between space-x-2">
            {this.state.details.map((item) => {
              return (
                <div className="border px-5 py-4 space-y-2 ">
                  <h1 className="text-xs">Bin Bakar Electornics</h1>
                  <h1 className="text-[#00B9C5] text-sm">{item.Name}</h1>
                  <img src={item.img} alt="" />
                  <div className="flex gap-2 items-baseline">
                    <h1 className="text-sm">{item.price1}</h1>
                    <h1 className="text-xs line-through">{item.price2}</h1>
                  </div>
                  <button className="bg-[#00B9C5] w-full rounded-md py-1 text-sm">
                    Add to Cart
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
