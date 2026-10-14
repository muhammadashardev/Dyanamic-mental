import React from 'react'

export default function BottomWave() {
  return (
    <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
      <svg
        className="relative block w-full h-16 sm:h-24 md:h-32 lg:h-36"
        viewBox="0 0 1440 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        {/* Soft translucent background wave */}
        <path
          d="M0,80 C240,140 480,20 720,70 C960,120 1200,40 1440,85 L1440,180 L0,180 Z"
          fill="rgba(255, 255, 255, 0.45)"
        />
        {/* Crisp foreground wave */}
        <path
          d="M0,105 C320,30 540,150 840,75 C1100,10 1280,120 1440,90 L1440,180 L0,180 Z"
          fill="#ffffff"
        />
      </svg>
    </div>
  )
}
