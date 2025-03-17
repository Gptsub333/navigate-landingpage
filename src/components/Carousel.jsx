"use client"

import { useState, useEffect } from "react"
import p2 from "../assets/p2.png"
import p3 from "../assets/p3.png"
import p4 from "../assets/p4.png"

export default function Carousel() {
  const [activeSlide, setActiveSlide] = useState(0)

  const slides = [
    { image: p2, alt: "Property search interface" },
    { image: p3, alt: "Property data analysis" },
    { image: p4, alt: "Campaign management" },
  ]

  // Automatically change slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length) // Loop back to the first slide
    }, 3000) // Change slide every 3 seconds

    return () => clearInterval(interval) // Cleanup on unmount
  }, [])

  const goToSlide = (index) => {
    setActiveSlide(index)
  }

  return (
    <section className="py-16 px-6 md:px-12 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-8">
          <p className="text-indigo-600 font-medium uppercase tracking-wider mb-2">
            YOUR PROPERTY PROSPECTING JOURNEY MADE SIMPLE
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">From Search to Connection in Minutes</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-12">
          {/* Features column */}
          <div className="lg:col-span-4 space-y-10">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Discover Hidden Properties</h3>
                <p className="text-gray-600">Find off-market opportunities others miss</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Access Verified Data</h3>
                <p className="text-gray-600">Pre-screened owner information across multiple sources</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Launch Your Campaign</h3>
                <p className="text-gray-600">Set your outreach and let Navigate handle the rest</p>
              </div>
            </div>

            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-md">
              Join Now
            </button>
          </div>

          {/* Carousel column */}
          <div className="lg:col-span-8 relative">
            <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-100">
              <img
                src={slides[activeSlide].image || "/placeholder.svg"}
                alt={slides[activeSlide].alt}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Carousel navigation dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === activeSlide ? "bg-indigo-600" : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
