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
        <div className="bg-purple-50 text-gray-900 min-h-screen px-6 py-12">
            <br /><br /><br />

            {/* Header Section */}
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto text-center"
            >
                <h1 className="text-4xl font-bold mb-4">
                    Our UI/UX Design Process
                </h1>
                <p className="text-lg">
                    Creating delightful and intuitive experiences that resonate with your users.
                </p>
            </motion.div>

            {/* Step-by-Step Process */}
            <div className="mt-12 space-y-12 max-w-5xl mx-auto">
                {[
                    {
                        title: "1. User Research",
                        description: "Understanding user needs and behaviors through interviews, surveys, and data analysis forms the foundation of our design process.",
                        img: "../src/assets/51.png",
                        alt: "User Research",
                        reverse: false
                    },
                    {
                        title: "2. Wireframing and Prototyping",
                        description: "Low-fidelity wireframes and high-fidelity prototypes give you a clear vision of the product before development begins.",
                        img: "../src/assets/52.avif",
                        alt: "Wireframing and Prototyping",
                        reverse: true
                    },
                    {
                        title: "3. Visual Design",
                        description: "Aesthetic interfaces aligned with your branding to captivate and engage users.",
                        img: "../src/assets/53.webp",
                        alt: "Visual Design",
                        reverse: false
                    },
                    {
                        title: "4. Usability Testing",
                        description: "Real user feedback ensures our designs meet expectations and deliver an exceptional experience.",
                        img: "../src/assets/54.svg",
                        alt: "Usability Testing",
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
                    Ready to create stunning designs? Let’s bring your vision to life.
                </p>
                <a
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('contact');
                    }}
                    className="inline-block px-6 py-3 bg-purple-700 text-white font-bold rounded-lg shadow-lg hover:bg-purple-800 transition"
                >
                    Contact Us
                </a>
            </motion.div>
        </div>
    );
};

export default UIUXProcess;
