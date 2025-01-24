import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { displaySuccessToast } from "@/ui/common/CustomAlert";
import { carMatriculeRegex } from "@/lib/utils";
import CustomButton from "@/ui/common/CustomButton";

const FormSchema = z.object({
  carMatricule: z
    .string()
    .regex(carMatriculeRegex, "Format de matricule invalide"),
});
export function SearchMissionByCarNumber() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      carMatricule: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    displaySuccessToast("Form submitted successfully!");
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full  space-y-2 flex  flex-col mx-auto"
      >
        <div className="relative">
          {/* <div className="absolute z-10   block bg-green-300 "> */}
          <img
            src="/images/matricule_pic.jpeg"
            alt="car matricule"
            width="140"
            className="right-1 bottom-1 absolute z-10 block rounded-md"
          />
          {/* </div> */}
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
                {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
              </FormItem>
            )}
          />
        </div>

        <CustomButton type="submit" className="w-fit" primary>
          Submit
        </CustomButton>
      </form>
    </Form>
  );
}
