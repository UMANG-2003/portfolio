"use client"
import React, { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Section1 from './components/Section1';
import gsap from 'gsap';
import Skills from './components/Skills';

function Page() {
  const navRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(navRef.current, {
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
      <Navbar navRef={navRef} />
      <div className='max-w-[90%] mx-auto' ref={sectionRef}>
        <Section1 />
      </div>
      <div className='w-full h-1 bg-gray-800'></div>
      <Skills />
      <div className='w-full h-1 bg-gray-800'></div>
    
    </>
  );
}

export default Page;
