import React, { useRef } from "react";
import { Play } from "lucide-react";
import { video } from "@/assets/images";

const feedbacks = Array(10).fill({
  name: "Alijonova Zuhra",
  category: "Ota-onalar",
});

export const HomeFeedback = () => {
  const containerRef = useRef(null);

  const scrollToItem = (direction) => {
    const container = containerRef.current;
    if (container) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-left text-3xl md:text-[36px] font-semibold leading-tight md:leading-[80px] text-[#071D34] mb-8 md:mb-16">
        O'quvchilar va ota-onalar fikrlari
      </h2>
      
      <div className="relative">
        <div 
          ref={containerRef}
          className="flex gap-6 md:gap-[45px] overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 no-scrollbar px-2"
        >
          {feedbacks.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 snap-start relative h-[320px] w-[220px] md:h-[395px] md:w-[286px] rounded-3xl bg-cover bg-center bg-no-repeat overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                backgroundImage: `linear-gradient(0deg, #071D34 0.12%, rgba(255,255,255,0) 99.85%), url(${video})`,
              }}
            >
              <div className="absolute top-4 right-4 md:top-[24px] md:right-[20px]">
                <div className="flex items-center gap-2 text-white font-poppins text-sm md:text-[16px] font-medium rounded-full bg-[rgba(212,212,212,0.31)] backdrop-blur-sm w-[150px] md:w-[188px] h-10 md:h-[45px] justify-center">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-white rounded-full flex items-center justify-center">
                    <Play className="w-2.5 h-2.5 md:w-3 md:h-3 fill-[#FF4F28] text-[#FF4F28] ml-0.5" />
                  </div>
                  Videoni ko'rish
                </div>
              </div>

              <div className="absolute bottom-4 left-4 md:bottom-[22px] md:left-[29px]">
                <p className="text-[#FF4F28] font-poppins text-xs md:text-[14px] font-medium mb-1">
                  {item.category}
                </p>
                <p className="text-white font-poppins text-lg md:text-[20px] font-semibold">
                  {item.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};