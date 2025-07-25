import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

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
