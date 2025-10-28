import React from "react";
import logoBlack from "../images/projeco-logo-black.png";
import line from "../images/Line.png";
import plan from "../images/plan.png";
import manage from "../images/manage.png";
import deliver from "../images/deliver.png";

export default function About() {
  const smoothScrollTo = (targetY, duration = 1000) => {
    const startY = window.scrollY || window.pageYOffset;
    const distance = targetY - startY;
    const startTime = performance.now();

    const easeInOutCubic = (t) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const step = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOutCubic(progress);
      window.scrollTo(0, Math.round(startY + distance * eased));
      if (elapsed < duration) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  const handleNavClick = (e, item) => {
    e.preventDefault();
    let targetId = item.toLowerCase();
    if (item === "WORK") targetId = "capabilities";
    if (item === "SERVICES") targetId = "hero";
    if (item === "CONTACT") targetId = "contact";

    const el = document.getElementById(targetId);
    if (el) {
      const targetY = el.getBoundingClientRect().top + window.scrollY;
      smoothScrollTo(targetY, 1000);
    }
  };

  return (
    <section id="about" className="w-full">
      <div className="flex flex-wrap justify-between items-center px-[5%] py-6 bg-white border border-gray-200 shadow-sm">
        <img src={logoBlack} alt="Konstruct Logo" className="w-[79.53px] h-[18px]" />

        <nav className="flex gap-[80px]">
          {["ABOUT", "SERVICES", "WORK", "CONTACT"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => handleNavClick(e, item)}
              className="font-sans font-semibold text-[12px] text-[#48555B] transition-opacity duration-300 cursor-pointer hover:opacity-70"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>

      <div className="w-[94%] max-w-[941px] mx-auto mt-24 flex flex-col items-center">
        <h2 className="font-sans font-bold text-[18px] leading-[100%] tracking-[2.31px]">
          OUR STORY
        </h2>
        <img src={line} alt="line" className="w-[50px] h-[2px] mt-2.5 border-2 border-[#00A4E5]" />
      </div>

      <div className="w-[94%] max-w-[941px] mx-auto mt-12 flex flex-wrap justify-between">
        <div className="w-full md:w-[48%]">
          <p className="font-sans font-bold text-[20px] leading-[100%] tracking-[0.19px] mb-4 text-left">
            Founded in 2011 by John Mathew Smith,{" "}
            <span className="text-[#00A4E5] font-bold text-[20px] tracking-[0.17px]">
              Konstruct
            </span>{" "}
            has become the number one construction management firm.
          </p>
          <p className="font-sans font-normal text-[13px] leading-[23px] tracking-[0.19px] text-left">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.
          </p>
        </div>

        <div className="w-full md:w-[48%] grid grid-cols-3 gap-2.5 items-center justify-items-center mt-6 md:mt-0">
          <img src={plan} alt="plan" className="w-4/5 h-auto" />
          <img src={manage} alt="manage" className="w-4/5 h-auto" />
          <img src={deliver} alt="deliver" className="w-4/5 h-auto" />
        </div>
      </div>
    </section>
  );
}
