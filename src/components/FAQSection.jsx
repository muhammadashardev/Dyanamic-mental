import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, Plus, Minus, Phone, Mail, MapPin, Headphones, BookOpen, ArrowRight, Heart } from 'lucide-react'
import { faqsList } from '../data/faqsData'

export default function FAQSection({ onContactSupport }) {
  const [openId, setOpenId] = useState(1)

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section className="relative w-full bg-gradient-to-b from-[#f8fcf9] via-white to-[#f5f9fc] pt-20 sm:pt-24 pb-24 sm:pb-32 overflow-hidden">
      {/* Decorative dot matrix */}
      <div className="absolute top-12 left-10 w-24 h-24 hidden lg:grid grid-cols-5 gap-2 opacity-25 pointer-events-none">
        {Array.from({ length: 25 }).map((_, i) => (
          <span key={i} className="w-1.5 h-1.5 rounded-full bg-blue-600 inline-block" />
        ))}
      </div>
      <div className="absolute bottom-12 right-10 w-24 h-24 hidden lg:grid grid-cols-5 gap-2 opacity-20 pointer-events-none">
        {Array.from({ length: 25 }).map((_, i) => (
          <span key={i} className="w-1.5 h-1.5 rounded-full bg-purple-600 inline-block" />
        ))}
      </div>

     

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold tracking-wider uppercase mb-4 shadow-sm">
            <MessageSquare className="w-3.5 h-3.5 text-blue-600" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[56px] leading-[1.12] tracking-tight font-semibold text-[#0a1e3b] mb-4">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Find answers to common questions about our services, appointments, insurance and more. If you don't see your question here, feel free to reach out to our office — we're happy to help!
          </p>
        </div>

        {/* 2 Columns: Accordion on Left, Support Card on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: FAQ Accordion */}
          <div className="lg:col-span-7 space-y-4">
            {faqsList.map((faq) => {
              const isOpen = openId === faq.id
              return (
                <div
                  key={faq.id}
                  onClick={() => toggleFAQ(faq.id)}
                  className={`bg-white/95 rounded-2xl p-5 sm:p-6 shadow-sm border transition-all duration-300 cursor-pointer ${
                    isOpen
                      ? 'border-emerald-300 shadow-md ring-2 ring-emerald-50 border-l-4 border-l-emerald-500'
                      : 'border-slate-100 hover:border-slate-200 hover:shadow'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <span className={`w-8 h-8 rounded-lg ${faq.numColor} font-bold text-xs flex items-center justify-center shrink-0 shadow-sm`}>
                        {faq.num}
                      </span>
                      <h3 className="font-serif text-base sm:text-lg font-bold text-[#0a1e3b] leading-snug">
                        {faq.question}
                      </h3>
                    </div>

                    <div className="text-blue-500 shrink-0">
                      {isOpen ? (
                        <Minus className="w-5 h-5 text-emerald-600 stroke-[2.5]" />
                      ) : (
                        <Plus className="w-5 h-5 text-blue-500 stroke-[2.5]" />
                      )}
                    </div>
                  </div>

                  {/* Expandable Answer */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-4 border-t border-slate-100 pl-11"
                      >
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>

          {/* Right Column: "We're Here for You" Support Card */}
          <div className="lg:col-span-5 bg-white/95 rounded-[32px] p-6 sm:p-7 shadow-[0_12px_35px_rgba(15,35,70,0.08)] border border-slate-100 flex flex-col justify-between">
            <div>
              {/* Cozy Serene Photo with Floating Badge */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] mb-6 bg-slate-100 shadow-sm">
                <img
                  src="/care_student.jpg"
                  alt="Mental wellness resources and support"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-white shadow-lg border border-purple-100 flex items-center justify-center text-purple-600 z-10 animate-bounce">
                  <MessageSquare className="w-5 h-5 fill-purple-100" />
                </div>
              </div>

              {/* Need Help Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-bold uppercase tracking-wider mb-2">
                <Headphones className="w-3.5 h-3.5" />
                <span>Need More Help?</span>
              </div>

              {/* Card Title */}
              <h3 className="font-serif text-2xl font-bold text-[#0a1e3b] mb-2">
                We're Here <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">for You</span>
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                If you have additional questions or need assistance, please don't hesitate to contact our office. Our team is happy to help!
              </p>

              {/* Contact Information List */}
              <div className="space-y-4">
                <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-slate-50/70 hover:bg-emerald-50/50 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-medium text-slate-500 block">Call Us</span>
                    <a href="tel:6036660100" className="text-xs sm:text-sm font-bold text-[#0a1e3b] hover:text-emerald-700 transition-colors">
                      (603) 666-0100
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-slate-50/70 hover:bg-purple-50/50 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-medium text-slate-500 block">Email Us</span>
                    <a href="mailto:info@dynamicmentalhealth.com" className="text-xs sm:text-sm font-bold text-[#0a1e3b] hover:text-purple-700 transition-colors">
                      info@dynamicmentalhealth.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-slate-50/70 hover:bg-blue-50/50 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-medium text-slate-500 block">Visit Us</span>
                    <span className="text-xs sm:text-[13px] font-medium text-slate-700 block">
                      40 South River Rd, Unit 55, Bedford, NH 03110
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom CTA Button */}
        <div className="flex flex-col items-center mt-12 sm:mt-16">
          <button
            onClick={onContactSupport}
            className="group inline-flex items-center gap-2.5 px-8 py-3.5 sm:py-4 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-[0_10px_25px_rgba(79,70,229,0.35)] hover:shadow-[0_14px_30px_rgba(79,70,229,0.45)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <BookOpen className="w-4 h-4 transition-transform group-hover:scale-110" />
            <span>View All FAQs</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <p className="text-slate-400 text-xs text-center mt-6">
            If you have any questions not covered here, please reach out to our office. We're always happy to assist you.
          </p>
        </div>

      </div>
    </section>
  )
}
