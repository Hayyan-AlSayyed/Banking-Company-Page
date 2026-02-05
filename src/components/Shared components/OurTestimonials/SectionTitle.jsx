// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { fadeIn, btnAnimation } from '../../Animation/Animation';

import "./SectionTitle.css";

const SectionTitle = ({ ftitle, title, subTitle, fbutton, sbutton, activeTab, setActiveTab }) => {
    return (
        <div className="ma-container flex-between section-margin">
            <div className="ma-fsection ">
                <motion.h1
                    variants={fadeIn("up", 0.1)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}>
                    {ftitle} {" "}
                    <span>{title}</span>

                </motion.h1>
                <motion.p
                    variants={fadeIn("up", 0.3)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}>
                    {subTitle}</motion.p>
            </div>
            <div className="ma-btns flex-center">
                <motion.button
                    {...btnAnimation}

                    className={activeTab === 'individual' ? 'mar-btn active' : 'mar-btn'}
                    onClick={() => setActiveTab('individual')}>{fbutton}</motion.button>
                <button className={activeTab === 'business' ? 'mar-btn active' : 'mar-btn'}
                    onClick={() => setActiveTab('business')}>{sbutton}</button>
            </div>
        </div>
    )
}

export default SectionTitle
