import { useState } from "react";

const navbar = () => {
  const [display, setDisplay]=useState(false);
  return (
    <div className="py-2 px-4 pl-0 md:px-4 flex items-center justify-between lg:px-20 shadow-md sticky top-0 z-10 bg-white">
      <div className="logo flex gap-0 items-center">
        <img
          src="src/components/assets/Hydra-logo.png"
          alt="Hydra-Water-solutions-logo"
          className="w-12"
        />
        <p className="text-xs font-black flex flex-col 2xl:text-lg text-blue-800">
          <span className="">HYDRA WATER </span>
          <span className="">SOLUTIONS</span>
        </p>
      </div>
      <div className="links  text-sm font-semibold hidden lg:flex lg:items-center lg:gap-8 2xl:text-2xl">
        <span>
          <a href="#">Home</a>
        </span>
        <span>
          <a href="#">About Us</a>
        </span>
        <span>
          <a href="#">Products</a>
        </span>
        <span>
          <a href="#">Contact Us</a>
        </span>
      </div>

      <div className="nav-right flex items-center gap-4">
        <button
          type="button"
          className="bg-green-500 px-6 rounded-md text-white font-semibold py-1 hidden md:flex 2xl:text-2xl"
        >
          <a href="#">Get a Quote</a>
        </button>
        
        {/* hamburger-menu  - it is only visible for mobile screens and hidden for larger devices */}
        <i
          className={"fa-solid fa-bars lg:hidden cursor-pointer"} 
          onClick={() => {
            setDisplay((prev) => !prev);
          }}
        ></i>
      </div>

      {display ? (
        <div className="menu-list h-screen bg-blue-400 absolute top-0 right-0 w-[100%] ">
          <div className="top-menu-list flex items-center justify-between px-4 py-2 pl-0">
            <div className="logo flex gap-0 items-center">
              <img
                src="src\components\assets\Hydra-logo.png"
                alt="Hydra-Water-solutions-logo"
                className="w-12"
              />
              <p className="text-xs font-black flex flex-col 2xl:text-lg text-blue-900">
                <span className="">HYDRA WATER </span>
                <span className="">SOLUTIONS</span>
              </p>
            </div>

            <i
              className="fa-solid fa-xmark cursor-pointer"
              onClick={() => {
                setDisplay((prev) => !prev);
              }}
            ></i>
          </div>
          <div className="bottom-menu-list flex flex-col justify-evenly mx-auto w-48 divide-y-0 divide-neutral-600 h-1/2 mt-8 px-4">
            <a href="#" className="flex items-center gap-2 font-medium">
              <i className="fa-solid fa-chevron-right text-neutral-500"></i>Home
            </a>
            <a href="#" className="flex items-center gap-2 font-medium">
              <i className="fa-solid fa-chevron-right text-neutral-500"></i>
              About Us
            </a>
            <a href="#" className="flex items-center gap-2 font-medium">
              <i className="fa-solid fa-chevron-right text-neutral-500"></i>Our
              Blog
            </a>
            <a href="#" className="flex items-center gap-2 font-medium">
              <i className="fa-solid fa-chevron-right text-neutral-500"></i>
              Products
            </a>
            <a href="#" className="flex items-center gap-2 font-medium">
              <i className="fa-solid fa-chevron-right text-neutral-500"></i>
              Contact Us
            </a>
          </div>
        </div>
      ) : (
        " "
      )}
    </div>
  );
};

export default navbar;
