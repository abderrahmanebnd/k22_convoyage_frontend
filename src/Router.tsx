import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Testimonials from "./pages/Homepage/Testimonials";
import Contact from "./pages/Homepage/Contact";
import HomepageLayout from "./ui/layouts/HomepageLayout";
import About from "./pages/Homepage/About";
import OurPrices from "./pages/Homepage/OurPrices";
import Login from "@/pages/Login";
import SignUp from "@/pages/Signup";

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
      <Route path="/signup" element=<SignUp /> />
      <Route path="/login" element=<Login /> />
    </Routes>
  );
}
