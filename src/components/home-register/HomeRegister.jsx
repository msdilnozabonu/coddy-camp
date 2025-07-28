import { news } from "@/assets/images";
import React, { useState } from "react";

export const HomeRegister = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        console.log('Form submitted:', formData);
    };

    return (
        <div className="container mx-auto my-45">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-[66px]">
                <div 
                    className="relative w-full max-w-[748px] h-[548px] rounded-[25px] bg-cover bg-center"
                    style={{
                        backgroundImage: `linear-gradient(0deg, #071D34 6.48%, rgba(255,255,255,0) 100%), url(${news})`
                    }}
                >
                    <div className="absolute bottom-[58px] left-[35px] right-[56px]">
                        <p className="text-white text-[24px] font-semibold leading-[32px] font-sans">
                            Sergeli Hokimi "Korzinka"ga sayt qilgan o'quvchimizni qo'llab-quvvatladi!
                        </p>
                    </div>
                </div>

                <div className="w-full max-w-[465px] h-[548px] bg-white rounded-[25px] py-[45px] px-[39px] shadow-lg">
                    <h2 className="text-[#071D34] text-[30px] font-semibold leading-[32px] mb-2 font-sans">
                        Ro'yxatdan o'tish
                    </h2>
                    <p className="text-[#071D34] text-[20px] font-normal leading-[32px] mb-6 font-sans">
                        Ro'yxatdan o'ting va bepul konsultatsiya oling
                    </p>

                    <div className="flex flex-col gap-8">
                        <div>
                            <div className="block text-[#353535] text-[18px] font-normal mb-2 font-sans">
                                Ism-familiya
                            </div>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Rustamov Ali"
                                className="w-full h-[56px] px-4 rounded-[15px] border border-[#F4F4F4] bg-[#F6F6F6] text-[#353535] text-[18px] font-normal focus:outline-none focus:ring-2 focus:ring-[#FF4F28] focus:border-transparent placeholder-[#9696A1] font-sans"
                            />
                        </div>

                        <div>
                            <div className="block text-[#353535] text-[18px] font-normal mb-2 font-sans">
                                Telefon raqam
                            </div>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                placeholder="+998 (99) 885 30 10"
                                className="w-full h-[56px] px-4 rounded-[15px] border border-[#F4F4F4] bg-[#F6F6F6] text-[#353535] text-[18px] font-normal focus:outline-none focus:ring-2 focus:ring-[#FF4F28] focus:border-transparent placeholder-[#9696A1] font-sans"
                            />
                        </div>

                        <button
                            onClick={handleSubmit}
                            className="w-full h-[60px] flex justify-center items-center bg-[#FF4F28] text-white text-[18px] font-bold rounded-[15px] hover:bg-[#e63e1f] transition-colors duration-200 mt-6 font-sans"
                        >
                            Ro'yxatdan o'tish
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};