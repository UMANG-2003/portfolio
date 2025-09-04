import React, { useEffect, useRef } from "react";
import gsap from "gsap";

function Hero() {
  const containerRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const text3Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro animation
      gsap.from(text1Ref.current, {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(text2Ref.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });

      gsap.from(text3Ref.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.6,
        ease: "power3.out",
      });

      // 🎯 3D Hover Effect for first text
      const el = text1Ref.current;

      const handleMouseMove = (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * 10;
        const rotateY = ((x - centerX) / centerX) * 10;

        gsap.to(el, {
          rotationX: -rotateX,
          rotationY: rotateY,
          transformPerspective: 600,
          transformOrigin: "center",
          ease: "power2.out",
          duration: 0.3,
        });
      };

      const resetTransform = () => {
        gsap.to(el, {
          rotationX: 0,
          rotationY: 0,
          ease: "power2.out",
          duration: 0.5,
        });
      };

      el.addEventListener("mousemove", handleMouseMove);
      el.addEventListener("mouseleave", resetTransform);

      return () => {
        el.removeEventListener("mousemove", handleMouseMove);
        el.removeEventListener("mouseleave", resetTransform);
      };
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative z-10 flex flex-col items-center justify-center text-center px-4 pb-20"
    >
      {/* Glassmorphism Badge */}
      <p
        ref={text1Ref}
        className="text-sm sm:text-base md:text-xl lg:text-sm text-white bg-white/10 backdrop-blur-md border border-white/20 px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg cursor-pointer"
      >
        Hover to say Hii, I'm Umang — a MERN Developer 👋
      </p>

      {/* Main Heading */}
      <p
        ref={text2Ref}
        className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold max-w-4xl"
      >
        Blending design and research with MERN development
      </p>

      {/* Subtext */}
      <p
        ref={text3Ref}
        className="mt-4 text-base sm:text-lg md:text-xl text-gray-400 max-w-md sm:max-w-xl md:max-w-2xl"
      >
        to build digital experiences that are simple, seamless, and impactful
      </p>
    </div>
  );
}

export default Hero;
