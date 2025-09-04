"use client";
import React, { useEffect, useRef } from "react";
import Catcanvas from "./Catcanvas";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const shineRef = useRef(null);

  useEffect(() => {
    const left = leftRef.current;
    const right = rightRef.current;
    const shine = shineRef.current;

    gsap.from(left, {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: left,
        start: "top 80%",
      },
    });

    gsap.from(right, {
      x: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: right,
        start: "top 80%",
      },
    });

    gsap.fromTo(
      shine,
      { x: "-150%" },
      {
        x: "150%",
        duration: 4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        repeatDelay: 0,
      }
    );
  }, []);

  return (
    <>
      <h1 className="text-md font-semibold text-white border-2 border-white/20 w-fit mx-auto px-4 py-2 bg-white/10 rounded-full mt-20">
        About
      </h1>

      <div className="w-full flex flex-col md:flex-row items-center justify-center px-6 md:px-12 py-20 gap-10">
    
        <div
          ref={leftRef}
          className="w-full md:w-1/2 flex justify-center border-2 border-white/20 rounded-lg p-4 bg-white/5 backdrop-blur-md shadow-lg"
        >
          <Catcanvas />
        </div>


        <div
          ref={rightRef}
          className="w-full md:w-1/2 text-center md:text-left space-y-6"
        >
         
          <div className="relative inline-block overflow-hidden">
            <h2 className="relative z-10 text-3xl md:text-4xl lg:text-5xl font-bold leading-snug text-white">
              MERN Developer by trade, <br /> tech enthusiast by lifestyle.
            </h2>

           
            <span
              ref={shineRef}
              className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
            ></span>
          </div>

         
          <p className="text-gray-500 leading-relaxed">
            I’m naturally curious and love figuring out how things work — and
            how they can be better. With a{" "}
            <span className="font-semibold">degree in Technology</span>, I enjoy
            blending <span className="font-semibold">development</span> with a
            bit of <span className="font-semibold">design</span> to bring ideas
            to life. I like capturing everyday moments through{" "}
            <span className="font-semibold">photography</span>, getting lost in{" "}
            <span className="font-semibold">fantasy books</span>, and watching
            films that stay with me.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Most days, you’ll find me learning something new,{" "}
            <span className="font-semibold">building with intent</span> — and
            probably brainstorming my next project idea.
          </p>

          <p className="text-blue-400 font-semibold">
            Location: Ghaziabad, India
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
