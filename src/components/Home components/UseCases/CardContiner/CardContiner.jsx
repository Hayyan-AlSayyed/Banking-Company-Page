import './CardContiner.css'
// component card left section

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { flashHoverVariant, iconHover } from "../../../Animation/Animation";

const CardContiner = ({ icon, tittle }) => {
    return (



        <motion.div className='ak_cardcontiner border'
            variants={flashHoverVariant("#CAFF33")}
            initial="initial"
            whileHover="hover"
        >
            <div className='ak-outer-circle bg-icon'>
                <div className='ak-inner-circle bg-icon'>
                    <motion.img
                        variants={iconHover}

                        src={icon} alt='' />
                </div>
            </div>
            <p>{tittle}</p>

        </motion.div>
    )
}

export default CardContiner
