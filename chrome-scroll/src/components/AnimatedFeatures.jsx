import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../styles/animated-features.scss'

gsap.registerPlugin(ScrollTrigger)

export default function AnimatedFeatures() {
  const containerRef = useRef(null)
  const stickyRef = useRef(null)
  const headlineRef = useRef(null)
  const sceneRefs = useRef([])

  // helper to set refs for multiple scene items
  sceneRefs.current = []
  const addSceneRef = el => {
    if (el && !sceneRefs.current.includes(el)) sceneRefs.current.push(el)
  }

  useEffect(() => {
    const container = containerRef.current
    const sticky = stickyRef.current
    const headline = headlineRef.current

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: 'bottom top',
        scrub: 0.6,
        pin: false,
        // markers: true, // uncomment while debugging
      }
    })

    // Scene 1: headline fade and initial mockup scale
    tl.fromTo(
      headline,
      { autoAlpha: 0, y: 30 },
      { autoAlpha: 1, y: 0, duration: 0.6 }
    )

    tl.fromTo(
      sticky.querySelector('.mockup'),
      { scale: 0.9, autoAlpha: 0 },
      { scale: 1, autoAlpha: 1, duration: 0.8 },
      '<0.1'
    )

    // Pause a little
    tl.to({}, { duration: 0.4 })

    // Scene 2: fade headline out, bring in 'Extensions' icons
    tl.to(headline, { autoAlpha: 0, y: -20, duration: 0.5 })
    tl.fromTo(
      sticky.querySelector('.extensions'),
      { y: 40, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.6 }
    )

    tl.to({}, { duration: 0.4 })

    // Scene 3: 'Tabs' scene
    tl.to(sticky.querySelector('.extensions'), { autoAlpha: 0, y: -20, duration: 0.4 })
    tl.fromTo(
      sticky.querySelector('.tabs'),
      { y: 40, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.6 }
    )

    tl.to({}, { duration: 0.4 })

    // Scene 4: final features
    tl.to(sticky.querySelector('.tabs'), { autoAlpha: 0, y: -20, duration: 0.4 })
    tl.fromTo(
      sticky.querySelector('.final-features'),
      { scale: 0.98, autoAlpha: 0, y: 20 },
      { scale: 1, autoAlpha: 1, y: 0, duration: 0.8 }
    )

    // Optional: update an element when progress updates (e.g. header badge)
    ScrollTrigger.create({
      trigger: container,
      start: 'top top',
      end: 'bottom top',
      scrub: true,
      onUpdate: self => {
        // console.log('progress', self.progress)
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
      tl.kill()
    }
  }, [])

  return (
    <section ref={containerRef} className="animated-section">
      <div className="spacer-top" />

      <div className="sticky-wrap" ref={stickyRef}>
        <h2 className="main-headline" ref={headlineRef}>The browser built to be yours</h2>

        <div className="mockup">
          <div className="browser-frame">
            <div className="address-bar">www.example.com</div>
            <div className="content">
              <img src="https://framerusercontent.com/images/Y9zwTaneBHB6mYrE4nyyX07AL0.jpg" alt="placeholder" />
            </div>
          </div>
        </div>

        <div className="scene extensions" ref={addSceneRef}>
          <h3>Extensions that help</h3>
          <div className="icons">
            <div className="icon">H</div>
            <div className="icon">U</div>
            <div className="icon">E</div>
            <div className="icon">M</div>
            <div className="icon">N</div>
          </div>
        </div>

        <div className="scene tabs" ref={addSceneRef}>
          <h3>Take control of your tabs</h3>
          <div className="tab-groups">
            <div className="tab">Project Alpha</div>
            <div className="tab">Portfolio</div>
            <div className="tab">Docs</div>
          </div>
        </div>

        <div className="scene final-features" ref={addSceneRef}>
          <h3>Helpful features built-in</h3>
          <div className="features">
            <div className="feature">Contanct</div>
            <div className="feature">Blog</div>
            <div className="feature">Demo Photography</div>
          </div>
        </div>
      </div>

      <div className="spacer-bottom" />
    </section>
  )
}