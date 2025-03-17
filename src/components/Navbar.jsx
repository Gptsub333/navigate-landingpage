"use client"

export default function Navbar({ onNavigate, currentPage }) {
  return (
    <header className="w-full py-4 px-6 md:px-12 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a
            href="#"
            className="flex items-center space-x-2"
            onClick={(e) => {
              e.preventDefault()
              onNavigate("home")
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

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#"
            className={`font-medium ${currentPage === "product" ? "text-indigo-600" : "text-gray-800 hover:text-indigo-600"}`}
            onClick={(e) => {
              e.preventDefault()
              onNavigate("product")
            }}
          >
            Product
          </a>
          <a
            href="#"
            className={`font-medium ${currentPage === "pricing" ? "text-indigo-600" : "text-gray-800 hover:text-indigo-600"}`}
            onClick={(e) => {
              e.preventDefault()
              onNavigate("pricing")
            }}
          >
            Pricing
          </a>
          <a
            href="#"
            className={`font-medium ${currentPage === "about" ? "text-indigo-600" : "text-gray-800 hover:text-indigo-600"}`}
            onClick={(e) => {
              e.preventDefault()
              onNavigate("about")
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
              onNavigate("login")
            }}
          >
            Sign in
          </a>
          <button
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-5 rounded-md"
            onClick={() => onNavigate("signup")}
          >
            Get Started
          </button>
        </div>
      </div>
    </header>
  )
}

