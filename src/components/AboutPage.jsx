import p12 from '../assets/p12.png';
import p13 from '../assets/p13.png';
import p14 from '../assets/p14.png';
import p15 from '../assets/p15.png';
import p16 from '../assets/p16.png';
// import p17 from '../assets/p17.png';

import { useState } from "react"

export default function AboutPage() {
    const [activeTestimonial, setActiveTestimonial] = useState(0)
    
      const faqs = [
        {
          id: 1,
          question: "How many properties can I search?",
          answer:
            "Unlimited property searches across all plans. Search, filter, and draw territories to your heart's content. No restrictions on how many properties you can discover.",
        },
        {
          id: 2,
          question: "What's the deal with outreach limits?",
          answer:
            "Each plan includes a set number of free skip traces, emails, and mail pieces per month. You can always add more as needed at the rates shown in each plan.",
        },
        {
          id: 3,
          question: "Can my whole team use it?",
          answer:
            "Yes! Our Growth and Professional plans are designed for teams. Each user gets their own login and allocation of resources, while sharing access to your team's territories and campaigns.",
        },
        {
          id: 4,
          question: 'Is there a catch with "unlimited"?',
          answer:
            "No catch. We truly offer unlimited property searches and unlimited emails (with a reasonable daily sending limit to maintain deliverability). We believe in transparent pricing with no hidden fees.",
        },
      ]
    
      const testimonials = [
        {
          id: 1,
          quote:
            "I absolutely love it! I feel like it takes about 4 different platforms and brings them together to cover what everyone else is missing. I love what I'm seeing",
          name: "Erin Krueger",
          title: "Top 1% Agent Compass, Inc.",
        },
        {
          id: 2,
          quote: "I'd definitely spend the $200-300 a month to use this",
          name: "Hugh Jordan",
          title: "Top Alt Agent Compass, Inc.",
        },
        {
          id: 3,
          quote:
            "Navigate takes all the manual work out of prospecting. Draw an area, set your criteria, and it handles the rest",
          name: "Sarah K.",
          title: "Top 1% Agent Compass, Inc.",
        },
        {
          id: 4,
          quote:
            "I've found three off-market opportunities in my farm using Navigate. The property data is reliable and the outreach tools save hours",
          name: "Michael R.",
          title: "Team Lead Agent Compass, Inc.",
        },
      ]
      const nextTestimonial = () => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
      }
    
      const prevTestimonial = () => {
        setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
      }
    return (
      <div className="min-h-screen bg-white">
        {/* Hero Section with Founder */}
        <section className="py-16 px-6 md:px-12 bg-gradient-to-br from-indigo-50 to-white overflow-hidden">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left space-y-6">
                <h1 className="text-3xl md:text-5xl font-bold text-indigo-600 leading-tight">
                  A Platform Designed for Agents, Built by An Agent...
                </h1>
                <div className="max-w-2xl mx-auto lg:mx-0">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    As a Founding Agent of Compass, I was frustrated with prospecting. I spent hours gathering property
                    and ownership data, only to find it inaccurate. I wanted to be out in the field, building
                    relationships, but was stuck behind a screen.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed mt-4">
                    Most agents accepted this inefficiency, but I knew there could be a better way. I envisioned a
                    platform that would remove these barriers, provide accurate data, and allow agents to focus on
                    building relationships and growing their business. Navigate isn't just a tool—it's the solution I wish
                    I had when I first started. And now, it's changing the way agents approach prospecting forever
                  </p>
                </div>
  
                <div className="flex flex-col items-center lg:items-start space-y-2">
                  <img
                    src={p12}
                    alt="Ari Afshar signature"
                    className="h-16"
                  />
                  <h3 className="text-xl font-bold text-gray-800">Ari Afshar, CEO | Voyage Real Estate</h3>
                  <p className="text-indigo-600 font-medium">Co-Founder, Navigate</p>
                </div>
              </div>
  
              <div className="relative">
                <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-indigo-100 rounded-full opacity-50 blur-2xl"></div>
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-indigo-100 rounded-full opacity-50 blur-2xl"></div>
                <img
                  src={p12}
                  alt="Ari Afshar"
                  className="rounded-lg shadow-xl relative z-10 mx-auto"
                />
              </div>
            </div>
          </div>
        </section>
  
        {/* A Simpler Way to Prospect */}
        <section className="py-16 px-6 md:px-12 bg-white">
          <div className="max-w-[1400px] mx-auto">
            <div className="rounded-xl overflow-hidden shadow-lg mb-20">
              <div className="relative">
                <img
                  src={p13}
                  alt="Team meeting"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 bg-indigo-600 bg-opacity-80 p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-white">A Simpler Way to Prospect</h2>
                </div>
              </div>
            </div>
  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">An All Too Familiar Story...</h3>
                <p className="text-gray-600">
                  Are you left frustrated and overwhelmed by manual prospecting tasks? Software platforms that claim to be
                  the silver bullet but instead leave you feeling overwhelmed, confused and wondering why the process of
                  finding leads is so difficult. What's worse is that after all of this you haven't even really started
                  prospecting yet. If you are like us you are getting exhausted just thinking about this and you are now
                  alone.
                </p>
              </div>
  
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src={p14}
                  alt="Agent using Navigate"
                  className="w-full h-auto"
                />
              </div>
            </div>
  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1 rounded-xl overflow-hidden shadow-lg">
                <img
                  src={p15}
                  alt="Agent working on laptop"
                  className="w-full h-auto"
                />
              </div>
  
              <div className="order-1 md:order-2 space-y-6">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Your Pain, Our Purpose...</h3>
                <p className="text-gray-600">
                  Navigate was born from this struggle. Designed by an agent, for agents, it offers seamless search,
                  intuitive filters, and tools to reach prospects at scale. Our mission is simple...We believe that agents
                  should prospect smarter, not harder. Navigate takes the pain out prospecting so you can spend time
                  spotting new opportunities and cultivating quality relationships with clients.
                </p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Get Your Prospecting Back on Track */}
        <section className="py-16 px-6 md:px-12 bg-gray-50">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src={p16}
                  alt="Happy agent using Navigate"
                  className="w-full h-auto"
                />
              </div>
  
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-800">Get Your Prospecting Back on Track</h2>
                <p className="text-gray-600">
                  Navigate is a smarter way to prospect, adding simplicity and efficiency to a process that has become
                  painful, protracted and problematic. An approachable and intuitive platform created by an agent, and
                  designed with your needs in mind, and delivered to you when you need it most.
                </p>
                <p className="text-gray-600">
                  Navigate has automated and streamlined a process delivering simplicity, consistency and scale in one
                  platform that's inspired by you, created for you and engineered to deliver results.
                </p>
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-md">
                  Get Started Today
                </button>
              </div>
            </div>
          </div>
        </section>
  
        {/* Team Section */}
        <section className="py-16 px-6 md:px-12 bg-white">
        <div>
          <div className="text-center mb-8">
            <span className="text-indigo-600 font-medium uppercase tracking-wider">TESTIMONIALS</span>
            <h2 className="text-3xl font-bold text-gray-800 mt-2">What Users Are Saying</h2>
          </div>

          <div className="relative">
            <div className="flex overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                      {testimonials.map((t, index) => {
                        const adjustedIndex = (index + activeTestimonial) % testimonials.length
                        return (
                          <div key={t.id} className="bg-white p-6 rounded-lg shadow-md">
                            <div className="text-indigo-600 mb-4">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                              </svg>
                            </div>
                            <p className="text-gray-700 mb-4">{t.quote}</p>
                            <div className="flex items-center">
                              <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
                              <div>
                                <h4 className="font-medium text-gray-900">{t.name}</h4>
                                <p className="text-sm text-gray-600">{t.title}</p>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
              onClick={prevTestimonial}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
              onClick={nextTestimonial}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${index === activeTestimonial ? "bg-indigo-600" : "bg-gray-300"}`}
                onClick={() => setActiveTestimonial(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
        </section>
      </div>
    )
  }
  
  