"use client";

import { userMenu } from "@/constants/userMenu";
import { classNames } from "@/utils/classNames";
import { COMPANY_SECTION, SOCIAL_SECTION, LEGAL_SECTION } from "@/constants/footer";

import { SidebarRoot } from "@/ui/sidebar";
import Separator from "@/ui/Separator";
import FooterSection from "@/components/footer/FooterSection";

const AppSidebar = () => {
  return (
    <SidebarRoot>
      <ul className="flex flex-col gap-1">
        {userMenu.map(({ id, label, icon: Icon }) => (
          <li key={id}>
            <a
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
            </a>
          </li>
        ))}
      </ul>

      <Separator />
      <FooterSection section={COMPANY_SECTION} />
      <Separator />
      <FooterSection section={SOCIAL_SECTION} />
      <Separator />
      <FooterSection section={LEGAL_SECTION} />
    </SidebarRoot>
  );
};

export default AppSidebar;
