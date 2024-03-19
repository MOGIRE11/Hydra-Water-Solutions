function Home() {
  return (
    <div className="px-4 lg:px-20 my-8">
      <div className="hero-section flex flex-col my-10 lg:my-8 lg:mt-20 gap-4 lg:flex-row lg:justify-between items-center lg:mb-20">
        <div className="hero-content lg:w-1/2 mb-8 lg:mb-2">
          <small className="text-xs font-bold gray tracking-wide">
            HYDRA WATER SOLUTIONS
          </small>
          <h1 className="text-3xl lg:text-4xl font-bold">
            Presents the Domestic water Purification System
          </h1>
          <p className="mt-4 mb-8 lg:w-[90%]">
            Envision being able to turn your tap water into crisp ,clean
            refeshment at the touch of a button .Home water filtration systems
            not only remove impurities but also ensure that every sip is a pure
            and healthy delight.{" "}
          </p>
          <span className="flex flex-wrap gap-4">
            <button
              className="border-2 w-40 py-2 rounded-md border-black font-semibold"
              type="button"
            >
              View Products
            </button>
            <button
              className="border w-40 py-2 font-semibold secondary text-white rounded-md"
              type="button"
            >
              Contact Us
            </button>
          </span>
        </div>
        <img
          className=""
          src="src/components/assets/7stage.svg"
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

      <img src="src\components\assets\Hydra-print.svg" alt="hydra-print" />

      <div className="featured-products">
        <p className="gray text-xs mt-24 tracking wider font-bold">
          SHOP WITH US
        </p>
        <p className="text-2xl font-bold">Featured Products</p>
        <p className="lg:w-[70%] text-sm my-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          ipsum,neque dolor eos illo repellendus numquam soluta ratione velit
          eos illo repellendus
        </p>
      </div>

      <div className="products mt-10">
        <div className="product1">
          <img
            src="src/components/assets/5stage.svg"
            alt="hydra-5stage-purifier"
            className="border rounded-md h-42 w-full object-cover"
          />
          <p className="font-bold mt-2">
            5 Stage Reverse Osmosis Water Purifier
          </p>
          <p className="text-sm my-2">
            Ideal for users consuming treated City Council Water
          </p>
          <p className="font-bold">Ksh. 30,000</p>
        </div>

        <div className="product2">
          <img
            src="src/components/assets/7stage.svg"
            alt="hydra-5stage-purifier"
            className="border h-42 w-full object-cover"
          />
          <p className="font-bold mt-2">
            5 Stage Reverse Osmosis Water Purifier
          </p>
          <p className="text-sm my-2">
            Ideal for those using borehole water ,river and rain water
          </p>
          <p className="font-bold">Ksh. 40,000</p>
        </div>
      </div>

      <p className="mt-10 text-sm font-semibold">
        Learn more about the Reverse Osmosis Water Purifiers.
      </p>

      {/* services section header*/}
      <p className="md:text-center gray tracking-wide text-xs font-semibold mt-24">
        WHAT WE OFFER
      </p>
      <h3 className="text-2xl md:text-center font-bold">Our Best Services</h3>
      <p className="md:text-center text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
        commodi iusto maxime.
      </p>

      {/* services */}
      <div className="services flex items-start justify-between lg:items-center lg:justify-evenly flex-wrap gap-y-4 mt-8">
        <div className="service1 shadow-lg border w-64 h-36 rounded-md relative">
          <div className="w-8 h-8 bg-blue-800 opacity-[0.5] rounded-md absolute top-2 left-2"></div>
        </div>
        <div className="service1  shadow-lg border w-64 h-36 rounded-md relative">
          <div className="w-8 h-8 bg-blue-800 opacity-[0.5] rounded-md absolute top-2 left-2"></div>
        </div>
        <div className="service1 shadow-lg border w-64 h-36 rounded-md relative">
          <div className="w-8 h-8 bg-blue-800 opacity-[0.5] rounded-md absolute top-2 left-2"></div>
        </div>
      </div>

      {/* our story */}
      <div className="about-us mt-32 flex flex-col lg:flex-row items-start justify-between gap-y-8">
        <div className="about-story lg:w-1/2">
          <p className="text-xs gray tracking-wider font-semibold">ABOUT HYDRA</p>
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
          <button
            className="border w-40 py-2 font-semibold secondary text-white rounded-md"
            type="button"
          >
            Read Our Story
          </button>
        </div>

        <img src="src/components/assets/Hydra-team-photo.svg" alt="" className="lg:w-[60%] lg:h-[300px] h-[250px] w-full object-cover rounded-md" />
      </div>
      
      <p className="text-xs gray tracking-wider font-bold">OUR PARTNERS</p>
      <h3 className="">Only Recognized By the Best</h3>
    </div>
  );
}

export default Home