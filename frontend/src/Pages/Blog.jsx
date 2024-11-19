import { NavLink } from "react-router-dom";
import { stainedTeeth, purificationProcess } from "./assets/images";
import { useState } from "react";

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
  {
    id: 2,
    title: "What exactly does reverse osmosis mean?",
    image: purificationProcess,
    date: "April 6, 2024",
    author: "Gisemba Andrew",
    content:
      "Reverse osmosis (RO) water purifiers are advanced systems designed to remove contaminants from water through a process involving a semipermeable membrane and multiple filtration stages. RO systems are highly effective in eliminating a wide range of contaminants, including dissolved salts, chemicals, heavy metals, microorganisms, and radiological elements. The process begins with a sediment filter that removes large particles like dirt, sand, and rust to prevent clogging of subsequent filters. Next, a pre-carbon filter uses activated carbon to remove contaminants like chlorine and chloramines, which can degrade the RO membrane. The reverse osmosis membrane then filters out molecules heavier than water, such as sodium, high levels of lead, dissolved minerals, and fluoride. A post-carbon filter polishes the water, ensuring the highest quality of purified water. RO systems can be configured with additional features like remineralization postfilters, which add essential minerals back into the water, enhancing its taste and health benefits. These systems are highly recommended for individuals on pre-treated municipal water systems and borehole water, providing an effective solution for removing bacteria and viruses. In addition to their residential applications, RO systems are also used in commercial settings, such as medical facilities, restaurants, and manufacturing industries, to ensure the production of pure, filtered water. With their high contaminant removal rate and versatility, RO systems are an excellent choice for providing safe and great-tasting water in various applications.",
  },
];

const BlogPage = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const handlePostSelect = (postId) => {
    const post = blogPosts.find((post) => post.id === postId);
    setSelectedPost(post);
  };

  return (
    <div className="container mx-auto px-4 lg:px-20 pb-8 pt-4 min-h-[80dvh] max-w-[1440px]">
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
