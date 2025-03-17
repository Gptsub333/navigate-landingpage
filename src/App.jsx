"use client"

import { useState } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Carousel from "./components/Carousel"
import FeaturesShowcase from "./components/FeaturesShowcase"
import Testimonials from "./components/Testimonials"
import CTASection from "./components/CTASection"
import Footer from "./components/Footer"
import PricingPage from "./components/PricingPage"
import AboutPage from "./components/AboutPage"

export default function App() {
  const [currentPage, setCurrentPage] = useState("home")

  const handleNavigation = (page) => {
    setCurrentPage(page)
  }

  // Show home content for both "home" and "product" pages
  const showHomeContent = currentPage === "home" || currentPage === "product"

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar onNavigate={handleNavigation} currentPage={currentPage} />

      {showHomeContent ? (
        <>
          {/* Full-width hero section */}
          <div className="w-full">
            <Hero />
          </div>

          {/* Features section positioned to be visible with one scroll */}
          <div className="w-full">
            <Features />
          </div>

          <div className="max-w-[1400px] mx-auto">
            <Carousel />
            <FeaturesShowcase />
          </div>
        </>
      ) : currentPage === "pricing" ? (
        <PricingPage />
      ) : currentPage === "about" ? (
        <AboutPage />
      ) : null}

      {/* Common sections that appear on all pages */}
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  )
}

