import React from "react";
import bgImage from "../images/aag.png";

export default function Gallery() {
  return (
    <section
      className="relative flex flex-col items-center justify-center gap-5 w-full h-[498.24px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="w-[350px] h-[72px] flex items-center justify-center text-center font-sans font-bold text-[30px] leading-[36px] tracking-[0.15px] text-black">
        Want to build something amazing?
      </div>

      <button className="w-[150px] h-[40px] bg-[#00A4E5] rounded-sm flex items-center justify-center font-sans font-bold text-[13px] leading-[100%] tracking-[0.5px] text-white transition-colors duration-300 hover:bg-[#008AC2]">
        GET IN TOUCH
      </button>
    </section>
  );
}
