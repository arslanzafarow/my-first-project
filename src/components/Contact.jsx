import React from "react";
import companyImage from "../images/company.png";
import linksImage from "../images/links.png";
import contactImage from "../images/contact (1).png";
import socialsImage from "../images/socials.png";

export default function Contact() {
  return (
    <div>
      <section className="w-full h-[100px] bg-[#171819] flex items-center justify-center gap-7.5">
        <div className="w-[216px] h-[30px] flex items-center justify-center font-sans font-bold text-[22px] leading-[100%] tracking-[0.85px] text-white">
          Newsletter Signup
        </div>
        <div className="flex items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-[250px] h-[40px] border border-[#979797] border-r-0 rounded-l-md px-3 font-sans text-[14px] text-black outline-none transition-all duration-300 focus:border-[#00A4E5] focus:shadow-[0_0_5px_rgba(0,164,229,0.5)]"
          />
          <button className="w-[150px] h-[40px] bg-[#00A4E5] border border-[#00A4E5] text-white font-sans font-bold text-[13px] leading-[100%] tracking-[0.5px] rounded-r-md cursor-pointer transition-colors duration-300 hover:bg-[#008AC2]">
            SIGNUP
          </button>
        </div>
      </section>

      <section className="w-full h-[240px] bg-[#141A20] relative">
        <img src={companyImage} alt="Company" className="absolute top-[42px] left-[249px] w-[250px] h-[148px]" />
        <img src={linksImage} alt="Links" className="absolute top-[42px] left-[570px] w-[262px] h-[150px]" />
        <img src={contactImage} alt="Contact Info" className="absolute top-[42px] left-[890px] w-[141px] h-[158px]" />
        <img src={socialsImage} alt="Social Links" className="absolute top-[72px] left-[1077px] w-[87px] h-[13px]" />
      </section>

      <section id="contact" className="w-full h-[60px] bg-[#171819] flex items-center justify-center">
        <p className="font-sans font-normal text-[11px] leading-[100%] tracking-[0.85px] text-white m-0">
          © 2017 Konstruct Inc. Designed by Jane Kathryn Teo
        </p>
      </section>
    </div>
  );
}
