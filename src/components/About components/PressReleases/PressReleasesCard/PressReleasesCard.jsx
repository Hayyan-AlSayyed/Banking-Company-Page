import "./PressReleasesCard.css";
// Framer Motion
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { cardHover, containerVariants, fadeIn, staggerContainer } from "../../../Animation/Animation";

const PressReleasesCard = ({ card }) => {
  return (

    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.1 }}
      {...cardHover}

      className="hs-pr-card border">

      <motion.div
        variants={fadeIn(0.2)}
        className="hs-pr-card-image">
        <img src={card.image} alt={card.title} />
      </motion.div>

      <div className="hs-pr-card-content">

        <motion.h3
          variants={fadeIn("down", 0.3)}
          className="hs-pr-card-title">{card.title}</motion.h3>

        <motion.div
          variants={staggerContainer}
          className="hs-pr-card-tags">
          <motion.p
            variants={fadeIn("up", 0.4)}
            className="hs-pr-tag border">Location: {card.location}</motion.p>
          <motion.p
            variants={fadeIn("up", 0.5)}
            className="hs-pr-tag border">Date: {card.date}</motion.p>
        </motion.div>

        <motion.p
          variants={fadeIn("up", 0.6)}
          className="hs-pr-card-description">{card.description}</motion.p>

      </div>

    </motion.div>

  );
};

export default PressReleasesCard;
