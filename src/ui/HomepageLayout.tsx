import Footer from "@/features/Homepage/Footer";
import { Header } from "@/features/Homepage/Header";
import { Outlet } from "react-router-dom";

export default function HomepageLayout() {
  return (
    <div className="flex flex-col">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
