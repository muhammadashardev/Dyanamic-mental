import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, Star, ChevronLeft, ChevronRight, ArrowRight, Quote, Heart } from 'lucide-react'
import { testimonialsList } from '../data/testimonialsData'

export default function Testimonials({ onReadMore }) {
  const [startIndex, setStartIndex] = useState(0)

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % testimonialsList.length)
  }

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + testimonialsList.length) % testimonialsList.length)
  }

  // Get 3 visible reviews in wrapped circular order
  const visibleCards = [
    testimonialsList[startIndex],
    testimonialsList[(startIndex + 1) % testimonialsList.length],
    testimonialsList[(startIndex + 2) % testimonialsList.length],
  ]

  return (
    <section className="relative w-full bg-gradient-to-b from-white via-[#f4f9fd] to-white pt-20 sm:pt-24 pb-24 sm:pb-32 overflow-hidden">
      {/* Decorative dot matrix */}
      <div className="absolute top-12 left-10 w-24 h-24 hidden lg:grid grid-cols-5 gap-2 opacity-25 pointer-events-none">
        {Array.from({ length: 25 }).map((_, i) => (
          <span key={i} className="w-1.5 h-1.5 rounded-full bg-blue-600 inline-block" />
        ))}
      </div>
      <div className="absolute bottom-12 right-10 w-24 h-24 hidden lg:grid grid-cols-5 gap-2 opacity-20 pointer-events-none">
        {Array.from({ length: 25 }).map((_, i) => (
          <span key={i} className="w-1.5 h-1.5 rounded-full bg-purple-600 inline-block" />
        ))}
      </div>

     
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold tracking-wider uppercase mb-4 shadow-sm">
            <MessageSquare className="w-3.5 h-3.5 text-blue-600" />
            <span>Patient Testimonials</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[56px] leading-[1.12] tracking-tight font-semibold text-[#0a1e3b] mb-4">
            Hear From Our{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Patients
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Choosing a mental health provider is a personal decision. We invite you to learn about other patients' experiences with our practice.
          </p>
        </div>

        {/* 3 Interactive Cards Carousel with Side Arrow Buttons */}
        <div className="relative">
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/95 shadow-lg border border-slate-100 flex items-center justify-center text-teal-600 hover:text-teal-700 hover:scale-110 active:scale-95 transition-all cursor-pointer"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/95 shadow-lg border border-slate-100 flex items-center justify-center text-teal-600 hover:text-teal-700 hover:scale-110 active:scale-95 transition-all cursor-pointer"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-5 h-5 stroke-[2.5]" />
          </button>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            <AnimatePresence mode="popLayout">
              {visibleCards.map((card, i) => (
                <motion.div
                  key={`${card.id}-${i}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="group relative bg-white/95 hover:bg-white rounded-[32px] p-7 sm:p-8 shadow-[0_10px_30px_rgba(15,35,70,0.06)] hover:shadow-[0_20px_45px_rgba(15,35,70,0.12)] border border-white/80 hover:border-blue-200/80 transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden"
                >
                  {/* Colored Crescent Accent on right edge */}
                  <div
                    className={`absolute -right-7 top-1/2 -translate-y-1/2 w-14 h-28 rounded-l-full bg-gradient-to-l ${card.crescentColor} opacity-30 group-hover:opacity-70 group-hover:scale-110 transition-all duration-500 pointer-events-none`}
                  />

                  <div>
                    {/* Top Row: Quote Badge & 5 Gold Stars */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-10 h-10 rounded-full ${card.quoteBg} flex items-center justify-center shadow-sm font-serif font-black text-lg`}>
                        <Quote className="w-5 h-5 fill-current" />
                      </div>
                      <div className="flex items-center gap-1 text-amber-400">
                        {Array.from({ length: 5 }).map((_, starIdx) => (
                          <Star key={starIdx} className="w-4 h-4 fill-amber-400 stroke-none" />
                        ))}
                      </div>
                    </div>

                    {/* Testimonial Quote */}
                    <p className="text-slate-700 text-sm sm:text-[15px] leading-relaxed mb-6 italic pr-3 font-normal">
                      {card.quote}
                    </p>
                  </div>

                  {/* Author Profile Row */}
                  <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100">
                    <img
                      src={card.avatar}
                      alt={card.name}
                      className="w-11 h-11 rounded-full object-cover border-2 border-white shadow-sm"
                    />
                    <div>
                      <h4 className="font-bold text-sm text-[#0a1e3b] group-hover:text-blue-600 transition-colors">
                        {card.name}
                      </h4>
                      <span className="text-xs text-slate-500 block">{card.role}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Pagination Indicators */}
          <div className="flex items-center justify-center gap-2 mt-8 sm:mt-10">
            {testimonialsList.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setStartIndex(dotIdx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  startIndex === dotIdx
                    ? 'w-7 bg-gradient-to-r from-blue-600 to-indigo-600'
                    : 'w-2.5 bg-slate-200 hover:bg-slate-300'
                }`}
                aria-label={`Go to review ${dotIdx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA Button */}
        <div className="flex flex-col items-center mt-12 sm:mt-14">
          <button
            onClick={onReadMore}
            className="group inline-flex items-center gap-2.5 px-8 py-3.5 sm:py-4 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-[0_10px_25px_rgba(79,70,229,0.35)] hover:shadow-[0_14px_30px_rgba(79,70,229,0.45)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <Star className="w-4 h-4 fill-white transition-transform group-hover:rotate-45" />
            <span>Read More Reviews</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <p className="text-slate-400 text-xs text-center mt-6">
            Individual experiences vary. Testimonials do not guarantee specific treatment outcomes.
          </p>
        </div>

      </div>
    </section>
  )
}
