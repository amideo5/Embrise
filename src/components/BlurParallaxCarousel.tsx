import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";
import Slider from "react-slick";
import "../styles/Carousel.css"; // Custom styles for parallax and blur effects

const BlurParallaxCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3, // Show 3 slides
    slidesToScroll: 1,
    centerMode: true, // Enable center mode
    autoplay: true,
    autoplaySpeed: 10,
    pauseOnHover: true,
    beforeChange: (_oldIndex: number, newIndex: number) => {
      setCurrentIndex(newIndex); // Update the index on change
    },
  };

  const images = [
    { src: "https://via.placeholder.com/800x400", alt: "Slide 1" },
    { src: "https://via.placeholder.com/800x400", alt: "Slide 2" },
    { src: "https://via.placeholder.com/800x400", alt: "Slide 3" },
    { src: "https://via.placeholder.com/800x400", alt: "Slide 4" },
    { src: "https://via.placeholder.com/800x400", alt: "Slide 5" },
  ];

  return (
    <div className="carousel-container min-h-screen" id="blogs">
      <Slider {...settings}>
        {images.map((image, index) => {
          // Calculate the relative position of each slide
          // Adjust this logic to make sure the center slide is active
          const isActive = index === currentIndex; // Active (center) slide
          const isLeftAdjacent = index === currentIndex - 1 || (currentIndex === 0 && index === images.length - 1); // Left adjacent slide
          const isRightAdjacent = index === currentIndex + 1 || (currentIndex === images.length - 1 && index === 0); // Right adjacent slide

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
              <div
                className="carousel-image"
                style={{
                  backgroundImage: `url(${image.src})`,
                }}
              >
                <h2 className="carousel-text">{image.alt}</h2>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default BlurParallaxCarousel;
