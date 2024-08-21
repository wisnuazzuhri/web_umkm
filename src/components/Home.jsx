import React from "react";
import { Button } from "flowbite-react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

const Home = () => {
  return (
    <div id="home" className="w-full h-screen px-10 lg:px-[72px]">
      <div className="h-screen max-w-[700px] flex flex-col justify-center gap-y-3 lg:gap-y-5">
        <h1
          data-aos="fade-right"
          data-aos-duration="500"
          className="font-bold text-orange text-[30px]"
        >
          Selamat Datang Di Rumah UMKM!
        </h1>
        <h1
          data-aos="fade-right"
          data-aos-duration="600"
          className="font-bold text-3xl"
        >
          Pengembangan Digitalisasi UMKM Perumahan Griya Praja Indah berbasis
          Web
        </h1>
        <p
          data-aos="fade-right"
          data-aos-duration="700"
          className="text-gray-500 max-w-[500px] text-justify"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div>
          <Button
            data-aos="fade-right"
            data-aos-duration="750"
            color="blue"
            size="lg"
            pill
          >
            Profil Kami
          </Button>
        </div>
      </div>
    </div>
  );
};
AOS.init();
export default Home;
