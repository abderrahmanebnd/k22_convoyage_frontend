import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import HomepageLayout from "./ui/HomepageLayout";
import About from "./pages/About";
import OurPrices from "./pages/OurPrices";

export default function Router(): JSX.Element {
  return (
    <Routes>
      <Route element={<HomepageLayout />}>
        <Route path="/" element=<Homepage /> />
        <Route path="/about" element=<About /> />
        <Route path="/testimonials" element=<Testimonials /> />
        <Route path="/prices" element=<OurPrices /> />
        <Route path="/contact" element=<Contact /> />
      </Route>
    </Routes>
  );
}
