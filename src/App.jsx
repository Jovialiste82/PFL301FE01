import React, { useState } from "react";
import HeroSection from "./components/HeroSection";
import ChatBotSection from "./components/ChatBotSection";
import ServicesSection from "./components/ServicesSection";
import ProjectSection from "./components/ProjectSection";
import Footer from "./components/Footer";
import { Helmet } from "react-helmet";
import { ENGLISH, DEVELOPMENT, PRODUCTION } from "./config/constants";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [locale, setLocale] = useState(ENGLISH);
  // const [env, setEnv] = useState(PRODUCTION);
  const [env, setEnv] = useState(DEVELOPMENT);
  return (
    <>
      <ToastContainer />
      <Helmet>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-27R0SG19FD"
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-27R0SG19FD');
          `}
        </script>
        <title>Philippe Charpentier</title>
        <link rel="icon" href="src/assets/favicon.ico" type="image/x-icon" />
      </Helmet>

      <HeroSection locale={locale} setLocale={setLocale} />
      <ChatBotSection locale={locale} env={env} />
      <ServicesSection locale={locale} />
      <ProjectSection locale={locale} />
      <Footer locale={locale} env={env} />
    </>
  );
};

export default App;
