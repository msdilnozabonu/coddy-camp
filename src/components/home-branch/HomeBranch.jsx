import { useState } from "react";
import { branch, location, time, phone } from "@/assets/images";
import { ChevronDown, ChevronUp } from "lucide-react";

export const HomeBranch = () => {
  const [selectedBranch, setSelectedBranch] = useState("Novza");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const branches = ["Novza", "Yashnobod", "Ganga", "Sergeli", "Yunusobod", "Buyuk Ipak Yo'li"];

  const branchMaps = {
    "Novza": "https://maps.google.com/maps?q=41.295808,69.228770&z=15&output=embed",
    "Sergeli": "https://maps.google.com/maps?q=41.213368,69.214404&z=15&output=embed",
    "Yashnobod": "https://maps.google.com/maps?q=41.298308,69.341936&z=15&output=embed",
    "Buyuk Ipak Yo'li": "https://maps.google.com/maps?q=41.326802,69.338783&z=15&output=embed",
    "Yunusobod": "https://maps.google.com/maps?q=41.365950,69.289959&z=15&output=embed",
    "Ganga": "https://maps.google.com/maps?q=41.331447,69.249697&z=15&output=embed"
  };

  const branchAddresses = {
    "Novza": "Bunyodkor shoh koʻchasi, 7G",
    "Yashnobod": "Qorasuv koʻchasi, 35",
    "Ganga": "Olmazor tumani, Sebzor dahasi, 4B",
    "Sergeli": "Sergeli tumani, Mirzo Tursunzoda koʻchasi",
    "Yunusobod": "Ahmad Donish koʻchasi, 47",
    "Buyuk Ipak Yo'li": "Sayohat koʻchasi, 2"
  };

  const handleBranchChange = (branch) => {
    setSelectedBranch(branch);
    setDropdownOpen(false);
  };

  return (
    <section className="container mx-auto py-45 text-left">
      <h2 className="text-[#071D34] text-4xl font-semibold leading-[80px] mb-10">
        Bizning filiallarimiz
      </h2>

      <div className="relative w-[208px] ml-auto mb-4">
        <button
          onClick={() => setDropdownOpen((prev) => !prev)}
          className="w-full h-[68px] bg-white border border-[#F3F2F2] rounded-[17px] py-[18px] pr-[26px] pl-4 flex justify-between items-center text-[#071D34] text-xl font-medium leading-8 shadow-sm hover:bg-gray-50 transition-all duration-200"
        >
          <span className="truncate">
            {selectedBranch} filiali
          </span>
          {dropdownOpen ? (
            <ChevronUp className="w-5 h-5 text-gray-500 ml-2 transition-transform duration-200 transform" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500 ml-2 transition-transform duration-200 transform" />
          )}
        </button>

        <ul className={`absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transition-all duration-200 ease-in-out ${dropdownOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[-10px] pointer-events-none"}`}>
          {branches.map((branch) => (
            <li
              key={branch}
              onClick={() => handleBranchChange(branch)}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-[#071D34] text-base transition-colors duration-150"
            >
              {branch} filiali
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col lg:flex-row gap-[29px] justify-between h-[630px]">
        <img
          src={branch}
          alt={`${selectedBranch} branch`}
          className="rounded-[25px] w-full max-w-[600px] object-cover transition-opacity duration-500 opacity-100"
          key={selectedBranch}
        />

        <div className="bg-white rounded-[25px] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)] flex flex-col gap-[34px] w-full transition-all duration-300">
          <div className="pt-10 pb-[25px] pl-[29px] pr-[22px] flex flex-col gap-[34px]">
            <p className="text-[#071D34] text-[30px] font-semibold leading-8 transition-colors duration-300">
              Coddy Camp {selectedBranch} filiali
            </p>

            <div className="flex items-start gap-4">
              <img src={location} alt="Location" className="w-[43px] h-[43px] transition-opacity duration-300" />
              <p className="text-[#071D34] text-xl font-normal leading-8 transition-colors duration-300">
                {branchAddresses[selectedBranch]}, Toshkent
              </p>
            </div>

            <div className="flex items-start gap-4">
              <img src={time} alt="Time" className="w-[43px] h-[43px] transition-opacity duration-300" />
              <p className="text-[#071D34] text-xl font-normal leading-8 transition-colors duration-300">09:00 - 20:00</p>
            </div>

            <div className="flex items-start gap-4">
              <img src={phone} alt="Phone" className="w-[43px] h-[43px] transition-opacity duration-300" />
              <p className="text-[#071D34] text-xl font-normal leading-8 transition-colors duration-300">
                +998 (94) 136 02 01
              </p>
            </div>

            <div className="w-full h-[250px] overflow-hidden rounded-[25px] transition-all duration-500">
              <iframe
                src={branchMaps[selectedBranch]}
                title={`${selectedBranch} Map`}
                className="w-full h-full border-0 rounded-[25px] transition-opacity duration-500"
                loading="lazy"
                allowFullScreen
                key={selectedBranch}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};