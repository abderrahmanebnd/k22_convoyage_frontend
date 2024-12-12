import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex items-center justify-between container mx-auto bg-white  text-lg px-5 backdrop-blur-lg bg-transparent">
      <div className="flex items-center gap-2 mr-auto ">
        <Logo />

        {/* telephone */}
      </div>
      <nav className="flex-1 ">
        <ul className="flex items-center justify-center gap-4 text-black">
          <Link to="/" className="py-5 font-semibold ">
            Accueil
          </Link>
          <Link to="/about" className="py-5 font-semibold">
            À Propos
          </Link>
          <Link to="testimonials" className="py-5 font-semibold">
            Témoignages
          </Link>
          <Link to="/prices" className="py-5 font-semibold">
            Nos Prix
          </Link>
          <Link to="/contact" className="py-5 font-semibold">
            Contact
          </Link>
        </ul>
      </nav>
      <Button className="border-slate-3 text-lg p-5 hover:bg-main hover:text-white transition-colors duration-200 text-black border-stroke border shadow-sm rounded-xl ">
        Connexion
      </Button>
    </header>
  );
}
