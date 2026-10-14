import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Headphones, Menu, X, ArrowRight } from 'lucide-react'

export default function Header({ onOpenAppointment }) {
  const [activeNav, setActiveNav] = useState('Home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = ['Home', 'About', 'Services', 'Our Team', 'Blog', 'Contact']

  return (
    <header className="relative z-30 pt-3 sm:pt-6 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-white/90 backdrop-blur-md rounded-full px-3.5 sm:px-6 py-2 sm:py-3 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/80 flex items-center justify-between transition-all">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group">
          <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
            <svg viewBox="0 0 44 44" fill="none" className="w-8 h-8 sm:w-9 sm:h-9">
              <path d="M12 28C10 22 13 16 18 13C17 19 16 25 12 28Z" fill="#38bdf8" />
              <path d="M15 32C14 24 18 14 22 10C21 18 19 28 15 32Z" fill="#2563eb" />
              <path d="M22 6C24 14 24 24 22 34C20 24 20 14 22 6Z" fill="#4f46e5" />
              <path d="M29 32C30 24 26 14 22 10C23 18 25 28 29 32Z" fill="#2563eb" />
              <path d="M32 28C34 22 31 16 26 13C27 19 28 25 32 28Z" fill="#38bdf8" />
              <ellipse cx="22" cy="33" rx="7" ry="2" fill="#6366f1" opacity="0.6" />
            </svg>
          </div>
          <div>
            <span className="block text-base sm:text-xl font-bold text-[#0e213d] tracking-tight leading-none">
              MindWell
            </span>
            <span className="block text-[10px] sm:text-[11px] font-medium text-slate-500 tracking-wide mt-0.5">
              Psychiatric Care
            </span>
          </div>
        </div>

        {/* Center Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => {
            const isActive = activeNav === item
            return (
              <button
                key={item}
                onClick={() => setActiveNav(item)}
                className={`relative text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'text-blue-600 font-semibold'
                    : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                {item}
                {isActive && (
                  <span className="absolute -bottom-1.5 left-1/2 transform -translate-x-1/2 w-5 h-[2px] bg-blue-600 rounded-full" />
                )}
              </button>
            )
          })}
        </nav>

        {/* Right Action Section */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">

          <div className="hidden lg:block w-[1px] h-6 bg-slate-200" />

          {/* Request Appointment Button (Compact on small, full on sm+) */}
          <button
            onClick={onOpenAppointment}
            className="hidden sm:inline-flex group relative items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 shadow-md hover:shadow-indigo-500/25 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer shrink-0"
          >
            <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:scale-110" />
            <span>Request an Appointment</span>
          </button>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2 rounded-full hover:bg-slate-100 text-slate-800 transition-colors cursor-pointer"
            aria-label="Open navigation menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Left Off-Canvas Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-50 lg:hidden"
            />

            {/* Left Drawer Panel */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="fixed top-0 left-0 bottom-0 w-[280px] sm:w-[320px] bg-white z-50 p-6 shadow-2xl flex flex-col justify-between overflow-y-auto lg:hidden"
            >
              <div>
                {/* Drawer Header */}
                <div className="flex items-center justify-between pb-5 border-b border-slate-100 mb-6">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xl font-bold text-[#0e213d]">MindWell</span>
                    <span className="text-[10px] text-blue-600 font-semibold px-2 py-0.5 rounded-full bg-blue-50">
                      Care
                    </span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1.5 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-800"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Nav Links */}
                <nav className="flex flex-col gap-1.5">
                  {navItems.map((item) => (
                    <button
                      key={item}
                      onClick={() => {
                        setActiveNav(item)
                        setMobileMenuOpen(false)
                      }}
                      className={`text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                        activeNav === item
                          ? 'bg-blue-50 text-blue-600'
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Drawer Bottom Actions */}
              <div className="pt-6 border-t border-slate-100 space-y-4">
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 text-xs">
                  <span className="font-semibold text-slate-700">Telehealth Available</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false)
                    onOpenAppointment()
                  }}
                  className="w-full py-3 rounded-full text-white font-semibold text-xs bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-md flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Request an Appointment</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
