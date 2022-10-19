import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

export default function SliderComponent() {
  return (
    <>
      <div className="carousel rounded-box">
        <div className="carousel-item">
          <img src="https://placeimg.com/400/300/arch" alt="Burger" />
        </div>
        <div className="carousel-item">
          <img src="https://placeimg.com/400/300/arch" alt="Burger" />
        </div>
        <div className="carousel-item">
          <img src="https://placeimg.com/400/300/arch" alt="Burger" />
        </div>
        <div className="carousel-item">
          <img src="https://placeimg.com/400/300/arch" alt="Burger" />
        </div>
        <div className="carousel-item">
          <img src="https://placeimg.com/400/300/arch" alt="Burger" />
        </div>
        <div className="carousel-item">
          <img src="https://placeimg.com/400/300/arch" alt="Burger" />
        </div>
        <div className="carousel-item">
          <img src="https://placeimg.com/400/300/arch" alt="Burger" />
        </div>
      </div>
      {/* <Swiper
                direction={"vertical"}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img
                        className="object-fill w-40 h-50"
                        src="https://cdn.pixabay.com/photo/2022/03/20/15/40/nature-7081138__340.jpg"
                        alt="image slide 1"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-fill w-40 h-50"
                        src="https://cdn.pixabay.com/photo/2022/07/24/17/55/wind-energy-7342177__340.jpg"
                        alt="image slide 2"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-fill w-40 h-50"
                        src="https://cdn.pixabay.com/photo/2022/07/26/03/35/jogger-7344979__340.jpg"
                        alt="image slide 3"
                    />
                </SwiperSlide>
            </Swiper> */}
    </>
  );
}
