import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Testimonials from "./pages/Testimonials";
import OurPrices from "./pages/OurPrices";
import Contact from "./pages/Contact";

export default function Router(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element=<Homepage /> />
      <Route path="/about" element=<About /> />
      <Route path="/testimonials" element=<Testimonials /> />
      <Route path="/prices" element=<OurPrices /> />
      <Route path="/contact" element=<Contact /> />
    </Routes>
  );
}
