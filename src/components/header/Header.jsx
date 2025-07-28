import { RuIcon } from "@/assets/icons";
import { logo } from "@/assets/images";
import { headerData } from "@/data";
import { Link, NavLink } from "react-router-dom";
import { Button } from "../ui/button";

export const Header = () => {
  return (
    <header className="bg-white rounded-bl-[24px] rounded-br-[24px] py-[15px] shadow-md">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to={"/"}>
            <img src={logo} alt="logo" />
          </Link>
          <ul className="flex gap-[30px] ">
            {headerData?.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.link}
                  className={({ isActive }) =>
                    `font-semibold text-lg ${
                      isActive ? "text-red-500" : "text-black"
                    } `
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="flex gap-1.5 items-center">
            <span className="w-[86px]">
              <RuIcon />
            </span>
            <Button className="cursor-pointer px-5 py-[11px] text-lg font-bold h-[50px] bg-sunColor">Ro'yxatdan O'tish</Button>
          </div>
        </div>
      </div>
    </header>
  );
};
