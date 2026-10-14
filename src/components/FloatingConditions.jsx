import React from 'react'
import { motion } from 'framer-motion'
import { Brain, Target, Heart, BatteryCharging, ArrowRight } from 'lucide-react'

export default function FloatingConditions({ onSelectCondition }) {
  const conditions = [
    {
      id: 'anxiety',
      name: 'Anxiety',
      icon: Brain,
      iconBg: 'bg-sky-100 text-sky-600',
      arrowColor: 'text-sky-400 group-hover:text-sky-600',
      delay: 0.1,
      offsetX: 'md:translate-x-12 lg:translate-x-16',
    },
    {
      id: 'adhd',
      name: 'ADHD',
      icon: Target,
      iconBg: 'bg-emerald-100 text-emerald-600',
      arrowColor: 'text-emerald-400 group-hover:text-emerald-600',
      delay: 0.2,
      offsetX: 'md:translate-x-2 lg:translate-x-4',
    },
    {
      id: 'depression',
      name: 'Depression',
      icon: Heart,
      iconBg: 'bg-rose-100 text-rose-500',
      arrowColor: 'text-rose-400 group-hover:text-rose-600',
      delay: 0.3,
      offsetX: 'md:translate-x-6 lg:translate-x-8',
    },
    {
      id: 'exhaustion',
      name: 'Mental Exhaustion',
      icon: BatteryCharging,
      iconBg: 'bg-purple-100 text-purple-600',
      arrowColor: 'text-purple-400 group-hover:text-purple-600',
      delay: 0.4,
      offsetX: 'md:-translate-x-2 lg:translate-x-0',
    },
  ]

  return (
    <div className="relative flex flex-col gap-3.5 z-20 w-full max-w-xs sm:max-w-sm">
      {/* Decorative Curving Light Trail behind cards */}
      <svg
        className="absolute -top-10 -left-12 w-[340px] h-[340px] pointer-events-none opacity-40 hidden md:block"
        viewBox="0 0 300 300"
        fill="none"
      >
        <path
          d="M260,20 C180,80 60,140 120,240 C150,290 240,280 290,260"
          stroke="url(#glowGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          className="filter drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]"
        />
        <defs>
          <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="50%" stopColor="#818cf8" />
            <stop offset="100%" stopColor="#c084fc" />
          </linearGradient>
        </defs>
      </svg>

      {conditions.map((item) => {
        const Icon = item.icon
        return (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: item.delay, ease: 'easeOut' }}
            whileHover={{ scale: 1.03, x: 8 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelectCondition && onSelectCondition(item)}
            className={`${item.offsetX} transition-transform duration-300`}
          >
            <div className="bg-white/90 hover:bg-white backdrop-blur-md rounded-2xl px-5 py-3.5 shadow-[0_10px_25px_rgba(15,35,70,0.08)] hover:shadow-[0_16px_35px_rgba(15,35,70,0.12)] border border-white/80 hover:border-blue-200/80 flex items-center justify-between gap-4 cursor-pointer group transition-all">
              <div className="flex items-center gap-3.5">
                <div
                  className={`w-9 h-9 rounded-full ${item.iconBg} flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-sm`}
                >
                  <Icon className="w-5 h-5 stroke-[2.2]" />
                </div>
                <span className="text-sm font-semibold text-slate-800 tracking-tight group-hover:text-blue-950 transition-colors">
                  {item.name}
                </span>
              </div>
              <div className="flex items-center">
                <ArrowRight
                  className={`w-4 h-4 ${item.arrowColor} transition-transform duration-300 group-hover:translate-x-1`}
                />
              </div>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
