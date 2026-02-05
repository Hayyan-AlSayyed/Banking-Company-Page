import { useState, useEffect } from 'react'
import './OurFeatures.css'
import FeatureCard from './FeatureCard'

// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion'
import { containerVariants } from '../../Animation/Animation'

const STORAGE_KEY = "tableData-1-1"

const OurFeatures = () => {

  //  Active Category 
  const [selectedCategory, setSelectedCategory] = useState("Online Banking")

  //  Default Features 
  const defaultFeatures = [
    //  Online Banking 
    { id: 1, title: "24/7 Account Access", description: "Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease.", category: "Online Banking" },
    { id: 2, title: "Mobile Banking App", description: "Stay connected to your finances on the go with our user-friendly mobile banking app. Easily manage your accounts, deposit checks, and make payments from your smartphone or tablet.", category: "Online Banking" },
    { id: 3, title: "Secure Transactions", description: "Rest assured knowing that your transactions are protected by industry-leading security measures. We employ encryption and multi-factor authentication to safeguard your financial information.", category: "Online Banking" },
    { id: 4, title: "Bill Pay and Transfers", description: "Save time and avoid late fees with our convenient bill pay service. Set up recurring payments or make one-time transfers between your accounts with just a few clicks.", category: "Online Banking" },

    //  Financial Tools 
    { id: 5, title: "Financial Tool One", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", category: "Financial Tools" },
    { id: 6, title: "Financial Tool Two", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", category: "Financial Tools" },
    { id: 7, title: "Financial Tool Three", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", category: "Financial Tools" },
    { id: 8, title: "Financial Tool Four", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", category: "Financial Tools" },

    //  Customer Support 
    { id: 9, title: "Support Feature One", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", category: "Customer Support" },
    { id: 10, title: "Support Feature Two", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", category: "Customer Support" },
    { id: 11, title: "Support Feature Three", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", category: "Customer Support" },
    { id: 12, title: "Support Feature Four", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", category: "Customer Support" }
  ]

  //  State 
  const [features, setFeatures] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (!saved) return defaultFeatures

    const parsed = JSON.parse(saved)

    return parsed.map(item => ({
      id: item.id,
      title: item.title,
      description: item.description,
      category: item.category || "Online Banking"
    }))
  })

  //  Persist 
  useEffect(() => {localStorage.setItem(STORAGE_KEY, JSON.stringify(features)) }, [features])

  return (
    <section className="mh-features-section">

      {/*  Header  */}
      <div className="mh-features-header">
        <h1>Our <span>Features</span></h1>
        <p>
          Experience a host of powerful features at YourBank, including seamless online banking, secure transactions, and personalized financial insights, all designed to enhance your banking experience
        </p>
      </div>

      <div className="mh-features-content">

        {/*  Sidebar  */}
        <aside className="mh-features-sidebar">
          {["Online Banking", "Financial Tools", "Customer Support"].map(category => (
            <button
              key={category}
              className={`mh-feature-btn ${selectedCategory === category ? "mh-feature-active" : ""}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </aside>

        {/*  Cards  */}
        <AnimatePresence mode="wait">

          <motion.div
            key={selectedCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"

            className="mh-features-cards">
            {features
              .filter(feature => feature.category === selectedCategory)
              .map(feature => (
                <FeatureCard
                  key={feature.id}
                  title={feature.title}
                  description={feature.description}
                />
              ))
            }
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  )
}

export default OurFeatures
