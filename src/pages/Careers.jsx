import Hero from "../components/Careers components/Hero/Hero";
import JobOpenings from "../components/Careers components/JobOpenings/JobOpeningsSection/JobOpenings";
import OurBenefits from "../components/Careers components/OurBenefits/OurBenefits";
import OurValues from "../components/Careers components/OurValues";
import ButtonToUp from "../components/Shared components/ButtonToUp/ButtonToUp";
import FAQs from "../components/Shared components/FAQs/FAQs";
import FinancialCTA from "../components/Shared components/FinancialCTA/FinancialCTA";

const Careers = () => {
    return (
        <>
            <section>
                <Hero imagesrc="/Banking-Company-Page/Images/CareersPage/HeroImage.webp">
                    <h1>Welcome to <span>YourBank</span> Careers!</h1>
                    <p>Join our team and embark on a rewarding journey in the banking industry. At YourBank, we are committed to fostering a culture of excellence and providing opportunities for professional growth. With a focus on innovation, customer service, and integrity, we strive to make a positive impact in the lives of our customers and communities. Join us today and be a part of our mission to shape the future of banking.</p>
                </Hero>
                <OurValues />
                <OurBenefits />
                <JobOpenings />
                <FAQs />
                <FinancialCTA />
                <ButtonToUp />
            </section>
        </>
    )
}

export default Careers
