// client/src/components/Footer.jsx
import React, { useState } from "react";
import { texts } from "../config/texts.js";
import { ENV_VARIABLES } from "../config/env.js";
import { toast } from "react-toastify";

const Footer = ({ locale, env }) => {
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const API_URL = `${ENV_VARIABLES[env].BASE_API_URL}/api/v1/mail`;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setIsSending(true);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Clear form data after successful submission
      setFormData({
        email: "",
        subject: "",
        message: "",
      });

      if (!response.ok) throw new Error("Network response was not ok.");
      setIsSending(false);
      toast.success(texts[locale].footer.toast.success); // Display success toast
      // console.log("Server Response:", response);
    } catch (error) {
      // Clear form data after successful submission
      setFormData({
        email: "",
        subject: "",
        message: "",
      });
      console.error("Submission Error:", error);
      setIsSending(false);
      toast.error(texts[locale].footer.toast.error); // Display error toast
    }
  };

  return (
    <footer className="w-full relative text-white py-20">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(src/assets/pexels-markus-spiske-1089438.jpg)`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-90"></div>
      </div>

      {/* Content should be placed above the background with higher z-index */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 z-10 relative py-10">
        <div className="flex-1 px-10 py-4">
          <h2 className="text-2xl font-bold mb-4">
            {texts[locale].footer.title}
          </h2>

          <p className="mb-4 ">{texts[locale].footer.description}</p>
        </div>
        <div className="flex-1 p-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 ">
                {texts[locale].footer.email}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                maxLength="30"
                className="w-full p-2 border border-gray-300 rounded-md text-black"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="subject" className="block mb-2">
                {texts[locale].footer.subject}
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                maxLength="30"
                className="w-full p-2 border border-gray-300 rounded-md text-black"
                value={formData.subject}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2">
                {texts[locale].footer.message}
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="4"
                maxLength="400"
                className="w-full p-2 border border-gray-300 rounded-md text-black"
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <button
              type="submit"
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
                isSending ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isSending}
            >
              {texts[locale].footer.send}
            </button>
          </form>
        </div>
      </div>

      {/* Bottom line - always visible at the bottom */}
      <div className="text-center absolute bottom-0 left-0 right-0 pb-2 z-20">
        © 2024 contact@philippecharpentier.dev
      </div>
    </footer>
  );
};

export default Footer;
