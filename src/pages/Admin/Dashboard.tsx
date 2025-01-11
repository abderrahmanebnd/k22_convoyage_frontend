import { Header } from "@/components/ui/header";
import { Main } from "@/components/ui/main";
import ContactForm from "@/features/Homepage/ContactForm";
import { ProfileDropdown } from "@/ui/common/ProfileDropdown";
import { ThemeSwitch } from "@/ui/common/ThemeSwitch";

export default function Dashboard() {
  return (
    <>
      <Header>
        <div className="ml-auto flex items-center space-x-4">
          {/* <Search /> */}
          <ThemeSwitch />
          <ProfileDropdown />
        </div>
      </Header>
      <Main>
        <ContactForm />
      </Main>
    </>
  );
}
