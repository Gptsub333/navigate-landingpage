import p8 from "../assets/p8.png"
import p9 from "../assets/p9.png"

export default function Testimonials() {
  return (
    <section className="py-24 px-6 md:px-12 bg-gray-50 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        {/* Background decorative elements */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="opacity-30">
              <path
                d="M0,100 C150,200 350,0 500,100 C650,200 850,0 1000,100 C1150,200 1350,0 1500,100"
                stroke="rgba(79, 70, 229, 0.2)"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M0,200 C150,300 350,100 500,200 C650,300 850,100 1000,200 C1150,300 1350,100 1500,200"
                stroke="rgba(79, 70, 229, 0.2)"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>
        </div>

        <div className="relative z-10 space-y-36">
          {/* First testimonial - Image left, text right */}
          <div className="flex flex-col md:flex-row items-start gap-56">
            {/* Image */}
            <div className="w-full md:w-5/12 lg:w-4/12">
              <div className="rounded-3xl overflow-hidden shadow-lg bg-white p-4">
                <img
                  src={p8 || "/placeholder.svg"}
                  alt="Sarah K."
                  className="w-full h-auto object-cover rounded-2xl"
                  style={{ maxHeight: "450px" }}
                />
              </div>
            </div>

            {/* Testimonial content */}
            <div className="w-full md:w-7/12 lg:w-8/12 pt-8">
              <div className="text-gray-300 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <h3 className="text-2xl font-medium text-gray-800 mb-4">Customer testimonial</h3>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-yellow-500 font-medium">5.0</span>
              </div>
              <p className="text-gray-600 text-lg max-w-2xl mb-8">
                Navigate takes all the manual work out of prospecting. Draw an area, set your criteria, and it handles
                the rest.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-3 border-2 border-white shadow-sm">
                  <img src={p8 || "/placeholder.svg"} alt="Sarah K." className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Sarah K.</h4>
                  <p className="text-sm text-gray-600">Top 1% Agent Compass, Inc.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Second testimonial - Text left, image right */}
          <div className="flex flex-col md:flex-row items-start gap-56">
            {/* Testimonial content */}
            <div className="w-full md:w-7/12 lg:w-8/12 pt-8 order-2 md:order-1">
              <div className="text-gray-300 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <h3 className="text-2xl font-medium text-gray-800 mb-4">Customer testimonial</h3>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-yellow-500 font-medium">5.0</span>
              </div>
              <p className="text-gray-600 text-lg max-w-2xl mb-8">
                I've found three off-market opportunities in my first month using Navigate. The property data is
                reliable and the outreach tools save hours.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-3 border-2 border-white shadow-sm">
                  <img src={p9 || "/placeholder.svg"} alt="Michael R." className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Michael R.</h4>
                  <p className="text-sm text-gray-600">Team Lead (Agency)</p>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="w-full md:w-5/12 lg:w-4/12 order-1 md:order-2">
              <div className="rounded-3xl overflow-hidden shadow-lg bg-white p-4">
                <img
                  src={p9 || "/placeholder.svg"}
                  alt="Michael R."
                  className="w-full h-auto object-cover rounded-2xl"
                  style={{ maxHeight: "450px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

