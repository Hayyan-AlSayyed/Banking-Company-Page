// Framer Motion
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import { fadeIn, cardHover, iconHover } from "../Animation/Animation";



import "./HowProtectYou.css"
const ProtectYouCard = ({ imag, title, paragraph }) => {

    return (
        <motion.div
            variants={{
                ...fadeIn("up", 0, 0.5),
                hover: {
                    ...cardHover.hover,
                    backgroundColor: "rgba(201, 255, 51, 0.05)",
                }
            }}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, margin: "-50px" }}

            className="mar-card">
            <div className="firstSection-card">
                <motion.div
                    variants={iconHover}
                    className="img-card">
                    <img
                        src={imag} alt="logo" />
                </motion.div>
                <h1>{title}</h1>
            </div>
            <p className="mar-card-p">{paragraph}</p>

        </motion.div>
    )
}

export default ProtectYouCard
