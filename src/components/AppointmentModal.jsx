import React, { useState } from 'react'
import { X, Calendar, CheckCircle2, ShieldCheck, MapPin, Video } from 'lucide-react'

export default function AppointmentModal({ isOpen, onClose, defaultCondition }) {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    concern: defaultCondition || 'Anxiety',
    location: 'telehealth',
  })

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      // reset after feedback
    }, 1500)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center flex flex-col items-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-4 animate-bounce">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Received!</h3>
            <p className="text-slate-600 max-w-sm mb-6 text-sm">
              Thank you, {formData.name || 'there'}. Our psychiatric clinical coordinator will contact you within 24 hours to confirm your consultation time.
            </p>
            <button
              onClick={() => {
                setSubmitted(false)
                onClose()
              }}
              className="px-6 py-2.5 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all text-sm"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-blue-50 text-blue-700 border border-blue-200 mb-2">
                <ShieldCheck className="w-3.5 h-3.5" /> Confidential & HIPAA Compliant
              </span>
              <h2 className="text-2xl font-serif font-bold text-slate-900">Request an Appointment</h2>
              <p className="text-slate-500 text-xs sm:text-sm mt-1">
                Begin your healing journey with compassionate psychiatric care in New Hampshire.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Your Full Name</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Sarah Jenkins"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-sm transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
                  <input
                    required
                    type="email"
                    placeholder="sarah@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-sm transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number</label>
                  <input
                    required
                    type="tel"
                    placeholder="(603) 555-0192"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-sm transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">Primary Area of Concern</label>
                <div className="grid grid-cols-2 gap-2">
                  {['Anxiety', 'ADHD', 'Depression', 'Mental Exhaustion'].map((c) => (
                    <button
                      type="button"
                      key={c}
                      onClick={() => setFormData({ ...formData, concern: c })}
                      className={`py-2 px-3 rounded-xl text-xs font-medium border text-center transition-all ${
                        formData.concern === c
                          ? 'border-blue-600 bg-blue-50 text-blue-700 font-semibold shadow-sm'
                          : 'border-slate-200 hover:border-slate-300 text-slate-600'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">Care Format</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, location: 'telehealth' })}
                    className={`py-2.5 px-3 rounded-xl text-xs font-medium border flex items-center justify-center gap-1.5 transition-all ${
                      formData.location === 'telehealth'
                        ? 'border-blue-600 bg-blue-50 text-blue-700 font-semibold'
                        : 'border-slate-200 text-slate-600'
                    }`}
                  >
                    <Video className="w-3.5 h-3.5" /> Telehealth (NH)
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, location: 'bedford' })}
                    className={`py-2.5 px-3 rounded-xl text-xs font-medium border flex items-center justify-center gap-1.5 transition-all ${
                      formData.location === 'bedford'
                        ? 'border-blue-600 bg-blue-50 text-blue-700 font-semibold'
                        : 'border-slate-200 text-slate-600'
                    }`}
                  >
                    <MapPin className="w-3.5 h-3.5" /> Bedford, NH Clinic
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3 rounded-full text-white font-semibold text-sm bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                Submit Consultation Request
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
