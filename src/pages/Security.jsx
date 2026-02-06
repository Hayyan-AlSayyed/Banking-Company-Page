
import Hero from '../components/Careers components/Hero/Hero'
import HowProtectYou from '../components/Security components/HowProtectYou'
import ButtonToUp from '../components/Shared components/ButtonToUp/ButtonToUp'
import FAQs from '../components/Shared components/FAQs/FAQs'

const Security = () => {
    return (
        <div>
            <Hero imagesrc="/Banking-Company-Page/Images/SecurityPage/HeroImage.webp">
                <h1>Your Security is Our <span>Top Priority</span></h1>
                <p>At YourBank, we understand the importance of keeping your financial information secure. We employ robust security measures and advanced technologies to protect your personal and financial data. Rest assured that when you bank with us, your security is our utmost priority.</p>
            </Hero>
            <HowProtectYou />
            <FAQs />
            <ButtonToUp />
        </div>
    )
}

export default Security
