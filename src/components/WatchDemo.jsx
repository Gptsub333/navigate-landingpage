import p11 from '../assets/p11.png';

export default function WatchDemo() {
    return (
      <div className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Watch a Demo</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Video thumbnail */}
      <div className="relative rounded-lg overflow-hidden shadow-lg">
        <img 
          src={p11} 
          alt="Demo video thumbnail" 
          className="w-full h-auto"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <button 
            className="w-16 h-16 bg-white bg-opacity-80 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-8 w-8 text-indigo-600" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" 
                clipRule="evenodd" 
              />
            </svg>
          </button>
        </div>
      </div>
            
            {/* Stats card */}
            <div className="bg-indigo-600 rounded-lg p-8 text-white flex flex-col justify-center">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                  <img 
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-l7HFUQstzd9Sy8TU858auM61J39cqT.png" 
                    alt="Alex Smith" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-xl">Alex Smith</h3>
                  <p className="text-indigo-200">Coaching of Halal Lab</p>
                </div>
              </div>
              
              <div className="mb-4">
                <span className="text-7xl font-bold">97</span>
                <span className="text-4xl font-bold">%</span>
              </div>
              
              <p className="text-xl">
                Join agents who want to spend less time searching and more time closing
              </p>
            </div>
          </div>
          
          {/* Enterprise plan */}
          <div className="mt-16 bg-navy-900 rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
              <div className="p-8 md:p-12">
                <div className="text-white text-sm font-medium mb-2">Enterprise Plan</div>
                <h3 className="text-white text-3xl font-bold mb-4">Running a Power Team?</h3>
                <p className="text-gray-300 mb-6">
                  Let's craft your perfect setup. Unlock custom volumes, better rates, and team features. Email sales@navigate.com or schedule a call.
                </p>
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-md">
                  Book 15-min chat
                </button>
              </div>
              <div className="relative h-full">
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-l7HFUQstzd9Sy8TU858auM61J39cqT.png" 
                  alt="Enterprise support" 
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-navy-900 to-transparent opacity-50"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  