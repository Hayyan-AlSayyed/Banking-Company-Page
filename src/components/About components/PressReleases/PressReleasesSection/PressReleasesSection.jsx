import PressReleasesCard from "../PressReleasesCard/PressReleasesCard";
import { PressReleasesCardData, PressReleasesHeaderData } from "../PressReleasesData/PressReleasesData";
import PressReleasesHeader from "../PressReleasesHeader/PressReleasesHeader";
import "./PressReleasesSection.css";

const PressReleasesSection = () => {
  return (
    <section className="hs-pr-section-container hs-section-margin">
      <PressReleasesHeader
        title={PressReleasesHeaderData.title}
        description={PressReleasesHeaderData.description}
      />

      <div className="hs-pr-container">
        {PressReleasesCardData.map((press) => (
          <PressReleasesCard key={press.id} card={press} />
        ))}
      </div>
    </section>
  );
};

export default PressReleasesSection;
