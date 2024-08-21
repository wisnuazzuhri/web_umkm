import React from "react";
import Slider from "react-slick";
import CustomCard from "./Card";
import { profil } from "../data/dummy";

const Profil = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="my-5 lg:px-[72px] px-10">
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <h1
        data-aos="fade-down"
        data-aos-duration="500"
        className="text-center font-bold text-[25px] mb-5"
      >
        Profil Anggota
      </h1>
      <Slider {...settings}>
        {profil.map((item) => {
          return (
            <div data-aos="fade-up" data-aos-duration="600" className="p-2">
              <img src={item.image} alt="" className="mb-3 rounded-lg" />
              <div className="text-center">
                <h1 className="text-[18px] font-semibold">{item.title}</h1>
                <p className="text-gray-500">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Profil;
