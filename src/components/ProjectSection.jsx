import React, { useState, useEffect } from "react";
import { texts } from "../config/texts.js";
import { ENV_VARIABLES } from "../config/env.js";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import ClipLoader from "react-spinners/ClipLoader";

const FeaturedProjectSection = ({ locale }) => {
  const [projects, setProjects] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const env = process.env.NODE_ENV;
  const API_URL = `${ENV_VARIABLES[env].BASE_API_URL}/api/v1/projects`;

  const fetchProjects = async () => {
    setIsLoading(true);
    setError(false); // Clear previous errors
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setProjects(data);
      setIsLoading(false);
    } catch (err) {
      setError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();

    // Automatic swiping setup for smaller screens
    let timer;
    if (window.innerWidth < 1280 && projects.length > 1) {
      timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
      }, 10000); // 10000 milliseconds = 10 seconds
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [API_URL, projects.length]); // Added projects.length to ensure the interval is set after the projects are fetched

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : projects.length - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handleRefresh = () => {
    fetchProjects(); // Call fetchProjects to reload data
  };

  const project = projects[currentIndex] || {};

  return (
    <section className="bg-gradient-to-br from-white to-gray-300 p-10">
      <div className="text-center">
        <h2 className="text-2xl font-bold">
          {texts[locale].projectSection.title}
        </h2>
      </div>
      <div className="flex flex-col xl:flex-row relative items-center justify-center mt-8">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl w-full xl:flex-row flex flex-col items-center justify-between text-center">
          <div className="flex-1">
            {isLoading ? (
              <div className="flex justify-center items-center h-full">
                <ClipLoader color="#000000" size={50} />
              </div>
            ) : error ? (
              <>
                <p className="text-lg text-center">
                  {texts[locale].projectSection.error}
                </p>
                <button
                  onClick={handleRefresh}
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                  {texts[locale].projectSection.retry}
                </button>
              </>
            ) : (
              <>
                <h3 className="text-xl font-semibold">
                  {project.title || "No Title"}
                </h3>
                <p>
                  {project.description
                    ? project.description[locale]
                    : "No description available"}
                </p>
                <a
                  href={project.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-500 text-white rounded px-4 py-2 mt-4 hover:bg-blue-600 transition"
                >
                  {texts[locale].projectSection.link}
                </a>
              </>
            )}
          </div>
          <div className="w-full xl:w-96 h-96 relative overflow-hidden bg-gray-200 mt-4 xl:mt-0 xl:ml-4">
            <img
              src={project.imageUrl || "https://via.placeholder.com/400"}
              alt={project.title || "Placeholder Image"}
              className="absolute w-full h-full object-contain"
            />
          </div>
        </div>
        {!isLoading && !error && projects.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="hidden xl:block absolute left-0 z-10 p-4 cursor-pointer"
            >
              <AiOutlineLeft className="text-2xl text-gray-700" />
            </button>
            <button
              onClick={handleNext}
              className="hidden xl:block absolute right-0 z-10 p-4 cursor-pointer"
            >
              <AiOutlineRight className="text-2xl text-gray-700" />
            </button>
          </>
        )}
      </div>
    </section>
  );
};

export default FeaturedProjectSection;
