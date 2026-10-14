import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, ArrowRight, Flower2, Clock, Check } from 'lucide-react'
import { gettingStartedSteps } from '../data/gettingStartedData'

export default function GettingStarted({ onRequestAppointment }) {
  const [activeStep, setActiveStep] = useState(0)
  const steps = gettingStartedSteps


  return (
    <section className="relative w-full bg-gradient-to-b from-[#f8fcf9] via-white to-[#f5f9fc] pt-20 sm:pt-24 pb-24 sm:pb-32 overflow-hidden">
      {/* Decorative ambient elements */}
      <div className="absolute top-12 left-8 w-24 h-24 hidden lg:grid grid-cols-5 gap-2 opacity-25 pointer-events-none">
        {Array.from({ length: 25 }).map((_, i) => (
          <span key={i} className="w-1.5 h-1.5 rounded-full bg-emerald-600 inline-block" />
        ))}
      </div>
      <div className="absolute bottom-12 right-8 w-24 h-24 hidden lg:grid grid-cols-5 gap-2 opacity-20 pointer-events-none">
        {Array.from({ length: 25 }).map((_, i) => (
          <span key={i} className="w-1.5 h-1.5 rounded-full bg-indigo-600 inline-block" />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/70 border border-emerald-200/80 text-emerald-800 text-xs font-bold tracking-wider uppercase mb-4 shadow-sm">
            <Flower2 className="w-3.5 h-3.5 text-emerald-700" />
            <span>Getting Started</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[56px] leading-[1.12] tracking-tight font-semibold text-[#0a1e3b] mb-4">
            Getting Started{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Is Simple
            </span>
          </h2>

          <div className="flex items-center justify-center gap-1.5 my-3">
            <div className="w-8 h-[2.5px] bg-emerald-500 rounded-full" />
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            <div className="w-8 h-[2.5px] bg-purple-500 rounded-full" />
          </div>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-3">
            Taking the first step toward care shouldn't feel complicated. We're here to help you understand the process.
          </p>

        
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
          {steps.map((st, idx) => {
            const Icon = st.icon
            const isSelected = activeStep === idx

            return (
              <motion.div
                key={st.step}
                onClick={() => setActiveStep(idx)}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className={`group relative bg-white/95 rounded-[34px] pt-10 pb-7 px-6 sm:px-7 shadow-[0_10px_30px_rgba(15,35,70,0.06)] border transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-visible ${st.shadowColor} ${
                  isSelected ? `${st.borderColor} ring-2 ring-blue-300/60 shadow-xl` : 'border-slate-100 hover:border-slate-200'
                }`}
              >
                {/* Floating Top Number Pill: Placed perfectly without clipping */}
                <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 z-20">
                  <div className={`w-14 h-14 rounded-full border-2 ${st.numColor} shadow-md flex items-center justify-center font-bold text-lg transition-transform group-hover:scale-110`}>
                    {st.step}
                  </div>
                </div>

                <div>
                  {/* Icon & Title */}
                  <div className="flex items-start gap-3.5 mb-4">
                    <div className={`w-12 h-12 rounded-2xl ${st.iconBg} border flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-105`}>
                      <Icon className={`w-6 h-6 ${st.iconColor} stroke-[2]`} />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg sm:text-[20px] font-bold text-[#0a1e3b] leading-tight group-hover:text-blue-600 transition-colors">
                        {st.title}
                      </h3>
                      <div className={`w-8 h-[2.5px] ${st.barColor} rounded-full mt-2 mb-2`} />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {st.description}
                  </p>

                  {/* Timeframe Pill */}
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs text-slate-700 mb-4">
                    <span className="flex items-center gap-1.5 font-semibold text-slate-800">
                      <Clock className="w-3.5 h-3.5 text-blue-600" />
                      {st.timeframe}
                    </span>
                    <span className="text-[11px] font-medium text-slate-500">{st.badge}</span>
                  </div>

                  {/* Interactive Checklist on Active Card */}
                  <AnimatePresence>
                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mb-4 pt-3 border-t border-slate-100 space-y-2 overflow-hidden"
                      >
                        {st.checklist.map((item, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Bottom Graphic & Circular Action Button */}
                <div className="relative pt-6 flex items-center justify-between">
                  <div className={`absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t ${st.glowWave} rounded-b-[34px] pointer-events-none`} />
                  
                  <span className="relative z-10 text-xs font-semibold text-slate-600 group-hover:text-blue-600 transition-colors">
                    {st.actionLabel}
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      onRequestAppointment()
                    }}
                    className="relative z-10 w-10 h-10 rounded-full bg-white shadow-md text-slate-700 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    aria-label={`Select ${st.title}`}
                  >
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA Button */}
        <div className="flex justify-center mt-14 sm:mt-18">
          <button
            onClick={onRequestAppointment}
            className="group relative inline-flex items-center gap-2.5 px-8 py-3.5 sm:py-4 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-600 hover:from-emerald-700 hover:to-indigo-700 shadow-[0_10px_25px_rgba(16,185,129,0.35)] hover:shadow-[0_14px_30px_rgba(16,185,129,0.45)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <Calendar className="w-4 h-4 transition-transform group-hover:scale-110" />
            <span>Request Your First Appointment</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

      </div>
    </section>
  )
}
