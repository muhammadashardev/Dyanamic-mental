import React from 'react'
import { motion } from 'framer-motion'
import { Brain, Calendar, ArrowRight, MapPin, Building2 } from 'lucide-react'
import FloatingConditions from './FloatingConditions'
import BottomWave from './BottomWave'

export default function Hero({ onOpenAppointment, onSelectCondition }) {
  return (
    <section className="relative w-full min-h-[92vh] lg:min-h-screen bg-[#c8e2f8] overflow-hidden flex flex-col justify-between">
      {/* Background Image from public/image.png */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-no-repeat bg-[center_top] lg:bg-[right_center] pointer-events-none"
        style={{ backgroundImage: `url('/image.png')` }}
      />

      {/* Atmospheric Soft Light Overlay for crystal clear typography on the left */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-sky-50/85 md:via-sky-50/60 lg:via-sky-50/30 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-radial-at-tl from-white/80 via-transparent to-transparent pointer-events-none" />

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-10 sm:pt-14 lg:pt-16 pb-24 sm:pb-32 flex-1 flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Hero Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start max-w-2xl"
          >
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#dbebfb]/90 border border-[#bcdbf7] backdrop-blur-md text-[#1d4f91] text-[11px] sm:text-xs font-bold tracking-wider uppercase mb-5 sm:mb-6 shadow-sm">
              <Brain className="w-4 h-4 text-blue-600 stroke-[2.2]" />
              <span>Personalized Psychiatric Care</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-[42px] sm:text-5xl md:text-6xl lg:text-[66px] leading-[1.08] tracking-tight font-semibold text-[#0a1e3b] mb-6">
              Finally Feel Like{' '}
              <span className="block mt-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Yourself Again
              </span>
            </h1>

            {/* Sub-headline / Descriptive Paragraphs */}
            <p className="text-slate-800 font-semibold text-base sm:text-lg leading-snug sm:leading-relaxed mb-3 max-w-xl">
              Thoughtful, personalized psychiatric care for anxiety, ADHD, depression, and mental exhaustion in New Hampshire.
            </p>

            <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed mb-8 max-w-xl">
              Whether you're seeking support for yourself or your child, we're here to listen, understand your concerns, and help you explore a care plan tailored to your needs.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              {/* Primary Appointment Button */}
              <button
                onClick={onOpenAppointment}
                className="group relative inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-[15px] font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 shadow-[0_10px_25px_rgba(79,70,229,0.35)] hover:shadow-[0_14px_30px_rgba(79,70,229,0.45)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Calendar className="w-4 h-4 transition-transform group-hover:scale-110" />
                <span>Request an Appointment</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Secondary Explore Button */}
              <button
                onClick={() => {
                  const el = document.getElementById('about-services')
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                  else onSelectCondition({ id: 'anxiety', name: 'Our Comprehensive Services' })
                }}
                className="group inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full text-sm sm:text-[15px] font-medium text-slate-800 bg-white/85 hover:bg-white border border-slate-300/80 hover:border-blue-400 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-blue-600 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Location Indicators */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs sm:text-[13px] text-slate-700 font-medium">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span>Telehealth across New Hampshire</span>
              </div>
              <span className="hidden sm:inline text-slate-300 font-bold">•</span>
              <div className="flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-blue-600" />
                <span>
                  In-person appointments in <strong className="text-slate-900 font-bold">Bedford, NH</strong>
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Floating Conditions Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <FloatingConditions onSelectCondition={onSelectCondition} />
          </div>

        </div>
      </div>

      {/* Required Bottom Wave Shape */}
      <BottomWave />
    </section>
  )
}
