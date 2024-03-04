import About from "@/components/About";
import Header from "@/components/Header";
import React from "react";

const Home = () => {
  return (
    <>
      <Header />
      <div
        className="h-[100vh] relativ text-white"
        style={{
          backgroundImage: `url('/intro-bg.jpg')`,
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="bg-black/60 top-0 left-0 p-0 absolute w-[100%] h-[100%] opacity-90"></div>
        <div className="intro-content display-table h-[100%] w-[100%] table text-center absolute">
          <div className="table-cell align-middle">
            <div className="container">
              <h1 className="intro-title mb-4 font-semibold text-5xl text-white">I am Chalachew Tsegaye</h1>
              <p className="intro-subtitle font-light text-2xl">
                <span className="text-slider-items hidden">
                  Web Developer,Web Designer,Full satck Developer,Mobile App
                  Developer
                </span>
                <strong className="text-slider"></strong>
              </p>
            </div>
          </div>
        </div>
      </div>
      <About />
    </>
  );
};

export default Home;
