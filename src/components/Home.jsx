import React from "react";
import { Button } from "flowbite-react";

const Home = () => {
  return (
    <div id="home" className="w-full h-screen px-10 lg:px-[72px]">
      <div className="h-screen max-w-[700px] flex flex-col justify-center gap-y-4">
        <h1 className="font-bold text-orange text-[30px]">Rumah UMKM</h1>
        <h1 className="font-bold text-3xl">
          Digitalisasi UMKM Griya Praja Indah
        </h1>
        <p className="text-gray-500 max-w-[500px] text-justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
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
