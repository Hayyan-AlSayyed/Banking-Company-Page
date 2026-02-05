import CardAndButton from "../CardAndButton/CardAndButton"
import CardContiner from "../CardContiner/CardContiner"
import Tittle from "../Tittle/Tittle"
import './ForIndividuals.css'
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { fadeIn } from "../../../Animation/Animation";

import CountUp from 'react-countup';

//the section that contains everything except the headline
const ForIndividuals = ({ revers, tittle, description, data, datas }) => {
    return (
        <div className={` ak_for_individuals ${revers ? "revers" : ''}`}>
            <motion.div
                variants={fadeIn(revers ? "left" : "right", 0.2, 0.8)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}

                className="ak_productdata">
                {data && data.map((item, index) => {
                    return (
                        <CardContiner
                            key={index}
                            icon={item.icon}
                            tittle={item.tittle} />
                    )
                })}
            </motion.div>
            <motion.div
                variants={fadeIn("up", 0.4, 0.8)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="ak_countinar">
                <Tittle
                    tittle={tittle}
                    description={description}
                    className="tittle_variant"

                />
                <div className="ak_card_grids">
                    {datas && datas.map((item, index) => {
                        return (
                            <CardAndButton
                                key={index}
                                interactiveNumber={
                                    <CountUp
                                        end={parseInt(item.interactiveNumber)}
                                        duration={2.5}
                                        enableScrollSpy={true}
                                        scrollSpyOnce={true}
                                        className="hs-Counter-Up"
                                    />
                                } tittle={item.tittle}
                            />
                        )
                    })}
                </div>
                <button className="ak_button">Learn More</button>
            </motion.div>
        </div>
    )
}

export default ForIndividuals
