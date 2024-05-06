// client/src/components/HeroSection.jsx
import React from "react";
import { texts } from "../config/texts.js";
import { ENGLISH, FRENCH } from "../config/constants";
import { TbCircleChevronsDown } from "react-icons/tb";

const HeroSection = ({ locale, setLocale }) => {
  const toggleLocale = () => {
    setLocale(locale === ENGLISH ? FRENCH : ENGLISH);
  };

  // Function to handle smooth scroll
  const scrollToChatBotSection = () => {
    document
      .getElementById("chatBotSection")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="w-full h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage: `url(src/assets/pexels-markus-spiske-1089438.jpg)`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>
      <div className="text-white text-center p-20 z-10 relative">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold p-6">
          {texts[locale].heroSection.title}
        </h1>
        <p className="text-xl md:text-2xl p-6">
          {texts[locale].heroSection.subtitle}
        </p>
        <p className="text-xl md:text-2xl p-4">
          {texts[locale].heroSection.marvin}
        </p>

        <div className="flex items-center justify-center space-x-4 mt-4">
          <span>English</span>
          <button
            onClick={toggleLocale}
            className={`w-12 h-6 flex items-center rounded-full p-1 ${
              locale === ENGLISH
                ? "bg-gray-400 justify-start"
                : "bg-blue-500 justify-end"
            }`}
          >
            <div className="bg-white w-4 h-4 rounded-full shadow-md"></div>
          </button>
          <span>Français</span>
        </div>

        {/* Chevron icon for smooth scrolling */}
        <div
          onClick={scrollToChatBotSection}
          className="flex justify-center cursor-pointer mt-6 animate-bounce"
        >
          <TbCircleChevronsDown className="text-4xl text-white mt-8" />
        </div>
      </div>
      {/* Adding the credit text at the bottom left */}
      <a
        href="https://www.pexels.com/fr-fr/photo/logiciel-software-matrice-codes-1089438/"
        className="absolute bottom-0 left-0 text-white p-4 text-sm no-underline  "
        style={{ pointerEvents: "auto", cursor: "pointer" }}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={texts[locale].heroSection.credits}
      >
        {texts[locale].heroSection.credits}
      </a>
    </section>
  );
};

export default HeroSection;
