// import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { avatar } from "../Pages/assets/images";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import 'swiper/css/navigation';
import "../index.css";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      text: "Absolutely love it. My water is crystal clear and taste so good. You can definitely tell water no chemicals like chlorine ... HIGHLY RECOMMEND !",
      src: "user",
      author: "Alex Thuo",
      company: "Celestial Dental",
    },
    {
      id: 2,
      text: "  As someone with sensitive skin, hard water was a nightmare. Hydra's water softener is a lifesaver! My skin feels noticeably softer, and my hair is more manageable. Plus, there's less cleaning residue on everything, which is a bonus. Thank you, Hydra, for making my life easier and my skin happier!",
      src: "user",
      author: "Linda Awuor",
      company: "Valley Medical Center",
    },
    {
      id: 3,
      text: "Upgrading to Hydra's commercial filtration system was the best decision for our restaurant. The coffee tastes amazing, and customers rave about the improved flavor of our food. We've even seen a decrease in maintenance costs for our ice machines and coffee makers. Hydra's customer service is top-notch, always responsive and helpful.",
      src: "user",
      author: "Jolmon Kamau",
      company: "Swedoc cafe , Nairobi",
    },
    {
      id: 4,
      text: " Hydra's commitment to clean water extends far beyond individual homes. Their partnership with our community to install filtration systems in public schools ensures safe drinking water for our children. We're grateful for Hydra's dedication to public health and their innovative solutions.",
      src: "user",
      author: "Madam Rael",
      company: "",
    },
  ];

  return (
    <div className="testimonials-wrapper h-[300px] min-h-[350px]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {reviews.map((review, id) => (
          <SwiperSlide
            className="swiperslide flex flex-col items-start min-h-[25dvh] space-y-8 border border-neutral-200 rounded-md bg-neutral-100 p-4"
            key={id}
          >
            <p className="md:w-[80%] lg:w-1/2">&quot; {review.text} &quot;</p>

            <div className="bottom-section flex items-center w-full gap-4 md:w-[80%] lg:w-1/2">
              <section className="size-10 rounded-full object-cover overflow-hidden bg-white">
                <img
                  src={avatar}
                  alt="user-profile-picture"
                  className="rounded-full w-full object-cover object-center p-1"
                />
              </section>
              <section className="text-left">
                <p className="font-semibold text-sm">{review.author}</p>
                <p className="text-xs text-neutral-500 font-medium tracking-wide">
                  {review.company}
                </p>
              </section>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
