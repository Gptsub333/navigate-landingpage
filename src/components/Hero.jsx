import p1 from '../assets/p1.png';

export default function Hero() {
  return (
    <section className="min-h-[75vh] py-12 md:py-20 px-6 md:px-12 bg-indigo-50/70 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-[20%] left-0 w-full h-[1px] bg-gray-200/50"></div>
        <div className="absolute top-[60%] left-0 w-full h-[1px] bg-gray-200/50"></div>
        <div className="absolute top-[40%] right-[10%] w-[200px] h-[200px]">
          <svg width="100%" height="100%" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="opacity-20">
            <path d="M10,10 L50,50 L90,10 L130,50 L170,10" stroke="rgba(79, 70, 229, 0.3)" strokeWidth="1" fill="none" />
            <path d="M10,50 L50,90 L90,50 L130,90 L170,50" stroke="rgba(79, 70, 229, 0.3)" strokeWidth="1" fill="none" />
            <path d="M10,90 L50,130 L90,90 L130,130 L170,90" stroke="rgba(79, 70, 229, 0.3)" strokeWidth="1" fill="none" />
            <circle cx="50" cy="50" r="2" fill="rgba(79, 70, 229, 0.5)" />
            <circle cx="90" cy="10" r="2" fill="rgba(79, 70, 229, 0.5)" />
            <circle cx="130" cy="50" r="2" fill="rgba(79, 70, 229, 0.5)" />
            <circle cx="170" cy="10" r="2" fill="rgba(79, 70, 229, 0.5)" />
          </svg>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        {/* Text content */}
        <div className="space-y-4 text-right">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-600 leading-tight">
            Your 24/7 Prospecting Engine
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight">
            A Simpler Way to Prospect
          </h2>
          <p className="text-base text-gray-600 ml-auto max-w-md text-right">
            Create campaigns once and let Navigate work in the background - finding properties, validating 
            owners, and sending your message while you focus on closing deals
          </p>

          <div className="flex flex-col sm:flex-row gap-3 ml-auto max-w-md mt-8">
            <input
              type="email"
              placeholder="@ Enter your email"
              className="flex-grow px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-md">
              Get Started
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            <img
              src={p1 || "/placeholder.svg"}
              alt="Business professionals in a meeting"
              className="w-full h-auto object-cover"
            />

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              <div className="w-2 h-2 rounded-full bg-white opacity-50"></div>
              <div className="w-2 h-2 rounded-full bg-white"></div>
              <div className="w-2 h-2 rounded-full bg-white opacity-50"></div>
              <div className="w-2 h-2 rounded-full bg-white opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
