import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore from "swiper";
import Image from "next/image";
import pic1 from "../public/assets/Image1.svg";

SwiperCore.use([Navigation]);

const images = [
  {
    src: "",
    text: "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
    location: "Lahore, Pakistan",
    user: "Mike Taylor",
  },
  {
    src: "",
    text: "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
    location: "CEO of Red Button",
    user: "Chris Thomas",
  },
  {
    src: "",
    text: "After going through a number of sites, I had to settle for Jadoo because honestly it was a no brainer trying someone else",
    location: "Globetrotter",
    user: "Sarah Connor",
  },
];

const Testimonialslider = () => {
  const swiperRef = useRef(null);
  return (
    <>
      <div className="flex">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          direction="vertical"
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="h-96"
          //  ref={swiper}  backdrop-brightness-50
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="swiper-slide relative ">
              <div className="absolute top-0 left-0 ">
                <Image
                  width={70}
                  height={70}
                  src={pic1}
                  className="rounded-full shadow-lg 4xl:w-24 4xl:h-24"
                />
              </div>
              <div className="rounded-xl shadow-customTestimonial 3xl:py-10 mt-10 py-5 px-2 lg:px-8 4xl:px-12 4xl:py-8 m-3">
                <p className="my-8 text-sm 4xl:text-xl">“{image.text}”</p>
                <p className="font-bold  text-lg 4xl:text-2xl">{image.user}</p>
                <p className="4xl:text-xl">{image.location}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className=" space-y-10 mt-10  m-3">
          <button onClick={() => swiperRef.current.slidePrev()}>
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 48 48"
              fill="none"
              className="4xl:w-14 4xl:h-14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="48" height="48" fill="white" fill-opacity="0.01" />
              <path
                d="M13 30L25 18L37 30"
                stroke="#000000"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>{" "}
          <br className="hidden 4xl:block" />
          <button onClick={() => swiperRef.current.slideNext()}>
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 48 48"
              className="4xl:w-14 4xl:h-14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="48" height="48" fill="white" fill-opacity="0.01" />
              <path
                d="M37 18L25 30L13 18"
                stroke="#000000"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Testimonialslider;
