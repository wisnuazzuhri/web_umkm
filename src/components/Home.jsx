import React from "react";
import { Button } from "flowbite-react";

const Home = () => {
  return (
    <div id="home" className="w-full h-screen px-10 lg:px-[72px]">
      <div className="h-screen max-w-[700px] flex flex-col justify-center gap-y-4">
        <h1 className="font-bold text-orange text-[30px]">
          Selamat Datang Di Rumah UMKM!
        </h1>
        <h1 className="font-bold text-3xl">
          Pengembangan Digitalisasi UMKM Perumahan Griya Praja Indah berbasis
          Web
        </h1>
        <p className="text-gray-500 max-w-[500px] text-justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div>
          <Button color="blue" size="lg" pill>
            Profil Kami
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
