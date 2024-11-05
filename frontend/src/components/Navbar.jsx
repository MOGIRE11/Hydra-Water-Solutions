import { useState } from "react";
import { NavLink } from "react-router-dom";
import hydralogo from "./assets/Hydra-logo.png";


const Navbar = () => {
  const [display, setDisplay] = useState(false);
  const handleLinkClick = () =>{setDisplay(false);}
  
  return (
    <div className="nav sticky top-0 z-10 w-full bg-neutral-100">
      {/* email and contact */}
      <div className="info-bar hidden bg-gradient-to-r from-blue-900 to-blue-400 md:flex">
        <div className=" flex container mx-auto md:text-white md:flex md:items-center md:space-x-8 md:py-2 md:px-4 lg:px-20 max-w-[1440px]">
          <div className="phone flex items-center text-xs">
            <i className="fa-solid fa-phone mr-2"></i>
            <p className="text-xs">(+254 )-704-062-778 </p>
          </div>

          <div className="email flex items-center text-xs">
            <i className="fa-solid fa-envelope mr-2"></i>
            <p className="text-xs">Hydrawater254@gmail.com</p>
          </div>
        </div>
      </div>

      {/* navbar-content */}
      <div className="div py-3 px-4 pl-0 md:px-4 flex items-center justify-between lg:px-20  w-full max-w-[1440px] mx-auto">
        <NavLink to="/">
          <div className="logo flex gap-0 items-center">
            <img
              src={hydralogo}
              alt="Hydra-Water-solutions-logo"
              className="w-12"
            />
            <p className="text-xs font-black flex flex-col text-center text-blue-800">
              <span className="">HYDRA WATER </span>
              <span className="font-semibold">SOLUTIONS</span>
            </p>
          </div>
        </NavLink>

        <div className="links  text-sm font-semibold hidden lg:flex lg:items-center lg:gap-8">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/errorPage">Products</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </div>

        <div className="nav-right flex items-center gap-4">
          <button
            type="button"
            className="bg-green-500 hover:bg-green-500/80 active:translate-y-[2px] transition-colors px-6 rounded-md text-white font-semibold py-2 hidden md:flex"
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
          <div className="menu-list h-screen bg-white absolute top-0 right-0 w-full">
            <div className="top-menu-list flex items-center justify-between py-3 px-4 pl-0 bg-neutral-100">
              <NavLink to="/">
                <div className="logo flex gap-0 items-center">
                  <img
                    src={hydralogo}
                    alt="Hydra-Water-solutions-logo"
                    className="w-12"
                  />
                  <p className="text-xs font-black flex text-center flex-col 2xl:text-lg text-blue-900">
                    <span className="">HYDRA WATER </span>
                    <span className="font-semibold">SOLUTIONS</span>
                  </p>
                </div>
              </NavLink>

              <i
                className="fa-solid fa-xmark text-lg cursor-pointer"
                onClick={() => {
                  setDisplay((prev) => !prev);
                }}
              ></i>
            </div>
            
            <div className="bottom-menu-list flex flex-col justify-evenly mx-auto w-[95%] h-1/2 px-4">
              <NavLink
                to="/"
                className="flex items-center gap-2 font-medium"
                onClick={handleLinkClick}
              >
                <i className="fa-solid fa-chevron-right text-neutral-500"></i>
                Home
              </NavLink>

              <NavLink
                to="/about"
                className="flex items-center gap-2 font-medium"
                onClick={handleLinkClick}
              >
                <i className="fa-solid fa-chevron-right text-neutral-500"></i>
                About Us
              </NavLink>

              <NavLink
                to="/blog"
                className="flex items-center gap-2 font-medium"
                onClick={handleLinkClick}
              >
                <i className="fa-solid fa-chevron-right text-neutral-500"></i>
                Our Blog
              </NavLink>

              <NavLink
                to="/errorPage"
                className="flex items-center gap-2 font-medium"
                onClick={handleLinkClick}
              >
                <i className="fa-solid fa-chevron-right text-neutral-500"></i>
                Products
              </NavLink>

              <NavLink
                to="/contact"
                className="flex items-center gap-2 font-medium"
                onClick={handleLinkClick}
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
    </div>
  );
};

export default Navbar;
