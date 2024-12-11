import React from "react";
import { motion } from "framer-motion";
import "../styles/Pipeline.css";

const stages = [
  { name: "Code", color: "#8B4513" },
  { name: "Build", color: "#D2691E" },
  { name: "Test", color: "#A0522D" },
  { name: "Deploy", color: "#CD853F" },
];

const Pipeline = () => {
  return (
    <div className="pipeline-container">
      {stages.map((stage, index) => (
        <motion.div
          key={index}
          className="pipeline-stage"
          style={{ backgroundColor: stage.color }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.3 }}
        >
          <div className="stage-icon">{index + 1}</div>
          <div className="stage-name">{stage.name}</div>
        </motion.div>
      ))}
    </div>
  );
};

export default Pipeline;