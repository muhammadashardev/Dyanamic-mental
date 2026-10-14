import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Flower2, Ear, UserCheck, Users, Home, ArrowRight, MessageSquare, Heart, Sparkles, Check } from 'lucide-react'

export default function WhyChooseUs({ onMeetTeam }) {
  const [activeCard, setActiveCard] = useState(null)

  const pillars = [
    {
      id: 0,
      title: 'A Listening-First Approach',
      icon: Ear,
      iconColor: 'text-emerald-600',
      ringColor: 'border-emerald-200 ring-emerald-50',
      dotColor: 'bg-emerald-500',
      barColor: 'bg-emerald-500',
      btnBg: 'bg-emerald-600 hover:bg-emerald-700',
      waveBg: 'from-emerald-100/60 to-emerald-50/20',
      description: 'Your concerns deserve time, attention, and understanding.',
      highlight: '60–90 min unhurried initial consultations',
    },
    {
      id: 1,
      title: 'Individualized Treatment',
      icon: UserCheck,
      iconColor: 'text-blue-600',
      ringColor: 'border-blue-200 ring-blue-50',
      dotColor: 'bg-blue-500',
      barColor: 'bg-blue-500',
      btnBg: 'bg-blue-600 hover:bg-blue-700',
      waveBg: 'from-blue-100/60 to-blue-50/20',
      description: "We recognize that each person's experiences and needs are different.",
      highlight: 'Tailored biological & psychotherapy roadmaps',
    },
    {
      id: 2,
      title: 'Collaborative Care',
      icon: Users,
      iconColor: 'text-purple-600',
      ringColor: 'border-purple-200 ring-purple-50',
      dotColor: 'bg-purple-500',
      barColor: 'bg-purple-500',
      btnBg: 'bg-purple-600 hover:bg-purple-700',
      waveBg: 'from-purple-100/60 to-purple-50/20',
      description: 'We encourage open conversations and shared decision-making.',
      highlight: 'Active patient partnership with no pressure',
    },
    {
      id: 3,
      title: 'A Welcoming Environment',
      icon: Home,
      iconColor: 'text-teal-600',
      ringColor: 'border-teal-200 ring-teal-50',
      dotColor: 'bg-teal-500',
      barColor: 'bg-teal-500',
      btnBg: 'bg-teal-600 hover:bg-teal-700',
      waveBg: 'from-teal-100/60 to-teal-50/20',
      description: 'We aim to provide respectful, compassionate care without judgment.',
      highlight: 'Warm serene Bedford clinic & Telehealth',
    },
  ]

  return (
    <section className="relative w-full bg-gradient-to-b from-white via-[#f3f9f5] to-white pt-16 sm:pt-20 pb-24 sm:pb-32 overflow-hidden">
      {/* Decorative dot matrix on top left */}
      <div className="absolute top-12 left-10 w-24 h-24 hidden lg:grid grid-cols-5 gap-2 opacity-25 pointer-events-none">
        {Array.from({ length: 25 }).map((_, i) => (
          <span key={i} className="w-1.5 h-1.5 rounded-full bg-emerald-600 inline-block" />
        ))}
      </div>

    
      <div className="absolute bottom-1/3 right-6 sm:right-12 w-11 h-11 rounded-full bg-white/90 backdrop-blur-md shadow-md border border-white flex items-center justify-center text-teal-600 animate-float-slow hidden sm:flex">
        <Users className="w-5 h-5" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-14 sm:mb-18"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/70 border border-emerald-200/80 text-emerald-800 text-xs font-bold tracking-wider uppercase mb-4 shadow-sm">
            <Flower2 className="w-3.5 h-3.5 text-emerald-700" />
            <span>Why Choose Us</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[56px] leading-[1.12] tracking-tight font-semibold text-[#0a1e3b] mb-4">
            Care That{' '}
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-600 bg-clip-text text-transparent">
              Puts You First
            </span>
          </h2>

          {/* Accent Line with Dot */}
          <div className="flex items-center justify-center gap-1.5 my-3">
            <div className="w-8 h-[2.5px] bg-emerald-500 rounded-full" />
            <div className="w-2 h-2 rounded-full bg-teal-500" />
            <div className="w-8 h-[2.5px] bg-indigo-500 rounded-full" />
          </div>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-3">
            We're here to listen, support, and guide you with compassionate psychiatric care tailored to you.
          </p>
        </motion.div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon
            const isSelected = activeCard === pillar.id
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => setActiveCard(isSelected ? null : pillar.id)}
                className={`group relative bg-white/95 rounded-[32px] p-6 shadow-[0_10px_30px_rgba(15,35,70,0.06)] border transition-all duration-300 transform hover:-translate-y-2 cursor-pointer flex flex-col justify-between overflow-hidden ${
                  isSelected ? 'border-emerald-300 ring-2 ring-emerald-100 shadow-xl' : 'border-white/80 hover:shadow-xl'
                }`}
              >
                <div>
                  {/* Top Floating Circular Icon Badge */}
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className={`w-18 h-18 rounded-full bg-white shadow-md border-2 ${pillar.ringColor} ring-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                        <Icon className={`w-8 h-8 ${pillar.iconColor} stroke-[2]`} />
                      </div>
                      <span className={`absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full ${pillar.dotColor} border-2 border-white`} />
                    </div>
                  </div>

                  {/* Title & Accent Line */}
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0a1e3b] text-center mb-2 group-hover:text-emerald-700 transition-colors">
                    {pillar.title}
                  </h3>
                  <div className={`w-8 h-[2.5px] ${pillar.barColor} rounded-full mx-auto mb-4`} />

                  {/* Description */}
                  <p className="text-slate-600 text-xs sm:text-sm text-center leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  {/* Interactive Details on Click */}
                  {isSelected && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mb-4 p-2.5 rounded-xl bg-slate-50 text-center text-xs font-semibold text-emerald-800 flex items-center justify-center gap-1.5"
                    >
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{pillar.highlight}</span>
                    </motion.div>
                  )}
                </div>

                {/* Bottom Curved Wave Graphic & Arrow Button */}
                <div className="relative pt-8 flex items-center justify-center">
                  <div className={`absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t ${pillar.waveBg} rounded-b-[32px] pointer-events-none`} />
                  <div className={`relative z-10 w-11 h-11 rounded-full ${pillar.btnBg} text-white flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-110`}>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA Button */}
        <div className="flex justify-center mt-12 sm:mt-16">
          <button
            onClick={onMeetTeam}
            className="group relative inline-flex items-center gap-2.5 px-8 py-3.5 sm:py-4 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 shadow-[0_10px_25px_rgba(16,185,129,0.35)] hover:shadow-[0_14px_30px_rgba(16,185,129,0.45)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <Users className="w-4 h-4 transition-transform group-hover:scale-110" />
            <span>Meet Our Team</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

      </div>
    </section>
  )
}
