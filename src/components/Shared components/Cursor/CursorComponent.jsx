import React, { useEffect, useState } from "react";

// eslint-disable-next-line no-unused-vars
import { motion, useSpring, useMotionValue } from "framer-motion";
import "./CursorComponent.css";

const Cursor = () => {
  const [isHovered, setIsHovered] = useState(false); // State for hover interaction

  // High-performance motion values for smooth tracking
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Physics-based spring config for the "follow" effect
  const springConfig = { stiffness: 1500, damping: 60, mass: 0.05 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Update raw coordinates on mouse move
    const moveMouse = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    // Detect if hovering over interactive elements
    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = target.closest('button, a, [role="button"], svg, img, li, .js_pic_text_align');
      setIsHovered(!!isInteractive);
    };

    window.addEventListener("mousemove", moveMouse);
    window.addEventListener("mouseover", handleMouseOver);

    // Cleanup listeners on component unmount
    return () => {
      window.removeEventListener("mousemove", moveMouse);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="custom-cursor-container flex-center"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }} // Center cursor on tip
    >
      <motion.div
        className="cursor-outline flex-center"
        animate={{
          width: isHovered ? 65 : 45, // Expand outline on hover
          height: isHovered ? 65 : 45,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20, mass: 0.5 }}
      >
        <motion.div
          className="cursor-dot"
          animate={{ scale: isHovered ? 0 : 1 }} // Hide dot on hover
        />
      </motion.div>
    </motion.div>
  );
};

export default Cursor;
