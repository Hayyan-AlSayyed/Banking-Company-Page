
import { useState } from "react";
import { pages, sections } from "../dashboardData";
import "./TabsComponent.css";
import { div } from "framer-motion/client";

/**
 * TabsComponent
 * -------------
 * A navigation component that allows switching between:
 * - Pages (top-level tabs)
 * - Sections (dependent on selected page)
 *
 * Props:
 * - onChange(pageId, sectionId):
 *   Callback fired whenever the active page or section changes
 */
const TabsComponent = ({ onChange }) => {

  // Currently selected page ID
  const [activePage, setActivePage] = useState(null);

  // Currently selected section ID
  const [activeSection, setActiveSection] = useState(null);

  /**
   * Handle page change
   * ------------------
   * - Updates active page
   * - Resets active section
   * - Notifies parent component
   */
  const changePage = (pageId) => {
    setActivePage(pageId);
    setActiveSection(null);
    onChange(pageId, null);
  };

  /**
   * Handle section change
   * ---------------------
   * - Updates active section
   * - Notifies parent component with current page
   */
  const changeSection = (sectionId) => {
    setActiveSection(sectionId);
    onChange(activePage, sectionId);
  };

  return (
    <section className="dashboard">
      <div className="dashboard-header">
        <h1 className="dashboard-heading">Banking Company Dashboard</h1>
        <p className="dashboard-description">Welcome to the YourBank Administrative Control Center. This centralized platform allows you to seamlessly manage banking products, monitor system updates, and customize the user experience. Use these tools to oversee various sections, review service offerings, and ensure all financial operations align with our standards of excellence and precision.
        </p>
      </div>

      <div className="ma-tabs">

        {/* Pages tabs */}
        <ul className="ma-pages-tabs">
          {pages.map((page) => (
            <li
              key={page.id}
              onClick={() => changePage(page.id)}
              className={activePage === page.id ? "active" : ""}
            >
              {page.name}
            </li>
          ))}
        </ul>

        {/* Sections tabs (shown only when a page is selected) */}
        <ul className="ma-sections-tabs">
          {sections[activePage]?.map((section) => (
            <li
              key={section.id}
              onClick={() => changeSection(section.id)}
              className={activeSection === section.id ? "active" : ""}
            >
              {section.name}
            </li>
          ))}
        </ul>

      </div>
    </section >
  );
};

export default TabsComponent;
