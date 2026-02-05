import './PressReleasesHeader.css';

// Framer Motion
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { fadeIn, containerVariants } from "../../../Animation/Animation";

const PressReleasesHeader = ({ title, description }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px" }}
      className="hs-pr-header"
    >
      <motion.h1
        variants={fadeIn("down", 0.1, 0.8)}
        className="hs-pr-header-title"
      >
        <span>{title}</span>
      </motion.h1>

      <motion.p
        variants={fadeIn("up", 0.3, 0.8)}
        className="hs-pr-header-description"
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

export default PressReleasesHeader;
