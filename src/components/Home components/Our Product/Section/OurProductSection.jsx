import React, { useEffect, useState } from "react"
import { OurProductsHeaderData, OurProductsData } from "../data/data"
import OurProductHeader from "../Components/Header/OurProductHeader"
import ProductCard from '../Components/ProductCard/ProductCard'
import './OurProductSection.css'

const OurProductSection = () => {
  // Unique key for local storage persistence
  const storageKey = "tableData-1-0";

  // State to manage the currently selected product category
  const [category, setCategory] = useState('individual');

  // Initialize products state from localStorage or fallback to default data
  const [products, setProducts] = useState(() => {
    const savedData = localStorage.getItem(storageKey);
    return savedData ? JSON.parse(savedData) : OurProductsData;
  });

  // Sync products data to localStorage whenever the state changes
  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(products));
  }, [products, storageKey]);

  /** * Filter products based on the active category.
     * Defaults to 'individual' if category is missing.
     */
  const filteredProducts = products.filter(product => {
    const productCat = product.category ? product.category.toLowerCase() : 'individual';
    return productCat == category;
  });

  return (
    <section className="hs-op-section hs-section-margin">
      {/* Top part with title and toggle buttons */}
      <OurProductHeader
        Headerdata={OurProductsHeaderData}
        activeCategory={category}
        setCategory={setCategory}
      />

      {/* Show the list of filtered product cards */}
      <div className="hs-products-container hs-flex-sm-col">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} card={product} />
        ))}
      </div>
    </section>
  );
}

export default OurProductSection;
