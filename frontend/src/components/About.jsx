import { NavLink } from "react-router-dom";
import hydrateam from "./assets/Hydra-team-photo.svg";
import user from './assets/user.jpg';


function About() {
  return (
    <div className="px-4 lg:px-20 min-h-[70vh] mb-24">
      <div className="top h-24 bg-blue-600 mt-2 flex flex-col items-center justify-center">
        <p className="font-bold text-xl mt-1">About Us</p>
        <div className="breadcrumb flex items-center gap-2 text-sm font-bold ">
          <NavLink to="/">
            <i className="fa-solid fa-house mr-1 cursor-pointer "></i>
            <p className="inline hover:text-blue-800 hover:font-bold">Home</p>
          </NavLink>
          <i className="fa-solid fa-chevron-right"></i>
          About Us
        </div>
      </div>

      <h1 className="text-2xl text-center font-bold mt-8">Welcome to Hydra</h1>
      <p className="mb-8 text-center text-neutral-600 text-sm">
        Revolutionizing water for a sustainable future
      </p>

      {/* history */}
      <div className="section1 flex flex-col md:flex-row gap-8 mt-8 items-center justify-center">
        <img
          src={hydrateam}
          alt="hydra-team-photo"
          className="h-[300px] w-full object-cover"
        />
        <div className="about-details">
          {/* heading */}
          <h2 className="font-bold underline underline-offset-4 mb-4">
            OUR STORY
          </h2>
          <p className="">
            Hydra was founded to address the notable lack of service delivery in
            the areas of water, renewable energy and stand-by power solutions.
            After identifying the gap in quality service, we sought to close the
            accessibility and availability of safe drinking water to all while
            encouraging cooperation with our partners. By offering top-notch
            products and services, we hope to improve the communities we serve
            as well as the environment .
          </p>
          <p className="my-4">
            We are an organization aimed at providing solutions for the people
            we serve through use of sophisticated technology bettering the
            peoples overall health.
          </p>
          <p className="">
            We believe in treating our customers with respect and honesty, our
            employees with value and dignity and our partners with integrity and
            ethical business practices.
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

      {/* meet our team */}
      <h1 className="text-2xl font-bold mt-24 text-center underline underline-offset-4">
        Meet The Team
      </h1>
      <div className="members flex items-center justify-evenly flex-wrap mt-12 space-y-8">
        <div className="ceo relative w-[250px]">
          <img src={user} alt="Hydra-CEO" className="" />
          <p className=" text-lg font-bold">Andrew Gisemba</p>
          <p className="text-sm font-semibold gray">CEO Hydra</p>
        </div>

        <div className="ceo relative w-[250px]">
          <img
            src="https://img.freepik.com/free-photo/businesswoman-executive-professional-success-concept_53876-137644.jpg?t=st=1711576559~exp=1711580159~hmac=34433e1ac2df2b4c9ff27c9aaa647931c08773aecb09a4e1a72e6cb104b158cd&w=826"
            alt="Hydra-CEO"
            className="border object-cover w-full"
          />
          <p className=" text-lg font-bold">Andrew Gisemba</p>
          <p className="text-sm font-semibold gray">CEO Hydra</p>
        </div>

        <div className="ceo relative w-[250px]">
          <img src={user} alt="Hydra-CEO" className="" />
          <p className=" text-lg font-bold">Andrew Gisemba</p>
          <p className="text-sm font-semibold gray">CEO Hydra</p>
        </div>
      </div>
      {/* clients */}
    </div>
  );
}

export default About;
