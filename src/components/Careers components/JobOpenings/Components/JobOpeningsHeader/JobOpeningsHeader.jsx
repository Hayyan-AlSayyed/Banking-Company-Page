import './JobOpeningsHeader.css';

// Framer Motion
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../../../Animation/Animation";

const JobOpeningsHeader = ({ title, description }) => {
  return (

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}

      className="hs-jo-header-text">
      <motion.h1
        variants={fadeIn("down", 0.1, 0.8)}
        className='hs-jo-title'><span>{title}</span></motion.h1>
      <motion.p
        variants={fadeIn("up", 0.3, 0.8)}
        className='hs-jo-description'>{description}</motion.p>
    </motion.div>
  );
};

export default JobOpeningsHeader;
