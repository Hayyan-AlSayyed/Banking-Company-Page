// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { fadeIn, cardHover, arrowMotion } from "../../Animation/Animation";

// FeatureCard.jsx
const FeatureCard = ({ title, description }) => {
  return (
    <motion.div
      variants={{
        ...fadeIn("up", 0, 0.6),
        ...cardHover,
        hover: {
          ...cardHover.hover,
          backgroundColor: "transparent",
          backgroundImage: "linear-gradient(135deg, rgba(202, 255, 51, 0.1) 0%, rgba(202, 255, 51, 0.02) 20%)",
        }

      }} initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.2 }}


      className="mh-feature-card">
      <div className="mh-card-header">
        <h3>{title}</h3>
        <motion.img
          variants={arrowMotion}

          src="/Images/HomePage/Arrow.png" className="mh-arrow" alt="" />
      </div>
      <p>{description}</p>
    </motion.div>
  )
}

export default FeatureCard
