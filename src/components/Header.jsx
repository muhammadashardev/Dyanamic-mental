import React, { useState } from 'react'
import { Calendar, Headphones, Menu, X } from 'lucide-react'

export default function Header({ onOpenAppointment }) {
  const [activeNav, setActiveNav] = useState('Home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = ['Home', 'About', 'Services', 'Our Team', 'Blog', 'Contact']

  return (
    <header className="relative z-30 pt-4 sm:pt-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-white/90 backdrop-blur-md rounded-full px-4 sm:px-6 py-2.5 sm:py-3 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/80 flex items-center justify-between transition-all">
        {/* Brand Logo */}
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="w-10 h-10 flex items-center justify-center transition-transform group-hover:scale-105">
            <svg viewBox="0 0 44 44" fill="none" className="w-9 h-9">
              {/* Outer Left Petal */}
              <path d="M12 28C10 22 13 16 18 13C17 19 16 25 12 28Z" fill="#38bdf8" />
              {/* Mid Left Petal */}
              <path d="M15 32C14 24 18 14 22 10C21 18 19 28 15 32Z" fill="#2563eb" />
              {/* Center Petal */}
              <path d="M22 6C24 14 24 24 22 34C20 24 20 14 22 6Z" fill="#4f46e5" />
              {/* Mid Right Petal */}
              <path d="M29 32C30 24 26 14 22 10C23 18 25 28 29 32Z" fill="#2563eb" />
              {/* Outer Right Petal */}
              <path d="M32 28C34 22 31 16 26 13C27 19 28 25 32 28Z" fill="#38bdf8" />
              {/* Soft bottom base */}
              <ellipse cx="22" cy="33" rx="7" ry="2" fill="#6366f1" opacity="0.6" />
            </svg>
          </div>
          <div>
            <span className="block text-lg sm:text-xl font-bold text-[#0e213d] tracking-tight leading-none">
              MindWell
            </span>
            <span className="block text-[11px] font-medium text-slate-500 tracking-wide mt-0.5">
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
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Telehealth Status */}
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50/80 border border-slate-200/60">
            <Headphones className="w-3.5 h-3.5 text-slate-600" />
            <div className="text-left leading-none">
              <span className="text-[11px] font-semibold text-slate-800 block">Telehealth</span>
              <span className="text-[10px] font-medium text-emerald-600 flex items-center gap-1 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Available
              </span>
            </div>
          </div>

          <div className="hidden lg:block w-[1px] h-6 bg-slate-200" />

          {/* Request Appointment Button */}
          <button
            onClick={onOpenAppointment}
            className="group relative inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 shadow-md hover:shadow-indigo-500/25 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:scale-110" />
            <span>Request an Appointment</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full hover:bg-slate-100 text-slate-700"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 p-4 bg-white/95 backdrop-blur-md rounded-2xl border border-white/80 shadow-xl flex flex-col gap-3 animate-in fade-in slide-in-from-top-2 duration-200">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => {
                setActiveNav(item)
                setMobileMenuOpen(false)
              }}
              className={`text-left px-3 py-2 rounded-lg text-sm font-medium ${
                activeNav === item
                  ? 'bg-blue-50 text-blue-600 font-semibold'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              {item}
            </button>
          ))}
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600 px-3">
            <span className="font-medium">Telehealth</span>
            <span className="text-emerald-600 font-semibold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Available
            </span>
          </div>
        </div>
      )}
    </header>
  )
}
