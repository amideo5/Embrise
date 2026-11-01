import React from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from 'react-router-dom';

const UIUXProcess: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const scrollToSection = (id: string) => {
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 300);
        } else {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <div className="service-process">

            {/* Header Section */}
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="service-process__intro"
            >
                <h1 className="text-4xl font-bold mb-4">
                    UI/UX Design for Websites and Apps
                </h1>
                <p className="text-lg">
                    We research, structure and design intuitive website and app experiences—from wireframes and prototypes to usable interfaces.
                </p>
            </motion.div>

            {/* Step-by-Step Process */}
            <div className="service-process__steps">
                {[
                    {
                        title: "1. User Research",
                        description: "Understanding user needs and behaviors through interviews, surveys, and data analysis forms the foundation of our design process.",
                        img: "/assets/51.png",
                        alt: "User Research",
                        reverse: false
                    },
                    {
                        title: "2. Wireframing and Prototyping",
                        description: "Low-fidelity wireframes and high-fidelity prototypes give you a clear vision of the product before development begins.",
                        img: "/assets/52.avif",
                        alt: "Wireframing and Prototyping",
                        reverse: true
                    },
                    {
                        title: "3. Visual Design",
                        description: "Aesthetic interfaces aligned with your branding to captivate and engage users.",
                        img: "/assets/53.webp",
                        alt: "Visual Design",
                        reverse: false
                    },
                    {
                        title: "4. Usability Testing",
                        description: "Real user feedback ensures our designs meet expectations and deliver an exceptional experience.",
                        img: "/assets/54.svg",
                        alt: "Usability Testing",
                        reverse: true
                    }
                ].map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: step.reverse ? 50 : -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 * index }}
                        className={`service-process__step flex flex-col md:flex-row items-center gap-6 ${step.reverse ? 'md:flex-row-reverse' : ''}`}
                    >
                        <div className="flex-1">
                            <img
                                src={step.img}
                                alt={step.alt}
                                className="service-process__image w-full max-h-64 object-contain rounded-lg shadow-lg"
                            />
                        </div>
                        <div className="service-process__copy flex-1 text-center md:text-left">
                            <h2 className="text-2xl font-semibold mb-2">{step.title}</h2>
                            <p>{step.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Call to Action */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="service-process__cta text-center mt-16"
            >
                <p className="text-lg mb-4">
                    Ready to create stunning designs? Let’s bring your vision to life.
                </p>
                <a
                    href="/#contact"
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('contact');
                    }}
                    className="button button--primary service-process__button"
                >
                    Contact Us
                </a>
            </motion.div>
        </div>
    );
};

export default UIUXProcess;
