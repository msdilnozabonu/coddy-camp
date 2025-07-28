import { logo1, youtube, instagram, telegram } from "@/assets/images";
import { headerData } from "@/data";
import { Link, NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-footerBg py-8">
        <div className="container mx-auto">
            <div className="flex items-center gap-[234px]">
                <Link to="/">
                    <img src={logo1} alt="logo" className="text-white" />
                </Link>
                <ul className="flex gap-[30px]">
                    {headerData?.map((item) => (
                    <li key={item.name}>
                        <NavLink
                        to={item.link}
                        className={({ isActive }) =>
                            `text-lg font-semibold ${
                            isActive ? "text-red-500" : "text-white"
                            }`
                        }
                        >
                        {item.name}
                        </NavLink>
                    </li>
                    ))}
                </ul>
            </div>

            <div className="flex justify-end items-center mr-[345px]">
                <p className="text-footerText text-right">+998 55 601 0201</p>
            </div>


            <div className="flex justify-left items-center gap-[13.6px]">
                <img src={telegram} alt="logo" className="text-white" />
                <img src={youtube} alt="logo" className="text-white" />
                <img src={instagram} alt="logo" className="text-white" />
            </div>

            <div>
                <p className="text-white text-center text-sm font-normal font-[Poppins] leading-none">
                    © Copyright 2021 Coddy Camp. All rights reserved
                </p>
            </div>

      </div>
      
    </footer>
  );
}