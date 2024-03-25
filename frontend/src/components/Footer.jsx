import { NavLink } from "react-router-dom";
import hydralogo from "./assets/Hydra-logo.png";


function Footer() {
  return (
    <div className="footer w-full absolute botttom-0 dark-blue text-neutral-400 pt-8">
      <div className="newsletter flex flex-col items-center">
        <h3 className="font-bold">
          Subscribe for the latest products and offers
        </h3>
        <span className="flex items-center gap-1 mt-2 flex-wrap gap-y-2">
          <fieldset className="flex items-center border gap-3 pl-2 w-[auto] flex-wrap bg-white text-black">
            <i className="fa-solid fa-user text-sm"></i>
            <input
              type="mail"
              placeholder="Enter Email Address"
              className="h-10 outline-0"
            />
          </fieldset>
          <button
            type="submit"
            className="py-2 px-6 bg-blue-800 text-white font-semibold text-sm h-10"
          >
            Subscribe
          </button>
        </span>
      </div>

      <hr className="my-4 mx-4 lg:mx-20 border-neutral-700" />

      <div className="footer-bottom px-4 lg:px-20">
        <div className="bottom-one">
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

          <p className="font-bold text-sm my-2 text-neutral-300">
            Making Your Tap Water Drinkable
          </p>
          <p className=" text-sm">
            Transforming Every Drop : Clean Water ,Healthy Lives ,Sustainable
            Future
          </p>
        </div>

        <div className="bottom-two flex flex-col items-start ">
          <h4 className="font-bold text-neutral-300 underline underline-offset-4">
            Quick Links
          </h4>
          <span className="flex flex-col text-sm mt-2 gap-1">
            <NavLink to="/" className="">
              Home
            </NavLink>

            <NavLink to="/about" className="">
              About Us
            </NavLink>

            <NavLink to="/products" className="">
              Products
            </NavLink>

            <NavLink to="/blog" className="">
              Our Blog
            </NavLink>

            <NavLink to="/contact" className="">
              Contact Us
            </NavLink>

            <NavLink to="/contact" className="">
              Get a Quote
            </NavLink>
          </span>
        </div>

        <div className="bottom-three flex flex-col items-start">
          <h4 className="font-bold text-neutral-300 underline underline-offset-4">
            Legal
          </h4>
          <span className="flex flex-col text-sm mt-2 gap-1">
            <NavLink to="/errorPage" className="">
              Privacy Policy
            </NavLink>

            <NavLink to="/errorPage" className="">
              Cookies Policy
            </NavLink>

            <NavLink to="/errorPage" className="">
              Products
            </NavLink>

            <NavLink to="/errorPage" className="">
              Data Processing
            </NavLink>

            <NavLink to="/errorPage" className="">
              Terms and Conditions
            </NavLink>
          </span>
        </div>

        {/* contact Information */}
        <div className="bottom-four">
          <h4 className="font-bold mb-2 text-neutral-300 underline underline-offset-4">
            Contact Information
          </h4>
          <div className="flex items-center gap-2 mb-4">
            <i className="fa-solid fa-house border p-2 rounded-md bg-neutral-200 dark-icon"></i>
            <span className="flex flex-col">
              <p className="text-sm font-bold text-neutral-300">Our Location</p>
              <p className="text-sm">Industrial Area , Nairobi</p>
            </span>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <i className="fa-solid fa-phone border p-2 rounded-md bg-neutral-200  dark-icon"></i>
            <span className="flex flex-col">
              <p className="text-sm font-bold text-neutral-300">Phone Number</p>
              <p className="text-sm">(+254 )-704-062-778 </p>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <i className="fa-solid fa-envelope border p-2 rounded-md bg-neutral-200  dark-icon"></i>
            <span className="flex flex-col">
              <p className="text-sm font-bold text-neutral-300">
                Email Address
              </p>
              <p className="text-sm">Hydrawater254@gmail.com</p>
            </span>
          </div>
        </div>
      </div>

      <hr className="my-4 px-4 lg:mx-20 border-neutral-700" />

      <div className="anchor mb-2 flex flex-col items-center justify-between lg:flex-row px-4 lg:px-20">
        <p className="text-sm font-semibold">
          Copyright &copy; 2024 . Hydra Water Solutions
        </p>
        <p className="text-sm font-bold">
          Developed with 💙 by{" "}
          <a href="https://github.com/MOGIRE11" target="_blank">
            Thee_mmo
          </a>{" "}
          &{" "}
          <a href="https://github.com/Kimathi19" target="_blank">
            Kimathi Creations
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
