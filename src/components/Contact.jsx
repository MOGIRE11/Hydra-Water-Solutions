import { NavLink } from "react-router-dom";

function Contact() {
  return (
    <div className="px-4 lg:px-20">
      <div className="breadcrumb flex items-center gap-2 text-xs mt-4">
          <NavLink to="/">
            <i class="fa-solid fa-house mr-1 cursor-pointer"></i>
            <p className="inline hover:text-blue-800 hover:font-bold">Home</p>
          </NavLink>
       
        <i className="fa-solid fa-chevron-right"></i>
        Contact Us
        <i className="fa-solid fa-chevron-right"></i>
        Get a Quote
      </div>
    </div>
  );
}

export default Contact