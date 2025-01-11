import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Testimonials from "./pages/Homepage/Testimonials";
import Contact from "./pages/Homepage/Contact";
import HomepageLayout from "./ui/layouts/HomepageLayout";
import About from "./pages/Homepage/About";
import OurPrices from "./pages/Homepage/OurPrices";
import Login from "@/pages/Auth/Login";
import SignUp from "@/pages/Auth/Signup";
import { AuthProvider } from "./context/AuthProvider";
import PageNotFound from "./pages/PageNotFound";
import ProtectedRoute from "./features/Auth/api/ProtectedRoute";
import GuestRoute from "./features/Auth/api/GuestRoute";
import DashboardLayout from "./ui/layouts/DashboardLayout";
import ContactForm from "./features/Homepage/ContactForm";
import Dashboard from "./pages/Admin/Dashboard";

export default function Router(): JSX.Element {
  return (
    <AuthProvider>
      <Routes>
        {/* Landing Page */}
        <Route element={<HomepageLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/prices" element={<OurPrices />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        {/* Landing Page */}
        <Route element={<GuestRoute />}>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Route>

        <Route
          element={
            <ProtectedRoute roles={["admin"]}>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<ContactForm />} />
          <Route path="/missions" element={<ContactForm />} />
          <Route path="/profile" element={<ContactForm />} />
        </Route>
        <Route
          element={
            <ProtectedRoute roles={["driver"]}>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/my-missions" element={<ContactForm />} />
          <Route path="/profile" element={<ContactForm />} />
        </Route>

        <Route
          element={
            <ProtectedRoute roles={["client"]}>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/search" element={<ContactForm />} />
          <Route path="/profile" element={<ContactForm />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </AuthProvider>
  );
}
