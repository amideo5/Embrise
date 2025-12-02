import React from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from 'react-router-dom';

const AIIntegrationProcess: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Scroll to section helper function
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
        <div className="bg-indigo-50 text-gray-900 min-h-screen px-6 py-12">
            <br /><br /><br />

            {/* Header Section */}
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto text-center"
            >
                <h1 className="text-4xl font-bold mb-4">
                    Our AI Integration and Analysis Process
                </h1>
                <p className="text-lg">
                    Empowering your business with AI-driven insights and automation for smarter decision-making.
                </p>
            </motion.div>

            {/* Step-by-Step Process */}
            <div className="mt-12 space-y-12 max-w-5xl mx-auto">
                {[
                    {
                        title: "1. Problem Analysis and Dataset Preparation",
                        description: "We begin by understanding your business challenge and collecting relevant data. Proper preparation ensures high-quality input for AI models.",
                        img: "https://raw.githubusercontent.com/amideo5/Embrise/main/src/assets/61.jpg",
                        alt: "Problem Analysis and Dataset Preparation",
                        reverse: false
                    },
                    {
                        title: "2. Model Development",
                        description: "Our team builds and trains custom AI models using cutting-edge algorithms and frameworks to solve your specific use case.",
                        img: "https://raw.githubusercontent.com/amideo5/Embrise/main/src/assets/62.png",
                        alt: "Model Development",
                        reverse: true
                    },
                    {
                        title: "3. AI Integration",
                        description: "We seamlessly integrate AI models into your existing systems, ensuring compatibility and minimal disruption to workflows.",
                        img: "https://raw.githubusercontent.com/amideo5/Embrise/main/src/assets/63.png",
                        alt: "AI Integration",
                        reverse: false
                    },
                    {
                        title: "4. Monitoring and Improvement",
                        description: "Continuous monitoring ensures optimal performance, and iterative improvements keep the AI system aligned with changing needs.",
                        img: "https://raw.githubusercontent.com/amideo5/Embrise/main/src/assets/64.jpg",
                        alt: "Monitoring and Improvement",
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
                    Ready to integrate AI into your business? Let's get started.
                </p>
                <a
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('contact');
                    }}
                    className="inline-block px-6 py-3 bg-indigo-700 text-white font-bold rounded-lg shadow-lg hover:bg-indigo-800 transition"
                >
                    Contact Us
                </a>
            </motion.div>
        </div>
    );
};

export default AIIntegrationProcess;
