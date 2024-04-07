import { NavLink } from "react-router-dom";
import celestialdental from "./assets/celestial-dental-partner.svg";
import fineteklabs from "./assets/fineteklabs-partner.png";
import amario from "./assets/amario-partner.svg";
import hidrotech from "./assets/hidrotech-partner.svg";
import stuntech from "./assets/Stuntech-partner.svg";
import waterBg from "./assets/water-background.svg"
// import africanmap from "./assets/african-map.svg";

function About() {
  return (
    <div className="px-4 lg:px-20 min-h-[70vh] mb-24">
      {/* bg-pc */}
      {/* <img
        src={africanmap}
        alt=""
        className="absolute -z-20 top-[20%] left-[35%] mx-auto flex blur-[2px] w-[80%]"
      /> */}
      {/* end of bg-pic */}

      <div className="about-top h-24 mt-2 flex flex-col items-center justify-center relative overflow-hidden">
        <img
          src={waterBg}
          alt="hydra-water-bg"
          className="absolute w-full h-full object-cover -z-20 blur-[1px]"
        />
        <p className="font-bold text-xl mt-1 text-white">WHO ARE WE ?</p>
        <div className="breadcrumb flex items-center gap-2 text-sm font-bold text-white">
          <NavLink to="/">
            <i className="fa-solid fa-house mr-1 cursor-pointer "></i>
            <p className="inline hover:text-blue-800 hover:font-bold">Home</p>
          </NavLink>
          <i className="fa-solid fa-chevron-right"></i>
          About Us
        </div>
      </div>

      <hr className="mt-2" />
      <h1 className="text-2xl text-center font-bold">Welcome to Hydra</h1>
      <p className=" text-center text-neutral-600 text-sm">
        Revolutionizing water for a sustainable future
      </p>
      <hr className="mt-2" />

      {/* history */}
      <div className="section1 flex flex-col md:flex-row gap-8 mt-8 items-center justify-center">
        <div className="about-details md:w-[90%]">
          {/* heading */}
          <h2 className="font-bold underline underline-offset-4 mb-2">
            Frustrated by unreliable water treatment options?
          </h2>
          <p className="">
            Hydra was born out of the same frustration. We saw a gap in quality
            service for water, renewable energy, and backup power solutions. Our
            mission? To bridge that gap and make these essentials accessible to
            everyone.
          </p>
          <p className="my-4">
            <span className="font-bold ">We go beyond just products.</span>
            We believe in building partnerships to ensure everyone has access to
            clean drinking water. By offering top-of-the-line technology and
            unparalleled service, we empower communities and protect the
            environment.
          </p>
          <p className="">
            <span className="">
              At Hydra, it&apos;s about more than solutions; it&apos;s about
              people.
            </span>
            <span> We&apos;re committed to:</span>
            <ul className="">
              <li className="mt-1">
                <span className="font-bold flex gap-2">
                  <i className="fa-solid fa-check text-green-600 border-2 border-green-500 rounded-full h-6 w-6 flex items-center justify-center"></i>
                  Improving the lives of our customers:
                </span>
                We use advanced technology to deliver innovative solutions that
                enhance your overall health and well-being.
              </li>
              <li className="my-2">
                <span className="font-bold flex gap-2">
                  <i className="fa-solid fa-check text-green-600 border-2 border-green-500 rounded-full h-6 w-6 flex items-center justify-center"></i>
                  Empowering our employees:
                </span>
                We value and respect our team, fostering a positive and
                rewarding work environment.
              </li>
              <li className="">
                <span className="font-bold flex gap-2">
                  <i className="fa-solid fa-check text-green-600 font-bold border-2 border-green-500 rounded-full h-6 w-6 flex items-center justify-center"></i>
                  Building strong partnerships:
                </span>
                We believe in ethical business practices and building trust with
                our partners.
              </li>
            </ul>
          </p>
        </div>
      </div>

      {/* mission and vision */}
      <div className="vision-wrapper grid grid-cols-1  md:w-[90%] mx-auto md:grid-cols-3 gap-10 mt-24 divide-y-20">
        {/* vision */}
        <div className="vision ">
          <hr className="my-1" />
          <div className="div flex items-center justify-center">
            <i className="fa-solid fa-paper-plane mr-2 cursor-pointer  w-8 h-8 text-white border flex items-center justify-center rounded-full bg-blue-700"></i>
            <h2 className="font-bold tracking-wide text-lg my-2 text-center">
              OUR VISION
            </h2>
          </div>
          <hr className="my-1 mb-2" />

          <p className="">
            To provide sustainable world class solutions in our fields of
            specialization.
          </p>
        </div>

        {/* mission */}
        <div className="mission">
          <hr className="my-1" />
          <div className="div flex items-center justify-center">
            <i className="fa-solid fa-compass mr-2 cursor-pointer  w-8 h-8 text-white border flex items-center justify-center rounded-full bg-blue-700"></i>
            <h2 className="font-bold tracking-wide text-lg my-2 text-center">
              OUR MISSION
            </h2>
          </div>
          <hr className="my-1 mb-2" />

          <p className="">
            To provide safe and accessible water for everyone, and to foster a
            culture of collaboration and excellence among our stakeholders. We
            believe that by delivering quality products and services, we can
            make a positive impact on the lives of people and the environment.
          </p>
        </div>

        {/* strengths */}
        <div className="strengths">
          <hr className="my-1" />
          <div className="div flex items-center justify-center">
            <i className="fa-solid fa-leaf mr-2 cursor-pointer  w-8 h-8 text-white border flex items-center justify-center rounded-full bg-blue-700"></i>

            <h2 className="font-bold tracking-wide text-lg my-2 text-center">
              OUR GOAL
            </h2>
          </div>
          <hr className="my-1 mb-2" />
          <p className="">
            To better lives of our communities through provision of of high
            quality products and services in the fields of water, renewable
            energy and stand-by power.
          </p>
        </div>
      </div>

      {/* stats */}
      <div className="about-stats flex flex-col md:flex-row items-center justify-evenly mt-20 bg-blue-700 space-y-4 md:h-24 p-2 md:w-[90%] mx-auto">
        <section className="flex items-center flex-col">
          <h3 className="text-2xl font-black">200+</h3>
          <span className="text-sm font-bold">Customers Nationwide</span>
        </section>

        <section className="flex items-center flex-col">
          <h3 className="text-2xl font-black">97%</h3>
          <span className="text-sm font-bold">Customer Satisfaction Rate</span>
        </section>

        <section className="flex flex-col items-center ">
          <h3 className="text-2xl font-black">2+</h3>
          <span className="text-sm font-bold">Years Of Experience</span>
        </section>

        <section className="flex flex-col items-center">
          <h3 className="text-2xl font-black">100+</h3>
          <span className="text-sm font-bold">Lives Impacted</span>
        </section>
      </div>

      {/* clients */}
      <h2 className="underline underline-offset-4 text-lg tracking-wider font-bold text-center mt-24 ">
        Our Partners
      </h2>

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

      {/* fun facts */}
      <hr className="mt-10 mb-2" />
      <p className="text-center text-2xl font-semibold">Did You Know?</p>
      <hr className="mb-10 mt-2" />
      <ol>
        <li className="">
          <span className="font-black">1. </span> In Kenya, 9.9 million people
          drink directly from contaminated surface water sources .
        </li>
        <li className="">
          <span className="font-black">2. </span> 59% of people in Kenya have
          access to safe drinking water.- 41% living below that.
        </li>
        <li className="">
          <span className="font-black">3. </span> Dental fluorosis prevalence is at
          45% .
        </li>
        <li className="">
          <span className="font-black">4. </span> 33% of Kenyans living in urban
          areas do not have access to piped water, hence outsorce .
        </li>
        <li className="">
          <span className="font-black">5. </span> 19 million Kenyans have
          mild-extreme dental fluorosis. Number is set to double in 15 years .
        </li>
        <li className="">
          <span className="font-black">6. </span> Dental fluorosis is a major
          problem in all major cities .
        </li>
      </ol>
    </div>
  );
}

export default About;
