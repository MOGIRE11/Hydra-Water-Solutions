// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import user from "./assets/user.jpg";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import '/index.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Testimonials() {
  return (
    <div className="h-[60dvh]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="border border-blue-800">
          <div className="word border border-red-300 w-[70%]">
            
              <div className="swiper-content">
                <p>
                  Absolutely love it. My water is crystal clear and taste so
                  good. You can definitely tell water no chemicals like
                  chlorine... HIGHLY RECOMMEND
                </p>
              </div>

              <div className="flex items-end">
                <img
                  src={user}
                  alt=""
                  className="w-4 h-4 object-cover rounded-full"
                />
                <span className="">
                  <h3>Alex Thuo</h3>
                  <h4>Celestial Dental</h4>
                </span>
              </div>
          
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </div>
  );
}
