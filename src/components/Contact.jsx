// src/components/Contact.jsx
import React from "react";
import companyImage from "../images/company.png";
import linksImage from "../images/links.png";
import contactImage from "../images/contact (1).png";
import socialsImage from "../images/socials.png";

export default function Contact() {
  return (
    <div>
      {/* Верхняя панель (Newsletter Signup) */}
      <section
        style={{
          width: "100%",
          height: "100px",
          backgroundColor: "#171819",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "30px",
        }}
      >
        {/* Заголовок */}
        <div
          style={{
            width: "216px",
            height: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Open Sans, sans-serif",
            fontWeight: 700,
            fontSize: "22px",
            lineHeight: "100%",
            letterSpacing: "0.85px",
            color: "#FFFFFF",
          }}
        >
          Newsletter Signup
        </div>

        {/* Поле + кнопка */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <input
            type="email"
            placeholder="Enter your email"
            style={{
              width: "250px",
              height: "40px",
              border: "1px solid #979797",
              backgroundColor: "#FFFFFF",
              color: "#000000",
              fontFamily: "Open Sans, sans-serif",
              fontSize: "14px",
              padding: "0 12px",
              outline: "none",
              transition: "border-color 0.3s ease, box-shadow 0.3s ease",
              borderRight: "none",
              borderRadius: "4px 0 0 4px",
            }}
            onMouseOver={(e) => {
              e.target.style.borderColor = "#00A4E5";
              e.target.style.boxShadow = "0 0 5px rgba(0, 164, 229, 0.5)";
            }}
            onMouseOut={(e) => {
              e.target.style.borderColor = "#979797";
              e.target.style.boxShadow = "none";
            }}
          />

          <button
            style={{
              width: "150px",
              height: "40px",
              backgroundColor: "#00A4E5",
              border: "1px solid #00A4E5",
              color: "#FFFFFF",
              fontFamily: "Open Sans, sans-serif",
              fontWeight: 700,
              fontSize: "13px",
              lineHeight: "100%",
              letterSpacing: "0.5px",
              textAlign: "center",
              cursor: "pointer",
              borderRadius: "0 4px 4px 0",
              transition: "background-color 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#008AC2")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#00A4E5")}
          >
            SIGNUP
          </button>
        </div>
      </section>

      {/* Средняя панель (Footer content) */}
      <section
        style={{
          width: "100%",
          height: "240px",
          backgroundColor: "#141A20",
          position: "relative",
          opacity: 1,
        }}
      >
        <img
          src={companyImage}
          alt="Company"
          style={{
            position: "absolute",
            width: "250px",
            height: "148px",
            top: "42px",
            left: "249px",
          }}
        />
        <img
          src={linksImage}
          alt="Links"
          style={{
            position: "absolute",
            width: "262px",
            height: "150px",
            top: "42px",
            left: "570px",
          }}
        />
        <img
          src={contactImage}
          alt="Contact Info"
          style={{
            position: "absolute",
            width: "141px",
            height: "158px",
            top: "42px",
            left: "890px",
          }}
        />
        <img
          src={socialsImage}
          alt="Social Links"
          style={{
            position: "absolute",
            width: "87px",
            height: "13px",
            top: "72px",
            left: "1077px",
          }}
        />
      </section>

      {/* Нижняя полоса (копирайт) */}
      <section
        style={{
          width: "100%",
          height: "60px",
          backgroundColor: "#171819",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            fontFamily: "Open Sans, sans-serif",
            fontWeight: 400,
            fontSize: "11px",
            lineHeight: "100%",
            letterSpacing: "0.85px",
            color: "#FFFFFF",
            margin: 0,
          }}
        >
          © 2017 Konstruct Inc. Designed by Jane Kathryn Teo
        </p>
      </section>
    </div>
  );
}
