import TittleHero from '../TittleHero/TittleHero';
import './Hero.css';
// Framer Motion
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { fadeIn } from '../../Animation/Animation';

const Hero = ({ imagesrc, children, titleTop }) => {
    return (
        <section className="ak-hero ak-hero-margin">
            <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="ak-hero-wrapper"
            >
                <div className="ak-hero-image-container">
                    <motion.img
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        src={imagesrc}
                        alt="Hero background"
                    />
                </div>

                <TittleHero top={titleTop}>
                    {children}
                </TittleHero>
            </motion.div>
        </section>
    );
};

export default Hero;
