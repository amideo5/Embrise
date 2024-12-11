import React from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from 'react-router-dom';

const CustomSoftwareProcess: React.FC = () => {
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
        <div className="bg-brown-50 text-brown-900 min-h-screen px-6 py-12">
            <br /><br /><br />

            {/* Header Section */}
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto text-center"
            >
                <h1 className="text-4xl font-bold mb-4">
                    How We Build Meaningful Custom Software
                </h1>
                <p className="text-lg">
                    At Embrise, we componentize your ideas into structured, scalable, and
                    impactful software solutions.
                </p>
            </motion.div>

            {/* Step-by-Step Process */}
            <div className="mt-12 space-y-12 max-w-5xl mx-auto">
                {[
                    {
                        title: "1. Understanding Your Needs",
                        description: "We start by learning your business goals, challenges, and vision. This discovery phase ensures we align on expectations and outcomes.",
                        img: "../src/assets/11.png",
                        alt: "Understanding Needs",
                        reverse: false
                    },
                    {
                        title: "2. Componentizing Your Ideas",
                        description: "We break down your requirements into modular, reusable components. This approach ensures scalability, maintainability, and faster development.",
                        img: "../src/assets/12.jpg",
                        alt: "Componentizing",
                        reverse: true
                    },
                    {
                        title: "3. Agile Development",
                        description: "Using agile methodology, we develop iteratively and prioritize delivering value at every stage. You’ll see tangible progress quickly.",
                        img: "../src/assets/13.jpg",
                        alt: "Agile Development",
                        reverse: false
                    },
                    {
                        title: "4. Meaningful Delivery",
                        description: "Once the solution is built and thoroughly tested, we deliver it with comprehensive documentation and ongoing support to ensure success.",
                        img: "../src/assets/14.jpg",
                        alt: "Delivery",
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
                transition={{ duration: 0.8, delay: 1.0 }}
                className="text-center mt-16"
            >
                <p className="text-lg mb-4">
                    Want to bring your ideas to life with a reliable partner? Let's get
                    started today.
                </p>
                <a
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('contact');
                    }}
                    className="inline-block px-6 py-3 bg-brown-700 text-black font-bold rounded-lg shadow-lg hover:bg-brown-800 transition"
                >
                    Contact Us
                </a>
            </motion.div>
        </div>
    );
};

export default CustomSoftwareProcess;
