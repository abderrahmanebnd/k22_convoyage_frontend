import Footer from "@/ui/Footer";
import { Header } from "@/ui/Header";
import { Outlet } from "react-router-dom";

export default function HomepageLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
