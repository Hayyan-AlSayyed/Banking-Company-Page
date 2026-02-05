
import "./OurValues.css";
import OurValuesCard from "./OurValuesCard";
import OurValuesTitle from "./ourValuesTitle";
import { CardData } from "./OurValuesCardData";
import { useEffect, useState } from "react";

const STORAGE_KEY = "tableData-2-0";

const OurValues = () => {
    const [ourValues, setOurValues] = useState(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved ? JSON.parse(saved) : CardData;
    });
    useEffect(() => {
        if (!localStorage.getItem(STORAGE_KEY)) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(CardData));
            setOurValues(CardData);
        }
    }, [])

    return (
        <section className="section-margin ma-ourValues-section">
            <OurValuesTitle
                ftitle="Our"
                title="Values"
                subTitle="At YourBank, our values form the foundation of our organization and guide our actions. We believe in upholding the highest standards of integrity, delivering exceptional service, and embracing innovation. These values define our culture and shape the way we work together to achieve our goals."
            />
            <div className="ma-values-grid ">
                {ourValues.map((item) => (
                    <OurValuesCard
                        key={item.id}
                        title={item.title}
                        paragraph={item.paragraph}
                    />
                ))}
            </div>
        </section>
    );
}

export default OurValues
