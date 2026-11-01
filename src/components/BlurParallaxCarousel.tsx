import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { ArrowUpRight } from 'lucide-react';
import { Link } from "react-router-dom";
import "../styles/Carousel.css";

const BlurParallaxCarousel = () => {
  const settings = {
    dots: true, infinite: true, speed: 650, slidesToShow: 3, slidesToScroll: 1,
    centerMode: false, autoplay: true, autoplaySpeed: 5200, arrows: false, pauseOnHover: true,
    responsive: [{ breakpoint: 900, settings: { slidesToShow: 2 } }, { breakpoint: 640, settings: { slidesToShow: 1 } }],
  };

  const articles = [
    { icon: "◉", title: "Who needs a website?", text: "Discover why a thoughtful digital presence matters in today’s connected world.", link: "/whoneedsawebsite", label: 'Digital presence' },
    { icon: "⌘", title: "Technology that works together", text: "Explore how connected tools can simplify processes and support growth.", link: "/techintegration", label: 'Integration' },
    { icon: "↗", title: "Where do we come in?", text: "Learn how the right technology partner can help turn your goals into progress.", link: "/wherewecomein", label: 'Partnership' },
    { icon: "◷", title: "Build for better availability", text: "See how dependable systems can help keep your business moving.", link: "/unleashpotential", label: 'Reliability' },
    { icon: "▧", title: "Create a world for your business", text: "Build a digital experience shaped around your brand and your customers.", link: "/createbusinessworld", label: 'Experience' },
    { icon: "✳", title: "What AI can do for business", text: "Understand practical ways AI can help teams work smarter.", link: "/aiforbusiness", label: 'Artificial intelligence' },
  ];

  return (
    <section className="insights-section" id="blogs">
      <div className="section-container">
        <div className="section-heading section-heading--split">
          <div><div className="eyebrow"><span className="eyebrow__line" /> Notes & perspectives</div><h2>Ideas worth<br /><em>thinking about.</em></h2></div>
          <p>Perspectives on digital products, useful technology and the opportunities that come with building well.</p>
        </div>
        <div className="carousel-container">
          <Slider {...settings}>
            {articles.map((article, index) => (
              <div className="insight-slide" key={article.link}>
                <Link to={article.link} className={`insight-card insight-card--${(index % 3) + 1}`}>
                  <div className="insight-card__top"><span>{article.label}</span><span className="insight-card__icon">{article.icon}</span></div>
                  <h3>{article.title}</h3><p>{article.text}</p>
                  <span className="insight-card__link">Read insight <ArrowUpRight size={16} /></span>
                  <span className="insight-card__number">0{index + 1}</span>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default BlurParallaxCarousel;
