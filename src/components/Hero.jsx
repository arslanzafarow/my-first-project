import React from "react";
import bg from "../images/bg.jpg";
import logo from "../images/projeco-logo.png";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full flex flex-col items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "53.5vw",
        minHeight: "600px",
        maxHeight: "900px",
      }}
    >
      <img
        src={logo}
        alt="KONSTUCT logo"
        className="absolute top-10 left-1/2 transform -translate-x-1/2 w-[101.6px] h-[23px]"
      />

      <div className="text-center text-white mt-[2vw]">
        <h1 className="font-[BebasNeueBold] text-[2.5vw] leading-[100%] tracking-[0.4vw] m-0">
          PARTNER WITH KONSTUCT
        </h1>
        <p className="font-sans font-semibold text-[16px] leading-[100%] mt-2">
          An award-winning construction management firm
        </p>
      </div>

      <p className="font-sans font-semibold text-[clamp(9px,0.8vw,11px)] tracking-[3.7px] absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white">
        SCROLL DOWN
      </p>
    </section>
  );
}
