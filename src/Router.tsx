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
        <Route element={<ProtectedRoute roles={["admin"]} />}>
          <Route path="/admin" element={<AdminPage />} />
        </Route>
        <Route element={<ProtectedRoute roles={["client"]} />}>
          <Route path="/client" element={<ClientPage />} />
        </Route>
        <Route element={<ProtectedRoute roles={["driver"]} />}>
          <Route path="/driver" element={<DriverPage />} />
        </Route>

        {/* Page Not Found */}
        <Route path="/dashboard" element={<PageNotFound />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </AuthProvider>
  );
}

// AdminPage.tsx
export function AdminPage() {
  return (
    <div>
      <h1>Welcome Admin!</h1>
      <p>You have full access to this page.</p>
    </div>
  );
}

// ClientPage.tsx
export function ClientPage() {
  return (
    <div>
      <h1>Welcome Client!</h1>
      <p>You have access to the client features.</p>
    </div>
  );
}

// DriverPage.tsx
export function DriverPage() {
  return (
    <div>
      <h1>Welcome Driver!</h1>
      <p>You have access to the driver features.</p>
    </div>
  );
}
