"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

function Mouse() {
  const circleRef = useRef(null);

  useEffect(() => {
    const circle = circleRef.current;

    const moveCircle = (e) => {
      gsap.to(circle, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.9,
        ease: "power3.out",
      });
    };
    window.addEventListener("mousemove", moveCircle);

   
    gsap.to(circle, {
      backgroundColor: "rgba(255, 110, 196, 0.4)",
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(circle, {
      backgroundColor: "rgba(120, 115, 245, 0.4)",
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 3,
    });

    return () => {
      window.removeEventListener("mousemove", moveCircle);
    };
  }, []);

  return (
    <div
      ref={circleRef}
      className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-50 max-md:hidden"
      style={{
        backdropFilter: "blur(10px)", 
        WebkitBackdropFilter: "blur(10px)", 
        border: "1px solid rgba(255, 255, 255, 0.3)", 
        boxShadow: "0 4px 20px rgba(0,0,0,0.2)", 
      }}
    ></div>
  );
}

export default Mouse;
