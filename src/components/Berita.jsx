import React from "react";
import { features } from "../data/dummy";
const Berita = () => {
  return (
    <div className="lg:px-[72px] px-10 flex flex-col gap-y-5 lg:mt-5">
      <h1
        data-aos="fade-right"
        data-aos-duration="400"
        className="text-orange text-[30px] font-bold"
      >
        Dokumentasi Proker
      </h1>
      <h1
        data-aos="fade-right"
        data-aos-duration="500"
        className="font-bold text-3xl"
      >
        Griya Praja Indah
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5">
        {features.map((item, i) => {
          return (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-duration="600"
              className="flex flex-col items-center"
            >
              <div className="w-[500px] h-[300px]">
                <img src={item.image} alt="" className="w-full h-full"></img>
              </div>
              <h1 className="font-semibold text-[18px]">{item.title}</h1>
              <p className="text-[14px] text-gray-500 max-w-[350px] text-center">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Berita;
