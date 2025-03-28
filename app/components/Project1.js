import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

function Project1() {
  const textRef = useRef(null);
  const sectionRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const letters = textRef.current.innerText.split("");
    textRef.current.innerHTML = letters
      .map(
        (letter, index) =>
          `<span className="inline-block opacity-0">${letter}</span>`
      )
      .join("");

    const letterSpans = textRef.current.querySelectorAll("span");

    gsap.fromTo(
      letterSpans,
      {
        x: (index) => (index % 2 === 0 ? -50 : 50),
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        delay: (index) => index * 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.from(sectionRef.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 90%",
        toggleActions: "play none none none",
      },
    });

    gsap.to(imgRef.current, {
      y: -10,
      duration: 0.6,
      repeat: -1,
      yoyo: true,
      ease: "myBounce-squash",
    });
  }, []);

  return (
    <>
      <div className="w-full h-1 bg-purple-900"></div>
      <h1 className="text-center my-5 rowdies-bold font-bold text-2xl md:hidden">
        ARTEMIS AI CHATBOT
      </h1>
      <div className="flex  max-md:flex-col">
        <div
          ref={sectionRef}
          className="botbg max-w-[22vw] max-md:max-w-[80vw] mx-auto h-full p-6 rounded-lg my-10 max-md:my-5"
        >
          <div className="flex flex-col items-center">
            <img
              ref={imgRef}
              src="/chatbot logo.png"
              className="w-14 rounded-full shadow-xl shadow-gray-950"
              alt="Chatbot Logo"
            />
            <div ref={textRef} className="font-bold text-2xl py-3">
              ARTEMIS
            </div>
            <div className="flex justify-center w-full p-4">
              <video
                className="rounded-xl h-full shadow-2xl shadow-black w-52"
                src="/vid1.mp4"
                loop
                muted
                autoPlay
              ></video>
            </div>
          </div>
        </div>
        <div className=" py-14 max-md:py-5">
          <h1 className="text-center my-4 rowdies-bold font-bold text-2xl max-md:hidden">
            ARTEMIS AI CHATBOT
          </h1>
          <div className="max-w-[45vw]  rowdies-bold  max-md:hidden">
            Artemis Chatbot is an advanced AI-powered conversational assistant
            built using the Gemini API, designed to provide intelligent and
            human-like interactions. This chatbot is capable of understanding
            natural language, responding contextually, and assisting users with
            a variety of queries. Artemis is designed for seamless integration
            into websites, applications, and customer support systems, offering
            a smooth and engaging user experience. With its powerful natural
            language processing (NLP) capabilities, it can comprehend complex
            queries, provide relevant answers, and even engage in dynamic
            conversations. One of the standout features of Artemis is its
            ability to adapt to user preferences and personalize responses,
            making interactions more meaningful. It supports multi-turn
            conversations, ensuring that discussions feel natural and
            context-aware. Additionally, Artemis leverages Gemini API's
            cutting-edge AI models, allowing it to learn from interactions and
            improve over time. It can handle tasks such as answering FAQs,
            providing recommendations, and even performing automated workflows.
            With its flexible deployment options, Artemis can be implemented
            across various industries, including customer service, education,
            e-commerce, and healthcare. Whether assisting users with inquiries
            or enhancing digital interactions, Artemis Chatbot represents the
            future of AI-driven communication.
          </div>

          <div className="flex justify-end mt-4 pr-10  max-md:mt-0  max-md:justify-center max-md:pr-0">
            <a href="https://chatbot-artemis-7tj1e4y2x-umang-2003s-projects.vercel.app/">
              <button
                type="button"
                className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer"
              >
                Check it out
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="w-full h-1 bg-purple-800"></div>
    </>
  );
}

export default Project1;
