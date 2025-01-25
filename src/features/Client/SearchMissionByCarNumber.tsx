import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { displaySuccessToast } from "@/ui/common/CustomAlert";
import CustomButton from "@/ui/common/CustomButton";
import { carMatriculeRegex } from "@/lib/utils";

// Define the schema for the form
const SearchInputSchema = z.object({
  carMatricule: z
    .string()
    .regex(carMatriculeRegex, "Format de matricule invalide"),
});

// Define the props type

export function SearchMissionByCarNumber({
  form,
  onSubmit,
}: {
  form: any;
  onSubmit: () => void;
}) {
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-2 flex flex-col mx-auto"
      >
        <div className="relative">
          <img
            src="/images/matricule_pic.jpeg"
            alt="car matricule"
            width="140"
            className="right-1 bottom-1 absolute z-10 block rounded-md"
          />
          <FormField
            control={form.control}
            name="carMatricule"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex justify-between items-center">
                  <span>Matricule d'automobile</span>
                  <FormMessage />
                </FormLabel>
                <FormControl>
                  <Input
                    className="w-full block"
                    placeholder="AA-001-AA"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        {/* <CustomButton type="submit" className="w-fit" primary>
          Submit
        </CustomButton> */}
      </form>
    </Form>
  );
}
