import React from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from 'react-router-dom';

const NetworkedSystemsProcess: React.FC = () => {
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
        <div className="bg-green-50 text-gray-900 min-h-screen px-6 py-12">
            <br /><br /><br />

            {/* Header Section */}
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto text-center"
            >
                <h1 className="text-4xl font-bold mb-4">
                    Our Networked Systems and Data Analytics Process
                </h1>
                <p className="text-lg">
                    Building scalable and robust systems with actionable insights from data.
                </p>
            </motion.div>

            {/* Step-by-Step Process */}
            <div className="mt-12 space-y-12 max-w-5xl mx-auto">
                {[
                    {
                        title: "1. System Architecture Design",
                        description: "We design resilient system architectures to ensure high availability, fault tolerance, and scalability for your infrastructure.",
                        img: "../src/assets/31.jpg",
                        alt: "System Architecture Design",
                        reverse: false
                    },
                    {
                        title: "2. Data Collection and Processing",
                        description: "We build pipelines to gather, clean, and transform data into usable formats, ensuring data integrity and quality.",
                        img: "../src/assets/32.jpg",
                        alt: "Data Collection and Processing",
                        reverse: true
                    },
                    {
                        title: "3. Analytics and Reporting",
                        description: "Advanced analytics techniques and custom dashboards provide actionable insights tailored to your business goals.",
                        img: "../src/assets/33.webp",
                        alt: "Analytics and Reporting",
                        reverse: false
                    },
                    {
                        title: "4. Optimization and Scaling",
                        description: "Continuous monitoring and optimization keep your systems efficient and ready for growth.",
                        img: "../src/assets/34.jpeg",
                        alt: "Optimization and Scaling",
                        reverse: true
                    }
                ].map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: step.reverse ? 50 : -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 * index }}
                        className={`flex flex-col md:flex-row items-center gap-6 ${step.reverse ? 'md:flex-row-reverse' : ''}`}
                    >
                        <div className="flex-1">
                            <img
                                src={step.img}
                                alt={step.alt}
                                className="w-full max-h-64 object-contain rounded-lg shadow-lg"
                            />
                        </div>
                        <div className="flex-1 text-center md:text-left">
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
                className="text-center mt-16"
            >
                <p className="text-lg mb-4">
                    Ready to build scalable systems with actionable insights? Let’s get started.
                </p>
                <a
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('contact');
                    }}
                    className="inline-block px-6 py-3 bg-green-700 text-white font-bold rounded-lg shadow-lg hover:bg-green-800 transition"
                >
                    Contact Us
                </a>
            </motion.div>
        </div>
    );
};

export default NetworkedSystemsProcess;
