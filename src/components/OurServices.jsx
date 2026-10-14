import React from 'react'
import { motion } from 'framer-motion'
import { Flower2, Heart, ArrowRight } from 'lucide-react'
import { servicesList } from '../data/servicesData'

export default function OurServices({ onSelectService, onViewAll }) {
  return (
    <section className="relative w-full bg-slate-50/50 pt-16 sm:pt-20 pb-24 sm:pb-32 overflow-hidden">
      {/* Decorative dot grid & ambient badges */}
      <div className="absolute top-12 left-8 w-24 h-24 hidden lg:grid grid-cols-5 gap-2 opacity-25 pointer-events-none">
        {Array.from({ length: 25 }).map((_, i) => (
          <span key={i} className="w-1.5 h-1.5 rounded-full bg-blue-600 inline-block" />
        ))}
      </div>

      <div className="absolute top-28 left-16 sm:left-28 w-11 h-11 rounded-full bg-white/90 backdrop-blur-md shadow-md border border-white flex items-center justify-center text-blue-500 animate-float-slow hidden sm:flex">
        <Flower2 className="w-5 h-5" />
      </div>
      <div className="absolute top-20 right-12 sm:right-28 w-11 h-11 rounded-full bg-white/90 backdrop-blur-md shadow-md border border-white flex items-center justify-center text-rose-400 animate-float-delayed hidden sm:flex">
        <Heart className="w-5 h-5 fill-rose-400/20" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-14 sm:mb-18"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold tracking-wider uppercase mb-4 shadow-sm">
            <Flower2 className="w-3.5 h-3.5 text-blue-600" />
            <span>Our Services</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[56px] leading-[1.12] tracking-tight font-semibold text-[#0a1e3b] mb-4">
            Personalized Care for{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Your Mental Health
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Explore our psychiatric services and find out how we may be able to support your needs.
          </p>
        </motion.div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {servicesList.map((service, idx) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                onClick={() => onSelectService && onSelectService(service)}
                className="group relative bg-white/95 hover:bg-white rounded-[28px] p-6 sm:p-7 shadow-[0_10px_30px_rgba(15,35,70,0.06)] hover:shadow-[0_20px_45px_rgba(15,35,70,0.12)] border border-white/80 hover:border-blue-200/80 transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between overflow-hidden"
              >
                {/* Right Edge Colored Half-Moon Crescent */}
                <div
                  className={`absolute -right-7 top-1/2 -translate-y-1/2 w-14 h-28 rounded-l-full bg-gradient-to-l ${service.crescentColor} opacity-35 group-hover:opacity-75 group-hover:scale-110 transition-all duration-500 pointer-events-none`}
                />

                {/* Subtle Dot Matrix in bottom corner */}
                <div className="absolute bottom-4 right-5 opacity-20 pointer-events-none grid grid-cols-4 gap-1">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <span key={i} className="w-1 h-1 rounded-full bg-slate-400 inline-block" />
                  ))}
                </div>

                <div>
                  {/* Top Bar: Number Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-2.5 py-0.5 rounded-lg text-xs font-bold ${service.numColor} shadow-sm`}>
                      {service.number}
                    </span>
                  </div>

                  {/* Icon & Title Row */}
                  <div className="flex items-start gap-4 mb-3">
                    <div className={`w-12 h-12 rounded-2xl ${service.iconColor} flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl sm:text-[22px] font-bold text-[#0a1e3b] leading-tight group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 pr-4">
                    {service.description}
                  </p>
                </div>

                {/* Learn More Button */}
                <div className="pt-2">
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 group-hover:text-blue-600 bg-slate-50 group-hover:bg-blue-50/80 px-4 py-2 rounded-full transition-all">
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA Button */}
        <div className="flex justify-center mt-12 sm:mt-16">
          <button
            onClick={onViewAll}
            className="group inline-flex items-center gap-2.5 px-8 py-3.5 sm:py-4 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-[0_10px_25px_rgba(79,70,229,0.35)] hover:shadow-[0_14px_30px_rgba(79,70,229,0.45)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <Flower2 className="w-4 h-4 transition-transform group-hover:rotate-45" />
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

      </div>
    </section>
  )
}
