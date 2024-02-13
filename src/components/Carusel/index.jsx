import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import Suv from "../Suv";
import Siv from "../Suv";

// install Swiper modules

export default function Carusel() {
  return (
    <div className="w-full  flex m-auto justify-center">
      <div className=" w-full mx-auto">
        <Swiper
          loop={true}
          className="swiper-my md:w-[95%] xl:w-[63%] lg:w-[90%] z-0  md:mt-[-370px] mt-[-490px] xl:mt-[-370px]  lg:mt-[-350px]"
          navigation={true}
          modules={[Navigation]}
        >
          <SwiperSlide>
            <Siv />
          </SwiperSlide>
          <SwiperSlide>
            <Siv />
          </SwiperSlide>
          <SwiperSlide>
            <Siv />
          </SwiperSlide>
          <SwiperSlide>
            <Siv />
          </SwiperSlide>
          <SwiperSlide>
            <Siv />
          </SwiperSlide>
          <SwiperSlide>
            <Siv />
          </SwiperSlide>
        </Swiper>

        <div className="bbgbf w-full h-0 my-11"></div>
      </div>
    </div>
  );
}

// import React, { useState } from 'react';

// const Carousel = ({ images }) => {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const goToNextSlide = () => {
//         const newIndex = (currentIndex + 1) % images.length;
//         setCurrentIndex(newIndex);
//     };

//     const goToPrevSlide = () => {
//         const newIndex = (currentIndex - 1 + images.length) % images.length;
//         setCurrentIndex(newIndex);
//     };

//     return (
//         <div className="carousel-container flex">
//             <button onClick={goToPrevSlide}>Previous</button>
//             <button onClick={goToNextSlide} style={{ position: 'absolute', marginLeft: '800px', marginTop: '300px' }}>Next</button>
//             <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />

//         </div>
//     );
// };

// export default Carousel;
