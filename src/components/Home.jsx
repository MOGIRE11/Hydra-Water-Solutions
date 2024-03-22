import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="px-4 lg:px-20 my-8">
      <div className="hero-section flex flex-col my-10 lg:my-8 lg:mt-20 gap-4 lg:flex-row lg:justify-between items-center lg:mb-20">
        <div className="hero-content lg:w-1/2 mb-8 lg:mb-2">
          <small className="text-xs font-bold text-orange-500 tracking-wide">
            UNDER THE SINK
          </small>
          <h1 className="text-3xl lg:text-4xl font-bold">
            Domestic water Purification System
          </h1>
          <p className="mt-6 mb-8 lg:w-[90%]">
            Envision being able to turn your tap water into crisp ,{" "}
            <span className="text-orange-500 font-bold underline underline-offset-2">
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
              className="w-40 py-2 font-semibold secondary text-white rounded-md"
              type="button"
            >
              <NavLink to="/contact">Contact Us</NavLink>
            </button>
          </span>
        </div>
        <img
          className="h-[300px] w-full lg:h-auto lg:w-auto flex mx-0"
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
        <p className="text-orange-500 text-xs mt-24 tracking wider font-bold">
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
            src="src/components/assets/5stage.svg"
            alt="hydra-5stage-purifier"
            className="border rounded-md h-42 w-full object-cover"
          />
          <p className="font-bold mt-2">
            5 Stage Reverse Osmosis Water Purifier
          </p>
          <p className="text-sm my-2 text-neutral-500 font-semibold">
            Ideal for users consuming treated City Council Water
          </p>
          <p className="font-bold text-orange-500 underline underline-offset-4">
            Ksh. 30,000
          </p>
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
          <p className="text-sm my-2 text-neutral-500 font-semibold">
            Ideal for those using borehole water ,river and rain water
          </p>
          <p className="font-bold text-orange-500 underline underline-offset-4">
            Ksh. 40,000
          </p>
        </div>
      </div>

      <p className="mt-10 text-sm font-semibold">
        Learn more about the Reverse Osmosis Water Purifiers.
      </p>

      {/* services section header*/}
      <p className="md:text-center text-orange-500 tracking-wide text-xs font-bold mt-24">
        WHAT WE OFFER
      </p>
      <h3 className="text-2xl md:text-center font-bold">Our Best Services</h3>
      {/* <p className="md:text-center text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
        commodi iusto maxime.
      </p> */}

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
      <div className="about-us mt-32 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div className="about-story lg:w-1/2">
          <p className="text-xs text-orange-500 tracking-wider font-bold">
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
          <button
            className="border w-40 py-2 font-semibold secondary text-white rounded-md"
            type="button"
          >
            Read Our Story
          </button>
        </div>

        <div className="our-pic lg:w-1/2 flex items-center lg:justify-end my-8">
          <img
            src="src/components/assets/Hydra-team-photo.svg"
            alt=""
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
          <img
            src="src/components/assets/hidrotech-partner.svg"
            alt="hidrotech-hydra-partner"
            className=""
          />
          <img
            src="src\components\assets\fineteklabs-partner.png"
            alt="fineteklabs-hydra-partner"
            className=""
          />
          <img
            src="src/components/assets/celestial-dental-partner.svg"
            alt="celestial-dental-hydra-partner"
            className=""
          />
          <img
            src="src/components/assets/Stuntech-partner.svg"
            alt="stuntech-hydra-partner"
            className=""
          />
          <img
            src="src/components/assets/amario-partner.svg"
            alt="amario-hydra-partner"
            className=""
          />
        </div>
      </div>

      {/* Testimonials */}

      <div className="testimonial_slider_2">
        <input type="radio" name="slider_2" id="slide_2_1" checked />
        <input type="radio" name="slider_2" id="slide_2_2" />
        <input type="radio" name="slider_2" id="slide_2_3" />
        <input type="radio" name="slider_2" id="slide_2_4" />
        <div className="boo_inner clearfix">
          <div className="slide_content">
            <div className="testimonial_2">
              <div className="content_2">
                <p>
                  Susan, I had to leave the workshop early so I didn&apos;t get a
                  chance to say goodby or thank you and Rod for the terrific job
                  you did. 
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
                  Susan is not only passionate about her work and purpose in the
                  world, she has education and experience that empower her to be
                  highly effective in everything that she pursues. We took
                  several courses together during her career at Brite and it was
                  clear that she was well acquainted with many fields including
                  anthropology, sociology, history, queer theologies, and a
                  number of multicultural studies.
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
                  The messenger is the message, and in this very good book, we
                  find important messages that sadden, excite and affirm us as
                  people who celebrate both our sexuality and our spirituality.
                
                </p>
              </div>
              <div className="author_2">
                <h3>Brian McNaught</h3>
                <h4>
                  Author of <i>Gay Issues in the Workplace</i>
                </h4>
              </div>
            </div>
          </div>
          <div className="slide_content">
            <div className="testimonial_2">
              <div className="content_2">
                <p>
                  These personal stories will persuade even the most cynical
                  that religion can be a force that is fully accepting and
                  transforming. Indeed, the fulfillment of religion’s true
                  promise is found among those who have courageously spoken
                  here.
                </p>
              </div>
              <div className="author_2">
                <h3>Lee Barker</h3>
                <h4>
                  President and Professor of Ministry, Meadville Lombard
                  Theological School
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
    </div>
  );
}

export default Home;
