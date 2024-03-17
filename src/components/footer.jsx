import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="footer w-full absolute botttom-0">
      <div className="newsletter flex flex-col items-center">
        <h3 className="font-bold">
          Subscribe for the latest products and offers
        </h3>
        <span className="flex gap-1">
          <fieldset className="flex items-center border gap-3 px-1 w-[auto] flex-wrap">
            <i className="fa-solid fa-user text-sm"></i>
            <input
              type="mail"
              placeholder="Enter Email Address"
              className="h-6 outline-0"
            />
          </fieldset>
          <button
            type="button"
            className="py-2 px-6 bg-blue-800 text-white font-semibold text-sm"
          >
            Subscribe
          </button>
        </span>
      </div>

      <hr className="my-4" />

      <div className="footer-bottom px-4 lg:px-20">
        <div className="bottom-one">
          <NavLink to="/home">
          <div className="logo flex gap-0 items-center">
            <img
              src="src\components\assets\Hydra-logo.png"
              alt="Hydra-Water-solutions-logo"
              className="w-12"
            />
            <p className="text-xs font-black flex flex-col 2xl:text-lg text-blue-800">
              <span className="">HYDRA WATER </span>
              <span className="">SOLUTIONS</span>
            </p>
          </div>
          </NavLink>

          <p className="font-black text-sm mb-1">
            Making Your Tap Water Drinkable
          </p>
          <p className=" text-sm">
            Transforming Every Drop : Clean Water ,Healthy Lives ,Sustainable
            Future
          </p>
        </div>

        <div className="bottom-two flex flex-col items-start ">
          <h4 className="font-bold">Quick Links</h4>
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
          <h4 className="font-bold">Legal</h4>
          <span className="flex flex-col text-sm mt-2 gap-1">
            <NavLink to="/" className="">
              Privacy Policy
            </NavLink>
            
            <NavLink to="/" className="">
              Cookies Policy
            </NavLink>
            
            <NavLink to="/" className="">
              Products
            </NavLink>
            
            <NavLink to="/" className="">
              Data Processing
            </NavLink>
            
            <NavLink to="/" className="">
              Terms and Conditions
            </NavLink>
          </span>
        </div>

        {/* contact Information */}
        <div className="bottom-four">
          <h4 className="font-bold mb-2">Contact Information</h4>
          <div className="flex items-center gap-2 mb-4">
            <i className="fa-solid fa-house border p-2 rounded-md bg-neutral-200"></i>
            <span className="flex flex-col">
              <p className="text-sm font-bold">Our Location</p>
              <p className="text-sm">Industrial Area , Nairobi</p>
            </span>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <i className="fa-solid fa-phone border p-2 rounded-md bg-neutral-200"></i>
            <span className="flex flex-col">
              <p className="text-sm font-bold">Phone Number</p>
              <p className="text-sm">(+254 )-704-062-778 </p>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <i className="fa-solid fa-envelope border p-2 rounded-md bg-neutral-200"></i>
            <span className="flex flex-col">
              <p className="text-sm font-bold">Email Address</p>
              <p className="text-sm">hydrawater254@gmail.com</p>
            </span>
          </div>
        </div>
      </div>
      
      <hr className="my-4 px-4 lg:px-20"/>
      
      <div className="anchor mb-2 flex flex-col items-center justify-between lg:flex-row px-4 lg:px-20">
        <p className="text-sm font-semibold"
        >Copyright &copy; 2024 . Hydra Water Solutions</p>
        <p className="text-sm font-bold">
            Developed with 💙 by <a href="https://github.com/MOGIRE11" target="_blank">Thee_mmo</a> & <a href="https://github.com/Kimathi19" target="_blank">Kimathi Creations</a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
