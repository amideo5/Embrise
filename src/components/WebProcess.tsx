import React from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from 'react-router-dom';

const WebProcess: React.FC = () => {
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
            }, 300); // Adjust timeout as needed for route change animation
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
                    Website and Web Application Development
                </h1>
                <p className="text-lg">
                    We design and build responsive websites and web applications, from the user-facing experience through backend functionality, testing and launch.
                </p>
            </motion.div>

            {/* Step-by-Step Process */}
            <div className="service-process__steps">
                {[
                    {
                        title: "1. Requirement Analysis",
                        description: "We begin by gathering and understanding your business requirements, user expectations, and technical constraints. This step ensures a clear vision for your project.",
                        img: "/assets/11.png",
                        alt: "Requirement Analysis",
                        reverse: false
                    },
                    {
                        title: "2. Design and Prototyping",
                        description: "Our team creates intuitive UI/UX designs and interactive prototypes to visualize the final product. Feedback loops ensure alignment with your vision.",
                        img: "/assets/22.png",
                        alt: "Design and Prototyping",
                        reverse: true
                    },
                    {
                        title: "3. Frontend Development",
                        description: "Using modern technologies like React or Vue.js, we build responsive and dynamic user interfaces optimized for performance and accessibility.",
                        img: "/assets/23.png",
                        alt: "Frontend Development",
                        reverse: false
                    },
                    {
                        title: "4. Backend Development",
                        description: "We develop robust server-side architectures using frameworks like Node.js, Django, or Ruby on Rails. Our focus is on security, scalability, and seamless integration with your systems.",
                        img: "/assets/24.png",
                        alt: "Backend Development",
                        reverse: true
                    },
                    {
                        title: "5. Testing and QA",
                        description: "We test functionality, performance and security-related requirements, then address issues before the application is released.",
                        img: "/assets/25.png",
                        alt: "Testing and QA",
                        reverse: false
                    },
                    {
                        title: "6. Deployment and Support",
                        description: "We deploy your application to the production environment and provide ongoing maintenance and support to ensure long-term success.",
                        img: "/assets/26.jpg",
                        alt: "Deployment",
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
                transition={{ duration: 0.8, delay: 1.4 }}
                className="service-process__cta text-center mt-16"
            >
                <p className="text-lg mb-4">
                    Ready to turn your vision into reality with a dependable full-stack team? Let’s get started.
                </p>
                <a
                    href="/#contact"
                    onClick={(e) => {
                        e.preventDefault(); // Prevent the default behavior of link
                        scrollToSection('contact')
                    }}
                    className="button button--primary service-process__button"
                >
                    Contact Us
                </a>
            </motion.div>
        </div>
    );
};

export default WebProcess;
