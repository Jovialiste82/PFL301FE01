import React, { useState } from "react";
import { texts } from "../config/texts.js";

const ServicesSection = ({ locale }) => {
  const [selectedCard, setSelectedCard] = useState(null);

  const toggleCard = (index) => {
    setSelectedCard(selectedCard === index ? null : index);
  };

  return (
    <section
      className="w-full py-20 flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage: `url(src/assets/pexels-markus-spiske-1089438.jpg)`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-90"></div>
      <div className="text-white text-center p-20 z-10 relative">
        <h2 className="text-2xl font-bold mb-12">
          {texts[locale].servicesSection.title}
        </h2>
        <div className="flex flex-wrap justify-center gap-12">
          {" "}
          {/* Use flexbox here */}
          {texts[locale].servicesSection.services.map((service, index) => (
            <button
              key={index}
              onClick={() => toggleCard(index)}
              className="bg-gray-800 w-56 h-56 bg-opacity-75 rounded-lg p-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              aria-expanded={selectedCard === index ? "true" : "false"}
              aria-label={
                selectedCard === index ? "Hide details" : "Show details"
              }
            >
              <div className="h-full flex items-center justify-center text-center">
                {selectedCard === index ? (
                  <p className="text-sm">{service.description}</p>
                ) : (
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
