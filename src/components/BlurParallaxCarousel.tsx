import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom"; // For React Router links (if using React Router)
import "../styles/Carousel.css"; // Custom styles for parallax and blur effects

const BlurParallaxCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3, // Show 3 slides by default
    slidesToScroll: 1,
    centerMode: true, // Enable center mode
    autoplay: true,
    autoplaySpeed: 30,
    arrows: false,
    pauseOnHover: true,
    beforeChange: (_oldIndex: number, newIndex: number) => {
      setCurrentIndex(newIndex); // Update the index on change
    },
    responsive: [
      {
        breakpoint: 768, // For smaller screens (mobile)
        settings: {
          slidesToShow: 1, // Show 1 slide
          centerMode: false,
          autoplaySpeed: 5000,
        },
      },
    ],
  };

  const images = [
    { icon: "🌐", title: "Who needs a website?", text: "Discover why having a website is essential in today's digital era.", link: "/whoneedsawebsite" },
    { icon: "💻", title: "How tech integration enhances your business ?", text: "Explore how technology can streamline processes and drive growth.", link: "/techintegration" },
    { icon: "🤝", title: "Where do we come in ?", text: "Learn about our role in helping you achieve your business goals.", link: "/wherewecomein" },
    { icon: "🚀", title: "Unleash the potential with max availability", text: "Ensure your business operates at its peak, 24/7.", link: "/unleashpotential" },
    { icon: "🌍", title: "Create a world of your business", text: "Build a unique digital presence tailored to your brand.", link: "/createbusinessworld" },
    { icon: "🤖", title: "What AI can do for your business", text: "Harness the power of AI to optimize and innovate your operations.", link: "/aiforbusiness" },
  ];

  return (
    <div className="carousel-container" id="blogs">
      <Slider {...settings}>
        {images.map((image, index) => {
          const isActive = index === currentIndex;
          const isLeftAdjacent = index === currentIndex - 1 || (currentIndex === 0 && index === images.length - 1);
          const isRightAdjacent = index === currentIndex + 1 || (currentIndex === images.length - 1 && index === 0);

          return (
            <div
              key={index}
              className={`carousel-card ${
                isActive
                  ? "active-slide"
                  : isLeftAdjacent || isRightAdjacent
                  ? "adjacent-slide"
                  : ""
              }`}
            >
              <Link to={image.link} className="carousel-link">
                <div className="red-card">
                  <div className="icon">{image.icon}</div>
                  <h2 className="carousel-title">{image.title}</h2><br></br>
                  <p className="carousel-text">{image.text}</p>
                </div>
              </Link>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default BlurParallaxCarousel;
