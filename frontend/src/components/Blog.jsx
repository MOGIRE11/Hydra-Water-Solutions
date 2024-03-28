import { NavLink } from "react-router-dom";
import solar from "./assets/solar-pump.svg";
import doctor from "./assets/doctor.svg";
import stainedTeeth from "./assets/flourosis.svg";
import ladyFetchingWater from "./assets/lady-fetching-water.svg";
import purificationProcess from "./assets/water-purificaion-process.svg";
import waterTesting from "./assets/water-testing.svg";
import agriBusiness from "./assets/agri-business.svg";
import coast from "./assets/coast.svg";


function Blog() {
  return (
    <div className="px-4 lg:px-20 min-h-[80vh]">
      <div className="breadcrumb flex items-center gap-2 text-xs mt-4 mb-8">
        <NavLink to="/">
          <i className="fa-solid fa-house mr-1 cursor-pointer "></i>
          <p className="inline hover:text-blue-800 hover:font-bold">Home</p>
        </NavLink>
        <i className="fa-solid fa-chevron-right"></i>
        Our Blog
      </div>
      <h2 className="font-bold text-2xl">Latest From our Blogs</h2>
      <p>
        Take some time to read a number of the articles written by people
        affiliated to Hydra water solutions
      </p>

      {/* blogs */}
      <div className="blog-card-wrapper mt-8 mb-24">
        {/* card1 */}
        <div className="blog-card1 border shadow-xl rounded-md">
          <img src={purificationProcess} alt="" className="w-full" />
          <p className="flex gap-2 text-xs mt-1 px-2">
            <span className="bg-blue-100 px-3 py-1 text-blue-900">#Education</span>
            <span className="px-3 py-1 bg-blue-100">5 min read</span>
          </p>
          <p className="heading my-2 font-semibold px-2">
            What exactly does reverse osmosis mean?
          </p>
          <p className="author text-xs px-2 text-neutral-600 mb-2">
            By Franklin Obega
          </p>
        </div>

        {/* card2 */}
        <div className="blog-card1 border shadow-xl rounded-md">
          <img src={stainedTeeth} alt="" className="w-full" />
          <p className="flex gap-2 text-xs mt-1 px-2">
            <span className="bg-blue-100 px-3 py-1 text-green-600">#Health</span>
            <span className="px-3 py-1 bg-blue-100">10 min read</span>
          </p>
          <p className="heading my-2 font-semibold px-2">
            The fluorosis menace affecting children in Nakuru.
          </p>
          <p className="author text-xs px-2 text-neutral-600 mb-2">
            By Dr.Onduso 
          </p>
        </div>

        {/* card3 */}
        <div className="blog-card1 border shadow-xl rounded-md">
          <img src={solar} alt="" className="w-full" />
          <p className="flex gap-2 text-xs mt-1 px-2">
            <span className="bg-blue-100 px-3 py-1 text-green-600">#Solar Power</span>
            <span className="px-3 py-1 bg-blue-100">5 min read</span>
          </p>
          <p className="heading my-2 font-semibold px-2">
            Benefits of solar-powered pumps for remote communities
            </p>
          <p className="author text-xs px-2 text-neutral-600 mb-2">
            By Willy Nthiga
          </p>
        </div>

        {/* card4 */}
        <div className="blog-card4 border shadow-xl rounded-md">
          <img src={doctor} alt="" className="w-full" />
          <p className="flex gap-2 text-xs mt-1 px-2">
            <span className="bg-blue-100 px-3 py-1 text-blue-900">#Health</span>
            <span className="px-3 py-1 bg-blue-100">5 min read</span>
          </p>
          <p className="heading my-2 font-semibold px-2">
            The link between water quality and Public Helth
          </p>
          <p className="author text-xs px-2 text-neutral-600 mb-2">
            By Linda Cherop
          </p>
        </div>

        {/* card5 */}
        <div className="blog-card5 border shadow-xl rounded-md">
          <img src={ladyFetchingWater} alt="" className="w-full" />
          <p className="flex gap-2 text-xs mt-1 px-2">
            <span className="bg-blue-100 px-3 py-1 text-green-600">#At Home</span>
            <span className="px-3 py-1 bg-blue-100">10 min read</span>
          </p>
          <p className="heading my-2 font-semibold px-2">
            5 Easy Ways to reduce your household water footprint
          </p>
          <p className="author text-xs px-2 text-neutral-600 mb-2">
            By Diddy
          </p>
        </div>

        {/* card6 */}
        <div className="blog-card1 border shadow-xl rounded-md">
          <img src={coast} alt="" className="w-full" />
          <p className="flex gap-2 text-xs mt-1 px-2">
            <span className="bg-blue-100 px-3 py-1 text-blue-900">#Coastal</span>
            <span className="px-3 py-1 bg-blue-100">8 min read</span>
          </p>
          <p className="heading my-2 font-semibold px-2">
            Sea level rise and the threat to Coastal water supplies
          </p>
          <p className="author text-xs px-2 text-neutral-600 mb-2">
            By Khwatenge
          </p>
        </div>

        {/* card7 */}
        <div className="blog-card1 border shadow-xl rounded-md">
          <img src={agriBusiness} alt="" className="w-full" />
          <p className="flex gap-2 text-xs mt-1 px-2">
            <span className="bg-blue-100 px-3 py-1 text-green-600">#Better Future</span>
            <span className="px-3 py-1 bg-blue-100">10 min read</span>
          </p>
          <p className="heading my-2 font-semibold px-2">
            How we are making water a cornerstone of the green economy
          </p>
          <p className="author text-xs px-2 text-neutral-600 mb-2">
            By Annette Mutugi
          </p>
        </div>

        {/* card8 */}
        <div className="blog-card1 border shadow-xl rounded-md">
          <img src={waterTesting} alt="" className="w-full" />
          <p className="flex gap-2 text-xs mt-1 px-2">
            <span className="bg-blue-100 px-3 py-1">#Credbility</span>
            <span className="px-3 py-1 bg-blue-100">10 min read</span>
          </p>
          <p className="heading my-2 font-semibold px-2">
            How water certification programs promote sustainability
          </p>
          <p className="author text-xs px-2 text-neutral-600 mb-2">
            By Jolmon Kamau
          </p>
        </div>
      </div>
    </div>
  );
}

export default Blog;
