import { NavLink } from "react-router-dom";
import sevenstagePurifier from "./assets/branded7stage.png";
import fivestagePurifier from "./assets/branded5stage.png";
import solarWater from "./assets/Solar water pump.svg";
function Products() {
  return (
    <div className="px-4 lg:px-20 min-h-[80vh]">
      {/* Breadcrumb */}
      <div className="breadcrumb flex items-center gap-2 text-xs mt-4 mb-4">
        <NavLink to="/">
          <i className="fa-solid fa-house mr-1 cursor-pointer "></i>
          <p className="inline hover:text-blue-800 hover:font-bold">Home</p>
        </NavLink>
        <i className="fa-solid fa-chevron-right"></i>
        Products
      </div>
      <h1 className="text-black font-bold tracking-wider text-3xl mb-4">
        Store
      </h1>
      <div className="guide flex flex-row gap-4 mb-8">
        <button className="bg-teal-500 py-1 px-3 rounded-sm text-white">
          All
        </button>
        <button className="bg-teal-500 py-1 px-3 rounded-sm text-white">
          5 Stage Purifiers
        </button>
        <button className="bg-teal-500 py-1 px-3 rounded-sm text-white">
          7 Stage Purifiers
        </button>
        <button className="bg-teal-500 py-1 px-3 rounded-sm text-white">
          Solar Water Pumps
        </button>
      </div>

      {/* 5 stage reverse osmosis */}
      <div className="five-stage flex mb-14 justify-between gap-12 border">
        <div className="image border w-96">
          <img
            className=" mb-6 h-[200px] w-[75%] object-cover mx-auto"
            src={fivestagePurifier}
            alt=""
          />
          <h2 className="font-bold text-lg">
            5 Stage Reverse Osmosis Water Purifier
          </h2>
          <p className="text-sm my-2">
            Ideal for users consuming treated Nairobi city council water
          </p>
          <h2 className="font-bold text-lg mb-2">KSH.25,000</h2>
        </div>
        <div className="properties border ">
          <h2 className="font-bold text-lg tracking-wide mb-3">Properties</h2>
          <p className="mb-1 text-md">
            Multi-stage filtration for thorough purification.
          </p>
          <p className="mb-1 text-md">
            Removes contaminants like lead, chlorine, and bacteria.
          </p>
          <p className="mb-1 text-md">
            Utilizes membrane technology for high-quality filtration.
          </p>
          <p className="mb-1 text-md">
            Enhances taste by eliminating odors and impurities.
          </p>
          <p className="mb-1 text-md">
            Provides clean, safe drinking water for consumption.
          </p>
        </div>
        <div className="advantages border ">
          <h2 className="font-bold text-lg tracking-wide mb-3">Advantages</h2>
          <p className="mb-1 text-md">
            Ensures healthier drinking water for your family.
          </p>
          <p className="mb-1 text-md">Reduces dependency on bottled water.</p>
          <p className="mb-1 text-md">Saves money in the long term.</p>
          <p className="mb-1 text-md">Easy to install and maintain.</p>
          <p className="mb-1 text-md">Ideal for remote areas</p>
        </div>
      </div>

      {/* 7 Stage reverse osmosis */}
      <div className="seven-stage flex gap-12 justify-evenly mb-14 ">
        <div className="image border w-96">
          <img className="mb-6 h-[200px] mx-auto object-cover" src={sevenstagePurifier} alt="" />
          <h2 className="mb-3 font-bold text-lg">
            7 Stage Reverse Osmosis Water Purifier
          </h2>
          <p className="text-sm mb-3">
            Ideal for those using borehole water, river and rain water
          </p>
          <h2 className="font-bold text-lg mb-2">KSH. 30,000</h2>
        </div>
        <div className="properties border">
          <h2 className="font-bold text-lg tracking-wide mb-3">Properties</h2>
          <p className="mb-1 text-md">
            Additional stages for enhanced purification.
          </p>
          <p className="mb-1 text-md">
            Removes even more impurities and contaminants.
          </p>
          <p className="mb-1 text-md">
            Incorporates UV or mineralization stages for added benefits.
          </p>
          <p className="mb-1 text-md">
            Ensures superior quality and taste of water.
          </p>
          <p className="mb-1 text-md">
            Ideal for areas with poor water quality or high contamination.
          </p>
        </div>
        <div className="advantages border ">
          <h2 className="font-bold text-lg tracking-wide mb-3">Advantages</h2>
          <p className="mb-1 text-md">
            Provides ultra-pure water for drinking and cooking.
          </p>
          <p className="mb-1 text-md">
            Offers advanced protection against a wide range of pollutants.
          </p>
          <p className="mb-1 text-md">
            Supports better health outcomes for users.
          </p>
          <p className="mb-1 text-md">
            Increased efficiency in removing harmful substances.
          </p>
          <p className="mb-1 text-md">
            Perfect for households seeking the highest level of water purity.
          </p>
        </div>
      </div>
      {/* Solar water pump */}
      <div className="solar-water flex gap-12 justify-between mb-14">
        <div className="image  ">
          <img className="mb-6" src={solarWater} alt="" />
          <h2 className="mb-3 font-bold text-lg">Solar Water Pumps</h2>
          <p className="text-sm mb-3">
            Mostly ideal for consumers who reside in the remote areas
          </p>
          <h2 className="text-lg font-bold mb-2">KSH. 84,000</h2>
        </div>
        <div className="properties border">
          <h2 className="font-bold text-lg tracking-wide mb-3">Properties</h2>
          <p className="mb-2 text-md">
            Harnesses solar energy for pumping water.
          </p>
          <p className="mb-2 text-md">
            Environmentally friendly and sustainable solution.
          </p>
          <p className="mb-2 text-md">
            Works efficiently in remote areas without grid access.
          </p>
          <p className="mb-2 text-md">
            Minimal operating costs once installed.
          </p>
          <p className="mb-2 text-md">
            Diverse applications in agriculture, irrigation, and water supply.
          </p>
        </div>
        <div className="advantages border ">
          <h2 className="font-bold text-lg tracking-wide mb-3">Advantages</h2>
          <p className="mb-2 text-md">Reduces dependence on fossil fuels.</p>
          <p className="mb-2 text-md">
            Lowers energy bills and operating expenses.
          </p>
          <p className="mb-2 text-md">
            Reliable operation even in off-grid locations.
          </p>
          <p className="mb-2 text-md">Minimal maintenance requirements.</p>
          <p className="mb-2 text-md">
            Contributes to reducing carbon footprint and environmental impact.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Products;
