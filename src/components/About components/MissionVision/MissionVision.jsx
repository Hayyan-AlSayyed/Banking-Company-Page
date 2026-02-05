
import { useEffect, useState } from "react";
import "./MissionVision.css";
import missionVisionData from "./MissionVisionData";


// Framer Motion
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { floatAnimation, fadeIn } from "../../Animation/Animation";

const STORAGE_KEY = "tableData-3-1";

/**
 * MissionVision Component
 * -----------------------
 * Displays a mission & vision section with text and images.
 * Data is persisted in localStorage so changes survive page reloads.
 */
const MissionVision = () => {

  /**
   * State: items
   * -------------
   * Initializes from localStorage if available,
   * otherwise falls back to default data from MissionVisionData.
   */
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : missionVisionData.items;
  });

  /**
   * Effect: localStorage sync
   * -------------------------
   * Whenever `items` changes, update localStorage
   * to keep the data persistent.
   */
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  // Destructure static content for easier access
  const { background, title, description } = missionVisionData;

  return (
    <section className="ma-mission-vision-container">

      {/* Header section with title and description */}
      <div className="ma-header">
        <motion.h1
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="ma-title">{title}</motion.h1>
        <motion.p
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="ma-description">{description}</motion.p>
      </div>

      {/* List of mission/vision items */}
      <div className="ma-list">
        {items.map((item, index) => (

          // Individual mission/vision card
          <div className="ma-item" key={item.id}>

            {/* Textual content */}
            <div className="ma-item-data">
              <h2 className="ma-item-title">{item.title}</h2>
              <p className="ma-item-text">{item.text}</p>
            </div>

            {/* Image container with background + foreground image */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}

              className="ma-image-wrapper">
              <motion.img
                {...floatAnimation(index)}
                animate={{ ...floatAnimation(index).animate, transition: { ...floatAnimation(index).animate.transition, duration: 4 } }}

                className="ma-bg-image"
                src={background}
                alt=""
              />
              <img
                className="ma-item-image"
                src={item.image}
                alt={item.title}
              />
            </motion.div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default MissionVision;
