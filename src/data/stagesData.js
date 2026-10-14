import { Users, User, Lightbulb, GraduationCap, HeartHandshake, Compass } from 'lucide-react'

export const stageSets = [
  [
    {
      id: 'children',
      title: 'Children & Adolescents',
      badgeIcon: Users,
      badgeColor: 'text-blue-600 bg-blue-50/90',
      lineColor: 'bg-blue-500',
      btnColor: 'bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white',
      image: '/care_children.jpg',
      description:
        'Thoughtful evaluations and family-centered support for young people navigating attention, emotional, behavioral, and other mental health concerns.',
    },
    {
      id: 'adults',
      title: 'Adults',
      badgeIcon: User,
      badgeColor: 'text-emerald-600 bg-emerald-50/90',
      lineColor: 'bg-emerald-500',
      btnColor: 'bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white',
      image: '/care_adults.jpg',
      description:
        'Personalized care for adults experiencing anxiety, depression, ADHD, mood-related concerns, or changes in daily functioning.',
    },
    {
      id: 'clarity',
      title: 'Individuals Seeking Clarity',
      badgeIcon: Lightbulb,
      badgeColor: 'text-purple-600 bg-purple-50/90',
      lineColor: 'bg-purple-500',
      btnColor: 'bg-purple-50 text-purple-600 hover:bg-purple-600 hover:text-white',
      image: '/care_clarity.jpg',
      description:
        'A supportive environment to discuss symptoms, explore treatment options, and better understand the next steps in your mental health care.',
    },
  ],
  [
    {
      id: 'students',
      title: 'College & Young Adults',
      badgeIcon: GraduationCap,
      badgeColor: 'text-sky-600 bg-sky-50/90',
      lineColor: 'bg-sky-500',
      btnColor: 'bg-sky-50 text-sky-600 hover:bg-sky-600 hover:text-white',
      image: '/care_student.jpg',
      description:
        'Compassionate psychiatric guidance for university transitions, burnout, academic pressures, and developing healthy independence.',
    },
    {
      id: 'families',
      title: 'Parents & Couples Support',
      badgeIcon: HeartHandshake,
      badgeColor: 'text-rose-600 bg-rose-50/90',
      lineColor: 'bg-rose-500',
      btnColor: 'bg-rose-50 text-rose-600 hover:bg-rose-600 hover:text-white',
      image: '/care_family.jpg',
      description:
        'Supportive counseling and psychiatric balancing for relational stress, family dynamics, postpartum adjustments, and caregiver fatigue.',
    },
    {
      id: 'mindful',
      title: 'Seniors & Life Transitions',
      badgeIcon: Compass,
      badgeColor: 'text-indigo-600 bg-indigo-50/90',
      lineColor: 'bg-indigo-500',
      btnColor: 'bg-indigo-50 text-indigo-600 hover:bg-indigo-600 hover:text-white',
      image: '/care_mindful.jpg',
      description:
        'Gentle psychiatric care addressing cognitive wellness, late-career retirement transitions, grief, and restorative sleep therapy.',
    },
  ],
]
