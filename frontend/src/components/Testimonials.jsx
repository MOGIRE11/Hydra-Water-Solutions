import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"; // Assuming you have these icons imported

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/path/to/john-doe-image.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "/path/to/jane-smith-image.jpg",
    },
    {
      id: 3,
      name: "Alice Johnson",
      content:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "/path/to/alice-johnson-image.jpg",
    },
    {
      id: 4,
      name: "Bob Brown",
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "/path/to/bob-brown-image.jpg",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === testimonials.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000); // Change slides every 5 seconds
    return () => clearInterval(interval);
  }, [currentSlide, testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === testimonials.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? testimonials.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="relative bg-gray-100">
      <div className="absolute inset-0 w-full h-full flex items-center justify-center">
        <div className="max-w-lg w-full p-4 bg-white rounded-lg shadow-md">
          <div className="text-center">
            <p className="text-lg font-semibold">
              {testimonials[currentSlide].content}
            </p>
            <p className="text-gray-600 mt-2">
              {testimonials[currentSlide].name}
            </p>
          </div>
          <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full opacity-0 hover:opacity-100 transition-opacity">
            <button onClick={prevSlide}>
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="h-6 w-6 text-gray-600"
              />
            </button>
            <button onClick={nextSlide}>
              <FontAwesomeIcon
                icon={faChevronRight}
                className="h-6 w-6 text-gray-600"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-4">
        {testimonials.map((testimonial, index) => (
          <img
            key={index}
            src={testimonial.image}
            alt={testimonial.name}
            className={`h-10 w-10 rounded-full mx-1 cursor-pointer ${
              index === currentSlide ? "border-2 border-blue-500" : ""
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
