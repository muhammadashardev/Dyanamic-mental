import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Flower2, UserCheck, Users, CalendarCheck, ShieldCheck, MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react'

export default function OurApproach({ onLearnMore }) {
  const [activeCard, setActiveCard] = useState(0)

  const approachItems = [
    {
      id: 0,
      title: 'Personalized Care',
      titleColor: 'text-emerald-800',
      icon: UserCheck,
      iconBg: 'bg-emerald-50 text-emerald-600',
      arrowBg: 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white',
      dotColor: '#10b981',
      description: 'Your treatment plan is shaped around your needs and goals.',
      extended: 'We craft comprehensive biological, behavioral, and lifestyle plans tailored to your timeline.',
      metric: '100% Tailored Treatment Plans',
    },
    {
      id: 1,
      title: 'Collaborative Decisions',
      titleColor: 'text-[#0a1e3b]',
      icon: Users,
      iconBg: 'bg-blue-50 text-blue-600',
      arrowBg: 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white',
      dotColor: '#3b82f6',
      description: 'We work with you to discuss options and make informed decisions together.',
      extended: 'No rushed prescriptions. We educate you on every step so you feel empowered and confident.',
      metric: 'Shared Decision-Making Protocol',
    },
    {
      id: 2,
      title: 'Thoughtful Follow-Up',
      titleColor: 'text-purple-800',
      icon: CalendarCheck,
      iconBg: 'bg-purple-50 text-purple-600',
      arrowBg: 'bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white',
      dotColor: '#a855f7',
      description: 'Ongoing appointments help us review your progress and adjust care when clinically appropriate.',
      extended: 'Continuous symptom monitoring, dosage precision, and ongoing emotional guidance.',
      metric: 'Consistent Ongoing Care Support',
    },
  ]

  return (
    <section className="relative w-full bg-gradient-to-b from-[#f4fbf7] to-white pt-16 sm:pt-20 pb-24 sm:pb-32 overflow-hidden">
      {/* Decorative ambient leaf & wave glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-teal-100/25 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Organic Pebble Framed Photo with Surrounding Badges */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative flex justify-center"
          >
            {/* Background Organic Color Waves */}
            <div className="absolute -inset-4 sm:-inset-6 rounded-full bg-gradient-to-tr from-emerald-500/20 via-teal-400/20 to-sky-300/10 blur-xl pointer-events-none" />

            <div className="relative w-full max-w-md sm:max-w-lg">
              {/* Organic Fluid Curved Image Container */}
              <div className="relative rounded-[60px] sm:rounded-[80px] overflow-hidden shadow-[0_25px_60px_rgba(16,185,129,0.15)] border-4 border-white bg-slate-100 aspect-[4/3.9]">
                <img
                  src="/therapist.jpg"
                  alt="Personalized psychiatric approach consultation"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Overlapping Emblem on Notebook */}
              <div className="absolute top-1/2 -right-4 sm:-right-6 -translate-y-1/2 w-14 sm:w-16 h-14 sm:h-16 rounded-full bg-white/95 backdrop-blur-md shadow-lg border-2 border-emerald-100 flex items-center justify-center text-emerald-600 animate-pulse-glow z-20">
                <Flower2 className="w-7 sm:w-8 h-7 sm:h-8 stroke-[1.8]" />
              </div>

              {/* Floating Badge 1: Top Left */}
              <div className="absolute -top-4 -left-3 sm:-left-6 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-3.5 shadow-md border border-white max-w-[130px] text-center animate-float-slow">
                <div className="w-8 h-8 mx-auto rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-1">
                  <Users className="w-4 h-4" />
                </div>
                <span className="block text-[11px] font-bold text-slate-800 leading-tight">Personalized for You</span>
              </div>

              {/* Floating Badge 2: Bottom Left */}
              <div className="absolute -bottom-4 -left-3 sm:-left-6 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-3.5 shadow-md border border-white max-w-[130px] text-center animate-float-delayed">
                <div className="w-8 h-8 mx-auto rounded-full bg-teal-50 text-teal-600 flex items-center justify-center mb-1">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className="block text-[11px] font-bold text-slate-800 leading-tight">Evidence-Based Care</span>
              </div>

              {/* Floating Badge 3: Bottom Center */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-2.5 shadow-md border border-white whitespace-nowrap">
                <div className="w-7 h-7 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center">
                  <MessageSquare className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-bold text-slate-800">Ongoing Support</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Title, Intro & 3 Interactive Approach Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/70 border border-emerald-200/80 text-emerald-800 text-xs font-bold tracking-wider uppercase mb-4 shadow-sm">
              <Flower2 className="w-3.5 h-3.5 text-emerald-700" />
              <span>Our Approach</span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[54px] leading-[1.12] tracking-tight font-semibold text-[#0a1e3b] mb-3">
              You're More Than a{' '}
              <span className="text-emerald-700">Diagnosis</span>
            </h2>

            {/* Accent Bar */}
            <div className="w-12 h-[3px] bg-emerald-600 rounded-full mb-4" />

            {/* Descriptive Intro */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-7 max-w-xl">
              Effective mental health care begins with understanding the whole person. We consider your experiences, concerns, goals, and individual circumstances when discussing treatment options.
            </p>

            {/* 3 Interactive Cards */}
            <div className="w-full space-y-4 mb-8">
              {approachItems.map((item) => {
                const Icon = item.icon
                const isActive = activeCard === item.id
                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveCard(item.id)}
                    className={`group bg-white/95 rounded-2xl sm:rounded-3xl p-4 sm:p-5 shadow-sm border transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'border-emerald-300 shadow-md ring-2 ring-emerald-100 -translate-y-0.5'
                        : 'border-slate-100 hover:border-emerald-200 hover:shadow'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className={`w-11 h-11 rounded-2xl ${item.iconBg} flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-105`}>
                          <Icon className="w-5 h-5 stroke-[2.2]" />
                        </div>
                        <div>
                          <h3 className={`font-serif text-lg font-bold ${item.titleColor}`}>
                            {item.title}
                          </h3>
                          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-0.5">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all ${item.arrowBg}`}>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </div>

                    {/* Interactive Expanded Detail on Active */}
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-emerald-700 font-medium"
                      >
                        <span className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          {item.metric}
                        </span>
                        <span className="text-slate-400 text-[11px] font-normal hidden sm:inline">
                          Click to select
                        </span>
                      </motion.div>
                    )}
                  </div>
                )
              })}
            </div>

            {/* Bottom CTA Button */}
            <button
              onClick={onLearnMore}
              className="group inline-flex items-center gap-2.5 px-8 py-3.5 sm:py-4 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-700 hover:to-teal-800 shadow-[0_10px_25px_rgba(16,185,129,0.3)] hover:shadow-[0_14px_30px_rgba(16,185,129,0.45)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <Flower2 className="w-4 h-4 transition-transform group-hover:rotate-45" />
              <span>Learn About Our Practice</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
