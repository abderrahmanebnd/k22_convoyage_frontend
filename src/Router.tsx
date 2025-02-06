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
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import Missions from "./pages/Admin/Missions/Missions";
import MyMissions from "./pages/Driver/MyMissions";
import SearchForMission from "./pages/Client/SearchForMission";
import PageTitle from "./ui/common/PageTitle";

export default function Router(): JSX.Element {
  return (
    <AuthProvider>
      <Routes>
        {/* Page d'accueil */}
        <Route element={<HomepageLayout />}>
          <Route
            path="/"
            element={
              <>
                <PageTitle title="Accueil" />
                <Homepage />
              </>
            }
          />
          <Route
            path="/a_propos"
            element={
              <>
                <PageTitle title="À propos" />
                <About />
              </>
            }
          />
          <Route
            path="/temoignages"
            element={
              <>
                <PageTitle title="Témoignages" />
                <Testimonials />
              </>
            }
          />
          <Route
            path="/prix"
            element={
              <>
                <PageTitle title="Nos tarifs" />
                <OurPrices />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <PageTitle title="Contact" />
                <Contact />
              </>
            }
          />
        </Route>

        {/* Routes pour les invités */}
        <Route element={<GuestRoute />}>
          <Route
            path="/signup"
            element={
              <>
                <PageTitle title="Inscription" />
                <SignUp />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <PageTitle title="Connexion" />
                <Login />
              </>
            }
          />
        </Route>

        {/* Routes protégées pour l'administrateur */}
        <Route
          element={
            <ProtectedRoute roles={["admin"]}>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route
            path="/dashboard"
            element={
              <>
                <PageTitle title="Tableau de bord" />
                <Dashboard />
              </>
            }
          />
          <Route
            path="/missions"
            element={
              <>
                <PageTitle title="Missions" />
                <Missions />
              </>
            }
          />
        </Route>

        {/* Routes protégées pour le chauffeur */}
        <Route
          element={
            <ProtectedRoute roles={["driver"]}>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route
            path="/my-missions"
            element={
              <>
                <PageTitle title="Mes missions" />
                <MyMissions />
              </>
            }
          />
          {/* <Route path="/profile" element={<ContactForm />} /> */}
        </Route>

        {/* Routes protégées pour le client */}
        <Route
          element={
            <ProtectedRoute roles={["client"]}>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route
            path="/search"
            element={
              <>
                <PageTitle title="Rechercher une mission" />
                <SearchForMission />
              </>
            }
          />
          {/* <Route path="/profile" element={<ContactForm />} /> */}
        </Route>

        {/* Page non trouvée */}
        <Route
          path="*"
          element={
            <>
              <PageTitle title="Page non trouvée" />
              <PageNotFound />
            </>
          }
        />
      </Routes>
    </AuthProvider>
  );
}
