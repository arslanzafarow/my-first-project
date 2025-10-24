// src/components/BackgroundSection.jsx
import React from "react";
import bgImage from "../images/aag.png";

export default function BackgroundSection() {
  return (
    <section
      style={{
        width: "100%",
        height: "498.24px",
        margin: "0 auto",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        display: "flex",
        flexDirection: "column", // чтобы текст и кнопка шли вертикально
        alignItems: "center",
        justifyContent: "center",
        gap: "20px", // расстояние между текстом и кнопкой
      }}
    >
      {/* Текст */}
      <div
        style={{
          width: "350px",
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          fontFamily: "Open Sans, sans-serif",
          fontWeight: 700,
          fontSize: "30px",
          lineHeight: "36px",
          letterSpacing: "0.15px",
          color: "#000",
        }}
      >
        Want to build something amazing?
      </div>

      {/* Кнопка */}
      <button
        style={{
          width: "150px",
          height: "40px",
          backgroundColor: "#00A4E5", // синий фон
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Open Sans, sans-serif",
          fontWeight: 700,
          fontSize: "13px",
          lineHeight: "100%",
          letterSpacing: "0.5px",
          color: "#FFFFFF", // белый текст
          textAlign: "center",
          transition: "background-color 0.3s ease",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#008AC2")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#00A4E5")}
      >
        GET IN TOUCH
      </button>
    </section>
  );
}
