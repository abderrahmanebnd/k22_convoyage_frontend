import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CustomButtonProps = ButtonProps & {
  primary?: boolean;
};

export default function CustomButton({
  children,
  className,
  type = "button",
  primary = false,
  ...rest
}: CustomButtonProps) {
  return (
    <Button
      type={type}
      className={cn(
        `border-slate-3 text-lg py-5 px-3 hover:bg-main hover:bg-opacity-90 hover:text-white transition-colors duration-200 text-black border-stroke border shadow-sm rounded-xl disabled:cursor-not-allowed disabled:bg-slate-3 disabled:text-slate-8 disabled:border-slate-3`,
        primary
          ? "bg-main border-none rounded-xl capitalize text-white hover:bg-opacity-95"
          : "",
        className
      )}
      {...rest}
    >
      {children}
    </Button>
  );
}
