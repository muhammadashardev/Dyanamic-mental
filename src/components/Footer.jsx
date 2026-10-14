import React, { useState } from 'react'
import { MapPin, Phone, Mail, User, ShieldCheck, Lock, ArrowRight, CheckCircle2 } from 'lucide-react'
import FooterBrand from './FooterBrand'
import FooterEmergency from './FooterEmergency'
import FooterWave from './FooterWave'

export default function Footer({ onNavigateSection, onOpenPortal }) {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setTimeout(() => setSubscribed(false), 3000)
      setEmail('')
    }
  }

  return (
    <footer className="relative w-full bg-gradient-to-b from-white via-[#f3f9fc] to-[#e1effe] pt-16 sm:pt-20 overflow-hidden">
      {/* Decorative dot matrix */}
      <div className="absolute top-10 left-10 w-24 h-24 hidden lg:grid grid-cols-5 gap-2 opacity-25 pointer-events-none">
        {Array.from({ length: 25 }).map((_, i) => (
          <span key={i} className="w-1.5 h-1.5 rounded-full bg-blue-600 inline-block" />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 sm:pb-16 items-start">
          
          {/* Column 1: Brand Info */}
          <FooterBrand />

          {/* Column 2: Explore (Quick Links) */}
          <div className="lg:col-span-2">
            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold bg-blue-50 text-blue-700 border border-blue-200/60 uppercase tracking-wider mb-3 shadow-sm">
              Quick Links
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#0a1e3b] mb-5">Explore</h3>
            <ul className="space-y-3 text-sm font-medium text-slate-600">
              {['Home', 'About Us', 'Our Services', 'Meet Our Team', 'Patient FAQs', 'Contact Us'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => onNavigateSection && onNavigateSection(item)}
                    className="group hover:text-blue-600 flex items-center gap-2 transition-colors cursor-pointer"
                  >
                    <span className="text-blue-400 group-hover:translate-x-1 transition-transform">›</span> {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Office Hours */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200/60 uppercase tracking-wider mb-3 shadow-sm">
                Get In Touch
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#0a1e3b] mb-4">Contact</h3>
              <div className="space-y-3.5 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 shadow-sm">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="leading-snug">40 South River Rd, Unit 55, Bedford, NH 03110</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 shadow-sm">
                    <Phone className="w-4 h-4" />
                  </div>
                  <a href="tel:6037161924" className="hover:text-blue-600 font-bold text-slate-800 transition-colors">
                    (603) 716-1924
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 shadow-sm">
                    <Mail className="w-4 h-4" />
                  </div>
                  <a href="mailto:info@dynamicmentalhealthne.com" className="hover:text-blue-600 truncate transition-colors">
                    info@dynamicmentalhealthne.com
                  </a>
                </div>
              </div>
            </div>

            <div>
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold bg-purple-50 text-purple-700 border border-purple-200/60 uppercase tracking-wider mb-2 shadow-sm">
                Office Hours
              </span>
              <h4 className="font-serif text-lg font-bold text-[#0a1e3b] mb-2">Office Hours</h4>
              <div className="text-xs sm:text-sm text-slate-600 space-y-1">
                <p><strong>Monday–Thursday:</strong> 10:00 AM–8:00 PM</p>
                <p><strong>Friday:</strong> 10:00 AM–2:00 PM</p>
              </div>
            </div>
          </div>

          {/* Column 4: Patient Resources & Newsletter Card */}
          <div className="lg:col-span-3 flex flex-col justify-between space-y-6">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold bg-purple-50 text-purple-700 border border-purple-200/60 uppercase tracking-wider mb-3 shadow-sm">
                Patient Resources
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#0a1e3b] mb-4">Patient Resources</h3>
              
              <div className="space-y-2 mb-6">
                {[
                  { label: 'Patient Portal', icon: User },
                  { label: 'Insurance & Billing', icon: ShieldCheck },
                  { label: 'Privacy Policy', icon: Lock },
                ].map((res, i) => (
                  <button
                    key={i}
                    onClick={onOpenPortal}
                    className="w-full flex items-center justify-between p-3 rounded-2xl bg-white hover:bg-slate-50 border border-slate-100 hover:border-blue-300 text-xs sm:text-sm font-semibold text-slate-700 hover:text-blue-600 shadow-sm hover:shadow transition-all group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                        <res.icon className="w-3.5 h-3.5" />
                      </div>
                      <span>{res.label}</span>
                    </div>
                    <span className="text-slate-400 group-hover:translate-x-1 transition-transform">›</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Stay Connected Card */}
            <div className="bg-white/95 rounded-3xl p-5 shadow-sm border border-slate-100 relative overflow-hidden">
              <div className="w-8 h-8 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center mb-2 shadow-sm">
                <Mail className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-[#0a1e3b]">Stay Connected</h4>
              <p className="text-xs text-slate-500 mb-3.5 leading-relaxed">
                Get the latest updates, helpful resources, and mental health insights.
              </p>
              {subscribed ? (
                <div className="flex items-center gap-2 text-xs text-emerald-600 font-semibold p-2.5 bg-emerald-50 rounded-xl">
                  <CheckCircle2 className="w-4 h-4" /> Thank you for subscribing!
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="relative flex items-center">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pr-11 pl-3.5 py-2.5 rounded-full border border-slate-200 text-xs outline-none focus:border-blue-500 bg-slate-50/60"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 w-8 h-8 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center transition-all cursor-pointer shadow-sm hover:scale-105"
                    aria-label="Submit newsletter"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Emergency Alert Banner */}
        <FooterEmergency />

      </div>

      {/* Layered Bottom Wave SVG & Copyright */}
      <FooterWave />
    </footer>
  )
}
