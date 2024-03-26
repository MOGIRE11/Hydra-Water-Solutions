import { NavLink } from "react-router-dom";
import hydrateam from "./assets/Hydra-team-photo.svg";

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
      <p className="mb-8 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
        illum?
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
            OUR HISTORY
          </h2>
          <p className="">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Accusantium eius itaque qui magnam nisi dolor magni voluptatum sed
            doloremque nostrum rem minima, sint inventore maiores, cumque quod
            dolore adipisci at.
          </p>
          <p className="my-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Accusantium eius itaque qui magnam nisi dolor magni voluptatum sed
            doloremque nostrum rem minima, sint inventore maiores, cumque quod
            dolore adipisci at.
          </p>
          <p className="">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Accusantium eius itaque qui magnam nisi dolor magni voluptatum sed
            doloremque nostrum rem minima, sint inventore maiores, cumque quod
            dolore adipisci at.
          </p>
        </div>
      </div>

      {/* mission and vision */}
      <div className="vision-warpper grid grid-cols-1  md:grid-cols-3 gap-10 mt-24 divide-y-20">
        {/* vision */}
        <div className="vision ">
          {/* paper plane - telegram */}
          <i className="fa-solid fa-house mr-1 cursor-pointer  w-12 h-12 text-white border flex items-center justify-center rounded-full bg-blue-700"></i>
          <h2 className="font-bold tracking-wide text-xl my-2">OUR VISION</h2>
          <p className="">
            -To provide sustainable world class solutions in our fields of
            specialization.
          </p>
        </div>

        {/* mission */}
        <div className="mission">
          {/* compass */}
          <i className="fa-solid fa-house mr-1 cursor-pointer  w-12 h-12 text-white border flex items-center justify-center rounded-full bg-blue-700"></i>
          <h2 className="font-bold tracking-wide text-xl my-2">OUR MISSION</h2>
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
          <h2 className="font-bold tracking-wide text-xl my-2">
            OUR STRENGTHS
          </h2>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            porro deleniti, temporibus quod saepe illo eaque fugiat voluptates
            corrupti, commodi ducimus rerum cupiditate vitae a iusto? Sunt animi
            ab accusamus.
          </p>
        </div>
      </div>

      {/* stats */}

      {/* meet our team */}

      {/* clients */}
    </div>
  );
}

export default About;
