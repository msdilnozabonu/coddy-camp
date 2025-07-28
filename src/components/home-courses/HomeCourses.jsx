import React from "react";
import { pc, cubes, science } from "@/assets/images";

const CourseCard = ({ title, icon, blurTopRight, blurBottomLeft }) => {
  return (
    <div className="relative w-[368px] h-[332px] flex-shrink-0 rounded-[21px] bg-white shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)] overflow-hidden">
      <div
        className={`absolute 
            top-0 right-0 w-[120px] h-[120px] ${blurTopRight} blur-[31.4px] rounded-full`}
      ></div>
      <div
        className={`absolute bottom-0 left-0 w-[100px] h-[100px] ${blurBottomLeft} blur-[31.4px] rounded-full`}
      ></div>

      <div className="relative z-10 h-full px-[42px] pt-[40px] pb-[25px] flex flex-col justify-between">
        <div>
          <h2 className="text-[#071D34] font-semibold text-[30px] leading-[32px] mb-[17px]">
            {title}
          </h2>
          <div className="flex justify-center mt-[57px]">
            <img
              src={icon}
              alt={title}
              className="w-[103px] h-[103px] object-contain"
            />
          </div>
        </div>

        <button className="w-[56px] h-[56px] bg-[#F3F2F2] rounded-full flex items-center justify-center self-end hover:bg-gray-200 transition-colors">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 12H19M19 12L12 5M19 12L12 19"
              stroke="#071D34"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export const HomeCourses = () => {
  const courses = [
    {
      title: "Dasturlash",
      icon: pc,
      blurTopRight: "bg-[#FFD600]/[0.12]",
      blurBottomLeft: "bg-[#FF4F28]/[0.09]",
    },
    {
      title: "Dizayn",
      icon: cubes,
      blurTopRight: "bg-[#FFB800]/[0.12]",
      blurBottomLeft: "bg-[#FF6B35]/[0.09]",
    },
    {
      title: "Robototexnika",
      icon: science,
      blurTopRight: "bg-[#FFB800]/[0.12]",
      blurBottomLeft: "bg-[#4CAF50]/[0.09]",
    },
  ];

  return (
    <div className="container mx-auto my-45">
      <h1 className="text-[#071D34] font-semibold text-[36px] leading-[80px] mb-[63px]">
        Bizning kurslarimiz
      </h1>

      <div className="flex justify-between gap-22 lg:justify-start">
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            title={course.title}
            icon={course.icon}
            blurTopRight={course.blurTopRight}
            blurBottomLeft={course.blurBottomLeft}
          />
        ))}
      </div>
    </div>
  );
};