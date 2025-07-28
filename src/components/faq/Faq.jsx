import { useState, useRef, useEffect } from "react";
import { Plus, Minus } from "lucide-react";

const faqData = [
  {
    question: "What Medical Services Do You Provide?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
  },
  {
    question: "What Medical Services Do You Provide?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
  },
  {
    question: "What Medical Services Do You Provide?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
  },
  {
    question: "What Medical Services Do You Provide?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
  },
];

export const Faq = () => {
  const [openItems, setOpenItems] = useState([0]);
  const contentRefs = useRef([]);

  const toggleItem = (index) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="container mx-auto mb-45 gap-[70px]">
      <h2 className="text-[#071D34] font-[Poppins, sans-serif] text-[36px] font-semibold leading-[80px] mb-[70px]">
        Ko'p beriladigan savollar
      </h2>

      <div className="space-y-4 gap-[30px]">
        {faqData.map((item, index) => {
          const isOpen = openItems.includes(index);
          return (
            <div
              key={index}
              className="border border-gray-200 rounded-[31px] overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition duration-200"
              >
                <span className="text-[#1F1F1F] text-[18px] font-medium pr-4">
                  {item.question}
                </span>
                <div className="w-[54px] h-[54px] rounded-full bg-[#F6F6F6] flex items-center justify-center">
                  {isOpen ? (
                    <Minus className="w-[35px] h-[35px] text-red-500" />
                  ) : (
                    <Plus className="w-[35px] h-[35px] text-red-500" />
                  )}
                </div>
              </button>

              <div
                ref={(el) => (contentRefs.current[index] = el)}
                style={{
                  maxHeight: isOpen
                    ? `${contentRefs.current[index]?.scrollHeight}px`
                    : "0px",
                }}
                className="transition-all duration-500 ease-in-out overflow-hidden px-6 border-t border-gray-100"
              >
                <p className="text-[#71717A] text-[16px] leading-relaxed font-normal pt-4 pb-6 pr-[125px]">
                  {item.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
