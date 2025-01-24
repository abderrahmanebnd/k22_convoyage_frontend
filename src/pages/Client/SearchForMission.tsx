import { Header } from "@/components/ui/header";
import { Main } from "@/components/ui/main";
import { SearchMissionByCarNumber } from "@/features/Client/SearchMissionByCarNumber";

import { ProfileDropdown } from "@/ui/common/ProfileDropdown";

export default function SearchForMission() {
  return (
    <>
      <Header fixed>
        <div className="ml-auto flex items-center space-x-4 ">
          <ProfileDropdown />
        </div>
      </Header>
      <Main>
        <SearchMissionByCarNumber />
      </Main>
    </>
  );
}
