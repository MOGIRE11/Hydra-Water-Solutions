import { useState } from "react";
import { NavLink } from "react-router-dom";
import hydralogo from "./assets/Hydra-logo.png";


const Navbar = () => {
  const [display, setDisplay] = useState(false);
  return (
    <div className="nav py-3 px-4 pl-0 md:px-4 flex items-center justify-between lg:px-20 shadow-md sticky top-0 z-10">
      <NavLink to="/">
        <div className="logo flex gap-0 items-center">
          <img
            src={hydralogo}
            alt="Hydra-Water-solutions-logo"
            className="w-12"
          />
          <p className="text-xs font-black flex flex-col 2xl:text-lg text-center text-blue-800">
            <span className="">HYDRA WATER </span>
            <span className="">SOLUTIONS</span>
          </p>
        </div>
      </NavLink>

      <div className="links  text-sm font-semibold hidden lg:flex lg:items-center lg:gap-8 2xl:text-2xl">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
      </div>

      <div className="nav-right flex items-center gap-4">
        <button
          type="button"
          className="bg-green-500 px-6 rounded-md text-white font-semibold py-1 hidden md:flex 2xl:text-2xl"
        >
          <NavLink to="/contact">Get a Quote</NavLink>
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
        <div className="menu-list h-screen bg-blue-400 absolute top-0 right-0 w-[80%] ">
          <div className="top-menu-list flex items-center justify-between px-4 py-2 pl-0">
            <NavLink to="/">
              <div className="logo flex gap-0 items-center">
                <img
                  src={hydralogo}
                  alt="Hydra-Water-solutions-logo"
                  className="w-12"
                />
                <p className="text-xs font-black flex text-center flex-col 2xl:text-lg text-blue-900">
                  <span className="">HYDRA WATER </span>
                  <span className="">SOLUTIONS</span>
                </p>
              </div>
            </NavLink>

            <i
              className="fa-solid fa-xmark cursor-pointer"
              onClick={() => {
                setDisplay((prev) => !prev);
              }}
            ></i>
          </div>
          <div className="bottom-menu-list flex flex-col justify-evenly mx-auto w-48 divide-y-0 divide-neutral-600 h-1/2 mt-8 px-4">
            <NavLink to="/home" className="flex items-center gap-2 font-medium">
              <i className="fa-solid fa-chevron-right text-neutral-500"></i>Home
            </NavLink>

            <NavLink
              to="/about"
              className="flex items-center gap-2 font-medium"
            >
              <i className="fa-solid fa-chevron-right text-neutral-500"></i>
              About Us
            </NavLink>

            <NavLink to="/blog" className="flex items-center gap-2 font-medium">
              <i className="fa-solid fa-chevron-right text-neutral-500"></i>Our
              Blog
            </NavLink>

            <NavLink
              to="/products"
              className="flex items-center gap-2 font-medium"
            >
              <i className="fa-solid fa-chevron-right text-neutral-500"></i>
              Products
            </NavLink>

            <NavLink
              to="/contact"
              className="flex items-center gap-2 font-medium"
            >
              <i className="fa-solid fa-chevron-right text-neutral-500"></i>
              Contact Us
            </NavLink>
          </div>
        </div>
      ) : (
        " "
      )}
    </div>
  );
};

export default Navbar;
