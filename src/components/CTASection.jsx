import p10 from "../assets/p10.png"

export default function CTASection() {
  return (
    <section className="py-16 px-6 md:px-12 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="relative">
          {/* Main card */}
          <div className="bg-indigo-600 rounded-xl p-8 md:p-12 relative overflow-visible">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Text content - takes 7 columns on desktop */}
              <div className="md:col-span-7 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">PENDING (Stay Tuned)</h3>
                <p className="mb-6">
                  Draw your territory once, and Navigate continuously monitors your market. We'll help you spot
                  opportunities while you focus on closing deals.
                </p>
                <button className="bg-white text-indigo-600 hover:bg-gray-100 font-medium py-2 px-6 rounded-md">
                  Get Started
                </button>
              </div>

              {/* Empty space for image positioning - takes 5 columns */}
              <div className="md:col-span-5"></div>
            </div>

            {/* Decorative elements - hidden on mobile */}
            <div className="hidden md:block absolute top-1/2 right-1/3 transform -translate-y-1/2">
              <svg
                width="120"
                height="80"
                viewBox="0 0 120 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white opacity-10"
              >
                <path d="M20,50 Q40,20 60,50 T100,50" stroke="currentColor" strokeWidth="3" fill="none" />
              </svg>
            </div>

            {/* Arrow decoration - hidden on mobile */}
            <div className="hidden md:block absolute top-1/2 right-1/4 transform -translate-y-1/2">
              <svg
                width="120"
                height="80"
                viewBox="0 0 120 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
              >
                <path d="M10,40 C30,10 60,70 110,30" stroke="currentColor" strokeWidth="3" fill="none" />
              </svg>
            </div>
          </div>

          {/* Woman image positioned absolutely - hidden on mobile */}
          <div className="hidden md:flex absolute right-0 -top-10 bottom-0 md:w-5/12 items-center justify-center">
            <img src={p10 || "/placeholder.svg"} alt="Woman working on laptop" className="h-[145%] object-contain" />
          </div>
        </div>
      </div>
    </section>
  )
}

