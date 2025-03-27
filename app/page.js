"use client"
import React, { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Section1 from './components/Section1';
import gsap from 'gsap';

function Page() {
  const navRef = useRef(null);
  const welcomeRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(welcomeRef.current, {
      opacity: 1,
      duration: 1.5,
      ease: 'power1.inOut',
    })
    .to(welcomeRef.current, {
      opacity: 0,
      duration: 1.5,
      ease: 'power1.inOut',
      onComplete: () => {
        welcomeRef.current.style.display = 'none';
      }
    })
    .from(navRef.current, {
      y: -100,
      duration: 1,
      ease: 'power1.inOut',
    })
    .from(sectionRef.current, {
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: 'power1.inOut',
    }, "-=0.5");
  }, []);

  return (
    <>
      <div ref={welcomeRef} className="fixed inset-0 flex items-center justify-center bg-black text-white text-3xl opacity-0">
        Welcome
      </div>

      <Navbar navRef={navRef} />
      <div className='max-w-[90%] mx-auto' ref={sectionRef}>
        <Section1 />
      </div>
    </>
  );
}

export default Page;