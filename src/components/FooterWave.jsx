import React from 'react'

export default function FooterWave() {
  return (
    <div className="relative w-full overflow-hidden leading-none z-10">
      <svg
        className="relative block w-full h-16 sm:h-24 md:h-28"
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0,40 C320,90 600,10 960,60 C1200,90 1360,30 1440,50 L1440,120 L0,120 Z"
          fill="rgba(59, 130, 246, 0.25)"
        />
        <path
          d="M0,65 C360,20 640,90 980,45 C1240,15 1380,70 1440,55 L1440,120 L0,120 Z"
          fill="url(#footerWaveGradient)"
        />
        <defs>
          <linearGradient id="footerWaveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="50%" stopColor="#4f46e5" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
        </defs>
      </svg>

      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 py-4 sm:py-5 px-4 text-white text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-blue-100">
            © {new Date().getFullYear()} Dynamic Mental Health of New England. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 opacity-60">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
          </div>
          <div className="flex items-center gap-3 text-blue-100 text-xs">
            <span>Compassion</span>
            <span>•</span>
            <span>Support</span>
            <span>•</span>
            <span>Wellness</span>
          </div>
        </div>
      </div>
    </div>
  )
}
