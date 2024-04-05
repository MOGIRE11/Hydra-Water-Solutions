import { NavLink } from "react-router-dom";
import hydrateam from "./assets/Hydra-team-photo.svg";
// import user from "./assets/user.jpg";
import celestialdental from "./assets/celestial-dental-partner.svg";
import fineteklabs from "./assets/fineteklabs-partner.png";
import amario from "./assets/amario-partner.svg";
import hidrotech from "./assets/hidrotech-partner.svg";
import stuntech from "./assets/Stuntech-partner.svg";
import waterBg from "./assets/water-background.svg"


function About() {
  return (
    <div className="px-4 lg:px-20 min-h-[70vh] mb-24">
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
        {/* <img
          src={hydrateam}
          alt="hydra-team-photo"
          className="h-[300px] w-full object-cover"
        /> */}
        <div className="about-details">
          {/* heading */}
          <h2 className="font-bold underline underline-offset-4 mb-2">
            Frustrated by unreliable water treatment options?
          </h2>
          <p className="">
            {/* Hydra was founded to address the notable lack of service delivery in
            the areas of water, renewable energy and stand-by power solutions.
            After identifying the gap in quality service, we sought to close the
            accessibility and availability of safe drinking water to all while
            encouraging cooperation with our partners. By offering top-notch
            products and services, we hope to improve the communities we serve
            as well as the environment . */}
            Hydra was born out of the same frustration. We saw a gap in quality
            service for water, renewable energy, and backup power solutions. Our
            mission? To bridge that gap and make these essentials accessible to
            everyone.
          </p>
          <p className="my-4">
            <span className="font-bold ">We go beyond just products.</span>
            {/* We are an organization aimed at providing solutions for the people
            we serve through use of sophisticated technology bettering the
            peoples overall health. */}
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
            {/* We believe in treating our customers with respect and honesty, our
            employees with value and dignity and our partners with integrity and
            ethical business practices. */}
            <span> We&apos;re committed to:</span>
            <ul className="">
              <li className="mt-1">
                <span className="font-bold block">
                  1. Improving the lives of our customers:
                </span>
                We use advanced technology to deliver innovative solutions that
                enhance your overall health and well-being.
              </li>
              <li className="my-2">
                <span className="font-bold block">
                  2. Empowering our employees:
                </span>
                We value and respect our team, fostering a positive and
                rewarding work environment.
              </li>
              <li className="">
                <span className="font-bold block">
                  3. Building strong partnerships:
                </span>
                We believe in ethical business practices and building trust with
                our partners.
              </li>
            </ul>
          </p>
        </div>
      </div>

      {/* mission and vision */}
      <div className="vision-warpper grid grid-cols-1  md:grid-cols-3 gap-10 mt-24 divide-y-20">
        {/* vision */}
        <div className="vision ">
          {/* paper plane - telegram */}
          <i className="fa-solid fa-house mr-1 cursor-pointer  w-12 h-12 text-white border flex items-center justify-center rounded-full bg-blue-700"></i>
          <h2 className="font-bold tracking-wide text-lg my-2 underline underline-offset-4">
            OUR VISION
          </h2>
          <p className="">
            To provide sustainable world class solutions in our fields of
            specialization.
          </p>
        </div>

        {/* mission */}
        <div className="mission">
          {/* compass */}
          <i className="fa-solid fa-house mr-1 cursor-pointer  w-12 h-12 text-white border flex items-center justify-center rounded-full bg-blue-700"></i>
          <h2 className="font-bold tracking-wide text-lg my-2 underline underline-offset-4">
            OUR MISSION
          </h2>
          <p className="">
            To provide safe and accessible water for everyone, and to foster a
            culture of collaboration and excellence among our stakeholders. We
            believe that by delivering quality products and services, we can
            make a positive impact on the lives of people and the environment.
          </p>
        </div>

        {/* strengths */}
        <div className="strengths">
          {/* leaf*/}
          <i className="fa-solid fa-house mr-1 cursor-pointer  w-12 h-12 text-white border flex items-center justify-center rounded-full bg-blue-700"></i>
          <h2 className="font-bold tracking-wide text-lg my-2 underline underline-offset-4">
            OUR GOAL
          </h2>
          <p className="">
            To better lives of our communities through provision of of high
            quality products and services in the fields of water, renewable
            energy and stand-by power.
          </p>
        </div>
      </div>

      {/* stats */}
      <div className="about-stats flex flex-col md:flex-row items-center justify-evenly mt-20 bg-blue-700 space-y-4 md:h-24 p-2">
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

      {/* meet our team */}
      {/* <h1 className="text-2xl font-bold mt-24 text-center underline underline-offset-4">
        Meet The Team
      </h1>

      <div className="members flex items-center justify-evenly flex-wrap mt-12 space-y-8">
        <div className="ceo relative w-[250px]">
          <img src={user} alt="Hydra-CEO" className="w-full rounded-md" />
          <p className=" text-lg font-bold">Andrew Gisemba</p>
          <p className="text-sm font-semibold gray">CEO Hydra</p>
        </div>

        <div className="ceo relative w-[250px]">
          <img
            src="https://img.freepik.com/free-photo/businesswoman-executive-professional-success-concept_53876-137644.jpg?t=st=1711576559~exp=1711580159~hmac=34433e1ac2df2b4c9ff27c9aaa647931c08773aecb09a4e1a72e6cb104b158cd&w=826"
            alt="Hydra-CEO"
            className="border object-cover w-full rounded-md"
          />
          <p className=" text-lg font-bold">Temina Semo</p>
          <p className="text-sm font-semibold gray">Sales Manager Hydra</p>
        </div>

        <div className="ceo relative w-[250px]">
          <img
            src="https://img.freepik.com/free-photo/medium-shot-man-working-as-lawyer_23-2151202441.jpg?t=st=1711577379~exp=1711580979~hmac=38933f2734447de4f3b9a103da2b4bfbc7902ba123859bd915df776e2e0394da&w=826"
            alt="Hydra-CEO"
            className="rounded-md w-full object-cover"
          />
          <p className=" text-lg font-bold">lorem ipsum</p>
          <p className="text-sm font-semibold gray">CEO Hydra</p>
        </div>
      </div> */}

      {/* clients */}
      <h2 className="underline underline-offset-4 text-lg tracking-wider font-bold  md:text-center mt-24 ">
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
    </div>
  );
}

export default About;
