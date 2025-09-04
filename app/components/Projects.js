"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const headingRef = useRef(null);

  const projects = [
    {
      title: "Chatbot Artemis",
      description:
        "An AI-powered chatbot built to showcase conversational AI and automation skills.",
      image: "/chatbot.png",
      link: "https://chatbot-artemis.vercel.app/",
    },
    {
      title: "Hidden Snaps",
      description:
        "An app for securely saving private images with hidden storage.",
      image: "/hidden snaps.png",
      link: "https://hidden-snaps.vercel.app/",
    },
    {
      title: "Learning Management System",
      description:
        "A platform for managing courses, students, and online learning.",
      image: "/lms.png",
      link: "https://lms-frontend-nu-seven.vercel.app/",
    },
    {
      title: "Pocket Player",
      description:
        "A compact music player powered by the Spotify API, designed for seamless streaming on the go.",
      image: "/player.png",
      link: "https://pocketplayer.vercel.app/",
    },
    {
      title: "Book Store Admin Panel",
      description:
        "Manage inventory, track orders, and update listings for your online bookstore with ease.",
      image: "/book.png",
      link: "https://book-app-tazf.onrender.com",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
        },
        opacity: 0,
        y: -30,
        duration: 1.2,
        delay: 0.3,
        ease: "power3.out",
      });

      gsap.from(cardsRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 80,
        rotationX: -15,
        scale: 0.95,
        duration: 1.4,
        stagger: 0.25,
        ease: "power4.out",
      });

      cardsRef.current.forEach((card) => {
        const rotateAmount = 15;
        const shadowAmount = 40;

        const handleMouseMove = (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;

          const rotateY = ((x - centerX) / centerX) * rotateAmount;
          const rotateX = ((centerY - y) / centerY) * rotateAmount;

          const shadowX = ((x - centerX) / centerX) * shadowAmount;
          const shadowY = ((y - centerY) / centerY) * shadowAmount;

          gsap.set(card, { scale: 1.08 });

          gsap.to(card, {
            rotationY: rotateY,
            rotationX: rotateX,
            boxShadow: `${-shadowX}px ${shadowY}px 50px rgba(168, 85, 247, 0.35)`,
            transformPerspective: 1200,
            ease: "expo.out",
            duration: 0.6,
          });
        };

        const resetCard = () => {
          gsap.to(card, {
            rotationY: 0,
            rotationX: 0,
            scale: 1,
            boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
            ease: "expo.out",
            duration: 0.6,
          });
        };

        card.addEventListener("mousemove", handleMouseMove);
        card.addEventListener("mouseleave", resetCard);
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <h2
         id="projects"
        ref={headingRef}
        className="text-md font-semibold text-white border-2 border-white/20 w-fit mx-auto px-4 py-2 bg-white/10 rounded-full"
      >
        Portfolio
      </h2>

      <div
        ref={sectionRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto mt-10 max-w-6xl px-4"
      >
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            ref={(el) => (cardsRef.current[index] = el)}
            className="relative group card rounded-xl overflow-hidden shadow-md border border-white/20 bg-white/10 backdrop-blur-lg"
            style={{ transformStyle: "preserve-3d" }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"></span>

            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover opacity-90"
            />
            <div className="p-5 relative z-10">
              <h3 className="text-lg font-semibold text-white">
                {project.title}
              </h3>
              <p className="text-sm text-gray-300 mt-2">
                {project.description}
              </p>
              <span className="inline-block mt-3 text-purple-300 hover:underline">
                View Demo →
              </span>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}

export default Projects;
