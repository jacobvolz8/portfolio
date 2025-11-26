import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'
import LogoS from '../../../assets/images/profile_pic.jpg'
import './index.scss'


const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 20,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 2.5,
        duration: 4,
      }
    )
  }, [])

  return (
    <div className="image-container" ref={bgRef}>
      <img
        className="profile-pic"
        ref={solidLogoRef}
        src={LogoS}
        alt="Me"
      />


    </div>
  )
}


export default Logo

