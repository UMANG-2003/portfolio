"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const navbarRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef([]);
  const dropbarRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(navbarRef.current, {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(logoRef.current, {
        scale: 0,
        duration: 1,
        delay: 0.5,
        ease: "back.out(1.7)",
      });

      gsap.from(linksRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.8,
        delay: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      });
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (isOpen) {
      gsap.to(dropbarRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
      });
    } else {
      gsap.to(dropbarRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: "power3.in",
      });
    }
  }, [isOpen]);

  return (
    <>
      <div
        ref={navbarRef}
        className="hidden w-full h-16 md:flex items-center px-10 justify-between fixed top-0 left-0 z-50 bg-black/70 backdrop-blur-lg"
      >
        <div ref={logoRef} className="flex items-center gap-2">
          <Image src="/logo.png" style={{width: 'auto', height: 'auto'}} alt="logo" width={30} height={30} />
          <h1 className="text-2xl font-bold text-white">UMANG</h1>
        </div>

        <div className="hidden md:flex">
          <ul className="flex items-center gap-10">
            {["Projects", "About", "Contact"].map((item, i) => (
              <li
                key={i}
                ref={(el) => (linksRef.current[i] = el)}
                className="cursor-pointer"
              >
                <a href={`#${item.toLowerCase()}`} className="text-white">
                  {item}
                </a>
              </li>
            ))}

            <li ref={(el) => (linksRef.current[3] = el)}>
              <a
                href="#resume"
                className="group text-white flex items-center gap-2 border-2 border-white px-3 py-1 rounded-full transition-all duration-300 hover:bg-gray-900 hover:text-gray-100"
              >
                <lord-icon
                  src="https://cdn.lordicon.com/kdduutaw.json"
                  trigger="hover"
                  stroke="bold"
                  colors="primary:#ffffff,secondary:#ffffff"
                  style={{ width: "20px", height: "20px" }}
                  className="group-hover:scale-110 transition-transform duration-300"
                ></lord-icon>
                <span>See Resume</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="md:hidden fixed top-0 left-0 w-full z-50 bg-black/70 border-b border-gray-800 backdrop-blur-lg">
        <div className="flex items-center justify-between px-5 h-16">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" style={{width: 'auto', height: 'auto'}} alt="logo" width={25} height={25} />
            <h1 className="text-xl font-bold text-white">UMANG</h1>
          </div>

          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <FaTimes className="text-white text-2xl" />
            ) : (
              <FaBars className="text-white text-2xl" />
            )}
          </button>
        </div>

        <div
          ref={dropbarRef}
          className="overflow-hidden h-0 opacity-0 bg-black text-white"
        >
          <ul className="flex flex-col gap-6 p-5">
            {["Projects", "About", "Contact"].map((item, i) => (
              <li key={i}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="block text-mfd hover:text-gray-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#resume"
                className="block text-mfd hover:text-gray-300"
                onClick={() => setIsOpen(false)}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
