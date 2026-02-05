
import IconText from "../../Shared components/IconText/IconText"

import "./HomeHero.css"

import { Link } from "react-router-dom"

import homeHeroData from "./HomeHeroData"


// Framer Motion
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import { containerVariants, fadeIn, floatAnimation } from "../../Animation/Animation";


const HomeHero = () => {
  const {
    icon,
    iconText,
    title,
    description,
    buttonText,
    images,
  } = homeHeroData;

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"

      className="ma-hero-container">

      {/* Left side */}
      <motion.div
        variants={fadeIn("up", 0.1)}

        className="ma-hero-left">
        <IconText icon={icon} text={iconText} />

        <h1
          className="ma-hero-title"
          dangerouslySetInnerHTML={{ __html: title }}
        />

        <p className="ma-hero-description">{description}</p>

        <Link to="/signup">
          <button className="ma-hero-btn">
            {buttonText}
          </button>
        </Link>
      </motion.div>

      {/* Right side */}
      <motion.div
        variants={fadeIn("up", 0)}

        className="ma-hero-right">
        {images.map((img, index) => (
          <motion.img
            variants={floatAnimation(index)}
            animate="animate"

            key={index}
            src={img}
            alt={`hero-${index}`}
            className={`ma-hero-image-${index}`}
          />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default HomeHero;
