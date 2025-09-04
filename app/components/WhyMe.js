"use client";
import React, { useEffect, useRef } from "react";
import { Database, Code2, Layers } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PixelBlast from './PixelBlast';

gsap.registerPlugin(ScrollTrigger);

function WhyMe() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".why-heading", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 80,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative w-full">
     
      <div
       
        style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, overflow: 'hidden'  }}
      >
        <PixelBlast
          variant="circle"
          pixelSize={6}
          color="#B19EEF"
          patternScale={3}
          patternDensity={1.2}
          pixelSizeJitter={0.5}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.6}
          edgeFade={0.25}
          transparent
        />
      </div>

      <section
        ref={sectionRef}
        className=" text-white py-20 px-6 md:px-12 relative z-10"
      >
        <div className="text-center">
          <span className="bg-gray-800 text-sm px-4 py-1 rounded-full inline-block mb-6">
            Why me?
          </span>
          <h2 className="why-heading text-3xl md:text-4xl font-bold mb-12">
            MERN Developer who builds scalable & modern apps
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <Database className="text-white" size={24} />,
              title: "Robust Backend",
              text: (
                <>
                  Experienced with <span className="font-semibold">MongoDB</span> &
                  <span className="font-semibold"> Express.js</span>, I design
                  secure, efficient, and scalable backend architectures.
                </>
              ),
            },
            {
              icon: <Code2 className="text-white" size={24} />,
              title: "Interactive Frontend",
              text: (
                <>
                  Building responsive and dynamic UIs with{" "}
                  <span className="font-semibold">React.js</span>, ensuring smooth
                  user experiences across devices.
                </>
              ),
            },
            {
              icon: <Layers className="text-white" size={24} />,
              title: "Full-Stack Expertise",
              text: (
                <>
                  End-to-end development with{" "}
                  <span className="font-semibold">Node.js</span>, APIs,
                  authentication, and deployment, turning ideas into
                  production-ready apps.
                </>
              ),
            },
          ].map((card, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-lg overflow-hidden group transition-transform hover:scale-105"
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-500/30 via-purple-500/20 to-pink-500/30 blur-xl"></div>
              </div>
              <div className="relative z-10">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-white/10 mb-4">
                  {card.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-400 text-sm">{card.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-26">
          <button className="px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition flex items-center gap-2 mx-auto">
            Contact <span className="text-lg">↗</span>
          </button>
        </div>
      </section>
    </div>
  );
}

export default WhyMe;
