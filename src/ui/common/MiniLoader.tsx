import { cn } from "@/lib/utils";
import { LoaderIcon } from "react-hot-toast";

function MiniLoader({ customClass }: { customClass?: string }) {
  return (
    <span>
      <LoaderIcon
        className={cn("inline-block mr-2  animate-spin", customClass)}
      />
    </span>
  );
}

export default MiniLoader;
