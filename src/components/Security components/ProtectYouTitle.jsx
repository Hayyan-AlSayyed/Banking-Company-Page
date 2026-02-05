import "./HowProtectYou.css"

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { fadeIn } from '../Animation/Animation';

const ProtectYouTitle = ({ ftitle, title, subTitle }) => {
    return (
        <>
            <div
                className="mar-ProtectYou-Title  ">
                <motion.h1
                    variants={fadeIn("up", 0.1)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >{ftitle} {" "}
                    <span>{title}</span>
                </motion.h1>
                <motion.p
                    variants={fadeIn("up", 0.1)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >{subTitle}</motion.p>
            </div>
        </>
    )
}

export default ProtectYouTitle
