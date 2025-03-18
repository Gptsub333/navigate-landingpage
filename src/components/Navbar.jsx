"use client"

import { useState, useEffect } from "react"

export default function Navbar({ onNavigate, currentPage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Set Product as the default selected page when component mounts
  useEffect(() => {
    if (!currentPage) {
      onNavigate("product")
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleNavigation = (page) => {
    onNavigate(page)
    setIsMenuOpen(false) // Close mobile menu after navigation
  }

  return (
    <header className="w-full py-4 px-6 md:px-12 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a
            href="#"
            className="flex items-center space-x-2"
            onClick={(e) => {
              e.preventDefault()
              handleNavigation("home")
            }}
          >
            <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <circle cx="12" cy="12" r="10" />
                <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
              </svg>
            </div>
            <span className="text-2xl font-bold text-indigo-600">navigate</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#"
            className={`font-medium ${currentPage === "product" ? "text-indigo-600" : "text-gray-800 hover:text-indigo-600"}`}
            onClick={(e) => {
              e.preventDefault()
              handleNavigation("product")
            }}
          >
            Product
          </a>
          <a
            href="#"
            className={`font-medium ${currentPage === "pricing" ? "text-indigo-600" : "text-gray-800 hover:text-indigo-600"}`}
            onClick={(e) => {
              e.preventDefault()
              handleNavigation("pricing")
            }}
          >
            Pricing
          </a>
          <a
            href="#"
            className={`font-medium ${currentPage === "about" ? "text-indigo-600" : "text-gray-800 hover:text-indigo-600"}`}
            onClick={(e) => {
              e.preventDefault()
              handleNavigation("about")
            }}
          >
            About
          </a>
        </nav>

        <div className="flex items-center space-x-6">
          <a
            href="#"
            className="text-indigo-600 font-medium hidden md:inline-block"
            onClick={(e) => {
              e.preventDefault()
              handleNavigation("login")
            }}
          >
            Sign in
          </a>
          <button
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-5 rounded-md"
            onClick={() => handleNavigation("signup")}
          >
            Get Started
          </button>

          {/* Hamburger Menu Button (Mobile Only) */}
          <button className="md:hidden flex items-center" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 py-4 border-t border-gray-100">
          <nav className="flex flex-col space-y-4 px-4">
            <a
              href="#"
              className={`font-medium ${currentPage === "product" ? "text-indigo-600" : "text-gray-800"}`}
              onClick={(e) => {
                e.preventDefault()
                handleNavigation("product")
              }}
            >
              Product
            </a>
            <a
              href="#"
              className={`font-medium ${currentPage === "pricing" ? "text-indigo-600" : "text-gray-800"}`}
              onClick={(e) => {
                e.preventDefault()
                handleNavigation("pricing")
              }}
            >
              Pricing
            </a>
            <a
              href="#"
              className={`font-medium ${currentPage === "about" ? "text-indigo-600" : "text-gray-800"}`}
              onClick={(e) => {
                e.preventDefault()
                handleNavigation("about")
              }}
            >
              About
            </a>
            <a
              href="#"
              className="text-indigo-600 font-medium"
              onClick={(e) => {
                e.preventDefault()
                handleNavigation("login")
              }}
            >
              Sign in
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

