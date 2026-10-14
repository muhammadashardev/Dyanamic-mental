import React from 'react'

export default function FooterBrand() {
  const socialPills = [
    { label: 'f', cls: 'text-blue-600 hover:bg-blue-50 border-blue-100' },
    { label: '📷', cls: 'text-pink-600 hover:bg-pink-50 border-pink-100' },
    { label: 'in', cls: 'text-blue-700 hover:bg-blue-50 border-blue-100' },
    { label: '▶', cls: 'text-red-600 hover:bg-red-50 border-red-100' },
  ]

  return (
    <div className="lg:col-span-4 flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-3.5 mb-4 cursor-pointer group">
          <svg viewBox="0 0 44 44" fill="none" className="w-11 h-11 shrink-0 group-hover:scale-105 transition-transform">
            <path d="M12 28C10 22 13 16 18 13C17 19 16 25 12 28Z" fill="#38bdf8" />
            <path d="M15 32C14 24 18 14 22 10C21 18 19 28 15 32Z" fill="#2563eb" />
            <path d="M22 6C24 14 24 24 22 34C20 24 20 14 22 6Z" fill="#4f46e5" />
            <path d="M29 32C30 24 26 14 22 10C23 18 25 28 29 32Z" fill="#2563eb" />
            <path d="M32 28C34 22 31 16 26 13C27 19 28 25 32 28Z" fill="#38bdf8" />
            <ellipse cx="22" cy="33" rx="7" ry="2" fill="#6366f1" opacity="0.6" />
          </svg>
          <div>
            <span className="block text-xl font-serif font-bold text-[#0a1e3b] leading-tight">
              Dynamic Mental Health
            </span>
            <span className="block text-sm font-semibold text-blue-600">
              of New England
            </span>
          </div>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed mb-6 max-w-sm">
          Compassionate, personalized psychiatric care in New Hampshire.
        </p>

        <div className="flex items-center gap-3 mb-8">
          {socialPills.map((s, i) => (
            <button
              key={i}
              className={`w-10 h-10 rounded-full bg-white shadow-sm border ${s.cls} font-bold text-sm flex items-center justify-center transition-all hover:scale-110 cursor-pointer`}
              aria-label="Social Link"
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      <div className="pt-2">
        <span className="font-serif italic text-xl sm:text-2xl text-blue-600 font-medium block">
          Better Mental Health,
        </span>
        <span className="font-serif italic text-xl sm:text-2xl text-indigo-600 font-medium flex items-center gap-2">
          Brighter Tomorrows <span className="text-blue-500 font-normal">♡</span>
        </span>
        <svg className="w-44 h-4 text-emerald-400 mt-1" viewBox="0 0 160 12" fill="none">
          <path d="M5,10 Q80,2 155,8" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  )
}
