// Framer Motion
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { fadeIn, cardHover, textHoverVariant } from "../Animation/Animation";

import "./OurValues.css"

const OurValuesCard = ({ title, paragraph }) => {
    return (
        <>
            <motion.div
                variants={{
                    ...fadeIn("left", 0, 0.8, "spring"),
                    ...cardHover,
                    hover: {
                        ...cardHover.hover,
                        backgroundColor: "transparent"
                    }
                }}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, margin: "-50px" }}

                className="ma-ourValues-card">
                <div className="ma-card">
                    <motion.h1
                        variants={textHoverVariant("#c9ff33", "#4C4C4D")}
                        className="ma-card-title">
                        {title}
                    </motion.h1>
                    <motion.p
                        variants={fadeIn("none", 0.4, 1)}

                        className="ma-card-p">{paragraph}</motion.p>
                </div>
            </motion.div >
        </>
    )
}

export default OurValuesCard
