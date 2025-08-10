import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import HeroSection from "./components/HeroSection";
import HomePage from "./HomePage"; // Ensure this file exists

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout wraps nested routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HeroSection />} /> {/* Default route */}
          <Route path="home" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
