import p10 from '../assets/p10.png';

export default function CTASection() {
    return (
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-indigo-600 rounded-xl p-8 md:p-12 relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Prospecting?</h3>
                <p className="mb-6">
                  Draw your territory once, and Navigate continuously monitors your market. We'll help you spot
                  opportunities while you focus on closing deals.
                </p>
                <button className="bg-white text-indigo-600 hover:bg-gray-100 font-medium py-2 px-6 rounded-md">
                  Get Started
                </button>
              </div>
              <div className="flex justify-center md:justify-end">
                <img
                  src={p10}
                  alt="Woman working on laptop"
                  className="w-full max-w-sm rounded-lg"
                />
              </div>
            </div>
  
            {/* Decorative elements */}
            <div className="absolute top-1/2 right-1/4 transform -translate-y-1/2">
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
          </div>
        </div>
      </section>
    )
  }
  
  