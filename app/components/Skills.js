import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

function AutoPlay() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5, 
        slidesToScroll: 1,
        autoplay: true,
        speed: 6000,
        arrows: false,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 768, 
            settings: {
              slidesToShow: 2, 
            }
          }
        ]
      };

  const skills = [
    { name: "HTML", src: "/html-5.png", percentage: "95%" },
    { name: "CSS", src: "/css-3.png", percentage: "95%" },
    { name: "JavaScript", src: "/js.png", percentage: "80%" },
    { name: "React", src: "/science.png", percentage: "80%" },
    { name: "Database", src: "/database.png", percentage: "60%" },
   
  ];
  return (
    <div className="slider-container my-10">
      <Slider {...settings}>
        {
            skills.map((skill, index) => (
                <div key={index} className="slick-slide flex items-center justify-between px-4 md:px-6">
                <img src={skill.src} className="w-[10vw] md:w-[3vw]" alt="" />
                <div className="flex flex-col items-center justify-center w-full ml-4">
                  <p className="text-white font-bold text-xs md:text-base">{skill.name}</p>
                  <div className="w-full h-2 bg-gray-500 rounded-lg mt-1">
                    <div className="h-2 bg-green-400 rounded-lg" style={{ width: `${skill.percentage}` }}></div>
                  </div>
                </div>
              </div>
              
            ))
        }

      </Slider>
    </div>
  );
}

export default AutoPlay;
