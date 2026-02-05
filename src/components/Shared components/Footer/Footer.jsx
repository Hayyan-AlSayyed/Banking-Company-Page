import { NavLink } from 'react-router-dom'
import './Footer.css'

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, iconHover } from '../../Animation/Animation';
import { useState } from 'react';

const Footer = ({ logo, items, contact, icons, rights, p, s }) => {
    const [isCopied, setCopied] = useState(false)

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        setCopied(true)
        setTimeout(() => {
            setCopied(false)
        }, 1200
        )
    };

    return (
        <footer className=' flex-center flex-col'>
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-50px" }}
                className="js_logo_url_cnt flex-center flex-col">
                <motion.img
                    variants={fadeIn("up")}

                    src={logo} className="js_logo" />
                <ul>
                    {items.map((item, index) => {
                        return (
                            <motion.li
                                variants={fadeIn("up")}

                                key={index}>
                                <NavLink to={item.href}>
                                    {item.content}
                                </NavLink>
                            </motion.li>
                        )
                    })}
                </ul>
            </motion.div>
            <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                className="js_mail_num_loc_cnt flex-center ">
                {contact.map((contact, index) => {
                    return (
                        <div className='js_pic_text_align' key={index}>
                            <img src={contact.icon} className='js-footer-icons' />
                            {index === 2 ? (<NavLink to={"https://www.google.com/maps"} >{contact.content}</NavLink>)
                                : (
                                    <p onClick={() => handleCopy(contact.content)} >{contact.content}</p>
                                )}
                        </div>
                    )
                })}
            </motion.div>
            {isCopied && (<div className='tooltip'>Text is copied to clipboard</div>)}
            <motion.div
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                className="js_sm_rps_cnt flex-between border">
                <div className="js-sm-cnt flex-center">
                    {icons.map((icon, index) => {
                        return (
                            <NavLink to={icon.href} key={index} className="js-sm-yellow-cont">
                                <motion.img
                                    whileHover={{
                                        ...iconHover.hover,
                                        scale: 1.6
                                    }}
                                    variants={iconHover}
                                    src={icon.content} />
                            </NavLink>
                        )
                    })}
                </div>
                <div className="js-rights-cnt">
                    <p>
                        {rights}
                    </p>
                </div>
                <div className="js-pr-ser-cnt">
                    <p>{p}</p>
                    <p className='js-service-p'>{s}</p>
                </div>
            </motion.div>
        </footer>
    )
}

export default Footer
