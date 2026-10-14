import React from 'react'
import { X, ArrowRight, CheckCircle } from 'lucide-react'

export default function ConditionModal({ condition, onClose, onBookForCondition }) {
  if (!condition) return null

  const detailsMap = {
    anxiety: {
      title: 'Anxiety Care & Relief',
      desc: 'Personalized treatment for generalized anxiety, panic, social anxiety, and persistent worry.',
      highlights: [
        'Comprehensive clinical diagnostic evaluation',
        'Targeted medication management when appropriate',
        'Mindfulness and cognitive coping frameworks',
        'Rapid symptom relief & long-term stabilization',
      ],
    },
    adhd: {
      title: 'ADHD Evaluation & Support',
      desc: 'Expert care for executive dysfunction, focus difficulties, impulsivity, and adult ADHD.',
      highlights: [
        'Objective adult & adolescent ADHD screening',
        'Balanced, evidence-based medication protocols',
        'Executive function coaching strategies',
        'Workplace & academic performance support',
      ],
    },
    depression: {
      title: 'Depression Recovery Care',
      desc: 'Empathetic psychiatric treatment for major depression, dysthymia, and mood disorders.',
      highlights: [
        'Compassionate, stigma-free consultations',
        'Tailored antidepressant optimization',
        'Holistic sleep, lifestyle, and biochemical approaches',
        'Continuous monitoring & proactive check-ins',
      ],
    },
    exhaustion: {
      title: 'Mental Exhaustion & Burnout',
      desc: 'Recharge your nervous system, rebuild cognitive clarity, and overcome chronic cognitive fatigue.',
      highlights: [
        'Adrenal & burnout symptom profiling',
        'Restorative sleep cycle therapy',
        'Stress neurobiology balancing',
        'Sustainable work-life recovery planning',
      ],
    },
  }

  const detail = detailsMap[condition.id] || {
    title: condition.name,
    desc: 'Specialized, compassionate psychiatric care in New Hampshire.',
    highlights: ['Comprehensive evaluation', 'Holistic care plan', 'Ongoing support'],
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-slate-100">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className={`w-11 h-11 rounded-2xl ${condition.iconBg} flex items-center justify-center shadow-sm`}>
            <condition.icon className="w-6 h-6 stroke-[2.2]" />
          </div>
          <div>
            <h3 className="text-xl font-serif font-bold text-slate-900">{detail.title}</h3>
            <span className="text-xs text-blue-600 font-semibold uppercase tracking-wider">
              Specialized Treatment
            </span>
          </div>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed mb-5">{detail.desc}</p>

        <div className="bg-slate-50/80 rounded-2xl p-4 border border-slate-100 mb-6">
          <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wide mb-3">What We Offer</h4>
          <ul className="space-y-2.5">
            {detail.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        <button
          onClick={() => {
            onBookForCondition(condition.name)
            onClose()
          }}
          className="w-full py-3 rounded-full text-white font-semibold text-sm bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all"
        >
          <span>Schedule Care for {condition.name}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
