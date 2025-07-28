import { data1, data2, data3, data4, result1, result2, result3, process1, process2, process3, process4, arrow} from "@/assets/images";

const processSteps = [
  {
    icon: process1,
    title: "Nazariy bilim",
    desc: "Hafta davomida qulay vaqtda darslarda qatnashiladi",
  },
  {
    icon: process2,
    title: "Amaliyot",
    desc: "Olingan bilimlarni amaliyotda qo'llab mentorga topshiriladi",
  },
  {
    icon: process3,
    title: "Loyihalar",
    desc: "Loyihalar yaratiladi va dasturchi sifatida kurs sertifikati topshiriladi",
  },
  {
    icon: process4,
    title: "Sertifikat",
    desc: "Kurs yakunida ishtirokchiga rasmiy sertifikat beriladi",
  },
];

const benefits = [
  {
    icon: data1,
    title: "IT sohasiga qadam",
  },
  {
    icon: data2,
    title: "Mentor yordami",
  },
  {
    icon: data3,
    title: "Portfolio",
  },
  {
    icon: data4,
    title: "Bepul tadbirlar",
  },
];

const stats = [
  {
    icon: result1,
    value: "1000+",
    text: "Mamnun o'quvchilar",
  },
  {
    icon: result2,
    value: "20+",
    text: "Tajribali mutaxassislar",
  },
  {
    icon: result3,
    value: "10+",
    text: "Zamonaviy kurslar",
  },
];

export const HomeData = () => {
  return (
    <div className="container mx-auto mt-[194px]">
      <section>
        <h2 className="text-[36px] text-[#071D34] font-poppins font-semibold leading-[80px] mb-16 text-left">
          Nega aynan Coddy Campni tanlashingiz kerak?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[38px] justify-items-center">
          {benefits.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[31px] w-[291px] h-[380px] flex fjustify-between flex-col items-left text-left gap-[15px] shadow-sm py-[29px] px-[23px]"
            >
              <div>
                <img src={item.icon} alt={item.title} className="w-[74px] h-[74px]" />
              </div>
              <h3 className="text-[#071D34] font-poppins text-[20px] font-semibold leading-[32px]">
                {item.title}
              </h3>
              <p className="text-[#9696A1] font-poppins text-[16px] font-normal leading-[32px]">
                Kursni boshlash uchun boshlang'ich bilimlar talab etilmaydi, IT sohasiga birinchi qadam qo'yishda va yo'nalish tanlashda mentorlar yordam berishadi
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-45 text-left">
        <h2 className="text-[#071D34] text-[36px] font-poppins font-semibold leading-[80px] mb-10">
          Bizning natijalar
        </h2>
        <div className="flex flex-wrap justify-between items-center">
          {stats.map((item, idx) => (
            <div key={idx} className="flex flex-row items-center gap-[21px]">
              <img src={item.icon} alt={item.text} className="w-[97x] h-[97px] mb-4" />
              <div className="flex flex-col items-start">
                <h3 className="text-black text-[40px] font-poppins font-semibold  text-center capitalize">
                  {item.value}
                </h3>
                <p className="text-[#71717A] text-[22px] font-poppins font-normal tracking-[0.44px]">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-47">
        <h2 className="text-[36px] text-[#071D34] font-poppins font-semibold leading-[80px] mb-[70px]">
          Coddy Campda o'qish jarayoni
        </h2>
        <div className="hidden md:block relative h-[530px]">
          <div className="relative">
            {processSteps.map((step, idx) => {
              const positions = [
                { top: "0", left: "0" },
                { top: "291px", left: "349px" },
                { top: "0", right: "349px" },
                { top: "291px", right: "0" },
              ];
              const style = positions[idx];

              return (
                <div
                  key={idx}
                  className="absolute"
                  style={style}
                >
                  <div className="bg-white rounded-[45px] w-[231px] h-[238px]] py-[20px] px-6 text-center shadow-sm">
                    <img
                      src={step.icon}
                      alt={step.title}
                      className="w-[70px] h-[70px] mx-auto"
                    />
                    <h3 className="text-[#071D34] font-poppins text-[20px] font-semibold my-10px">
                      {step.title}
                    </h3>
                    <p className="text-[#9696A1] font-poppins text-[16px] leading-[26px] font-normal">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}

            <img
              src={arrow}
              alt="arrow1"
              className="absolute"
              style={{ top: "220px", left: "190px" }}
            />
            <img
              src={arrow}
              alt="arrow2"
              className="absolute"
              style={{ top: "220px", left: "590px", transform: "rotate(-90deg)" }}
            />
            <img
              src={arrow}
              alt="arrow3"
              className="absolute"
              style={{ top: "200px", right: "250px", transform: "rotate(-15deg)" }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};