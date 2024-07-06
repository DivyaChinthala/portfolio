import React, { useState } from "react";
import Slider from "react-slick";
import { RiStarFill } from "react-icons/ri";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import Title from "../layouts/Title";
import { testimonialOne, testimonialTwo, quote } from "../../assets";
import Image from "next/image";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-0 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-20 left-0 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
}

const Testimonial = ({ images }) => {
  const [dotActive, setDocActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "12px",
                height: "12px",
                color: "blue",
                background: "#ff014f",
                borderRadius: "50%",
                cursor: "pointer",
              }
            : {
                width: "12px",
                height: "12px",
                color: "blue",
                background: "gray",
                borderRadius: "50%",
                cursor: "pointer",
              }
        }
      ></div>
    ),
  };
  return (
    <section
      id="testimonial"
      className="w-full py-8 border-b-[1px] border-b-black"
    >
      {/* <div className="flex justify-center items-center text-center">
        <Title title="WHAT CLIENTS SAY" des="Testimonial" />
      </div> */}
      <div className="max-w-6xl mx-auto">
        {/* ================ Slider One ================== */}
        <Slider {...settings}>
          {images?.map((image) => {
            return (
              <div>
                <div className="flex items-center justify-center">
                  <img
                    className="rounded-lg"
                    style={{ width: "auto", height: "300px" }}
                    src={image?.url}
                    alt="Image"
                    width={100}
                    height={100}
                  />
                </div>
              </div>
            );
          })}
          {/* ================ Slider Two ================== */}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
