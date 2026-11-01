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
    { icon: "◉", title: "Who Needs a Website?", text: "Discover why a thoughtful digital presence matters in today’s connected world.", link: "/insights/who-needs-a-website", label: 'Digital presence' },
    { icon: "⌘", title: "How Tech Integration Enhances Your Business", text: "Explore how connected tools and integrated systems can support smoother business operations.", link: "/insights/how-tech-integration-enhances-your-business", label: 'Integration' },
    { icon: "↗", title: "Where Do We Come In?", text: "Learn how the right technology partner can help turn your goals into progress.", link: "/insights/where-do-we-come-in", label: 'Partnership' },
    { icon: "◷", title: "Unleash the Potential with Max Availability", text: "Learn why application reliability, network planning and system availability matter to business operations.", link: "/insights/business-availability-and-reliability", label: 'Reliability' },
    { icon: "▧", title: "Create a World of Your Business with LAN-Based Applications", text: "Explore how local network applications can support connected experiences in restaurants and events.", link: "/insights/lan-based-business-applications", label: 'Experience' },
    { icon: "✳", title: "What AI Can Do for Your Business", text: "Discover practical uses of AI for business data, insights, automation and customer interactions.", link: "/insights/what-ai-can-do-for-your-business", label: 'Artificial intelligence' },
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
