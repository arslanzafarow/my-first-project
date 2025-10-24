// src/components/Services.jsx
import React from "react";
import line from "../images/Line.png";
import service1 from "../images/service.png";
import service2 from "../images/service (1).png";
import service3 from "../images/service (2).png";

export default function Services() {
  return (
    <section
      style={{
        width: "94%",
        maxWidth: "940px",
        height: "446px",
        margin: "80px auto 0 auto",
        opacity: 1,
        background: "#FFFFFF",
        position: "relative",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      {/* 🔹 Заголовок OUR CAPABILITIES */}
      <h2
        style={{
          fontFamily: "OpenSans, sans-serif",
          fontWeight: 700,
          fontSize: "18px",
          lineHeight: "100%",
          letterSpacing: "2.31px",
          verticalAlign: "bottom",
          width: "198px",
          height: "25px",
          margin: 0,
          position: "absolute",
          top: "-1px",
          left: "0",
          whiteSpace: "nowrap",
        }}
      >
        OUR CAPABILITIES
      </h2>

      {/* 🔹 Линия под заголовком */}
      <img
        src={line}
        alt="line"
        style={{
          position: "absolute",
          top: "34px",
          left: "0",
          width: "50px",
          height: "2px",
          opacity: 1,
          border: "2px solid #00A4E5",
        }}
      />

      {/* 🔹 Текст Lorem рядом с заголовком */}
      <p
        style={{
          fontFamily: "OpenSans, sans-serif",
          fontWeight: 400,
          fontSize: "11px",
          lineHeight: "19px",
          letterSpacing: "0.2px",
          verticalAlign: "middle",
          position: "absolute",
          top: "0px",
          left: "353px",
          width: "405.4035px",
          height: "38px",
          margin: 0,
          textAlign: "left",
          opacity: 1,
        }}
      >
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.
      </p>

      {/* 🔹 Кнопка ALL SERVICES */}
      <button
        style={{
          position: "absolute",
          top: "0px",
          right: "0px",
          width: "150px",
          height: "40px",
          background: "#00A4E5",
          color: "#FFFFFF",
          fontFamily: "OpenSans, sans-serif",
          fontWeight: 700,
          fontSize: "13px",
          lineHeight: "100%",
          letterSpacing: "0.5px",
          border: "none",
          cursor: "pointer",
        }}
      >
        ALL SERVICES
      </button>

      {/* 🔹 Три картинки с абсолютными позициями */}
      <img
        src={service1}
        alt="service 1"
        style={{
          position: "absolute",
          top: "116px",
          left: "0px",
          width: "295px",
          height: "330px",
          opacity: 1,
        }}
      />
      <img
        src={service2}
        alt="service 2"
        style={{
          position: "absolute",
          top: "116px",
          left: "323px",
          width: "295px",
          height: "330px",
          opacity: 1,
        }}
      />
      <img
        src={service3}
        alt="service 3"
        style={{
          position: "absolute",
          top: "116px",
          left: "645px",
          width: "295px",
          height: "330px",
          opacity: 1,
        }}
      />
    </section>
  );
}
