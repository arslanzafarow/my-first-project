// src/components/Hero.jsx
import React from "react";
import bg from "../images/bg.jpg";
import logo from "../images/projeco-logo.png";

export default function Hero() {
  return (
    <section
      style={{
        backgroundImage: `url(${bg})`,
        width: "100%",
        height: "53.5vw",
        minHeight: "600px",
        maxHeight: "900px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* 🔹 Логотип в самом верху */}
      <img
        src={logo}
        alt="KONSTUCT logo"
        style={{
          position: "absolute",
          top: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "101.6px",
          height: "23px",
          opacity: 1,
        }}
      />

      {/* 🔹 Основной контент по центру */}
      <div
        style={{
          textAlign: "center",
          color: "#ffffff",
          marginTop: "2vw",
        }}
      >
        <h1
          style={{
            fontFamily: "BebasNeueBold, sans-serif",
            fontWeight: 400,
            fontSize: "2.5vw", // примерно эквивалентно 60px при ширине 1440px
            lineHeight: "100%",
            letterSpacing: "0.4vw", // адаптивно к размеру шрифта
            textAlign: "center",
            verticalAlign: "bottom",
            color: "#ffffff",
            margin: 0,
          }}
        >
          PARTNER WITH KONSTUCT
        </h1>

        <p
          style={{
            fontFamily: "OpenSans, sans-serif",
            fontWeight: 600,
            fontSize: "16px",
            lineHeight: "100%",
            letterSpacing: "0px",
            textAlign: "center",
            verticalAlign: "bottom",
            color: "#ffffff",
            marginTop: "8px",
          }}
        >
          An award-winning construction management firm
        </p>

        <p
          style={{
            fontFamily: "OpenSans, sans-serif",
            fontWeight: 600,
            fontSize: "clamp(9px, 0.8vw, 11px)",
            lineHeight: "100%",
            letterSpacing: "3.7px",
            textAlign: "center",
            verticalAlign: "bottom",
            color: "#ffffff",
            position: "absolute",
            bottom: "40px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          SCROLL DOWN
        </p>
      </div>
    </section>
  );
}
