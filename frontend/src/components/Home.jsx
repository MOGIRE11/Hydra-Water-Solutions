import { NavLink } from "react-router-dom";
import sevenstagePurifier from "./assets/branded7stage.png";
import fivestagePurifier from "./assets/branded5stage.png";
// import labelledsevenstagePurifier from "./assets/7stage-labelled.svg";
import africanmap from './assets/african-map.svg';
import celestialdental from "./assets/celestial-dental-partner.svg";
import fineteklabs from "./assets/fineteklabs-partner.png";
import user from "./assets/user.jpg";
import amario from "./assets/amario-partner.svg";
import hidrotech from "./assets/hidrotech-partner.svg";
import stuntech from "./assets/Stuntech-partner.svg";
import image5 from "./assets/image5.svg";
// import hydraprint from "./assets/Hydra-print.svg";
// import hydrateam from "./assets/Hydra-team-photo.svg";
import underthesink from "./assets/7stagepurifier.svg";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,

} from "@chakra-ui/react";
// import Testimonials from "./components/Testimonials";


function Home(){

  return (
    <div className="px-4 lg:px-20 my-8 max-w-[1440px] mx-auto">
      <div className="hero-section flex flex-col my-10 lg:my-8 lg:mt-20 gap-4 lg:flex-row lg:justify-between items-center lg:mb-20">
        <div className="hero-content lg:w-1/2 mb-8 lg:mb-2">
          <small className="text-xs font-bold text-teal-500 tracking-wide">
            UNDER THE SINK
          </small>
          <h1 className="text-3xl lg:text-4xl font-bold">
            Domestic water Purification System
          </h1>
          <p className="mt-6 mb-8 lg:w-[90%]">
            Envision being able to turn your tap water into crisp ,
            <span className=" font-semibold underline text-teal-500 underline-offset-2">
              clean refeshment at the touch of a button
            </span>
            . Home water filtration systems not only remove impurities but also
            ensure that every sip is a pure and healthy delight.
          </p>
          <span className="flex flex-wrap gap-4">
            <NavLink to="/products">
              <button
                className="border-2 w-40 py-2 rounded-md border-black font-semibold"
                type="button"
              >
                View Products
              </button>
            </NavLink>

            <NavLink to="/contact">
              <button
                className="w-40 py-2 font-semibold secondary text-white rounded-md border secondary  flex items-center justify-center gap-4"
                type="button"
              >
                Contact Us
                <i className="fa-solid fa-arrow-up rotate-90"></i>
              </button>
            </NavLink>
          </span>
        </div>

        <img
          className="h-[250px] w-full lg:h-[300px] lg:w-[500px] rounded-md aspect-video object-cover flex mx-0"
          src={underthesink}
          alt="hydra-reverse-osmosis-water-purifier"
        />
      </div>

      {/* Hydra's Statistics */}
      <div className="stats flex flex-col  items-center justify-between md:flex-row gap-4">
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

      <hr className="my-2" />

      <img src={image5} alt="hydra-print" className="h-6 object-cover w-full" />

      <div className="featured-products">
        <p className="text-teal-500 text-xs mt-24 tracking wider font-bold">
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

      <NavLink to="/blog" className="text-sm font-bold underline underline-offset-2 text-blue-600">
        Learn more about RO Purifiers
        <i className="fa-solid fa-arrow-up rotate-45 ml-1"></i>
      </NavLink>

      {/* services section header*/}
      <p className="text-center text-teal-500 tracking-wide text-xs font-bold mt-24">
        WHAT WE OFFER
      </p>
      <h3 className="text-2xl text-center font-bold underline underline-offset-4">
        Our Best Services
      </h3>

      {/* services */}
      <div className="services flex  justify-center items-center lg:justify-evenly flex-wrap gap-4 mt-8">
        {/* water testing */}
        <div className="service1 border-2 border-blue-800 w-64 h-36 rounded-md relative p-2 bg-white">
          <p className="text-blue-800 font-bold text-lg mb-2 text-center underline underline-offset-8">
            Water Testing
          </p>
          <p className="text-sm text-neutral-900 text-center">
            We analyze your water for impurities & safety then recommend the
            perfect treatment solution for your home
          </p>
        </div>

        {/* purification systems */}
        <div className="service2 p-2 shadow-lg border w-64 h-36 rounded-md relative bg-blue-800 text-white">
          <p className=" font-bold text-lg mb-4 text-center">
            Domestic Water Purification Systems
          </p>
          <p className="text-white text-center">
            <span className="block text-sm text-neutral-200">
              <i className="fa-regular fa-circle-check mr-2  text-white"></i>5
              Stage Purifiers
            </span>
            <span className="text-sm text-neutral-200">
              <i className="fa-regular fa-circle-check  mr-2 text-white"></i>7
              Stage Purifiers
            </span>
          </p>
        </div>

        {/* servicing services */}
        <div className="service3 border-2 p-2 border-blue-800 w-64 h-36 rounded-md relative bg-white">
          <p className="mb-2 text-lg text-blue-800 font-bold text-center underline underline-offset-8">
            System Servicing
          </p>
          <p className="text-sm text-neutral-900 text-center">
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
          <p className="text-xs text-teal-500 tracking-wider font-bold">
            ABOUT HYDRA
          </p>
          <h3 className="text-2xl font-bold">
            Our journey to revolutionize water for a sustainable future
          </h3>
          <p className="mt-6 mb-8">
            Hydra was founded to address the notable lack of service delivery in
            the areas of water, renewable energy and stand-by power solutions.
            After identifying the gap in quality service, we sought to close the
            accessibility and availability of safe drinking water to all while
            encouraging cooperation with our partners. By offering top-notch
            products and services, we hope to improve the communities we serve
            as well as the environment .
          </p>
          <NavLink to="/about">
            <button
              className="border w-40 py-2 font-semibold secondary text-white rounded-md  flex items-center justify-evenly"
              type="button"
            >
              Read Our Story
              <i className="fa-solid fa-arrow-up rotate-45"></i>
            </button>
          </NavLink>
        </div>

        <div className="our-pic lg:w-1/2 hidden md:flex items-center lg:justify-end my-8">
          <img
            src={africanmap}
            alt="The-African-map-hydra"
            className="w-[70%] object-cover rounded-md"
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

      <h1 className="mt-24 mb-12 font-bold text-2xl text-center underline underline-offset-4">
        What Our Customers Say
      </h1>

      {/* <Testimonials/> */}

      {/* Testimonials */}

      <div className="testimonial_slider_2 mb-24 lg:w-[70%] border shadow-lg rounded-lg bg-white">
        <input type="radio" name="slider_2" id="slide_2_1" checked />
        <input type="radio" name="slider_2" id="slide_2_2" />
        <input type="radio" name="slider_2" id="slide_2_3" />
        <input type="radio" name="slider_2" id="slide_2_4" />
        <div className="boo_inner clearfix">
          <div className="slide_content">
            <div className="testimonial_2">
              <div className="content_2">
                <p>
                  Absolutely love it. My water is crystal clear and taste so
                  good. You can definitely tell water no chemicals like
                  chlorine... HIGHLY RECOMMEND
                </p>
              </div>

              <div className="author_2 flex items-end gap-2">
                <img
                  src={user}
                  alt=""
                  className="w-12 h-12 object-cover rounded-full"
                />
                <span className="">
                  <h3>Alex Thuo</h3>
                  <h4>Celestial Dental</h4>
                </span>
              </div>
            </div>
          </div>
          <div className="slide_content">
            <div className="testimonial_2">
              <div className="content_2">
                <p>
                  As someone with sensitive skin, hard water was a nightmare.
                  Hydra&apos;s water softener is a lifesaver! My skin feels
                  noticeably softer, and my hair is more manageable. Plus,
                  there&apos;s less cleaning residue on everything, which is a
                  bonus. Thank you, Hydra, for making my life easier and my skin
                  happier!
                </p>
              </div>
              <div className="author_2 flex gap-2 items-end">
                <img
                  src={user}
                  alt=""
                  className="w-12 h-12 object-cover rounded-full"
                />
                <span className="">
                  <h3>Linda Awuor</h3>
                  <h4>Valley Medical Center</h4>
                </span>
              </div>
            </div>
          </div>
          <div className="slide_content">
            <div className="testimonial_2">
              <div className="content_2">
                <p>
                  Upgrading to Hydra&apos;s commercial filtration system was the
                  best decision for our restaurant. The coffee tastes amazing,
                  and customers rave about the improved flavor of our food.
                  We&apos;ve even seen a decrease in maintenance costs for our
                  ice machines and coffee makers. Hydra&apos;s customer service
                  is top-notch, always responsive and helpful.
                </p>
              </div>
              <div className="author_2 flex gap-2 items-end">
                <img
                  src={user}
                  alt=""
                  className="w-12 h-12 object-cover rounded-full"
                />
                <span className="">
                  <h3>Linda Awuor</h3>
                  <h4>Valley Medical Center</h4>
                </span>
              </div>
            </div>
          </div>
          <div className="slide_content">
            <div className="testimonial_2">
              <div className="content_2">
                <p>
                  Hydra&apos;s commitment to clean water extends far beyond
                  individual homes. Their partnership with our community to
                  install filtration systems in public schools ensures safe
                  drinking water for our children. We&apos;re grateful for
                  Hydra&apos;s dedication to public health and their innovative
                  solutions.
                </p>
              </div>
              <div className="author_2 flex gap-2 items-end">
                <img
                  src={user}
                  alt=""
                  className="w-12 h-12 object-cover rounded-full"
                />
                <span className="">
                  <h3>Linda Awuor</h3>
                  <h4>Valley Medical Center</h4>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div id="controls">
          <label htmlFor="slide_2_1"></label>
          <label htmlFor="slide_2_2"></label>
          <label htmlFor="slide_2_3"></label>
          <label htmlFor="slide_2_4"></label>
        </div>
      </div>

      {/* frequently asked questions */}
      <h2 className="text-2xl mb-8 mt-24 underline underline-offset-8 font-bold text-center">
        Frequently Asked Questions
      </h2>
      <Accordion allowToggle>
        <AccordionItem className=" shadow-md py-2 mt-1 bg-neutral-100 ">
          <h2>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                className="font-semibold"
              >
                Does it remove salinity?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel
            pb={4}
            className="font-bold text-sm lg:text-base text-neutral-700 indent-2"
          >
            Yes
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem className=" shadow-md py-2 mt-2 border-none bg-neutral-100 ">
          <h2>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                className="font-semibold"
              >
                Can be detached on relocation?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel
            pb={4}
            className="text-sm lg:text-base text-neutral-700 "
          >
            <span className="font-bold text-black">Yes</span> , the systems are
            detached free of charge by our technical team and reinstalled in
            your new space
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem className=" shadow-md py-2 mt-2 border-none bg-neutral-100 ">
          <h2>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="start"
                className="font-semibold"
              >
                Is the water safe for drinking ?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel
            pb={4}
            className="text-neutral-700 text-sm lg:text-base"
          >
            <span className="font-bold">Yes , </span>the systems filter sediment
            ,kill microorganisms and mineralise your water optimally , simply
            put , they are the &quot; domestic versions &quot; of the industrial
            purification systems that produce mineral water .
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem className=" shadow-md py-2 mt-2 border-none bg-neutral-100 ">
          <h2>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                className="font-semibold"
              >
                How many litres can it purify in a day?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel
            pb={4}
            className="text-sm lg:text-base text-neutral-700"
          >
            5 stage purifiers - 200 to 300l a day , 7 stage purifiers - upto
            400l in a day
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem className=" shadow-md py-2 mt-2 border-none bg-neutral-100 ">
          <h2>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                className="font-semibold"
              >
                Will it clear up my stained teeth
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel
            pb={4}
            className="text-sm lg:text-base text-neutral-700"
          >
            <span className="font-bold">No , </span>Fluorosis is not reversible
            .However , it will prevent further staining of the teeth
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem className=" shadow-md py-2 mt-2 border-none bg-neutral-100 ">
          <h2>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                className="font-semibold"
              >
                What does it filter ?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel
            pb={4}
            className="text-sm lg:text-base text-neutral-700"
          >
            Sediment , chloride , flouride , heavy metals , microplastics ,
            herbicides , pesticides , microorganisms, salt and most
            contaminants.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem className=" shadow-md py-2 mt-2 border-none bg-neutral-100 ">
          <h2>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                className="font-semibold"
              >
                How often do you need to do maintenance ?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel
            pb={4}
            className="text-sm lg:text-base text-neutral-700"
          >
            This is dependent on the water source and your usage .Changes in the
            water source might disrupt your maintenance schedule .
            <span className="font-bold text-black">
              Hydra offers free first year maintenance service
            </span>{" "}
            every 3 months so as to gauge the working of the systems in your
            space and advise on the best maintenance schedule that will give you
            optimum functioning of the system .The schedules may range from
            every 5 months to every 3 years.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      {/* end of accordions */}

      {/* ready to go green */}
      <h2 className="text-2xl font-semibold text-center mb-4 mt-16">
        Ready To Go Green?
      </h2>

      <NavLink to="/contact">
        <button
          className="w-40 py-2 font-semibold secondary text-white rounded-md flex mx-auto items-center justify-center mb-16"
          type="button"
        >
          Contact Us
        </button>
      </NavLink>
    </div>
  );
}

export default Home;
