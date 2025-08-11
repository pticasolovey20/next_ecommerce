"use client";

import { useAppSidebarStore } from "@/stores/useAppSidebarStore";
import { userMenu } from "@/constants/userMenu";
import { classNames } from "@/utils/classNames";
import { COMPANY_SECTION, SOCIAL_SECTION, LEGAL_SECTION } from "@/constants/footer";

import { SidebarRoot } from "@/ui/sidebar";
import Separator from "@/ui/Separator";
import FooterSection from "@/components/footer/FooterSection";
import SidebarHeader from "@/ui/sidebar/SidebarHeader";
import Logo from "@/components/Logo";
import SidebarContent from "@/ui/sidebar/SidebarContent";

const AppSidebar = () => {
  const { isOpen, closeSidebar } = useAppSidebarStore();

  return (
    <SidebarRoot isOpen={isOpen} onClose={closeSidebar}>
      <SidebarHeader onClose={closeSidebar}>
        <Logo />
      </SidebarHeader>

      <SidebarContent>
        <ul className="flex flex-col gap-1">
          {userMenu.map(({ id, label, icon: Icon }) => (
            <li key={id}>
              <div
                className={classNames(
                  "flex items-center gap-2",
                  "py-1 cursor-pointer",
                  "text-muted-foreground",
                  "hover:text-foreground",
                  "transition-colors duration-300 ease-in-out"
                )}
              >
                <Icon className="w-7 h-7" />
                <span className="uppercase font-medium text-xl">{label}</span>
              </div>
            </li>
          ))}
        </ul>

        <Separator />
        <FooterSection section={COMPANY_SECTION} />
        <Separator />
        <FooterSection section={SOCIAL_SECTION} />
        <Separator />
        <FooterSection section={LEGAL_SECTION} />
      </SidebarContent>
    </SidebarRoot>
  );
};

export default AppSidebar;
