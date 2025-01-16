import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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
import { Mission } from "@/services/Missions/getMissions";
import { SelectDropdown } from "@/ui/common/SelectDropdown";
import {
  ResponsiveModal,
  ResponsiveModalContent,
  ResponsiveModalDescription,
  ResponsiveModalFooter,
  ResponsiveModalHeader,
  ResponsiveModalTitle,
} from "@/components/ui/responsive-modal";
import CustomButton from "@/ui/common/CustomButton";

const carMatriculeRegex = /^[A-HJ-NP-TV-Z]{2}-\d{3}-[A-HJ-NP-TV-Z]{2}$/;

const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  status: z.enum(["completed", "in_progress", "cancelled"]),
  assignedDriver: z.object({
    _id: z.string(),
    name: z.string(),
    email: z.string().email(),
  }),
  carMatricule: z.string().regex(carMatriculeRegex, "Invalid matricule format"),
  isEdit: z.boolean(),
});

type MissionForm = z.infer<typeof formSchema>;

interface Props {
  currentRow?: Mission;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  drivers?: { _id: string; name: string; email: string }[]; // Fetched from API
}

export default function MissionsActionDialog({
  currentRow,
  open,
  onOpenChange,
  drivers,
}: Props) {
  const isEdit = !!currentRow;
  const form = useForm<MissionForm>({
    resolver: zodResolver(formSchema),
    defaultValues: isEdit
      ? {
          ...currentRow,
        }
      : {
          title: "",
          description: "",
          status: "in_progress",
          assignedDriver: drivers[0] || { _id: "", name: "", email: "" },
          carMatricule: "",
          isEdit,
        },
  });

  const onSubmit = (values: MissionForm) => {
    console.log("Submitted values:", values);
    form.reset();
    displaySuccessToast();
    onOpenChange(false);
  };

  return (
    <ResponsiveModal
      open={open}
      onOpenChange={(state) => {
        form.reset();
        onOpenChange(state);
      }}
    >
      <ResponsiveModalContent>
        <ResponsiveModalHeader className="text-left">
          <ResponsiveModalTitle>
            {isEdit ? "Edit Mission" : "Add New Mission"}
          </ResponsiveModalTitle>
          <ResponsiveModalDescription>
            {isEdit
              ? "Update the Mission here. "
              : "Create a new Mission here. "}
            Click save when you&apos;re done.
          </ResponsiveModalDescription>
        </ResponsiveModalHeader>
        <>
          <Form {...form}>
            <form
              id="mission-form"
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 p-0.5"
            >
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Mission title" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Input placeholder="Mission description" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status</FormLabel>
                    <SelectDropdown
                      defaultValue={field.value}
                      onValueChange={field.onChange}
                      placeholder="Select status"
                      items={[
                        { label: "Completed", value: "completed" },
                        { label: "In Progress", value: "in_progress" },
                        { label: "Cancelled", value: "cancelled" },
                      ]}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="assignedDriver"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Assigned Driver</FormLabel>
                    <SelectDropdown
                      defaultValue={field.value?._id}
                      onValueChange={(value) =>
                        field.onChange(
                          drivers.find((driver) => driver._id === value)
                        )
                      }
                      placeholder="Select a driver"
                      items={drivers.map(({ _id, name, email }) => ({
                        label: `${name} | ${email}`,

                        value: _id,
                      }))}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="carMatricule"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Car Matricule</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., AB-123-CD" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </>
        <ResponsiveModalFooter>
          <CustomButton primary type="submit" form="mission-form">
            Save changes
          </CustomButton>
        </ResponsiveModalFooter>
      </ResponsiveModalContent>
    </ResponsiveModal>
  );
}
