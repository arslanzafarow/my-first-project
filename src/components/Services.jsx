import React from "react";
import line from "../images/Line.png";
import service1 from "../images/service.png";
import service2 from "../images/service (1).png";
import service3 from "../images/service (2).png";

export default function Services() {
  return (
    <section id="capabilities" className="relative w-[94%] max-w-[940px] h-[446px] mx-auto mt-20 bg-white p-5">
      <h2 className="absolute top-[-1px] left-0 w-[198px] h-[25px] whitespace-nowrap font-sans font-bold text-[18px] leading-[100%] tracking-[2.31px]">
        OUR CAPABILITIES
      </h2>

      <img src={line} alt="line" className="absolute top-[34px] left-0 w-[50px] h-[2px] border-2 border-[#00A4E5]" />

      <p className="absolute top-0 left-[353px] w-[405.4px] h-[38px] text-left font-sans font-normal text-[11px] leading-[19px] tracking-[0.2px]">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.
      </p>

      <button className="absolute top-0 right-0 w-[150px] h-[40px] bg-[#00A4E5] text-white font-sans font-bold text-[13px] leading-[100%] tracking-[0.5px] cursor-pointer transition-colors duration-300 hover:bg-[#008BCC]">
        ALL SERVICES
      </button>

      <img src={service1} alt="service 1" className="absolute top-[116px] left-0 w-[295px] h-[330px] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-[1.05] hover:brightness-110 z-10" />
      <img src={service2} alt="service 2" className="absolute top-[116px] left-[323px] w-[295px] h-[330px] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-[1.05] hover:brightness-110 z-20" />
      <img src={service3} alt="service 3" className="absolute top-[116px] left-[645px] w-[295px] h-[330px] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-[1.05] hover:brightness-110 z-30" />
    </section>
  );
}
