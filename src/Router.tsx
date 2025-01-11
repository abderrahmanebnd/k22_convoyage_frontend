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
import ProtectedRoute from "./pages/Auth/ProtectedRoute";
import GuestRoute from "./pages/Auth/GuestRoute";
import DashboardLayout from "./ui/layouts/DashboardLayout";
import ContactForm from "./features/Homepage/ContactForm";
import { Main } from "./components/ui/main";

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
        {/* Protected Routes with Role-Based Access */}
        {/* <Route element={<DashboardLayout />}>
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute roles={["admin"]}>
                <ContactForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/missions"
            element={
              <ProtectedRoute roles={["admin"]}>
                <ContactForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/users"
            element={
              <ProtectedRoute roles={["admin"]}>
                <ContactForm />
              </ProtectedRoute>
            }
          />

          <Route
            path="/search"
            element={
              <ProtectedRoute roles={["client"]}>
                <ContactForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/my-missions"
            element={
              <ProtectedRoute roles={["driver"]}>
                <ContactForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute roles={["admin", "client", "driver"]}>
                <ContactForm />
              </ProtectedRoute>
            }
          />
        </Route> */}
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
