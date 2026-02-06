import ProductCard from "../components/Home components/Our Product//Section/OurProductSection"
import OurTestimonials from "../components/Shared components/OurTestimonials/OurTestimonials"
import FAQs from "../components/Shared components/FAQs/FAQs"
import UseCase from "../components/Home components/UseCases/UseCase/UseCase"
import FinancialCTA from "../components/Shared components/FinancialCTA/FinancialCTA"
import HomeHero from "../components/Home components/HomeHero/HomeHero"
import OurFeatures from "../components/Home components/OurFeatures/OurFeatures"
import ButtonToUp from "../components/Shared components/ButtonToUp/ButtonToUp"

const Home = () => {
  return (
    <>
      <section>
        <div className="ma-hero-background-abstract">
          <img src="/Banking-Company-Page/Images/HomePage/MainTexture.png" className="MainTexture" />
        </div>
        <HomeHero />
        <ProductCard />
        <UseCase />
        <OurFeatures />
        <FAQs />
        <OurTestimonials />
        <FinancialCTA />
        <ButtonToUp />
      </section>
    </>
  )
}
export default Home
