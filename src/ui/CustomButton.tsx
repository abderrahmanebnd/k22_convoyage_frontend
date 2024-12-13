import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function CustomButton({
  children,
  className,
  type = "button",
  primary = false,
}: {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  primary?: boolean;
}) {
  return (
    <Button
      type={type}
      className={cn(
        `border-slate-3 text-lg py-5 px-3 hover:bg-main hover:bg-opacity-90 hover:text-white transition-colors duration-200 text-black border-stroke border shadow-sm rounded-xl`,
        primary
          ? "bg-main border-none rounded-md capitalize text-white hover:bg-opacity-95"
          : "",
        className
      )}
    >
      {children}
    </Button>
  );
}
