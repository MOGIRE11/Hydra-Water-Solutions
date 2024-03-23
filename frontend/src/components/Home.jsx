import { NavLink } from "react-router-dom";
import sevenstagePurifier from './assets/7stage.svg'
import fivestagePurifier from './assets/5stage.svg'
// import labelledsevenstagePurifier from "./assets/7stage-labelled.svg";
// import africanmap from './assets/african-map.svg';
import celestialdental from './assets/celestial-dental-partner.svg';
import fineteklabs from './assets/fineteklabs-partner.png';
import amario from "./assets/amario-partner.svg";
import hidrotech from "./assets/hidrotech-partner.svg";
import stuntech from "./assets/Stuntech-partner.svg";
// import image5 from "./assets/image5.svg";
import hydraprint from "./assets/Hydra-print.svg";
import hydrateam from "./assets/Hydra-team-photo.svg";


function Home() {
  return (
    <div className="px-4 lg:px-20 my-8">
      <div className="hero-section flex flex-col my-10 lg:my-8 lg:mt-20 gap-4 lg:flex-row lg:justify-between items-center lg:mb-20">
        <div className="hero-content lg:w-1/2 mb-8 lg:mb-2">
          <small className="text-xs font-bold gray tracking-wide">
            UNDER THE SINK
          </small>
          <h1 className="text-3xl lg:text-4xl font-bold">
            Domestic water Purification System
          </h1>
          <p className="mt-6 mb-8 lg:w-[90%]">
            Envision being able to turn your tap water into crisp ,{" "}
            <span className=" font-semibold underline underline-offset-2">
              clean refeshment at the touch of a button
            </span>
            . Home water filtration systems not only remove impurities but also
            ensure that every sip is a pure and healthy delight.
          </p>
          <span className="flex flex-wrap gap-4">
            <button
              className="border-2 w-40 py-2 rounded-md border-black font-semibold"
              type="button"
            >
              <NavLink to="/products">View Products</NavLink>
            </button>
            <button
              className="w-40 py-2 font-semibold secondary text-white rounded-md border secondary  flex items-center justify-center gap-4"
              type="button"
            >
              <NavLink to="/contact">Contact Us</NavLink>
              <i className="fa-solid fa-arrow-up rotate-90"></i>
            </button>
          </span>
        </div>

        <img
          className="h-[300px] w-full lg:h-auto lg:w-auto flex mx-0"
          src={sevenstagePurifier}
          alt="hydra-reverse-osmosis-water-purifier"
        />
      </div>

      {/* Hydra's Statistics */}
      <div className="stats flex items-center justify-evenly flex-wrap gap-4">
        <section className="flex items-center gap-2">
          <h3 className="text-2xl font-bold">200+</h3>
          <span className="text-sm font-semibold">
            Customers
            <br />
            Nationwide
          </span>
        </section>

        <section className="flex items-center gap-2">
          <h3 className="text-2xl font-bold">97%</h3>
          <span className="text-sm font-semibold">
            Customer
            <br />
            Satisfaction Rate
          </span>
        </section>

        <section className="flex items-center gap-2">
          <h3 className="text-2xl font-bold">2+</h3>
          <span className="text-sm font-semibold">
            Years Of
            <br />
            Experience
          </span>
        </section>

        <section className="flex items-center gap-2">
          <h3 className="text-2xl font-bold">100+</h3>
          <span className="text-sm font-semibold">
            Lives
            <br />
            Impacted
          </span>
        </section>
      </div>

      <hr className="my-2" />

      <img src={hydraprint} alt="hydra-print" />

      <div className="featured-products">
        <p className="gray text-xs mt-24 tracking wider font-bold">
          SHOP WITH US
        </p>
        <p className="text-2xl font-bold">Featured Products</p>
        {/* <p className="lg:w-[70%] text-sm my-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          ipsum,neque dolor eos illo repellendus numquam soluta ratione velit
          eos illo repellendus
        </p> */}
      </div>

      <div className="products mt-10">
        <div className="product1">
          <img
            src={fivestagePurifier}
            alt="hydra-5stage-purifier"
            className="border rounded-md h-42 w-full object-cover"
          />
          <p className="font-bold mt-2">
            5 Stage Reverse Osmosis Water Purifier
          </p>
          <p className="text-sm my-2 text-neutral-500 font-semibold">
            Ideal for users consuming treated City Council Water
          </p>
          <p className="font-bold text-green-500 underline underline-offset-4">
            Ksh. 25,000
          </p>
        </div>

        <div className="product2">
          <img
            src={sevenstagePurifier}
            alt="hydra-5stage-purifier"
            className="border h-42 w-full object-cover"
          />
          <p className="font-bold mt-2">
            5 Stage Reverse Osmosis Water Purifier
          </p>
          <p className="text-sm my-2 text-neutral-500 font-semibold">
            Ideal for those using borehole water ,river and rain water
          </p>
          <p className="font-bold text-green-500 underline underline-offset-4">
            Ksh. 40,000
          </p>
        </div>
      </div>

      <p className="mt-10 text-sm gray font-semibold">
        Learn more about the Reverse Osmosis Water Purifiers.
      </p>

      {/* services section header*/}
      <p className="md:text-center gray tracking-wide text-xs font-bold mt-24">
        WHAT WE OFFER
      </p>
      <h3 className="text-2xl md:text-center font-bold">Our Best Services</h3>
      {/* <p className="md:text-center text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
        commodi iusto maxime.
      </p> */}

      {/* services */}
      <div className="services flex items-start justify-between lg:items-center lg:justify-evenly flex-wrap gap-y-4 mt-8">
        
        {/* water testing */}
        <div className="service1 border-2 border-blue-800 w-64 h-36 rounded-md relative p-2">
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
        <div className="service3 border-2 p-2 border-blue-800 w-64 h-36 rounded-md relative">
          
          <p className="mb-2 text-lg text-blue-800 font-bold text-center underline underline-offset-8">
            System Servicing
          </p>
          <p className="text-sm text-neutral-900 text-center">
            We offer free servicing only for the first month of purchasing the
            purifier system
          </p>
        </div>
      </div>



      {/* our story */}
      <div className="about-us mt-32 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div className="about-story lg:w-1/2">
          <p className="text-xs gray tracking-wider font-bold">ABOUT HYDRA</p>
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
          <button
            className="border w-40 py-2 font-semibold secondary text-white rounded-md  flex items-center justify-evenly"
            type="button"
          >
            <NavLink to="/about">Read Our Story</NavLink>
            <i className="fa-solid fa-arrow-up rotate-45"></i>
          </button>
        </div>

        <div className="our-pic lg:w-1/2 flex items-center lg:justify-end my-8">
          <img
            src={hydrateam}
            alt="Hydra-team-photo"
            className="h-[300px] w-full lg:w-[80%] lg:h-[300px] object-cover rounded-md"
          />
        </div>
      </div>

      <p className="text-xs gray tracking-wider font-bold  md:text-center mt-24">
        OUR PARTNERS
      </p>
      <h3 className="text-2xl font-bold md:text-center">
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

      {/* Testimonials */}

      <div className="testimonial_slider_2 my-24">
        <input type="radio" name="slider_2" id="slide_2_1" checked />
        <input type="radio" name="slider_2" id="slide_2_2" />
        <input type="radio" name="slider_2" id="slide_2_3" />
        <input type="radio" name="slider_2" id="slide_2_4" />
        <div className="boo_inner clearfix">
          <div className="slide_content">
            <div className="testimonial_2">
              <div className="content_2">
                <p>
                  Ever since installing Hydra&apos;s water purification system,
                  our family can finally enjoy worry-free drinking! The taste is
                  incredible, and knowing the water is safe for the kids gives
                  us immense peace of mind. Hydra&apos;s technicians were
                  professional and efficient, making the whole process a breeze.
                </p>
              </div>
              <div className="author_2">
                <h3>Karen Sweetland</h3>
                <h4>Valley Medical Center, San Jose, CA</h4>
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
              <div className="author_2">
                <h3>Leah Jordan</h3>
                <h4> MDiv, Brite Divinity School</h4>
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
              <div className="author_2">
                <h3>Brian McNaught</h3>
                <h4>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit,
                  fuga?
                </h4>
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
              <div className="author_2">
                <h3>Lee Barker</h3>
                <h4>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium, animi!
                </h4>
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

      {/* ready to go green */}
      <h2 className="text-2xl font-semibold text-center mb-4 mt-16">
        Ready To Go Green?
      </h2>
      <button
        className="w-40 py-2 font-semibold secondary text-white rounded-md flex mx-auto items-center justify-center mb-16"
        type="button"
      >
        <NavLink to="/contact">Contact Us</NavLink>
      </button>
    </div>
  );
}

export default Home;
