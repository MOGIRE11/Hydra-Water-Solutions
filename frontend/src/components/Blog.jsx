import { NavLink } from "react-router-dom";
// import solar from "./assets/solar-pump.svg";
// import doctor from "./assets/doctor.svg";
 import stainedTeeth from "./assets/flourosis.svg";
// import ladyFetchingWater from "./assets/lady-fetching-water.svg";
// import purificationProcess from "./assets/water-purificaion-process.svg";
// import waterTesting from "./assets/water-testing.svg";
// import agriBusiness from "./assets/agri-business.svg";
// import coast from "./assets/coast.svg";

// function Blog() {
//   return (
//     <div className="px-4 lg:px-20 min-h-[80vh]">
//       <div className="breadcrumb flex items-center gap-2 text-xs mt-4 mb-8">
//         <NavLink to="/">
//           <i className="fa-solid fa-house mr-1 cursor-pointer "></i>
//           <p className="inline hover:text-blue-800 hover:font-bold">Home</p>
//         </NavLink>
//         <i className="fa-solid fa-chevron-right"></i>
//         Our Blog
//       </div>
//       <h2 className="font-bold text-2xl">Latest From our Blogs</h2>
//       <p>
//         Take some time to read a number of the articles written by people
//         affiliated to Hydra water solutions
//       </p>

//       {/* blogs */}
//       <div className="blog-card-wrapper mt-8 mb-24">
//         {/* card1 */}
//         <div className="blog-card1 border shadow-xl rounded-md">
//           <img src={purificationProcess} alt="" className="w-full" />
//           <p className="flex gap-2 text-xs mt-1 px-2">
//             <span className="bg-blue-100 px-3 py-1 text-blue-900">#Education</span>
//             <span className="px-3 py-1 bg-blue-100">5 min read</span>
//           </p>
//           <p className="heading my-2 font-semibold px-2">
//             What exactly does reverse osmosis mean?
//           </p>
//           <p className="author text-xs px-2 text-neutral-600 mb-2">
//             By Franklin Obega
//           </p>
//         </div>

//         {/* card2 */}
//         <div className="blog-card1 border shadow-xl rounded-md">
//           <img src={stainedTeeth} alt="" className="w-full" />
//           <p className="flex gap-2 text-xs mt-1 px-2">
//             <span className="bg-blue-100 px-3 py-1 text-green-600">#Health</span>
//             <span className="px-3 py-1 bg-blue-100">10 min read</span>
//           </p>
//           <p className="heading my-2 font-semibold px-2">
//             The fluorosis menace affecting children in Nakuru.
//           </p>
//           <p className="author text-xs px-2 text-neutral-600 mb-2">
//             By Dr.Onduso
//           </p>
//         </div>

//         {/* card3 */}
//         <div className="blog-card1 border shadow-xl rounded-md">
//           <img src={solar} alt="" className="w-full" />
//           <p className="flex gap-2 text-xs mt-1 px-2">
//             <span className="bg-blue-100 px-3 py-1 text-green-600">#Solar Power</span>
//             <span className="px-3 py-1 bg-blue-100">5 min read</span>
//           </p>
//           <p className="heading my-2 font-semibold px-2">
//             Benefits of solar-powered pumps for remote communities
//             </p>
//           <p className="author text-xs px-2 text-neutral-600 mb-2">
//             By Willy Nthiga
//           </p>
//         </div>

//         {/* card4 */}
//         <div className="blog-card4 border shadow-xl rounded-md">
//           <img src={doctor} alt="" className="w-full" />
//           <p className="flex gap-2 text-xs mt-1 px-2">
//             <span className="bg-blue-100 px-3 py-1 text-blue-900">#Health</span>
//             <span className="px-3 py-1 bg-blue-100">5 min read</span>
//           </p>
//           <p className="heading my-2 font-semibold px-2">
//             The link between water quality and Public Helth
//           </p>
//           <p className="author text-xs px-2 text-neutral-600 mb-2">
//             By Linda Cherop
//           </p>
//         </div>

//         {/* card5 */}
//         <div className="blog-card5 border shadow-xl rounded-md">
//           <img src={ladyFetchingWater} alt="" className="w-full" />
//           <p className="flex gap-2 text-xs mt-1 px-2">
//             <span className="bg-blue-100 px-3 py-1 text-green-600">#At Home</span>
//             <span className="px-3 py-1 bg-blue-100">10 min read</span>
//           </p>
//           <p className="heading my-2 font-semibold px-2">
//             5 Easy Ways to reduce your household water footprint
//           </p>
//           <p className="author text-xs px-2 text-neutral-600 mb-2">
//             By Diddy
//           </p>
//         </div>

//         {/* card6 */}
//         <div className="blog-card1 border shadow-xl rounded-md">
//           <img src={coast} alt="" className="w-full" />
//           <p className="flex gap-2 text-xs mt-1 px-2">
//             <span className="bg-blue-100 px-3 py-1 text-blue-900">#Coastal</span>
//             <span className="px-3 py-1 bg-blue-100">8 min read</span>
//           </p>
//           <p className="heading my-2 font-semibold px-2">
//             Sea level rise and the threat to Coastal water supplies
//           </p>
//           <p className="author text-xs px-2 text-neutral-600 mb-2">
//             By Khwatenge
//           </p>
//         </div>

//         {/* card7 */}
//         <div className="blog-card1 border shadow-xl rounded-md">
//           <img src={agriBusiness} alt="" className="w-full" />
//           <p className="flex gap-2 text-xs mt-1 px-2">
//             <span className="bg-blue-100 px-3 py-1 text-green-600">#Better Future</span>
//             <span className="px-3 py-1 bg-blue-100">10 min read</span>
//           </p>
//           <p className="heading my-2 font-semibold px-2">
//             How we are making water a cornerstone of the green economy
//           </p>
//           <p className="author text-xs px-2 text-neutral-600 mb-2">
//             By Annette Mutugi
//           </p>
//         </div>

//         {/* card8 */}
//         <div className="blog-card1 border shadow-xl rounded-md">
//           <img src={waterTesting} alt="" className="w-full" />
//           <p className="flex gap-2 text-xs mt-1 px-2">
//             <span className="bg-blue-100 px-3 py-1">#Credbility</span>
//             <span className="px-3 py-1 bg-blue-100">10 min read</span>
//           </p>
//           <p className="heading my-2 font-semibold px-2">
//             How water certification programs promote sustainability
//           </p>
//           <p className="author text-xs px-2 text-neutral-600 mb-2">
//             By Jolmon Kamau
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Blog;

// import { useState } from "react";

// // Sample data representing blog posts
// const blogPosts = [
//   {
//     id: 1,
//     title: "Flourosis menace. Does it affect children only? ",
//     image: "img src{}",
//     content:
//       "Dental fluorosis is the staining of teeth (yellowing, brown, white spots , freckles) and pitting of teeth due to intake of excess levels of flouride.Fluoride is an essential ion in whose role is to protect our teeth from dental caries. However, when ingested in higher levels (above 1000ppm) its benefits are overruled. The sources of the fluoride are :fluoridated bottled water, fluoridated milk, borehole water(major carrier), toothpaste when ingested, fluoride tablets, tea infusion etc. The fluoride gets into our system by ingestion of these products. The major contributor being the highly fluoridated borehole water used for cooking and drinking. In cooking, as the water boils the concentration of fluoride increases, in most households this occurs at least twice a day bringing the fluoride intake to an overall high.  Hydra water solutions solves this problem by purifying the water consumed using our Reverse Osmosis domestic water purifiers. These systems optimally fluoridate, purify, enhance taste, regulate pH and removes salinity from your tap water not only making it safe for drinking but it also brings delight to the user every sip they take. Excessive fluoride intake gradually presents itself as : dental fluorosis, skeletal fluorosis(weaker bones), gut complications, tremors etc.  ",
//   },
//   // {
//   //   id: 2,
//   //   title: "Second Blog Post",
//   //   content: "This is the content of the second blog post...",
//   // },
//   // Add more blog posts as needed
// ];

// const BlogPage = () => {
//   // State to keep track of the currently selected blog post
//   const [selectedPost, setSelectedPost] = useState(null);

//   // Function to handle selecting a blog post
//   const handlePostSelect = (postId) => {
//     const post = blogPosts.find((post) => post.id === postId);
//     setSelectedPost(post);
//   };

//   return (
//     <div className="container mx-auto px-4 lg:px-20 py-8 min-h-[80vh]">
//       <h2 className="font-bold text-2xl">Latest From our Blogs</h2>
//       <p className="mb-8">
//         Take some time to read a number of the articles written by people affiliated to Hydra water solutions
//       </p>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {/* Render list of blog posts */}
//         {blogPosts.map((post) => (
//           <div
//             key={post.id}
//             className=" p-4 shadow-md rounded-lg cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg bg-white"
//             onClick={() => handlePostSelect(post.id)}
//           >
//             <h2 className="text-xl font-semibold mb-2 text-blue-900">{post.title}</h2>
//             <p className="text-gray-600">{post.content.substring(0, 100)}...</p>
//           </div>
//         ))}
//       </div>
//       {/* Render selected blog post */}
//       {selectedPost && (
//         <div className="mt-8">
//           <h2 className="text-2xl font-semibold mb-4 underline underline-offset-4">{selectedPost.title}</h2>
//           <p>{selectedPost.content}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BlogPage;


import { useState } from "react";

// Sample data representing blog posts
const blogPosts = [
  {
    id: 1,
    title: "The Fluorosis menace. Does it affect children only?",
    image: stainedTeeth,
    date: "April 1, 2024",
    author: "Gisemba Andrew",
    content:
      "Dental fluorosis is the staining of teeth (yellowing, brown, white spots , freckles) and pitting of teeth due to intake of excess levels of flouride.Fluoride is an essential ion in whose role is to protect our teeth from dental caries. However, when ingested in higher levels (above 1000ppm) its benefits are overruled. The sources of the fluoride are : fluoridated bottled water, fluoridated milk, borehole water(major carrier), toothpaste when ingested, fluoride tablets, tea infusion etc. The fluoride gets into our system by ingestion of these products. The major contributor being the highly fluoridated borehole water used for cooking and drinking. In cooking, as the water boils the concentration of fluoride increases, in most households this occurs at least twice a day bringing the fluoride intake to an overall high.  Hydra water solutions solves this problem by purifying the water consumed using our Reverse Osmosis domestic water purifiers. These systems optimally fluoridate, purify, enhance taste, regulate pH and removes salinity from your tap water not only making it safe for drinking but it also brings delight to the user every sip they take. Excessive fluoride intake gradually presents itself as : dental fluorosis, skeletal fluorosis(weaker bones), gut complications, tremors etc.",
  },
  // Add more blog posts as needed
];

const BlogPage = () => {
  // State to keep track of the currently selected blog post
  const [selectedPost, setSelectedPost] = useState(null);

  // Function to handle selecting a blog post
  const handlePostSelect = (postId) => {
    const post = blogPosts.find((post) => post.id === postId);
    setSelectedPost(post);
  };

  return (
    <div className="container mx-auto px-4 lg:px-20 pb-8 pt-4 min-h-[80vh]">
      <div className="breadcrumb flex items-center gap-2 text-xs mb-8">
        <NavLink to="/">
          <i className="fa-solid fa-house mr-1 cursor-pointer "></i>
           <p className="inline hover:text-blue-800 hover:font-bold">Home</p>     
        </NavLink>
        <i className="fa-solid fa-chevron-right"></i>
         Our Blog 
      </div>
      <h2 className="font-bold text-2xl">Latest From our Blogs</h2>
      <p className="mb-8">
        Take some time to read a number of the articles written by people
        affiliated with Hydra water solutions
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Render list of blog posts */}
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="p-4 shadow-md rounded-lg cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg bg-white"
            onClick={() => handlePostSelect(post.id)}
          >
            <img
              src={post.image}
              alt={post.title}
              className="mb-2 h-32 w-full object-cover rounded-md"
            />
            <h2 className="text-xl font-semibold mb-2 text-blue-900">
              {post.title}
            </h2>
            <p className="font-semibold text-sm mb-2">
              {post.date} | {post.author}
            </p>
            <p className="text-gray-600">{post.content.substring(0, 100)}...</p>
          </div>
        ))}
      </div>
      {/* Render selected blog post */}
      {selectedPost && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">{selectedPost.title}</h2>
          <p className="text-sm font-semibold mb-4 text-neutral-600">
            {selectedPost.date} | {selectedPost.author}
          </p>
          <img
            src={selectedPost.image}
            alt={selectedPost.title}
            className="mb-4 h-64 w-full object-cover"
          />
          <p>{selectedPost.content}</p>
        </div>
      )}
    </div>
  );
};

export default BlogPage;
