import React from "react";

const Home = () => {
  return (
    <div id="home" className="w-full h-screen px-10 lg:px-[72px]">
      <div className="h-screen max-w-[700px] flex flex-col justify-center">
        <h1 className="font-bold text-orange text-[20px]">Selamat Datang</h1>
        <h1>Rumah Bisnis Mandiri</h1>
        <p>
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
          <button>PROFIL KAMI</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
