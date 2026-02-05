import MissionVision from '../components/About components/MissionVision/MissionVision'
import PressReleasesSection from '../components/About components/PressReleases/PressReleasesSection/PressReleasesSection'
import Hero from '../components/Careers components/Hero/Hero'
import ButtonToUp from '../components/Shared components/ButtonToUp/ButtonToUp'

const About = () => {
    return (
        <div>
            <Hero imagesrc="/Images/AboutPage/Hero Image.webp">
                <p style={{ color: "white" }}>Welcome to YourBank</p>
                <h1> Where Banking Meets <span>Excellence!</span></h1>
                <p>At YourBank, we believe that banking should be more than just transactions. It should be an experience that empowers individuals and businesses to thrive and reach their financial goals. As a trusted financial institution, we are committed to delivering exceptional banking services that go beyond expectations. With a focus on innovation, personalized solutions, and unwavering integrity, we strive to provide the best banking experience for our valued customers. Join us on this exciting journey and discover a new level of banking excellence.</p>
            </Hero>
            <MissionVision />
            <PressReleasesSection />
            <ButtonToUp />

        </div>
    )
}

export default About
