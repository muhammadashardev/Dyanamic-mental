import { ClipboardCheck, Pill, Brain, CloudRain, Sparkles, Monitor } from 'lucide-react'

export const servicesList = [
  {
    number: '01',
    title: 'Psychiatric Evaluations',
    numColor: 'bg-blue-100/80 text-blue-700',
    iconColor: 'bg-blue-50 text-blue-600',
    crescentColor: 'from-blue-400 to-indigo-500',
    icon: ClipboardCheck,
    description:
      'Comprehensive assessments that consider your symptoms, history, concerns, and goals to help guide an individualized care plan.',
    keyPoints: [
      '60-90 minute in-depth diagnostic session',
      'Biological, psychological & lifestyle review',
      'Collaborative treatment roadmapping',
    ],
  },
  {
    number: '02',
    title: 'Medication Management',
    numColor: 'bg-emerald-100/80 text-emerald-700',
    iconColor: 'bg-emerald-50 text-emerald-600',
    crescentColor: 'from-emerald-400 to-teal-500',
    icon: Pill,
    description:
      'Collaborative medication planning, ongoing monitoring, and follow-up care when medication is clinically appropriate.',
    keyPoints: [
      'Conservative, evidence-based prescribing',
      'Side-effect monitoring & lab coordination',
      'Ongoing dose calibration & check-ins',
    ],
  },
  {
    number: '03',
    title: 'Anxiety Treatment',
    numColor: 'bg-purple-100/80 text-purple-700',
    iconColor: 'bg-purple-50 text-purple-600',
    crescentColor: 'from-purple-400 to-indigo-500',
    icon: Sparkles,
    description:
      'Individualized psychiatric care for people experiencing anxiety-related symptoms and concerns.',
    keyPoints: [
      'Generalized anxiety & panic disorder care',
      'Social anxiety & phobia relief',
      'Cognitive coping & somatic tools',
    ],
  },
  {
    number: '04',
    title: 'Depression Treatment',
    numColor: 'bg-rose-100/80 text-rose-700',
    iconColor: 'bg-rose-50 text-rose-600',
    crescentColor: 'from-rose-400 to-pink-500',
    icon: CloudRain,
    description:
      'Thoughtful evaluation and personalized care for individuals experiencing depressive symptoms or mood changes.',
    keyPoints: [
      'Compassionate mood stabilization',
      'Major depression & dysthymia support',
      'Holistic sleep, activity & neurobiology',
    ],
  },
  {
    number: '05',
    title: 'ADHD & Behavioral Evaluations',
    numColor: 'bg-sky-100/80 text-sky-700',
    iconColor: 'bg-sky-50 text-sky-600',
    crescentColor: 'from-sky-400 to-blue-500',
    icon: Brain,
    description:
      'Assessment and care planning for attention, focus, and behavioral concerns across appropriate age groups.',
    keyPoints: [
      'Standardized adult & adolescent testing',
      'Executive function guidance',
      'School & workplace accommodations',
    ],
  },
  {
    number: '06',
    title: 'Telehealth Services',
    numColor: 'bg-emerald-100/80 text-emerald-700',
    iconColor: 'bg-emerald-50 text-emerald-600',
    crescentColor: 'from-emerald-400 to-green-500',
    icon: Monitor,
    description:
      'Secure virtual appointments for eligible patients across New Hampshire.',
    keyPoints: [
      'HIPAA-compliant high-definition video',
      'Convenient from the comfort of home',
      'E-prescriptions sent directly to your pharmacy',
    ],
  },
]
