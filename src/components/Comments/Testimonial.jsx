import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import circle1 from "../../assets/circle1.png";
import circle2 from "../../assets/circle2.png";
import circle3 from "../../assets/circle3.png";
import circle from "../../assets/circle.png";
import man1 from "../../assets/man1.png";

import "./Testimonial.css";

const Testimonial = () => {
  const pagination = {
    clickable: true,
  };
  return (
    <section>
      <div className={"testimonialContainer" + " " + "container"}>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          modules={[Navigation, Pagination]}
          navigation
          pagination={pagination}
        >
          <SwiperSlide>
            <div className="slider-container">
              <svg
                className="button-next"
                width="16"
                height="28"
                viewBox="0 0 16 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 26L14 14L2 2"
                  stroke="#FF6E30"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <svg
                className="button-prev"
                width="16"
                height="28"
                viewBox="0 0 16 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 26L14 14L2 2"
                  stroke="#FFFFFF47"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <img className="circle-purple" src={circle1} alt="circle1" />
              <img className="circle-orange" src={circle2} alt="circle2" />
              <img className="circle-blue" src={circle3} alt="circle3" />
              <img className="circle" src={circle} alt="circle" />
              <div className="text-wrapper">
                <p className="name">Ronald Richards</p>
                <p className="profession">Product Manager</p>
                <p></p>
              </div>
              <div className="image-wrapper">
                <img src={man1} alt="man1" />
              </div>
              <p className="text">
                Incididunt cillum do sint sint enim ullamco id deserunt mollit
                qui reprehenderit do. Velit ex tempor cillum ad sint occaecat.
                Do nulla velit labore occaecat do deserunt Lorem magna officia
                incididunt consectetur amet. Sunt consectetur veniam minim ex
                commodo sint non. Occaecat aute officia excepteur non laboris id
                qui ad.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-container">
              <svg
                className="button-next"
                width="16"
                height="28"
                viewBox="0 0 16 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 26L14 14L2 2"
                  stroke="#FF6E30"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <svg
                className="button-prev"
                width="16"
                height="28"
                viewBox="0 0 16 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 26L14 14L2 2"
                  stroke="#FF6E30"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <img className="circle-purple" src={circle1} alt="circle1" />
              <img className="circle-orange" src={circle2} alt="circle2" />
              <img className="circle-blue" src={circle3} alt="circle3" />
              <img className="circle" src={circle} alt="circle" />
              <div className="text-wrapper">
                <p className="name">Ronald Richards</p>
                <p className="profession">Product Manager</p>
                <p></p>
              </div>
              <div className="image-wrapper">
                <img src={man1} alt="man1" />
              </div>
              <p className="text">
                Incididunt cillum do sint sint enim ullamco id deserunt mollit
                qui reprehenderit do. Velit ex tempor cillum ad sint occaecat.
                Do nulla velit labore occaecat do deserunt Lorem magna officia
                incididunt consectetur amet. Sunt consectetur veniam minim ex
                commodo sint non. Occaecat aute officia excepteur non laboris id
                qui ad.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-container">
              <svg
                className="button-next"
                width="16"
                height="28"
                viewBox="0 0 16 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 26L14 14L2 2"
                  stroke="#FFFFFF47"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <svg
                className="button-prev"
                width="16"
                height="28"
                viewBox="0 0 16 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 26L14 14L2 2"
                  stroke="#FF6E30"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <img className="circle-purple" src={circle1} alt="circle1" />
              <img className="circle-orange" src={circle2} alt="circle2" />
              <img className="circle-blue" src={circle3} alt="circle3" />
              <img className="circle" src={circle} alt="circle" />
              <div className="text-wrapper">
                <p className="name">Ronald Richards</p>
                <p className="profession">Product Manager</p>
                <p></p>
              </div>
              <div className="image-wrapper">
                <img src={man1} alt="man1" />
              </div>
              <p className="text">
                Incididunt cillum do sint sint enim ullamco id deserunt mollit
                qui reprehenderit do. Velit ex tempor cillum ad sint occaecat.
                Do nulla velit labore occaecat do deserunt Lorem magna officia
                incididunt consectetur amet. Sunt consectetur veniam minim ex
                commodo sint non. Occaecat aute officia excepteur non laboris id
                qui ad.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
