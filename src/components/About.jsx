import React from "react";
import logoBlack from "../images/projeco-logo-black.png";
import line from "../images/Line.png";
import plan from "../images/plan.png";
import manage from "../images/manage.png";
import deliver from "../images/deliver.png";

export default function About() {
  return (
    <section>
      {/* 🔹 Верхняя панель */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#ffffff",
          padding: "25px 5%",
          flexWrap: "wrap",
          border: "1px solid #E6E6E6",
          boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
        }}
      >
        {/* Логотип слева */}
        <img
          src={logoBlack}
          alt="Konstruct Logo"
          style={{
            width: "79.527px",
            height: "18px",
            opacity: 1,
          }}
        />

        {/* Навигация справа */}
        <nav
          style={{
            display: "flex",
            gap: "80px",
          }}
        >
          {["ABOUT", "SERVICES", "WORK", "CONTACT"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                fontFamily: "OpenSans, sans-serif",
                fontWeight: 600,
                fontSize: "12px",
                letterSpacing: "1.09px",
                color: "#48555B",
                textDecoration: "none",
                transition: "opacity 0.3s ease",
              }}
              onMouseOver={(e) => (e.target.style.opacity = "0.7")}
              onMouseOut={(e) => (e.target.style.opacity = "1")}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>

      {/* 🔹 Верхний блок OUR STORY */}
      <div
        style={{
          width: "94%",
          maxWidth: "941px",
          margin: "100px auto 0 auto", // увеличенный отступ от navbar
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            fontFamily: "OpenSans, sans-serif",
            fontWeight: 700,
            fontSize: "18px",
            lineHeight: "100%",
            letterSpacing: "2.31px",
            margin: 0,
          }}
        >
          OUR STORY
        </h2>
        <img
          src={line}
          alt="line"
          style={{
            width: "50px",
            height: "2px",
            marginTop: "10px",
            border: "2px solid #00A4E5",
          }}
        />
      </div>

      {/* 🔹 Нижний блок с текстом и картинками */}
      <div
        style={{
          width: "94%",
          maxWidth: "941px",
          margin: "50px auto 0 auto", // отступ сверху, чтобы не прилипал к OUR STORY
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {/* Левая часть с текстом */}
        <div style={{ width: "48%" }}>
          <p
            style={{
              fontFamily: "OpenSans, sans-serif",
              fontWeight: 700,
              fontSize: "20px",
              lineHeight: "100%",
              letterSpacing: "0.19px",
              textAlign: "left",
              marginBottom: "15px",
            }}
          >
            Founded in 2011 by John Mathew Smith,{" "}
            <span
              style={{
                color: "#00A4E5",
                fontFamily: "OpenSans, sans-serif",
                fontWeight: 700,
                fontSize: "20px",
                letterSpacing: "0.17px",
              }}
            >
              Konstruct
            </span>{" "}
            has become the number one construction management firm.
          </p>

          <p
            style={{
              fontFamily: "OpenSans, sans-serif",
              fontWeight: 400,
              fontSize: "13px",
              lineHeight: "23px",
              letterSpacing: "0.19px",
              textAlign: "left",
            }}
          >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.
          </p>
        </div>

        {/* Правая часть с 3 картинками */}
        <div
          style={{
            width: "48%",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "10px",
            alignItems: "center",
            justifyItems: "center",
          }}
        >
          <img src={plan} alt="plan" style={{ width: "80%", height: "auto" }} />
          <img src={manage} alt="manage" style={{ width: "80%", height: "auto" }} />
          <img src={deliver} alt="deliver" style={{ width: "80%", height: "auto" }} />
        </div>
      </div>
    </section>
  );
}
