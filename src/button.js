import React, { useState } from "react";
import { motion } from "framer-motion";

const ButtonSection = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleClick = (index) => {
    setSelectedButton(selectedButton === index ? null : index);
  };

  const buttonVariants = {
    initial: { scale: 1, backgroundColor: "#f3f3f3" },
    hover: { scale: 1.1, backgroundColor: "#e0e0e0" },
    click: {
      scale: 1.2,
      backgroundColor: "#0073e6",
      color: "#fff",
      transition: { duration: 0.3 },
    },
  };

  return (
    <div style={styles.buttonSection}>
      {["Button 1", "Button 2", "Button 3", "Button 4"].map((label, index) => (
        <motion.div
          key={index}
          className="button"
          style={styles.button}
          variants={buttonVariants}
          initial="initial"
          animate={selectedButton === index ? "click" : "initial"}
          whileHover="hover"
          onClick={() => handleClick(index)}
        >
          {label}
        </motion.div>
      ))}
    </div>
  );
};

const styles = {
  buttonSection: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    marginTop: "20px",
  },
  button: {
    width: "120px",
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10px",
    border: "2px solid #ddd",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "bold",
  },
};

export default ButtonSection;
