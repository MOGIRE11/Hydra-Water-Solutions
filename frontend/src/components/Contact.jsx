import { NavLink } from "react-router-dom";
import hydraprint from "./assets/Hydra-print.svg";


function Contact() {
  return (
    <div className="px-4 lg:px-20">
      {/* breadcrumb */}
      <div className="breadcrumb flex items-center gap-2 text-xs mt-4 mb-8">
        <NavLink to="/">
          <i className="fa-solid fa-house mr-1 cursor-pointer text-blue-800"></i>
          <p className="inline hover:text-blue-800 hover:font-bold">Home</p>
        </NavLink>
        <i className="fa-solid fa-chevron-right"></i>
        Contact Us
        <i className="fa-solid fa-chevron-right"></i>
        Get a Quote
      </div>

      <div className="flex flex-wrap  md:gap-16 ">
        {/* left side */}
        <div className="request md:w-[50%] md:mb-16">
          <h2 className="font-bold text-2xl "> Submit a Quote Request</h2>
          <p className="text-sm mb-4 ">
            Investing in clean water is investing in health and well-being. At
            Hydra, we are committed to sustainability
          </p>
          <div className="location flex gap-3 mb-4 items-center">
            <i className="fa-solid fa-house mt-1 border p-2 rounded-md bg-neutral-200 dark-icon"></i>
            <div>
              <p className="font-bold">Our Location</p>
              <p className="text-neutral-500 text-sm ">
                Industrial Area, Nairobi
              </p>
            </div>
          </div>
          <div className="phone flex gap-3 mb-4 items-center">
            <i className="fa-solid fa-phone-volume mt-1 border p-2 rounded-md bg-neutral-200 dark-icon"></i>
            <div>
              <p className="font-bold">Phone Number</p>
              <p className="text-neutral-500 text-sm">(+254)-704-062-778</p>
            </div>
          </div>
          <div className="email flex gap-3 mb-14 items-center">
            <i className="fa-solid fa-envelope mt-1 border p-2 rounded-md bg-neutral-200 dark-icon"></i>
            <div>
              <p className="font-bold">Email Address</p>
              <p className="text-neutral-500 text-sm ">
                hydrawater254@gmail.com
              </p>
            </div>
          </div>
          <img
            src={hydraprint}
            alt="hydra-african-print"
            className="hidden md:flex"
          />
        </div>
        {/* form */}
        <div className="form ">
          <form
            className="flex flex-col justify-center gap-1"
            action=""
            method="post"
          >
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
                type="text"
                id="phone"
                placeholder="Enter your phone number"
                required
              />
            </label>
            <label htmlFor="location">
              <p className="font-bold ">Location</p>
              <input
                className="location  w-full py-2 px-2 border rounded-md outline-green-400 "
                type="text"
                id="location"
                name="location"
                placeholder="Enter your location"
                required
              />
            </label>
            <p className="mt-5 font-bold">
              What services or equipment are you interested in?
            </p>
            <label htmlFor="interest1" className="flex gap-2">
              <input
                type="checkbox"
                id="interest1"
                name="interests"
                value="Reverse-osmosis"
              />
              Reverse Osmosis system or Maintenance
            </label>
            <label htmlFor="interest2" className="flex gap-2">
              <input
                type="checkbox"
                id="interest2"
                name="interests"
                value="Filters"
              />
              Filters and Other System Components
            </label>
            <label htmlFor="interest3" className="flex gap-2">
              <input
                type="checkbox"
                id="interest3"
                name="interests"
                value="UV"
              />
              UV Systems and Parts
            </label>
            <label htmlFor="interest4" className="flex gap-2">
              <input
                type="checkbox"
                id="interest4"
                name="interests"
                value="Other"
              />
              Other Services or Equipment
            </label>

            <p className="font-bold mt-3 ">Additional information</p>
            <textarea
              className="border rounded-md px-2 py-1 text-sm mb-5 outline-green-400"
              name="information"
              id="info"
              cols="20"
              rows="5"
              placeholder="Leave a message ..."
            ></textarea>

            <label className=" items-center" htmlFor="terms">
              <input
                className="px-3 mr-1"
                type="checkbox"
                id="terms"
                name="terms"
                required
              />
              I have read and understood the <NavLink to="/errorPage" className="underline underline-offset-2 text-neutral-600">Terms and Conditions</NavLink> Policy.
            </label>

            <button className=" secondary w-52 py-2 px-4 rounded-md  my-4 font-bold text-white">
              Submit Quote Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact

// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import hydraprint from "./assets/Hydra-print.svg";

// function Contact() {
//   const [formSubmitted, setFormSubmitted] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     location: "",
//     interests: [],
//     additionalInfo: "",
//     termsAgreed: false,
//   });

//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     const newValue = type === "checkbox" ? checked : value;

//     setFormData({
//       ...formData,
//       [name]: newValue,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add form submission logic here (e.g., API call, validation)
//     setFormSubmitted(true);
//     setFormData({
//       name: "",
//       email: "",
//       phone: "",
//       location: "",
//       interests: [],
//       additionalInfo: "",
//       termsAgreed: false,
//     });
//   };

//   return (
//     <div className="px-4 lg:px-20 min-h[80vh]">
//       {/* Breadcrumb */}
//       <div className="breadcrumb flex items-center gap-2 text-xs mt-4 mb-8">
//         {/* Breadcrumb links */}
//       </div>

//       <div className="flex flex-wrap md:gap-16">
//         {/* Left side content */}
//         <div className="request md:w-[50%] md:mb-16">
//           {/* Existing content */}
//         </div>

//         {/* Form */}
//         <div className="form">
//           {formSubmitted ? (
//             <div className="congratulatory-message">
//               <p>Thank you for submitting your quote request!</p>
//             </div>
//           ) : (
//             <form
//               className="flex flex-col justify-center gap-1"
//               onSubmit={handleSubmit}
//             >
//               {/* Form fields */}
//               <label className="mb-2" htmlFor="name">
//                 <p className="font-bold "> Name</p>
//                 <input
//                   className="name  w-full py-2 px-2 border rounded-md outline-green-400 "
//                   type="text"
//                   id="name"
//                   name="Name"
//                   placeholder="Enter your name"
//                   required
//                 />
//               </label>
//               <label htmlFor="email">
//                 <p className="font-bold ">Email</p>
//                 <input
//                   className="email  w-full py-2 px-2 border rounded-md outline-green-400 "
//                   type="email"
//                   id="email"
//                   name="email"
//                   placeholder="Enter your email"
//                   required
//                 />
//               </label>
//               <label htmlFor="phone">
//                 <p className="font-bold ">Phone</p>
//                 <input
//                   className="phone  w-full py-2 px-2 border rounded-md outline-green-400 "
//                   type="text"
//                   id="phone"
//                   placeholder="Enter your phone number"
//                   required
//                 />
//               </label>
//               <label htmlFor="location">
//                 <p className="font-bold ">Location</p>
//                 <input
//                   className="location  w-full py-2 px-2 border rounded-md outline-green-400 "
//                   type="text"
//                   id="location"
//                   name="location"
//                   placeholder="Enter your location"
//                   required
//                 />
//               </label>
//               <p className="mt-5 font-bold">
//                 What services or equipment are you interested in?
//               </p>
//               <label htmlFor="interest1" className="flex gap-2">
//                 <input
//                   type="checkbox"
//                   id="interest1"
//                   name="interests"
//                   value="Reverse-osmosis"
//                 />
//                 Reverse Osmosis system or Maintenance
//               </label>
//               <label htmlFor="interest2" className="flex gap-2">
//                 <input
//                   type="checkbox"
//                   id="interest2"
//                   name="interests"
//                   value="Filters"
//                 />
//                 Filters and Other System Components
//               </label>
//               <label htmlFor="interest3" className="flex gap-2">
//                 <input
//                   type="checkbox"
//                   id="interest3"
//                   name="interests"
//                   value="UV"
//                 />
//                 UV Systems and Parts
//               </label>
//               <label htmlFor="interest4" className="flex gap-2">
//                 <input
//                   type="checkbox"
//                   id="interest4"
//                   name="interests"
//                   value="Other"
//                 />
//                 Other Services or Equipment
//               </label>

//               <p className="font-bold mt-3 ">Additional information</p>
//               <textarea
//                 className="border rounded-md px-2 py-1 text-sm mb-5 outline-green-400"
//                 name="information"
//                 id="info"
//                 cols="20"
//                 rows="5"
//                 placeholder="Leave a message ..."
//               ></textarea>

//               <label className=" items-center" htmlFor="terms">
//                 <input
//                   className="px-3 mr-1"
//                   type="checkbox"
//                   id="terms"
//                   name="terms"
//                   required
//                 />
//                 I have read and understood the{" "}
//                 <NavLink
//                   to="/errorPage"
//                   className="underline underline-offset-2 text-neutral-600"
//                 >
//                   Terms and Conditions
//                 </NavLink>{" "}
//                 Policy.
//               </label>

//               <button type="submit" className=" secondary w-52 py-2 px-4 rounded-md  my-4 font-bold text-white">
//                 Submit Quote Request
//               </button>
//             </form>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Contact;






