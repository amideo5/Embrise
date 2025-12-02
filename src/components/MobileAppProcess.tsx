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
        <div className="bg-blue-50 text-gray-900 min-h-screen px-6 py-12">
            <br /><br /><br />

            {/* Header Section */}
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto text-center"
            >
                <h1 className="text-4xl font-bold mb-4">
                    Our Mobile App Development Process
                </h1>
                <p className="text-lg">
                    From concept to deployment, we build sleek and performant mobile apps tailored to your goals.
                </p>
            </motion.div>

            {/* Step-by-Step Process */}
            <div className="mt-12 space-y-12 max-w-5xl mx-auto">
                {[
                    {
                        title: "1. Ideation and Planning",
                        description: "We work with you to understand your app's vision, audience, and core functionalities. This planning phase ensures a smooth roadmap for development.",
                        img: "https://raw.githubusercontent.com/amideo5/Embrise/main/src/assets/41.webp",
                        alt: "Ideation and Planning",
                        reverse: false
                    },
                    {
                        title: "2. UI/UX Design",
                        description: "Our design team creates user-friendly interfaces that provide a seamless experience while adhering to your brand identity.",
                        img: "https://raw.githubusercontent.com/amideo5/Embrise/main/src/assets/42.webp",
                        alt: "UI/UX Design",
                        reverse: true
                    },
                    {
                        title: "3. Development",
                        description: "Using native or cross-platform frameworks (like React Native or Flutter), we build scalable, responsive, and high-performing mobile applications.",
                        img: "https://raw.githubusercontent.com/amideo5/Embrise/main/src/assets/43.jpeg",
                        alt: "Development",
                        reverse: false
                    },
                    {
                        title: "4. Testing and Deployment",
                        description: "Comprehensive testing ensures a bug-free app. Once approved, we deploy your app to app stores and provide ongoing support.",
                        img: "https://raw.githubusercontent.com/amideo5/Embrise/main/src/assets/25.png",
                        alt: "Testing and Deployment",
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
                    Ready to build a high-performing mobile app? Let’s bring your ideas to life.
                </p>
                <a
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('contact');
                    }}
                    className="inline-block px-6 py-3 bg-blue-700 text-white font-bold rounded-lg shadow-lg hover:bg-blue-800 transition"
                >
                    Contact Us
                </a>
            </motion.div>
        </div>
    );
};

export default MobileAppProcess;
