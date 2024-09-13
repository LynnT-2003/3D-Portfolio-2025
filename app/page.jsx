"use client";
import React, { useState, useEffect } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import About from "./sections/About";
import { TextHoverEffect } from "./components/ui/text-hover-effect";
import { AnimatePresence } from "framer-motion";
import Preloader from "./components/Preloader";

import "locomotive-scroll/dist/locomotive-scroll.css";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let locomotiveScroll;

    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      locomotiveScroll = new LocomotiveScroll({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
        smartphone: { smooth: true },
        tablet: { smooth: true },
      });
    })();

    setTimeout(() => {
      setIsLoading(false);

      document.body.style.cursor = "default";

      window.scrollTo(0, 0);
    }, 5000);

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  }, []);

  return (
    <main className="mx-auto" data-scroll-container>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Navbar />
      <Hero />
      <div className="flex flex-col h-screen items-center justify-center">
        <h1 className="md:text-6xl text-5xlfont-bold text-gray-500 flex items-center justify-center pt-24 ">
          Welcome to my Portfolio:
        </h1>
        <h1 className="text-4xl font-thin text-gray-500 flex items-center justify-center pt-12 ">
          Presented by:
        </h1>
        <TextHoverEffect text="LYNN THIT NYI NYI" className="py-0 my-0" />
      </div>

      <div className="md:px-10">
        <About />
        <Projects />
        <Experience />
      </div>
    </main>
  );
};

export default App;
