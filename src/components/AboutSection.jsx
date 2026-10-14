import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, Users, ArrowRight, UserCheck, Sparkles, MessageCircle, Flower2 } from 'lucide-react'

export default function AboutSection({ onExploreMore }) {
  const [activeFeature, setActiveFeature] = useState(null)

  const features = [
    {
      id: 'personalized',
      icon: UserCheck,
      iconColor: 'text-blue-600 bg-blue-50',
      title: 'Personalized care',
      detail: 'Tailored psychiatric plans designed around your unique biological, psychological, and lifestyle needs.',
    },
    {
      id: 'guidance',
      icon: Sparkles,
      iconColor: 'text-indigo-600 bg-indigo-50',
      title: 'Thoughtful guidance',
      detail: 'Collaborative medication management and evidence-backed strategies with no rushed decisions.',
    },
    {
      id: 'space',
      icon: MessageCircle,
      iconColor: 'text-purple-600 bg-purple-50',
      title: 'A space to be heard',
      detail: 'A judgment-free, empathetic environment where you are truly listened to from day one.',
    },
  ]

  return (
    <section id="about-services" className="relative w-full bg-white pt-12 sm:pt-16 pb-20 sm:pb-28 overflow-hidden">
      {/* Decorative ambient background accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center mb-14 sm:mb-18">
          
          {/* Left Column: Story & Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold tracking-wider uppercase mb-5 shadow-sm">
              <Flower2 className="w-3.5 h-3.5 text-blue-600" />
              <span>Welcome to DMHNE</span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[56px] leading-[1.12] tracking-tight font-semibold text-[#0a1e3b] mb-6">
              Care That Begins{' '}
              <span className="block mt-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                With Listening
              </span>
            </h2>

            {/* Lead text */}
            <p className="text-[#0e213d] font-semibold text-base sm:text-lg leading-relaxed mb-4 max-w-xl">
              Your mental health journey is personal, and your care should be too. At Dynamic Mental Health of New England, we take time to understand your experiences, concerns, and goals.
            </p>

            {/* Supporting paragraph */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
              Our approach combines thoughtful psychiatric evaluations, medication management, and supportive guidance when appropriate, helping you make informed decisions about your care.
            </p>

            {/* CTA Button */}
            <button
              onClick={onExploreMore}
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-[0_10px_25px_rgba(79,70,229,0.3)] hover:shadow-[0_14px_30px_rgba(79,70,229,0.45)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>Get to Know Us</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
            </button>
          </motion.div>

          {/* Right Column: Arched Consultation Photo with Floating Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative flex justify-center lg:justify-end"
          >
            {/* Swirling delicate blue outline SVG */}
            <svg
              className="absolute -top-12 -left-12 sm:-left-16 w-[420px] sm:w-[480px] h-[420px] pointer-events-none opacity-50 z-0"
              viewBox="0 0 400 400"
              fill="none"
            >
              <path
                d="M50,180 C80,80 260,30 350,110 C420,170 340,320 220,340 C90,360 20,270 50,180 Z"
                stroke="#60a5fa"
                strokeWidth="1.8"
                strokeDasharray="6 6"
              />
            </svg>

            {/* Main Arch Frame Container */}
            <div className="relative z-10 w-full max-w-md sm:max-w-lg">
              <div className="relative rounded-t-[140px] rounded-b-[40px] overflow-hidden shadow-[0_25px_50px_rgba(15,35,70,0.15)] border-4 border-white aspect-[4/3.8] bg-slate-100">
                <img
                  src="/therapist.jpg"
                  alt="Psychiatric consultation at Dynamic Mental Health of New England"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Badge 1: Top Left */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-5 -left-4 sm:-left-8 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 shadow-[0_12px_28px_rgba(15,35,70,0.12)] border border-white/80 max-w-[130px] sm:max-w-[140px] text-center"
              >
                <div className="w-8 h-8 mx-auto rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-1.5 shadow-sm">
                  <Heart className="w-4 h-4 fill-blue-500/20 stroke-[2.2]" />
                </div>
                <span className="block text-[11px] sm:text-xs font-semibold text-slate-800 leading-tight">
                  Care built around you
                </span>
              </motion.div>

              {/* Floating Badge 2: Bottom Right */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -right-2 sm:-right-6 z-20 flex items-center gap-3 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-3 shadow-[0_12px_30px_rgba(15,35,70,0.14)] border border-white/90"
              >
                <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center shadow-sm">
                  <Users className="w-4 h-4 stroke-[2.2]" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-800 whitespace-nowrap">
                  Compassionate support
                </span>
                {/* 3D Iridescent Orb */}
                <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-500 shadow-md animate-pulse" />
              </motion.div>
            </div>
          </motion.div>

        </div>

        {/* Bottom Feature Pill Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-white/80 backdrop-blur-md rounded-3xl p-4 sm:p-6 shadow-[0_10px_35px_rgba(15,35,70,0.06)] border border-slate-100 max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {features.map((feat) => {
              const Icon = feat.icon
              const isSelected = activeFeature === feat.id
              return (
                <div
                  key={feat.id}
                  onClick={() => setActiveFeature(isSelected ? null : feat.id)}
                  className={`p-3 sm:px-6 sm:py-2 flex flex-col justify-center cursor-pointer transition-all rounded-2xl ${
                    isSelected ? 'bg-blue-50/60' : 'hover:bg-slate-50/70'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-xl ${feat.iconColor} flex items-center justify-center shrink-0 shadow-sm`}>
                      <Icon className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <span className="text-sm sm:text-[15px] font-semibold text-slate-800">
                      {feat.title}
                    </span>
                  </div>
                  {isSelected && (
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed pl-12 animate-in fade-in duration-200">
                      {feat.detail}
                    </p>
                  )}
                </div>
              )
            })}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
