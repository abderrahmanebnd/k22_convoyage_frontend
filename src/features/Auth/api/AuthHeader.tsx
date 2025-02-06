import { Handshake } from "lucide-react";

interface AuthHeaderProps {
  title: string;
  description: string;
}

export default function AuthHeader({ title, description }: AuthHeaderProps) {
  return (
    <div className="space-y-2 text-center">
      <div className="w-11 h-11 rounded-full bg-gradient-to-br from-pink-500 to-orange-400 mx-auto flex items-center justify-center ">
        <Handshake className="text-white" size={22} />
      </div>
      <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
