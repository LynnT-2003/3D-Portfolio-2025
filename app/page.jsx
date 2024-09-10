"use client";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import React, { useRef } from "react";

const App = () => {
  return (
    <main className="mx-auto">
      <Navbar />
      <Hero />
    </main>
  );
};

export default App;
