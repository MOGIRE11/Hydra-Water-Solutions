import { NavLink } from "react-router-dom";
function Products() {
  return (
    <div className="px-4 lg:px-20 min-h-[80vh]">
      {/* Breadcrumb */}
      <div className="breadcrumb flex items-center gap-2 text-xs mt-4 mb-8">
        <NavLink to="/">
          <i className="fa-solid fa-house mr-1 cursor-pointer "></i>
          <p className="inline hover:text-blue-800 hover:font-bold">Home</p>
        </NavLink>
        <i className="fa-solid fa-chevron-right"></i>
        Products
      </div>
    </div>
  );
}

export default Products;
