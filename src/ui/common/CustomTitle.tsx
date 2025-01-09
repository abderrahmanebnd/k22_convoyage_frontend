import { cn } from "@/lib/utils";

export default function CustomTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h1
      className={cn(
        "text-2xl sm:text-3xl font-bold text-center mb-7 text-main",
        className
      )}
    >
      {children}
    </h1>
  );
}
