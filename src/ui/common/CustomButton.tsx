import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function CustomButton({
  children,
  className,
  type = "button",
  primary = false,
  disabled = false,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  primary?: boolean;
  onClick?: () => void;
}) {
  return (
    <Button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={cn(
        `border-slate-3 text-lg py-5 px-3 hover:bg-main hover:bg-opacity-90 hover:text-white transition-colors duration-200 text-black border-stroke border shadow-sm rounded-xl disabled:cursor-not-allowed disabled:bg-slate-3 disabled:text-slate-8 disabled:border-slate-3`,
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
