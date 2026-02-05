import SectionTitle from "./SectionTitle";
import Slider from "../Slider/Slider";
import TestimonialCard from "./TestimonialCard";
import { useState, useEffect } from 'react';
import { cardData } from "./TestimonialsData";
import "./SectionTitle.css";



// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer } from "../../Animation/Animation";


const OurTestimonials = () => {
    const DASHBOARD_KEY = "tableData-1-3";
    const [allTestimonials, setAllTestimonials] = useState(() => {
        const savedData = localStorage.getItem(DASHBOARD_KEY);
        return savedData ? JSON.parse(savedData) : cardData;
    });

    useEffect(() => {
        if (!localStorage.getItem(DASHBOARD_KEY)) {
            localStorage.setItem(DASHBOARD_KEY, JSON.stringify(cardData));

            setAllTestimonials(cardData);
        }
    }, [cardData]);

    const [activeTab, setActiveTab] = useState('individual');
    const filteredData = allTestimonials.filter(item => item.category === activeTab);

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="Our-Testimonials-Container"
        >
            <SectionTitle
                className="ma-ourtest"
                ftitle="Our"
                title="Testimonials"
                subTitle="Discover how YourBank has transformed lives with innovative digital solutions and personalized customer service. See why our clients trust us for a secure and prosperous financial journey"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                fbutton="For Individuals"
                sbutton="For Businesses"
            />


            <motion.div variants={staggerContainer}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                    >

                        <Slider key={activeTab} totalItems={filteredData.length}>
                            {filteredData.map((item) => (
                                <TestimonialCard
                                    key={item.id}
                                    image="/Images/HomePage/Qutation.png"
                                    clientOpinen={item.clientOpinen}
                                    clientName={item.clientName}
                                />
                            ))}
                        </Slider>
                    </motion.div>
                </AnimatePresence>
            </motion.div>
        </motion.section>
    );
};

export default OurTestimonials;
