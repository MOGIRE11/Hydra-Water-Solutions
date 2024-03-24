import { NavLink } from "react-router-dom";

function Blog() {
  return (
    <div className="px-4 lg:px-20 min-h-[80vh]">
      <div className="breadcrumb flex items-center gap-2 text-xs mt-4 mb-8">
        <NavLink to="/">
          <i className="fa-solid fa-house mr-1 cursor-pointer "></i>
          <p className="inline hover:text-blue-800 hover:font-bold">Home</p>
        </NavLink>
        <i className="fa-solid fa-chevron-right"></i>
        Contact Us
        <i className="fa-solid fa-chevron-right"></i>
        Blog
      </div>
      <h2 className="font-bold text-2xl">Latest From our Blogs</h2>
      <p>Take some time to read a number of the articles written by people affiliated to Hydra water solutions</p>


    </div>
  );
}

export default Blog;
