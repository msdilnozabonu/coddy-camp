import { mentor } from "@/assets/images";

export const HomeMentors = () => {
  const mentors = Array(10).fill({
    name: "Izzat Abdullayev",
    role: "Frontend dasturchi va mentor",
  });

  return (
    <div className="container mx-auto">
      <h2 className="text-left text-[36px] font-semibold leading-[80px] mb-[17px]">
        Tajribali mentorlar
      </h2>
      <p className="text-left text-base text-cardsDesc font-normal mb-[4px]">
        Darslar IT loyihalar ishlab chiqishda va ta'lim sohasida katta tajribaga ega mutaxassislar
      </p>
      <p className="text-left text-base text-cardsDesc font-normal mb-[70px]">
        tomonidan olib boriladi.
      </p>

      <div className="flex gap-[60px] overflow-x-auto scroll-smooth snap-x snap-mandatory pb-5 no-scrollbar">
        {mentors.map((mentorData, index) => (
          <div
            key={index}
            className="flex-shrink-0 snap-start flex flex-col items-center"
          >
            <img src={mentor} alt="" />
            <h3 className="text-center mt-[30px] text-[24px] font-bold">
              {mentorData.name}
            </h3>
            <p className="text-center mt-[11px] text-cardsDesc font-normal text-[16px] leading-[26px] w-[177px]">
              {mentorData.role}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
