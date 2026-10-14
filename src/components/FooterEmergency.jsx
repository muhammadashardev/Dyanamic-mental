import React from 'react'
import { AlertTriangle, Heart } from 'lucide-react'

export default function FooterEmergency() {
  return (
    <div className="rounded-3xl p-5 sm:p-6 bg-white/95 border border-rose-100 shadow-[0_8px_25px_rgba(244,63,94,0.06)] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-14">
      <div className="flex items-center gap-3.5">
        <div className="w-11 h-11 rounded-full bg-rose-500 text-white flex items-center justify-center shrink-0 shadow-md">
          <AlertTriangle className="w-5 h-5 stroke-[2.2]" />
        </div>
        <div className="text-xs sm:text-[13px] leading-relaxed text-slate-700">
          <span className="text-rose-600 font-bold">
            If you are experiencing a mental health emergency,
          </span>{' '}
          call 911 or go to the nearest emergency department.
          <br className="hidden sm:inline" />
          Call or text <strong className="text-slate-900 font-bold">988</strong> in the United States for crisis support. This practice does not provide emergency or after-hours crisis services.
        </div>
      </div>
      
      <div className="flex items-center gap-2 text-indigo-600 italic font-serif text-sm font-semibold shrink-0 pl-14 md:pl-0">
        <Heart className="w-4 h-4 text-indigo-500 fill-indigo-100" />
        <span>You Are Not Alone</span>
      </div>
    </div>
  )
}
