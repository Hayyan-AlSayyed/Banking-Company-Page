// Import component-specific styles
import "./FinancialCTA.css";
// Import Link for client-side routing
import { Link } from "react-router-dom";
// Import CTA data
import financialCTAData from "./FinancialCTAData";


const FinancialCTA = () => {
  const { title, description, buttonText, image } = financialCTAData;

  return (
    <div
      className="ma-financial-cta">
      {/* Optional CTA image */}
      {image && (
        <img
          src={image}
          alt="cta"
          className="ma-cta-image"
        />
      )}

      {/* Text overlay content */}
      <div className="ma-text-overlay">
        <h1

          className="ma-card-titlee"
          dangerouslySetInnerHTML={{ __html: title }}
        />

        <p
          className="ma-card-description">
          {description}
        </p>
      </div>

      {/* CTA button */}
      <Link to="/signup">
        <button
          className="ma-finical-btn">
          {buttonText}
        </button>
      </Link>
    </div>
  );
};

export default FinancialCTA;
