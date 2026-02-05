
import ProtectYouTitle from "./ProtectYouTitle"
import { CardData } from './HowProtectYouData';
import ProtectYouCard from "./ProtectYouCard";
import "./HowProtectYou.css"
import { useEffect, useState } from "react";

const STORAGE_KEY = "tableData-4-0";
const HowProtectYou = () => {
    const [allHowProtect, setAllHowProtect] = useState(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved ? JSON.parse(saved) : CardData;
    });
    useEffect(() => {
        if (!localStorage.getItem(STORAGE_KEY)) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(CardData));
            setAllHowProtect(CardData);
        }
    }, [])
    return (
        <>
            <section className=" mar-protectYou-section">
                <ProtectYouTitle
                    ftitle="How We "
                    title="Protect You"
                    subTitle="At YourBank, we prioritize the security and confidentiality of your financial information. Our state-of-the-art encryption technology and stringent data protection measures ensure your assets and transactions are safeguarded at all times" />


                <div className="mar-protect-wrapper">
                    <div className="backGround">
                        <img src="/Images/SecurityPage/Protect Background Image.webp" alt="backGround" />
                    </div>


                    <div className="mar-protect-grid">
                        {allHowProtect.map((item) => (
                            <ProtectYouCard
                                key={item.id}
                                imag={item.imag}
                                title={item.title}
                                paragraph={item.paragraph}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default HowProtectYou
