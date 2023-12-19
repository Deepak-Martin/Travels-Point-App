import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Footer from "./components/layouts/Footer";
import HeaderComponent from "./components/layouts/HeaderComponent";
import Home from "./pages/Home/Home";
import About from "./pages/AboutUs/About";

function App() {
  return (
    <>
      <Router>
        <HeaderComponent />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/about-us" element={<About />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
