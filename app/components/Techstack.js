"use client";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import Image from "next/image";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

function Techstack() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  const companies = [
    { src: "/react.png", alt: "React", title: "React" },
    { src: "/js.png", alt: "JavaScript", title: "JavaScript" },
    { src: "/html-5.png", alt: "HTML5", title: "HTML5" },
    { src: "/css-3.png", alt: "CSS3", title: "CSS3" },
    { src: "/database.png", alt: "Database", title: "Database" },
    { src: "/nextjs.png", alt: "Next.js", title: "Next.js" },
    { src: "/figma.svg", alt: "Figma", title: "Figma" },
    { src: "/sql.png", alt: "SQL", title: "SQL" },
    { src: "/mongodb.png", alt: "MongoDB", title: "MongoDB" },
    { src: "/tailwind.png", alt: "Tailwind CSS", title: "Tailwind CSS" },
    { src: "/gsap.png", alt: "GSAP", title: "GSAP" },
    { src: "/vite.png", alt: "Vite", title: "Vite" },
    { src: "/python.png", alt: "Python", title: "Python" },
    { src: "/canva.webp", alt: "Canva", title: "Canva" },
  ];

  const titleRef = useRef(null);

  useEffect(() => {
    const el = titleRef.current;

    gsap.to(el, {
      backgroundImage:
        "linear-gradient(270deg, #ff00ff, #00ffff, #ffcc00, #ff0066)",
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: "linear",
    });
  }, []);

  return (
    <>
      <h1
        ref={titleRef}
        className="font-bold my-15 text-center text-2xl bg-clip-text text-transparent border-2 border-white w-fit mx-auto px-6 py-2 rounded-full cursor-pointer"
        style={{
          backgroundImage: "linear-gradient(90deg, #6EE7B7, #3B82F6, #9333EA)",
        }}
      >
        Techstack
      </h1>
      <div className="slider-container w-full max-w-6xl mx-auto px-4 py-8">
        <Slider {...settings}>
          {companies.map((company, idx) => (
            <div
              key={idx}
              className="w-12 h-12 max-md:w-8 max-md:h-8 flex items-center justify-center grayscale hover:grayscale-0 transition"
            >
              <Image
                src={company.src}
                alt={company.alt}
                title={company.title}
                width={48}
                height={48}
                className="w-full h-full object-contain cursor-pointer"
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Techstack;
