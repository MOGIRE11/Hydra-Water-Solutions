// import { NavLink } from "react-router-dom";
// import solar from "./assets/solar-pump.svg";
// import doctor from "./assets/doctor.svg";
// import stainedTeeth from "./assets/flourosis.svg";
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
    title: "Fluorosis menace. Does it affect children only?",
    image:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMVFRUXFxgYFxcYGBUVGBUXFxgXFxcXFxUYHSggGBolHRcVITEhJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGhAQGy0lICUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQIDBgABB//EADgQAAEDAwIEBAQEBgIDAQAAAAEAAhEDBCESMQVBUWEicYGRE6Gx8AYywdEUI1Ji4fFCcgeSohX/xAAaAQADAQEBAQAAAAAAAAAAAAABAgMEAAUG/8QAJxEAAgICAgEDBAMBAAAAAAAAAAECEQMhEjFBEyJhBBRRcTKBoUL/2gAMAwEAAhEDEQA/ABHu8QR1pTwe6Aa1MbY4Xmo+rydFr6QH30Xtx+VeufKqruwuJpdC0MyR1RVG38Xsq6Tco+igUkG07YESAl97SgJ/wOmH1AwmNUgc8kY+cITiVuWOLXciU7WrMsZe/izKVacJfWbJwnXEGQPNA2NvLpSpm1VVh3DOHwBhP6VGAFXasAhWmpJRbMUm5MhchVNZhXbqbWIDLSBX0F3wIRoZPJc6lhcByFtZsiIQwpQYTFzOSprt88oMeMvAI2lnCL+DKtt6MwiRTXIE5goowFRVYEwcxUPoIk1IAFFA8Qt8Js4aShLyCijk3ZjrulBU7duIhNuJ240g80LQbBT2XTTR6xitpNVrWhdozhK2FEv4fVhL73hxbkLQ8Nty5wAGURxO2aAMgy2T2PMIon6vF0Zeypamohlvjbqq7V2lxHdH1XwOS4eTdi59tz+/9oq0piPVT1SF7QOVwG9F8DovF0rl1ki8shEU3Kh2VdREdwpo1PotaoVXqLyZwFWURUiTBlHiniUO2lkfNXT0yEDnsKtXQQe6c8YdRq0m1JiqB4xnxf3JC3C6oTHumjLVEZY7knfQnvCp2dKM9VO4omTPJEUngAJTRJ6pBlMwpjG+6Ha87qxr43XEeITSA++aupoQPBTfhdg6rIYNhJTJXpE8jUVbKRThQcFfXolu/mqtC5omvyB1QhSyXI+oydge3dU0rf8AMS4AiIGZdPSMY5paKxdItogxEfLPurIXBkAHl7SpB2PvnhEk9ngpqNWkRvhHcOo6zz9PoDsDtuV17ba3kMEARic9zk7yD8k3HViXuhDcNS64blMarkFUcEpdCy7bIQzKUou4cvbanlMUTpFVJmYz5+SLp2xcep6KdOjtujbRviA9jJbnkNX3uuFlIrpXppkGnLCBBIzJ5koC8rOMkmZ5pnxGlBLSACInTscb+qX16OMLvgSNdiktzKuOV1amRnmqmVOiJRstjkua6FMt8MzkqutQjmuoTlZxrBch1yNBHzWK1hT6pYtcMjMbpRc2pYciQo3XY8M0Z6BKrs+qlQaq7jOVKm9MU8B7Gq6nSQtqS44CZtouG4KW0Sk6K30yIwrm2hLXO6NLsECBtn9kRwuvSa/+a3U0gg9R3Hko8Qv9dPQ0S2mT4jguaT4ZHoqJKrJuUrpL+xRcsBGBHVDUqGUU0yvKpSM0JtaPPiAYVjLVzuSt4PZ6zqIwtPb0AOQCCTkQy51jdLsybrR7cwUZY8VfSBAkTvy2Wm+CD3HRUO4cw7tlFRknpkn9TGSqaETa7nZjHsB6q+2YakhuSBiOeR8t1PiPCIyw7clDgl66m8NDyzVgnBxmDBTRe6kM2pRbgQp2z3VNDRJz/btJ5+SrtA3WNU79WtyTjJ5deiNAdQe2oQ7V4pkcnAgETvic9whrcFtQktmJBDgWkSYn+0535YTcTuVp/ohUaGgjEhxByCO0RvschUNuY5Aqy5c0tc8/n1bbSHSdQAiII/8ApLWvztJ77JG6Kwja2O7JzwA5z2saOZ5T0CHu+J05JaXuPU42iD9VXR4c58F58v8AARv/AOY0ckPUdaRNvHF7/wAM7VrzKHqLT1OHMjZLL+wxIQt+Rlmg+jPVQmnBbcOLtRgATPeQAEuqDMIuxdDh5hUQ89xHFzZFroHijTJyAS44aJ5kEH3Q5pkvOkdTHTEkDqRsiqN9EkkneOZEjQXSCPFCt4gyNNUACTBAwHSAfpumZBX0xNVryZK8FQQuutTiXEf6AgfJCklImUcVR1w1KX4KY1HoCunQESo1M7T2VtZwcTiOw2HkFVSBnCZ23DiRJOZ2g95M+3uubFlJR2KDTXLSDhrRvuuRpk/uUa+2pyFH+HYQQ4E7nwiY2AkdP3XlG4DRBR9dkMnHLpkefPyyEjaf9dmVNow/EbIsdt4evL3QQGRC2V+wVGkfYhZqjYkVQCMb+yTrRux57W+zQcKtQ0DrCahqAt6okBH0nA5Csq6RhlKTdsEvuGNcJbgrOXTHMwVtIkJZxOzDgSpTVbRowZ2tSMxTfCnGogdSqLlhYYKN4E3U+en1KW7RtnKlyH9hSDWwOSOoHMRPrCDeSAYI5d+efcSmfB7QvJM4G/7JottqKPLm9OTIU3dURQbMTI25IZjyZHMg9Z+Sc0KTYBkDSQSIPODGfRPjVsnOVCiuxZziNHTUDhj5Z7LS1yTMdZjmB9wlXEaepnkhKmXwz4soueIhzPH4nadDf6WiZJAPPACgyoNL3E4cwt/MS4EEaZBOAdIEdIKXmp/tVfETcjSoLwF3dwHOkjkBsMwIkwpcNsp8RGP1VFCmXEBaSlbw1rRn9UjXJ7FyZOEeKBdPJSd5r2rAMBVVApuRn7PXDCBrs3TKjMEffdCXI/ynTtAumZHi1INII65VVEozjtPE9MpZa1tZgLovRthK4jOh5Sm1G0LsnlsOQVfDrUDf/Sb0WiMH7C6PuZHLlroWVqACXXFMdE3ujlJ7qoCCBui0iSkxPemPXZCNZKP4tR8AcN2wfSY/VM/whwn47i47Ngx1naTyH35OvwU9RKNlnB+EgAFwk/RaCpaBuwAEAjc9NyrqFIBwEYJ9B2VHFL6BmYbsB7eqeKSRklJyYuewzt81yBffEmV4hzQeDHDnTutBbeKm3VJgYzGDy+azz8kHyTu2umluOSz4q5Ox8l0qF93T0koW2qSSXQOSY3LpHkgrWnuTyKaMalo7l7Qi30ndF0iGtwqLalMq00wnf5F+A+3M46j/ACl94XNBRlm6HNHIkCekldVqB8gNxnO3olyR5R7Oi6ZjuIHVuIRnB6OlmMkmZ+/ZdxagASURw1ksHksuPktM1zlcQwAnA3Wq4C1op4IJ/wCUZjzCX8MtW/BL4BJOOxGJB67ryjLZ04J3gRK14lwak/JiyPmmkUVpLnFuBqJAymVrelwLHRpg5nPqTuvbWyd/WQO0BS/gC4kF5MbbJ4QmtoWU4vQqwKku/KcEj78kJdUy3U0nYkf5Tiva6cHI+qUcesyKfgOSlljcYseM02jPX2IJ8j9/e6oZUCJ4gPDn7KU8CcX1HTsx0eu/7KV8dGyM00PqdQ026w0zIAxIk9+Ueu6cVb7xDqAPSBC8vX6dNOB4Rn/scn9B6KNvSBzzT8ZrSZmc1LbITJlWO25fqiG0VdVoNDdwSEFiaQvNCs3jKYOsxqGkcvESIHyKrqCRPVBcX4U24Ia6fC4OwYyE8s7PwuHRsj0hdD3aDKkrMnxelhZ/8OnxacE5nAnBgAn5+q13GqEBZr8OMms/sT9VKdp0aMcvaai1pEb535r17y375Jha0ABrO/RV8VgNZjOk+o1H9k8IasjKduhS+oCYPSEDc0AMgqi/4g1kjc9AgqV5IjSRjG/1Rckux1F+C+5dIyMQQfUQivwdfOYX0wY1CCO7dvqUHhzSquFVdNWf7p908XbTQklpo3VN/Pt9ecpXxCoSDHki7u6LgGhK7+vAhVbpEYq2JXsM7rlRXr+IrlOkWtm7trXqixQDQY5qq2qyFdUejwXglyYIHZIVOk8j5rripBlRsqzagJaZgkHzHJCtBsvoVYVgdugq9TQc7Iuk0lTb8D15L7SqcdR9QmVy8fmj82cfP5ylzaSZNb4VSNpE5VZmeNOmY2U+FNhgzy+qq47cgOLef7ojhdPUxo7BZX/J0aP+UPLN0DTJjffmjKVAoOg2ITOq6A1boJVsySewy3OwKkymNRKGsHSTk4hHBaIu0Qlpi++dKSXxwU7vd0nuqcyuasMXRmHCdfkfllJvwbmrVG/84iO2qP3T2vT0uOesrN/gGTcXQ5CuSP8A2P8AhY5q2jbF+1m0u6mqo53VxPuSjLWmofwcHPVW1n6RKpJcfcyKd6QUxTqUwcApey7HPCIZWnZBTjIDi0S/gIEggrym4tJ7gj3UzWOyhWOZTJJdAbvsT8baNBlZn8N0watQjr+pT78RVJZp7FJPwTVDn1f+37qORLmjRjvgzVtuIaZ6fX7KV8auCST0aAPQAJteNAEpFWGokLpX0LGuzCUrZzqj3knSzPm79k74KdbZG0kJzQ4Y0NcCNyZ9V1laMpiGAAdEMcdKymSdvRRUoBrTiEhoVRqPmnf4gJ+GQOeFh7fiYFw9sfy5jy0gNPpIKb+LArkj6Pw90sBQl+yc9DPoruG3DTSBDhEdUn4txxgBazxO27J5JVsnG70KrmtLiRtK5VNqHoSuSFDXUuIfCfAJcwgGNyCvK3EK7z4AR5iPqjrcxgJrw+2E5EoqDfTEc0u0Zi9bXeInzIx7KX4eoPt3O1fkdnydt8xHstnS4eHEwWgAczEpde0g1pTelXubF9W1xoT1uIBzoIx15Jrwq6A8Mobhtm0slzQSRzRVHhFN4JEsdyIP6HkoJO7KycaoaBwjdSFaAlI4bXbH8wGOxC51SqXaIAMSTkj0VLflE+K8MRcfqfzCRucnsmf4euJa2MeH6SP0U634ac4gvd+bJj9VdS4Z8CC0EtG/OP8AChDFJStlpZIuNIesdsjXVNQHZKqNYFENqL0FDRib2MbKpE49US24Sxtc9V58VNFUqFlTYXXqSgawVmpQeUyFM1+I7WGl7RnG255LOf8AjcS+4f8A1VnEHtyytrxd4FNx6An5LFf+OX6dbdiTPvBWWcVHKvk1wk3iZ9Ac5QqCRCiHKxrlokr0Zo6FzLVxaWnrgqmnaVmk7HyP7pxhQc9ZPs4vyaPuH+Cq2c7/AJCCr3HCpL1GrWAC0RhxVEnLkxF+IXLJfg2+FGppds4/qYHzTzit2Kxc1uwkSkNPgjnHCyZLlK0a8dKNSPoN5V1AQgmU8yhbanVbTAc6SOZ3PmULW4i9jg0gS4wI2HmqaW2SSfSDr+7YxpkgJU3irBGQiTwZz/G/O8HljJjpuFzbANQu3YySSoXcSqmo4QcD5lZh/DgHHC2N3QAyEkJBqeYPvyQbTexlpaBLaxI8iiTwxu+khO7ZrXUi3Eggg+eCPorPhyFVQJvIxM226YXiNe3JXIUGzS0qSPtcGem3mq6VNXOEBGOhJb0XvqjPdLr2pMDurmNc8nTGMkkhoA6klUtaCRkHfIyDncHounJtHRjTDKVPwwFd8Axjoo0Wo59MgAn+k/NSaGs6wEtg+vkMkpe6qDVJ23x2nqi6VyA13dJPi/zfMH9/0QlkrijowuzTPyxruUR8z/hDlyEtLqWlp64VupP6l9C8KKbizactJaf7T+myqNrVaJFQOzsQR15hFAohz/CuT32FiSrxJ7DDm+2ZXDjI6KniTSSPP6LqdoHO9pUo/UTuijxQqw1nFCdmlT/jnbaHLx2lp9FMkHYYVlnZJ4kK+JNqVWlgGkHB6wd1n6lg+2frYc7GcgjuFra1F2rwgkc0l/EbiKbiRkAn2UMmRv8AZbHFLXgaUaz9IJjZei9d0ULQzTHku+Cis8wPHEsN2/p8146rU6D3K4PDdyrKlUaSeypHK32xHBeEJbritRrg3S3J6lEutX1cOqQOYaIntMpRd1NVRs/1LR2YwpLJKUvgq4qKBxwlrRAEAK62otBjmrq1YBRokTKtzV0iVOtk7hkNWaruBrskTBP0C0N9VAas/ZEOrgnof0/ZdleqDiXke2t2Y0wSyTO8Q7Du0wqK7MDtj5oxgAHmqrofpPzS+DvInvGgiEluKAHnMpvXEE8xKV3v5kseyvgqo1eScWx1NCzbrloqOaTBBEdMiVoeEVJEAhXiyU46sm63XJhpYuTkxq28a0JffcVHIJO64JQl3XxCz8mz0I/TJPZO6vS6ZWl4OQGNJ30hY5jZgdSthatmAOgj2yuuhc8UqQ6ouA291VXvnOMQYVVoCcRmYUq9ExLesGMnn+xU3KTRnUUmVVq09knu6wBB1D80d9xPyJ9kyuKZazUSBOw/5EdY5Dz6rO1ZeSZAIBd4jH5RMCdzyASOLbNGOFml4c4EyUe9qUcNqAweoBTItMjJCMXojJbJaH8hMkAeq8LyBnCsdtvIQVeoOe33CPQtWB3tWXtjqfoVfauWe4hcl1SdWB+WJAjInbP0gjum/C7nUyfQ9u6Rxa2y7g1EMrO5Hlt25/v7qdAiOq8pNndWNowMLordok+qKapJOEl/E2W6ev05/KU/AgR1We4y2Z8QlvKR2zvnf/fJ+NsfErkFcCf/ACwM9OsI97o7JVwKsGxkGRkZ8OfmdvdHcSEkQCRvI5pcnsjyDKHvojXY0mZU69MBnZe21hOZx3EFeX+BHQIY7acmhJVaSZkry4is3oDlaixuZAIO6ytYS+AJJHz3EeQj5pvwx5puNN3b0JAIhU40ky88doe3FOcoSnIJIJRlJ8iJCHqkA42QlC2pGdOlQLxSrIAWZZcaaurkIB+/VN72qTPRJy3eRn0hOtuy+LHo2VtULmgjKrrnKU8CvSzwE4O3YptWjJJydkGtEpR4yoEq0pKTcUbDsJ5dGI0/ZS+/o80thRieIu/mn0+WEdw29I2PJC8YZFRU0nw5XRpUU4o0g4k7quSxtQLkRPSj+B8aiDLtRKNfSwgWtglTNSaC7Fnib2K1fD39llrB0OC0lNwiUkpNPRnzxsNa4h07KFSqQZByqW3YGJVVW6AnY+c/KFOySxu+gTiF2TjogalNxYHkeEkgHqWxMDoJHuq7qplU0qp2kwNugnJjpyVV0bY46WjQ8LeNA7YTujnn/lZSyuQ3yKd210ORSqrMebE07D6lXBGISDilzMj78kReXkA5ys9Ury4o3bDhxbsJfaOdOgh8RMbnE4DocQII2xHkj+GuNKpocC3UAZeNMgjBjMDfzwltvevpyWOLZEGDEjoVC4vH1H/Ee6XYE4GBsABgBO2jR6Ten0bJtRvVeVq7RMHKy9G/dsUbVfTAdrq6iI0imCdRI3LjgAYncpeT8Izv6Zp7Cbu+gQPf0+/dIrhwcZKne3rn6Z2aIAGAB5dTuTzQhK5GqGLiidOrpcATAnPYc054be7jlOP0WaqFWW1wWkHIEOzHODA94Xb8HZsdx6Nr/GBKuJ1vCe4wl9rfkZ1GdsbbQp1aT3Q4g6TmTuRMEtB/N6LuUpaZljg4vZVYGapLWAMhs4kgAAOMmSJMkwdsHEqq7c7X8QsLGv25TES4DfJ+qIv6rJApthrYM83OA3+qFvLo1IDnE6RDZkwN8J31Roit2M7a7kZPRTu7jG6zjapaYUv4o7KdAf0+7C7ut7fcqmuWl/gw3AHXkJPdVkTvhUurw6ehkD12TrQyhXRc98Hy6J5a3Ae3O4WaZ4jKY0XmmRq5gH0O09OsIPYmTHa+RyR15IW7A5K9jwRgqi4cI2yppUZTJ8Woy8HoSldyE94mMpHebq8ejVj6INrGFy9pgQvUbGtGufcIOqZ2VIqLqVXxAd0rQY6GNm9M2VzG6WNZBkIllQKbVjqmXsMlXin691S3Cka+FyjQJO+iN1SGlLWCCibm4HVAvqiUWhoXQZKuFeACJ7z+iDpVQVYXJWhv2TrV55oeVXXcAFV8RFIZRXgJaCrqaGp1oRdMghEDdEhE5EjsYPvBXNAUHqFTzXHWEOAQNV6maiCu6i45FzMqenESR25ecKm3rBEagV1HctntvSA3Mo0VO5QNN4lENM7LhJs9qBDVCERUQVdyIqYPUfDlOnUO/JBVrqDCm27EI0Vd0Gmugqr5JVTqpJUdaIq0MLUYVlUk7oWhcYyp1XyuFrZfa35bhFniYISJzsrihQJ4ovZddVtRSW/dnyR1euGhIbqtJKdIEY0WNrleIMOXiahqNiBiVCg/xLlyUQe0XTCse0eS8XKUhYMHqXJaYJ8vJWTIGVy5A0tasCujHogadeHLlydDLoufdDHmpuuXTviJ9Fy5dQEDFznyeU47wiGV5GFy5cNLooZc5lM7O5Ewf9rlyNEpjAlpz6KmrQ3grlyFEeTQuuZCAdUjdcuXIunaLadfnCIc/EyuXItCp7COGUxGo88+nJHPuABsuXLqIzbcgGrec0k4jxDkCcn2Xi5MkPjWwI1fVXUHiAT6Lly4tJ6LX3OFWa65cuJIIpVsQrBUXLkGOiupXhDOqk9ly5cN4BK7+6W1N1y5PEQJp2kgFcuXIWJZ/9k=",
    date: "April 1, 2024",
    author: "Gisemba Andrew",
    content:
      "Dental fluorosis is the staining of teeth (yellowing, brown, white spots , freckles) and pitting of teeth due to intake of excess levels of flouride.Fluoride is an essential ion in whose role is to protect our teeth from dental caries. However, when ingested in higher levels (above 1000ppm) its benefits are overruled. The sources of the fluoride are :fluoridated bottled water, fluoridated milk, borehole water(major carrier), toothpaste when ingested, fluoride tablets, tea infusion etc. The fluoride gets into our system by ingestion of these products. The major contributor being the highly fluoridated borehole water used for cooking and drinking. In cooking, as the water boils the concentration of fluoride increases, in most households this occurs at least twice a day bringing the fluoride intake to an overall high.  Hydra water solutions solves this problem by purifying the water consumed using our Reverse Osmosis domestic water purifiers. These systems optimally fluoridate, purify, enhance taste, regulate pH and removes salinity from your tap water not only making it safe for drinking but it also brings delight to the user every sip they take. Excessive fluoride intake gradually presents itself as : dental fluorosis, skeletal fluorosis(weaker bones), gut complications, tremors etc.",
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
    <div className="container mx-auto px-4 lg:px-20 py-8 min-h-[80vh]">
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
            {selectedPost.date}  |  {selectedPost.author}
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
