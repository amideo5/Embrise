import React from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from 'react-router-dom';

const MobileAppProcess: React.FC = () => {
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
                    Mobile App Development for Your Business
                </h1>
                <p className="text-lg">
                    We plan and build native and cross-platform mobile apps with user-focused interfaces, thorough testing and release support.
                </p>
            </motion.div>

            {/* Step-by-Step Process */}
            <div className="service-process__steps">
                {[
                    {
                        title: "1. Ideation and Planning",
                        description: "We work with you to understand your app's vision, audience, and core functionalities. This planning phase ensures a smooth roadmap for development.",
                        img: "/assets/41.webp",
                        alt: "Ideation and Planning",
                        reverse: false
                    },
                    {
                        title: "2. UI/UX Design",
                        description: "Our design team creates user-friendly interfaces that provide a seamless experience while adhering to your brand identity.",
                        img: "/assets/42.webp",
                        alt: "UI/UX Design",
                        reverse: true
                    },
                    {
                        title: "3. Development",
                        description: "Using native or cross-platform frameworks (like React Native or Flutter), we build scalable, responsive, and high-performing mobile applications.",
                        img: "/assets/43.jpeg",
                        alt: "Development",
                        reverse: false
                    },
                    {
                        title: "4. Testing and Deployment",
                        description: "We test the app across relevant devices and usage scenarios before release, then support the deployment process and ongoing improvements.",
                        img: "/assets/25.png",
                        alt: "Testing and Deployment",
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
                    Ready to build a high-performing mobile app? Let’s bring your ideas to life.
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

export default MobileAppProcess;
