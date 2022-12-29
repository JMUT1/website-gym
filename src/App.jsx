import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Gallery from "./pages/gallery/Gallery";
import NotFound from "./pages/notFound/NotFound";
import Plans from "./pages/plans/Plans";
import Trainners from "./pages/trainners/Trainners";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <About />
      <Contact />
      <Gallery />
      <NotFound />
      <Plans />
      <Trainners />
    </BrowserRouter>
  );
}

export default App;
