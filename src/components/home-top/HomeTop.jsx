import {Button} from "../ui/button";
import {bgImage} from "@/assets/images";
import {bgBoy} from "@/assets/images";

const HomeTop = () => {
  return (
    <div className="container mx-auto flex py-[101px] gap-[149px]">
      <div className="absolute top-0 left-[-200px] w-[408px] h-[408px] rounded-full bg-[#FF80641A] blur-[49.35px] z-0"></div>

      <div className="absolute bottom-0 right-[-200px] w-[511px] h-[511px] rounded-full bg-[#36A3F80D] blur-[49.35px] z-0"></div>

      <div className="absolute top-[40%] left-[-150px] w-[250px] h-[250px] rounded-full bg-[#071D341A] blur-[60px] z-0"></div>

      <div className="absolute top-[-100px] right-[100px] w-[200px] h-[200px] rounded-full bg-[#36A3F81A] blur-[40px] z-0"></div>

      <div className="absolute bottom-[-150px] left-[80px] w-[300px] h-[300px] rounded-full bg-[#36A3F80D] blur-[49.35px] z-0"></div>

      <div className="absolute top-[100px] left-[50%] transform -translate-x-1/2 w-[220px] h-[220px] rounded-full bg-[#F3F2F215] blur-[40px] z-0"></div>

      <div className="absolute bottom-[50px] left-[50%] transform -translate-x-1/2 w-[180px] h-[180px] rounded-full bg-[#071D3410] blur-[35px] z-0"></div>


      <div className="flex flex-col items-start gap-4 w-[608px] mt-[42px]">
        <p className="inline-flex px-[14px] py-[4px] justify-center items-center gap-[10px] rounded-[11px] bg-[#F3F2F2] text-[#071D34] text-[16px] font-normal leading-none">
            IT academy
          </p>
        
        <h1 className="font-bold text-5xl leading-[80px] text-[#071D34]">
          Yorqin kelajak uchun IT ko'nikmalarini{' '}
          <span className="text-[#FF4F28]">Coddy Campda</span> o'rganing
        </h1>
        
        <button className="mt-5 inline-flex px-5 py-[10px] justify-center items-center gap-[10px] rounded-[15px] bg-[#FF4F28] text-white font-bold text-[18px] shadow-[6px_6px_10px_rgba(255,79,40,0.20)] cursor-pointer">
            Batafsil ma’lumot
          </button>
      </div>
  
      <div className="flex justify-center items-center relative">
        <img src={bgImage} alt="home-top" className="w-[483px] h-[526px]" />
        <img src={bgBoy} alt="home-top" className="absolute top-[0] right-[40]" />
      </div>
      
    </div>
  )
}

export default HomeTop