import React, { Fragment, useEffect, useState } from 'react'
import WhatsAppImage from '../assets/WhatsApp Image 2026-01-08 at 8.07.18 PM.jpeg'

const Section1 = () => {
  const [entered, setEntered] = useState(false)

  useEffect(() => {
    const raf = requestAnimationFrame(() => setEntered(true))
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <>

    <div className="section1">
      <h3
        style={{
          opacity: entered ? 1 : 0,
          transform: entered ? 'translateY(0) translateX(0)' : 'translateY(20px) translateX(8px)',
          transition: 'opacity 2s ease-out, transform 3s ease-out'
        }}
      >
        A curious developer who loves turning ideas into interactive web experiences
        and smart IoT solutions, blending creativity, logic and continuous learning
        to build meaningful projects.
      </h3>
      <img
        src={WhatsAppImage}
        className="Main_img"
        alt="WhatsApp Image 2026-01-08 at 8.07.18 PM"
      />
    </div>
    
    </>
  )
}

export default Section1
