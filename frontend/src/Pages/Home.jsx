import { Link } from "react-router-dom";
import {
  sevenstagePurifier,
  fivestagePurifier,
  africanmap,
  celestialdental,
  fineteklabs,
  amario,
  hidrotech,
  stuntech,
  image5,
  underthesink,
} from "./assets/images";

import Testimonials from "../components/Testimonials";
import Accordions from "../components/Accordions";

function Home() {
  return (
    <div className="px-4 lg:px-20 my-8 max-w-[1440px] mx-auto">
      <div className="hero-section flex flex-col my-10 lg:my-8 lg:mt-20 gap-4 lg:flex-row lg:justify-between items-center lg:mb-20">
        <div className="hero-content lg:w-1/2 mb-8 lg:mb-2">
          <small className="text-xs font-bold text-teal-600 tracking-wide">
            UNDER THE SINK
          </small>
          <h1 className="text-3xl lg:text-4xl font-bold">
            Domestic water Purification System
          </h1>
          <p className="mt-6 mb-8 lg:w-[90%]">
            Envision being able to turn your tap water into crisp ,&nbsp;
            <span className=" font-semibold underline text-teal-600 underline-offset-2">
              clean refeshment at the touch of a button
            </span>
            . Home water filtration systems not only remove impurities but also
            ensure that every sip is a pure and healthy delight.
          </p>
          <span className="flex gap-4">
            <Link to="/noproducts">
              <button
                className="border-2 w-40 py-3 rounded border-blue-900 font-semibold"
                type="button"
              >
                View Products
              </button>
            </Link>

            <Link to="/contact">
              <button
                className="w-40 py-3 font-semibold secondary border-2 border-[#57b33e] text-white rounded secondary  flex items-center justify-center gap-4"
                type="button"
              >
                Contact Us
                <i className="fa-solid fa-arrow-up rotate-90"></i>
              </button>
            </Link>
          </span>
        </div>

        <img
          className="h-[250px] w-full lg:h-[300px] lg:w-[500px] rounded-lg object-cover flex mx-0"
          src={underthesink}
          alt="hydra-reverse-osmosis-water-purifier"
        />
      </div>

      {/* Hydra's Statistics */}
      <div className="stats grid grid-cols-2 md:grid-cols-4 gap-4 justify-between">
        <section className="flex  items-center gap-2">
          <h3 className="text-2xl font-black  text-blue-900">200+</h3>
          <span className="text-sm font-semibold">
            Customers
            <br />
            Nationwide
          </span>
        </section>

        <section className="flex  items-center gap-2">
          <h3 className="text-2xl font-black  text-blue-900">97%</h3>
          <span className="text-sm font-semibold">
            Customer
            <br />
            Satisfaction Rate
          </span>
        </section>

        <section className="flex  items-center gap-2">
          <h3 className="text-2xl font-black  text-blue-900">2+</h3>
          <span className="text-sm font-semibold">
            Years Of
            <br />
            Experience
          </span>
        </section>

        <section className="flex items-center gap-2">
          <h3 className="text-2xl font-black text-blue-900">100+</h3>
          <span className="text-sm font-semibold">
            Lives
            <br />
            Impacted
          </span>
        </section>
      </div>

      <hr className="my-1 mt-4" />

      <img src={image5} alt="hydra-print" className="h-8 object-cover w-full" />

      <div className="featured-products">
        <p className="text-teal-600 text-xs mt-24 tracking wider font-bold">
          SHOP WITH US
        </p>
        <p className="text-2xl font-bold underline underline-offset-4">
          Featured Products
        </p>
      </div>

      <div className="products my-10">
        <div className="product1">
          <div className="img overflow-hidden h-[230px] w-full rounded-md flex items-center justify-center border">
            <img
              src={fivestagePurifier}
              alt="hydra-5stage-purifier"
              className="hover:scale-125 w-[90%] object-cover"
            />
          </div>

          <p className="font-bold mt-2">
            5 Stage Reverse Osmosis Water Purifier
          </p>
          <p className="text-sm my-2 text-neutral-500 font-semibold">
            Ideal for users consuming treated City Council Water
          </p>
          <p className="font-bold text-green-600 underline underline-offset-4">
            Ksh. 25,000
          </p>
        </div>

        <div className="product2">
          <div className="img overflow-hidden h-[230px] w-full rounded-md flex items-center justify-center border">
            <img
              src={sevenstagePurifier}
              alt="hydra-7stage-purifier"
              className="hover:scale-125 object-cover w-[70%]"
            />
          </div>
          <p className="font-bold mt-2">
            7 Stage Reverse Osmosis Water Purifier
          </p>
          <p className="text-sm my-2 text-neutral-500 font-semibold">
            Ideal for those using borehole water ,river and rain water
          </p>
          <p className="font-bold text-green-600 underline underline-offset-4">
            Ksh. 40,000
          </p>
        </div>
      </div>

      <Link
        to="/blog"
        className="text-sm font-bold underline underline-offset-2 text-blue-600"
      >
        Learn more about RO Purifiers
        <i className="fa-solid fa-arrow-up rotate-45 ml-1"></i>
      </Link>

      {/* services section header*/}
      <p className="text-center text-teal-600 tracking-wide text-xs font-bold mt-24">
        WHAT WE OFFER
      </p>
      <h3 className="text-2xl text-center font-bold underline underline-offset-4">
        Our Best Services
      </h3>

      {/* services */}
      <div className="services flex  justify-center items-center lg:justify-evenly flex-wrap gap-4 mt-8">
        {/* water testing */}
        <div className="service-card service1 border-2 border-blue-800 rounded-md relative p-2 py-4 bg-white">
          <p className="text-blue-800 font-bold text-lg mb-4 text-center underline underline-offset-8">
            Water Testing
          </p>
          <p className="text text-neutral-900 text-center">
            We analyze your water for impurities & safety then recommend the
            perfect treatment solution for your home
          </p>
        </div>

        {/* purification systems */}
        <div className="service-card service2 p-2 py-4  shadow-lg border rounded-md relative bg-blue-800 text-white">
          <p className=" font-bold text-lg mb-4 text-center">
            Domestic Water Purification Systems
          </p>
          <p className="text-white text-center">
            <span className="block text-neutral-200">
              <i className="fa-regular fa-circle-check mr-2  text-white"></i>5
              Stage Purifiers
            </span>
            <span className="text-neutral-200">
              <i className="fa-regular fa-circle-check  mr-2 text-white"></i>7
              Stage Purifiers
            </span>
          </p>
        </div>

        {/* servicing services */}
        <div className="service-card service3 border-2 p-2 py-4 h-36 border-blue-800 rounded-md relative bg-white">
          <p className="mb-4 text-lg text-blue-800 font-bold text-center underline underline-offset-8">
            System Servicing
          </p>
          <p className="text-neutral-900 text-center">
            We offer free servicing only for the first month of purchasing the
            purifier system
          </p>
        </div>
      </div>

      {/* servicing schedule */}
      <h2 className="text-2xl text-center mt-24 mb-1">Servicing Schedule</h2>
      <ol className="stepper">
        <li>Installation</li>
        <li>3 Months</li>
        <li className="active">6 Months</li>
        <li>9 Months</li>
        <li>Year 1 </li>
        <li className="active">Year 2</li>
      </ol>

      {/* our story */}
      <div className="about-us mt-32 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div className="about-story lg:w-1/2">
          <p className="text-xs text-teal-600 tracking-wider font-bold uppercase mb-2">
            About Hydra
          </p>
          <h3 className="text-2xl font-bold">
            Our journey to revolutionize water for a sustainable future
          </h3>
          <p className="my-8">
            Hydra was founded to address the notable lack of service delivery in
            the areas of water, renewable energy and stand-by power solutions.
            After identifying the gap in quality service, we sought to close the
            accessibility and availability of safe drinking water to all while
            encouraging cooperation with our partners. By offering top-notch
            products and services, we hope to improve the communities we serve
            as well as the environment .
          </p>
          <Link to="/about">
            <button
              className="border px-6 py-3 font-semibold secondary text-white rounded  flex items-center justify-evenly"
              type="button"
            >
              Read Our Story
              <i className="fa-solid fa-arrow-up rotate-45"></i>
            </button>
          </Link>
        </div>

        <div className="our-pic lg:w-1/2 hidden md:flex items-center lg:justify-end my-8">
          <img
            src={africanmap}
            alt="The-African-map-hydra"
            className="w-1/2 lg:w-[70%] object-cover rounded-md"
          />
        </div>
      </div>

      <p className="text-xs text-teal-500 tracking-wider font-bold  text-center mt-24">
        OUR PARTNERS
      </p>
      <h3 className="text-2xl font-bold text-center underline underline-offset-8">
        Only Recognized By the Best
      </h3>
      <div className="partners-wrapper my-4 ">
        <div className="scroll-content flex items-center w-full justify-evenly gap-4 flex-wrap">
          <img src={hidrotech} alt="hidrotech-hydra-partner" className="" />
          <img src={fineteklabs} alt="fineteklabs-hydra-partner" className="" />
          <img
            src={celestialdental}
            alt="celestial-dental-hydra-partner"
            className=""
          />
          <img src={stuntech} alt="stuntech-hydra-partner" className="" />
          <img src={amario} alt="amario-hydra-partner" className="" />
        </div>
      </div>

      <h1 className="mt-24 mb-12 font-bold text-2xl text-center">
        What Our Customers Say
      </h1>

      <Testimonials />


      <h2 className="text-2xl mb-12 mt-24 underline underline-offset-8 font-bold text-center">
        Frequently Asked Questions
      </h2>

      <Accordions />

      <h2 className="text-2xl font-semibold text-center mb-4 mt-24">
        Ready To Go Green?
      </h2>

      <Link to="/contact">
        <button
          className="w-48 py-3 font-semibold secondary text-white rounded flex mx-auto items-center justify-center mb-24 active:translate-y-[2px] transition-all"
          type="button"
        >
          Contact Us
        </button>
      </Link>
    </div>
  );
}

export default Home;
