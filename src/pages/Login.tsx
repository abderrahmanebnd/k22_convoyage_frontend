import { ArrowLeft, Lock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AuthHeader from "@/ui/AuthHeader";
import { SplitLayout } from "@/ui/layouts/SplitLayout";
import { Link } from "react-router-dom";
import CustomButton from "@/ui/CustomButton";
import { Label } from "@/components/ui/label";

export default function Login() {
  return (
    <SplitLayout>
      <div className="relative space-y-6 ">
        <div className="absolute top-0 left-0">
          <Button variant="ghost" size="icon" asChild>
            <Link to="/">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Back</span>
            </Link>
          </Button>
        </div>
        <AuthHeader
          title="Bienvenue!"
          description="Connectez-vous à votre compte"
        />
        <form className="space-y-4">
          <div className="relative">
            <Label htmlFor="email" className="sr-only">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="email@example.com"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
              required
              className="pl-10 py-5 rounded-lg"
            />
            <Mail
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary/60"
              size={18}
            />
          </div>
          <div className="relative">
            <Label htmlFor="password" className="sr-only">
              Mot de passe
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="Password"
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
              required
              className="pl-10 py-5 rounded-lg"
            />
            <Lock
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary/60"
              size={18}
            />
          </div>
          <CustomButton type="submit" className="w-full rounded-lg" primary>
            Se connecter{" "}
          </CustomButton>
        </form>

        <div className="text-center text-sm">
          Vous n'avez pas de compte?{" "}
          <Link
            to="/signup"
            className="underline underline-offset-4 hover:text-main"
          >
            S'inscrire
          </Link>
        </div>
      </div>
    </SplitLayout>
  );
}
