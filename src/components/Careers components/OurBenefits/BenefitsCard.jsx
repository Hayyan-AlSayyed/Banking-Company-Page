// Framer Motion
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import { fadeIn, cardHover, iconHover } from "../../Animation/Animation";


const BenefitsCard = ({ image, title, description }) => {
  return (
    <motion.div
      variants={{ ...fadeIn("up", 0, 0.5), ...cardHover }}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}

      className="mh-card">
      <img src="/Banking-Company-Page/Images/CareersPage/background.png" alt="" className="mh-card-bachground" />
      <div className="mh-card-head">
        <span className="mh-card-icon">
          <motion.img
            variants={iconHover}

            src={image} alt={title} />
        </span>

        <h3 className="mh-card-title">{title}</h3>
      </div>

      <p className="mh-card-desc">{description}</p>
    </motion.div>
  );
};

export default BenefitsCard;
