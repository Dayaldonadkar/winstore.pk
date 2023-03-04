import React, { Component } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
export default class Carousel extends Component {
  render() {
    return (
      <div className="flex justify-center">
        <div className="w-10/12 my-10 bg-white px-10 pt-5 pb-10 rounded-lg">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={100}
            slidesPerView={4}
            navigation
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <img src="Laptop1.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="Laptop2.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="Laptop3.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="Laptop4.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="Laptop1.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="Laptop2.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="Laptop3.png" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    );
  }
}
