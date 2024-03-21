import { NavLink } from "react-router-dom";

function Contact() {
  return (
    <div className="px-4 lg:px-20">
      <div className="breadcrumb flex items-center gap-2 text-xs mt-4 mb-20">
        <NavLink to="/">
          <i class="fa-solid fa-house mr-1 cursor-pointer"></i>
          <p className="inline hover:text-blue-800 hover:font-bold">Home</p>
        </NavLink>
        <i className="fa-solid fa-chevron-right"></i>
        Contact Us
        <i className="fa-solid fa-chevron-right"></i>
        Get a Quote
      </div>
      <div className="flex ">
        {/* left side */}
        <div className="request w-[50%]">
          <h2 className="font-bold text-2xl "> Submit a Quote Request</h2>
          <p className="text-sm mb-4 ">
            Investing in clean water is investing in health and well-being. At
            Hydra, we are committed to sustainability
          </p>
          <div className="location flex gap-3 mb-4">
            <i class="fa-solid fa-house mt-1"></i>
            <div>
              <p className="font-bold">Our Location</p>
              <p className="text-neutral-500 text-sm ">
                Industrial Area, Nairobi
              </p>
            </div>
          </div>
          <div className="phone flex gap-3 mb-4">
            <i class="fa-solid fa-phone-volume mt-1"></i>
            <div>
              <p className="font-bold">Phone Number</p>
              <p className="text-neutral-500 text-sm">(+254)-704-062-778</p>
            </div>
          </div>
          <div className="email flex gap-3 mb-14">
            <i class="fa-solid fa-envelope mt-1"></i>
            <div>
              <p className="font-bold">Email Address</p>
              <p className="text-neutral-500 text-sm ">
                hydrawater254@gmail.com
              </p>
            </div>
          </div>
          <img src="src/components/assets/image 5.svg" alt="" />
        </div>
        {/* form */}
        <div className="form">
          <form className="flex flex-col gap-1" action="" method="post">
            <label className="mb-2" htmlFor="name">
              <p className="font-bold "> Name</p>
              <input
                className="name  w-full py-2 px-2 border rounded-md outline-green-400 "
                type="text"
                id="name"
                name="Name"
                placeholder="Enter your name"
                required
              />
            </label>
            <label htmlFor="email">
              <p className="font-bold ">Email</p>
              <input
                className="email  w-full py-2 px-2 border rounded-md outline-green-400 "
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </label>
            <label htmlFor="phone">
              <p className="font-bold ">Phone</p>
              <input
                className="phone  w-full py-2 px-2 border rounded-md outline-green-400 "
                type="number"
                id="phone"
                placeholder="Enter your phone number"
                required
              />
            </label>
            <label htmlFor="location">
              <p>Location</p>
              <input
                className="location  w-full py-2 px-2 border rounded-md outline-green-400 "
                type="text"
                id="location"
                name="location"
                placeholder="Enter your location"
                required
              />
            </label>
            <p>What services or equipment are you interested in?</p>
            <label htmlFor="interest1">
              <input
                type="checkbox"
                id="interest1"
                name="interests"
                value="Reverse-osmosis"
              />{" "}
              Reverse Osmosis system or Maintenance
            </label>
            <label htmlFor="interest2">
              <input
                type="checkbox"
                id="interest2"
                name="interests"
                value="Filters"
              />{" "}
              Filters and Other System Components
            </label>
            <label htmlFor="interest3">
              <input
                type="checkbox"
                id="interest3"
                name="interests"
                value="UV"
              />
              UV Systems and Parts
            </label>
            <label htmlFor="interest4">
              <input
                type="checkbox"
                id="interest4"
                name="interests"
                value="Other"
              />
              Other Services or Equipment
            </label>

            <p>Additional information</p>
            <textarea
              className="bg-neutral-500"
              name="information"
              id="info"
              cols="25"
              rows="7"
            ></textarea>

            <label htmlFor="terms">
              <input type="checkbox" id="terms" name="terms" required />I accept
              the <a href="#">Terms and Conditions Policy</a>
            </label>

            <button className="">Submit Quote Request</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact