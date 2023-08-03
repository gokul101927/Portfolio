import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface Props {
    children: React.ReactNode
}

const AnimateIn:React.FC<Props> = ({ children }) => {
  const divRef = useRef(null)

  useEffect(() => {
    const ref = divRef.current

    // gsap.from(ref, {
    //     opacity: 0,
    //     y: 30,
    //     duration: 1,
    //     scrollTrigger: {
    //         trigger: ref,
    //         start: 'top 50%',
    //     }
    // })

    // animates when entering viewport
    gsap.to(ref, {
      scrollTrigger: {
        trigger: ref,
      },
      duration: 1,
      autoAlpha: 1,
      y: 0,
      // opacity: 1
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div ref={divRef}>
      {children}
    </div>
  )
}

export default AnimateIn