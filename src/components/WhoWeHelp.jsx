import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Users, Heart, Flower2, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { stageSets } from '../data/stagesData'

export default function WhoWeHelp({ onSelectStage, onExploreApproach }) {
  const [currentSetIndex, setCurrentSetIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  // Auto-slide every 5 seconds, pauses on hover
  useEffect(() => {
    if (isHovered) return
    const interval = setInterval(() => {
      setCurrentSetIndex((prev) => (prev + 1) % stageSets.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isHovered])

  const nextSet = () => setCurrentSetIndex((prev) => (prev + 1) % stageSets.length)
  const prevSet = () => setCurrentSetIndex((prev) => (prev - 1 + stageSets.length) % stageSets.length)

  const activeCards = stageSets[currentSetIndex]

  return (
    <section className="relative w-full bg-slate-50/70 pt-16 sm:pt-20 pb-24 sm:pb-32 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-12 left-10 w-28 h-28 hidden lg:grid grid-cols-6 gap-2 opacity-25 pointer-events-none">
        {Array.from({ length: 36 }).map((_, i) => (
          <span key={i} className="w-1.5 h-1.5 rounded-full bg-blue-600 inline-block" />
        ))}
      </div>
      
      {/* Ambient Floating Icons */}
      <div className="absolute top-28 left-8 sm:left-24 w-12 h-12 rounded-full bg-white/90 backdrop-blur-md shadow-md border border-white flex items-center justify-center text-blue-500 animate-float-slow hidden sm:flex">
        <Heart className="w-5 h-5 fill-blue-500/20" />
      </div>
      <div className="absolute top-20 right-8 sm:right-28 w-12 h-12 rounded-full bg-white/90 backdrop-blur-md shadow-md border border-white flex items-center justify-center text-indigo-500 animate-float-delayed hidden sm:flex">
        <Flower2 className="w-5 h-5" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold tracking-wider uppercase mb-4 shadow-sm">
            <Users className="w-3.5 h-3.5 text-blue-600" />
            <span>Who We Help</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[56px] leading-[1.12] tracking-tight font-semibold text-[#0a1e3b] mb-4">
            Support for{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Every Stage of Life
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            We provide individualized psychiatric care for children, adolescents, and adults, with services tailored to each patient's needs.
          </p>
        </div>

        {/* 3 Auto-Sliding Cards Container */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSetIndex}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              {activeCards.map((card) => {
                const BadgeIcon = card.badgeIcon
                return (
                  <div
                    key={card.id}
                    onClick={() => onSelectStage && onSelectStage(card)}
                    className="group bg-white/90 hover:bg-white rounded-[32px] p-5 sm:p-6 shadow-[0_12px_35px_rgba(15,35,70,0.06)] hover:shadow-[0_20px_45px_rgba(15,35,70,0.14)] border border-white/80 hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      {/* Card Image with Floating Icon */}
                      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-5 bg-slate-100">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3.5 left-3.5 w-11 h-11 rounded-full bg-white/95 backdrop-blur-md shadow-md flex items-center justify-center border border-white">
                          <BadgeIcon className={`w-5 h-5 ${card.badgeColor}`} />
                        </div>
                      </div>

                      {/* Card Title & Accent Line */}
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0a1e3b] group-hover:text-blue-600 transition-colors">
                        {card.title}
                      </h3>
                      <div className={`w-9 h-[2.5px] ${card.lineColor} rounded-full my-3`} />

                      {/* Card Description */}
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                        {card.description}
                      </p>
                    </div>

                    {/* Bottom Action Arrow */}
                    <div className="pt-2 flex justify-start">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${card.btnColor} shadow-sm group-hover:scale-110`}>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                )
              })}
            </motion.div>
          </AnimatePresence>

          {/* Slider Pagination Dots & Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-8 sm:mt-10">
            <button
              onClick={prevSet}
              className="p-2 rounded-full bg-white shadow-sm hover:shadow border border-slate-200 text-slate-600 hover:text-blue-600 transition-all"
              aria-label="Previous cards"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {stageSets.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSetIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentSetIndex === idx
                      ? 'w-8 bg-gradient-to-r from-blue-600 to-indigo-600'
                      : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSet}
              className="p-2 rounded-full bg-white shadow-sm hover:shadow border border-slate-200 text-slate-600 hover:text-blue-600 transition-all"
              aria-label="Next cards"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Bottom CTA Button */}
        <div className="flex justify-center mt-12 sm:mt-14">
          <button
            onClick={onExploreApproach}
            className="group inline-flex items-center gap-2.5 px-8 py-3.5 sm:py-4 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-[0_10px_25px_rgba(79,70,229,0.35)] hover:shadow-[0_14px_30px_rgba(79,70,229,0.45)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <Flower2 className="w-4 h-4 transition-transform group-hover:rotate-45" />
            <span>Explore Our Approach</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  )
}
