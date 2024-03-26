import { NavLink } from "react-router-dom";

function About() {
  return (
    <div className="px-4 lg:px-20 h-[70vh]">
      <div className="top h-20 bg-blue-600 mt-2 flex flex-col items-center justify-center">
        <p className="font-bold">About Us</p>
        <div className="breadcrumb flex items-center gap-2 text-sm font-bold mt-1 mb-8">
          <NavLink to="/">
            <i className="fa-solid fa-house mr-1 cursor-pointer "></i>
            <p className="inline hover:text-blue-800 hover:font-bold">Home</p>
          </NavLink>
          <i className="fa-solid fa-chevron-right"></i>
          About Us
          
        </div>
      </div>
    </div>
  );
}

export default About