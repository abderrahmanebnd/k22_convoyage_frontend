import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Testimonials from "./pages/Testimonials";
import OurPrice from "./pages/OurPrices";

export default function Router(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element=<Homepage /> />
      <Route path="/" element=<About /> />
      <Route path="/" element=<Testimonials /> />
      <Route path="/" element=<OurPrices /> />
      <Route path="/" element=< /> />
    </Routes>
  );
}
