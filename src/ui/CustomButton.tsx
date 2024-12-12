import { Button } from "@/components/ui/button";
import React from "react";

export default function CustomButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Button
      className={`border-slate-3 text-lg py-5 px-3 hover:bg-main hover:bg-opacity-90 hover:text-white transition-colors duration-200 text-black border-stroke border shadow-sm rounded-xl ${className}`}
    >
      {children}
    </Button>
  );
}
