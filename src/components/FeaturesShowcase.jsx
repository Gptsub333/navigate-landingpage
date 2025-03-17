import p5 from "../assets/p5.png"
import p6 from "../assets/p6.png"
import p7 from "../assets/p7.png"

export default function FeaturesShowcase() {
  return (
    <section className="py-16 px-6 md:px-12 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        {/* Top section - Interactive Mapping */}
        <div className="mb-20">
          {/* Centered headings above the image */}
          <div className="text-center mb-8">
            <p className="text-indigo-600 font-medium uppercase tracking-wider">DEFINE YOUR MARKET ONCE</p>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Draw boundaries and set criteria</h3>
            <p className="text-gray-600">Navigate continuously monitors your target areas</p>
          </div>

          {/* Image and Interactive Mapping section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src={p5 || "/placeholder.svg"}
                alt="Interactive mapping interface"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4">
              <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">Interactive Mapping</h4>
              <p className="text-gray-600">Draw farm areas, filter, and save custom territories.</p>
            </div>
          </div>
        </div>

        {/* Middle section - Owner Intelligence */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left side - Heading and description */}
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Owner Intelligence</h3>
              <p className="text-gray-600">Access verified contact information across multiple data sources</p>
            </div>

            {/* Center and Right - Image with overlapping elements */}
            <div className="w-full lg:w-3/4 relative">
              <div className="flex">
                {/* Main image container */}
                <div className="w-fit relative">
                  <img
                    src={p6 || "/placeholder.svg"}
                    alt="Person working on computer with owner data"
                    className="rounded-lg shadow-lg"
                  />

                  {/* Owner Located notification - overlapping the image */}
                  <div className="absolute top-20 -left-40 bg-white rounded-full py-2 px-3 shadow-md flex items-center space-x-2">
                    <div className="w-6 h-6 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                      <img
                        src="/placeholder.svg?height=24&width=24"
                        alt="Owner avatar"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-900">Owner Located</p>
                      <p className="text-xs text-gray-500">Cross-referenced & verified</p>
                    </div>
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Steps card - overlapping the image */}
                <div className="w-[50px] -ml-16 mt-16 relative z-10">
                  <div className="absolute bottom-20 bg-white rounded-lg shadow-lg p-5 w-[18rem]">
                    <div className="space-y-5">
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                            />
                          </svg>
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-800">Define Your Area</h5>
                          <p className="text-xs text-gray-600">Draw once, monitor always</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                            />
                          </svg>
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-800">Set Your Criteria</h5>
                          <p className="text-xs text-gray-600">Tell us what you're looking for</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-800">Let Navigate Work</h5>
                          <p className="text-xs text-gray-600">Automated outreach when matches found</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section - Smart Campaigns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-20">
          <div className="order-2 lg:order-1">
            <img src={p7 || "/placeholder.svg"} alt="Campaign management dashboard" className="rounded-lg shadow-lg" />
          </div>
          <div className="order-1 lg:order-2 space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">Smart Campaigns</h3>
            <p className="text-gray-600">Mail & email outreach and management with just one click</p>
          </div>
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center pt-10 border-t border-gray-200">
          <div className="space-y-2">
            <h3 className="text-4xl font-bold text-gray-800">50</h3>
            <p className="text-gray-600">States Covered</p>
          </div>

          <div className="space-y-2">
            <h3 className="text-4xl font-bold text-gray-800">3+</h3>
            <p className="text-gray-600">Ways to Connect</p>
          </div>

          <div className="space-y-2">
            <h3 className="text-4xl font-bold text-gray-800">24/7</h3>
            <p className="text-gray-600">Data Updates</p>
          </div>

          <div className="space-y-2">
            <h3 className="text-4xl font-bold text-gray-800">1</h3>
            <p className="text-gray-600">Simple Platform</p>
          </div>
        </div>
      </div>
    </section>
  )
}

