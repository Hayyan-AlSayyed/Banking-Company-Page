import './ProductCard.css'

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

// Importing pre-defined animation variants
import { fadeIn, rotateIn, iconHover } from "../../../../Animation/Animation";

const ProductCard = ({ card }) => {
  return (
    <motion.div
      className="hs-product-card flex-col"
      variants={{ ...fadeIn("up", 0, 0.8) }}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
    >
      <div>
        {/* Decorative circle with a delayed rotation entrance */}
        <motion.div
          className='bg-icon hs-outer-circle flex-center'
          variants={rotateIn(0.3)}
        >
          <div className='bg-icon hs-inner-circle flex-center hs-glow-border hs-op-card-icon'>
            {/* Icon scale and rotation effect when the parent card is hovered */}
            <motion.img
              variants={iconHover}
              src={card.icon} alt={card.title} />
          </div>
        </motion.div>
      </div>

      <div className="hs-product-info">
        <h3>{card.title}</h3>
        <p>{card.description}</p>
      </div>
    </motion.div>
  );
};

export default ProductCard;
