"use client";
import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";

const App = () => {
  return (
    <main className="mx-auto">
      <Navbar />
      <Hero />
      <div className="md:px-10">
        <Projects />
        <Experience />
      </div>
    </main>
  );
};

export default App;
