"use client";
import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";

const App = () => {
  return (
    <main className="mx-auto">
      <Navbar />
      <Hero />
      <Projects />
    </main>
  );
};

export default App;
