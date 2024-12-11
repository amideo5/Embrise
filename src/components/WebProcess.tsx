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
        <div className="bg-gray-50 text-gray-900 min-h-screen px-6 py-12">
            <br /><br /><br />

            {/* Header Section */}
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto text-center"
            >
                <h1 className="text-4xl font-bold mb-4">
                    Our Full-Stack Web Development Process
                </h1>
                <p className="text-lg">
                    At Embrise, we craft robust and scalable full-stack solutions tailored to your business needs.
                </p>
            </motion.div>

            {/* Step-by-Step Process */}
            <div className="mt-12 space-y-12 max-w-5xl mx-auto">
                {[
                    {
                        title: "1. Requirement Analysis",
                        description: "We begin by gathering and understanding your business requirements, user expectations, and technical constraints. This step ensures a clear vision for your project.",
                        img: "../src/assets/11.png",
                        alt: "Requirement Analysis",
                        reverse: false
                    },
                    {
                        title: "2. Design and Prototyping",
                        description: "Our team creates intuitive UI/UX designs and interactive prototypes to visualize the final product. Feedback loops ensure alignment with your vision.",
                        img: "../src/assets/22.png",
                        alt: "Design and Prototyping",
                        reverse: true
                    },
                    {
                        title: "3. Frontend Development",
                        description: "Using modern technologies like React or Vue.js, we build responsive and dynamic user interfaces optimized for performance and accessibility.",
                        img: "../src/assets/23.png",
                        alt: "Frontend Development",
                        reverse: false
                    },
                    {
                        title: "4. Backend Development",
                        description: "We develop robust server-side architectures using frameworks like Node.js, Django, or Ruby on Rails. Our focus is on security, scalability, and seamless integration with your systems.",
                        img: "../src/assets/24.png",
                        alt: "Backend Development",
                        reverse: true
                    },
                    {
                        title: "5. Testing and QA",
                        description: "Rigorous testing ensures functionality, performance, and security. We address any issues to deliver a flawless final product.",
                        img: "../src/assets/25.png",
                        alt: "Testing and QA",
                        reverse: false
                    },
                    {
                        title: "6. Deployment and Support",
                        description: "We deploy your application to the production environment and provide ongoing maintenance and support to ensure long-term success.",
                        img: "../src/assets/26.jpg",
                        alt: "Deployment",
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
                    Ready to turn your vision into reality with a dependable full-stack team? Let’s get started.
                </p>
                <a
                    href="#"
                    onClick={(e) => {
                        e.preventDefault(); // Prevent the default behavior of link
                        scrollToSection('contact')
                    }}
                    className="inline-block px-6 py-3 bg-gray-700 text-white font-bold rounded-lg shadow-lg hover:bg-gray-800 transition"
                >
                    Contact Us
                </a>
            </motion.div>
        </div>
    );
};

export default WebProcess;
