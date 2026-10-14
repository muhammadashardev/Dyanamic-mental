import React, { useState } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import AppointmentModal from '../components/AppointmentModal'
import ConditionModal from '../components/ConditionModal'
import AboutSection from '../components/AboutSection'
import OurServices from '../components/OurServices'
import OurApproach from '../components/OurApproach'
import WhyChooseUs from '../components/WhyChooseUs'
import GettingStarted from '../components/GettingStarted'
import Testimonials from '../components/Testimonials'
import FAQSection from '../components/FAQSection'
import WhoWeHelp from '../components/WhoWeHelp'
import Footer from '../components/Footer'

export default function Home() {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false)
  const [selectedCondition, setSelectedCondition] = useState(null)
  const [appointmentDefaultConcern, setAppointmentDefaultConcern] = useState('Anxiety')

  const handleOpenAppointment = (concern = 'Anxiety') => {
    setAppointmentDefaultConcern(concern)
    setIsAppointmentOpen(true)
  }

  const handleSelectCondition = (condition) => {
    setSelectedCondition(condition)
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 relative selection:bg-blue-600 selection:text-white">
      {/* Absolute Header Overlay */}
      <div className="absolute top-0 left-0 right-0 z-30">
        <Header onOpenAppointment={() => handleOpenAppointment('General Consultation')} />
      </div>

      {/* Main Page Flow */}
      <main className="flex-1">
        <Hero
          onOpenAppointment={() => handleOpenAppointment('General Consultation')}
          onSelectCondition={handleSelectCondition}
        />
        <AboutSection
          onExploreMore={() => handleOpenAppointment('Comprehensive Evaluation')}
        />
        <OurServices
          onSelectService={(service) => handleOpenAppointment(service.title)}
          onViewAll={() => handleOpenAppointment('Comprehensive Evaluation')}
        />
        <OurApproach
          onLearnMore={() => handleOpenAppointment('Care Approach Consultation')}
        />
        <WhyChooseUs
          onMeetTeam={() => handleOpenAppointment('Clinical Team Consultation')}
        />
        <GettingStarted
          onRequestAppointment={() => handleOpenAppointment('First Consultation')}
        />
        <Testimonials
          onReadMore={() => handleOpenAppointment('Patient Review Consultation')}
        />
        <FAQSection
          onContactSupport={() => handleOpenAppointment('General Inquiry')}
        />
        <WhoWeHelp
          onSelectStage={(stage) => handleOpenAppointment(stage.title)}
          onExploreApproach={() => handleOpenAppointment('Care Approach Consultation')}
        />
      </main>

      {/* Footer Section */}
      <Footer
        onNavigateSection={() => handleOpenAppointment('General Consultation')}
        onOpenPortal={() => handleOpenAppointment('Patient Portal Access')}
      />

      {/* Interactive Appointment Consultation Modal */}
      <AppointmentModal
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
        defaultCondition={appointmentDefaultConcern}
      />

      {/* Interactive Condition Details Modal */}
      <ConditionModal
        condition={selectedCondition}
        onClose={() => setSelectedCondition(null)}
        onBookForCondition={(conditionName) => handleOpenAppointment(conditionName)}
      />
    </div>
  )
}
