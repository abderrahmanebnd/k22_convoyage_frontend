import { Link } from "react-router-dom";
import Logo from "../../ui/Logo";
import CustomButton from "../../ui/CustomButton";
import { MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

const links: { to: string; text: string }[] = [
  { to: "/", text: "Accueil" },
  { to: "/about", text: "À Propos" },
  { to: "/testimonials", text: "Témoignages" },
  { to: "/prices", text: "Nos Prix" },
  { to: "/contact", text: "Contact" },
];

export function Header(): JSX.Element {
  return (
    <header className="flex items-center justify-between container mx-auto bg-white text-lg px-5 backdrop-blur-lg bg-transparent relative">
      {/* Logo */}
      <div className="flex items-center gap-2 mr-auto">
        <Logo />
      </div>

      {/* Hamburger Menu */}
      <div className="block lg:hidden">
        <NavSheet />
      </div>

      {/* Navigation Links (Desktop View) */}
      <nav className="hidden lg:block py-4">
        <ul className="flex items-center gap-4 text-black">
          {links.map((link) => (
            <CustomLink key={link.to} to={link.to} text={link.text} />
          ))}
          <li>
            <CustomButton>Connexion</CustomButton>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function CustomLink({ text, to }: { to: string; text: string }): JSX.Element {
  return (
    <li>
      <Link
        to={to}
        className="relative font-semibold py-2 px-2 hover:text-main transition-colors duration-200 group"
      >
        {text}
        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-main transition-all duration-300 group-hover:w-full"></span>
      </Link>
    </li>
  );
}

function NavSheet(): JSX.Element {
  return (
    <Sheet>
      <SheetTrigger>
        <MenuIcon className="hover:text-main transition-colors duration-20 mt-2 " />
      </SheetTrigger>
      <SheetContent className="max-w-[250px] sm:max-w-[400px]">
        <SheetHeader>
          <ul className="flex flex-col items-start gap-4 text-black mt-4">
            {links.map((link) => (
              <CustomLink key={link.to} to={link.to} text={link.text} />
            ))}
            <li>
              <CustomButton>Connexion</CustomButton>
            </li>
          </ul>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
