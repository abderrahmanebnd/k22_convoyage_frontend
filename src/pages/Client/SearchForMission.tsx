import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/ui/header";
import { Main } from "@/components/ui/main";
import { SearchMissionByCarNumber } from "@/features/Client/SearchMissionByCarNumber";
import { carMatriculeRegex } from "@/lib/utils";
import { useGetMissionsByCarMatricule } from "@/services/Missions/getMissions";
import { displaySuccessToast } from "@/ui/common/CustomAlert";

import { ProfileDropdown } from "@/ui/common/ProfileDropdown";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
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

  const { missions, error, loading } = useGetMissionsByCarMatricule(
    form.getValues().carMatricule
  );

  function onSubmit(data: z.infer<typeof SearchInputSchema>) {
    displaySuccessToast("Form submitted successfully!");
  }
  return (
    <>
      <Header fixed>
        <div className="ml-auto flex items-center space-x-4 ">
          <ProfileDropdown />
        </div>
      </Header>
      <Main>
        <SearchMissionByCarNumber form={form} onSubmit={onSubmit} />
        {loading ? <Loader /> : <span>soon</span>}
      </Main>
    </>
  );
}

//TODO: Create table to display the missions including the following columns:
// - creating Date
// - Car Matricule
// - Driver Name
// - Status
// - Pagination
