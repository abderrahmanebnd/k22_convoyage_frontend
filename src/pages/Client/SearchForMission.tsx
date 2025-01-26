import { useEffect } from "react";
import { Header } from "@/components/ui/header";
import { Main } from "@/components/ui/main";
import MissionsTable from "@/features/Client/MissionsTable";
import { SearchMissionByCarNumber } from "@/features/Client/SearchMissionByCarNumber";
import { carMatriculeRegex } from "@/lib/utils";
import { useGetMissionsByCarMatricule } from "@/services/Missions/getMissions";
import Loader from "@/ui/common/Loader";
import { ProfileDropdown } from "@/ui/common/ProfileDropdown";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import toast from "react-hot-toast";

const SearchInputSchema = z.object({
  carMatricule: z
    .string()
    .regex(carMatriculeRegex, "Format de matricule invalide"),
});

export default function SearchForMission() {
  const form = useForm<z.infer<typeof SearchInputSchema>>({
    resolver: zodResolver(SearchInputSchema),
    defaultValues: {
      carMatricule: "",
    },
  });

  const { missions, error, loading, pagination } = useGetMissionsByCarMatricule(
    form.watch("carMatricule") // Watch the carMatricule field
  );

  useEffect(() => {
    const subscription = form.watch((value, { name }) => {
      if (
        name === "carMatricule" &&
        carMatriculeRegex.test(value.carMatricule)
      ) {
        toast.loading("Searching for missions...", { duration: 1000 });
      }
    });
    return () => subscription.unsubscribe();
  }, [form]);

  function onSubmit(data: z.infer<typeof SearchInputSchema>) {}

  return (
    <>
      <Header fixed>
        <div className="ml-auto flex items-center space-x-4 ">
          <ProfileDropdown />
        </div>
      </Header>
      <Main>
        <div className="space-y-4">
          <SearchMissionByCarNumber form={form} onSubmit={onSubmit} />
          {loading ? (
            <Loader />
          ) : (
            <MissionsTable data={missions} pagination={pagination} />
          )}
        </div>
      </Main>
    </>
  );
}
