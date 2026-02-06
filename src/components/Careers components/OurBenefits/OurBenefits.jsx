import { useState, useEffect } from "react";
import "./OurBenefits.css";
import BenefitsCard from "./BenefitsCard";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { fadeIn } from '../../Animation/Animation';

const STORAGE_KEY = "tableData-2-1";

// Default benefits data
const defaultBenefits = [
  {
    id: 1,
    image: "/Banking-Company-Page/Images/CareersPage/CompetitiveCompensation.png",
    title: "Competitive Compensation",
    description:
      "We provide a competitive salary package that recognizes the skills and expertise of our employees. YourBank believes in rewarding exceptional performance and offering opportunities for financial growth.",
  },
  {
    id: 2,
    image: "/Banking-Company-Page/Images/CareersPage/HealthandWellness.png",
    title: "Health and Wellness",
    description:
      "We prioritize the health and well-being of our employees by providing comprehensive medical, dental, and vision insurance plans. We also offer wellness programs, gym memberships, and resources to support a healthy lifestyle.",
  },
  {
    id: 3,
    image: "/Banking-Company-Page/Images/CareersPage/RetirementPlanning.png",
    title: "Retirement Planning",
    description:
      "YourBank is committed to helping employees plan for their future. We offer a retirement savings plan with a generous employer match to help them build a secure financial foundation for the long term.",
  },
  {
    id: 4,
    image: "/Banking-Company-Page/Images/CareersPage/Work-LifeBalance.png",
    title: "Work-Life Balance",
    description:
      "We understand the importance of maintaining a healthy work-life balance. YourBank offers flexible work arrangements, paid time off, parental leave, and other programs that support employees in managing their personal and professional commitments.",
  },
];

const OurBenefits = () => {
  // State Benefits
  const [benefits, setBenefits] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : defaultBenefits;
  });

  // Persist to localStorage whenever benefits change
  useEffect(() => { localStorage.setItem(STORAGE_KEY, JSON.stringify(benefits)); }, [benefits]);

  return (
    <section className="mh-benefits">
      {/* Header */}
      <div className="mh-benefits-header">
        <motion.h1
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Our <span>Benefits</span>
        </motion.h1>
        <motion.p
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          At YourBank, we value our employees and are dedicated to their
          well-being and success. We offer a comprehensive range of benefits
          designed to support their personal and professional growth.
        </motion.p>
      </div>

      {/* Benefits Grid */}
      <div className="mh-benefits-grid">
        {benefits.map((item) => (
          <BenefitsCard
            key={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default OurBenefits;
