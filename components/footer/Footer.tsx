import {
  COMPANY_SECTION,
  SERVICES_SECTION,
  SOCIAL_SECTION,
  LEGAL_SECTION,
} from "@/constants/footer";
import { classNames } from "@/utils/classNames";

import FooterSection from "@/components/footer/FooterSection";
import Separator from "@/ui/Separator";

const Footer = () => {
  return (
    <footer className="border-t-2 border-foreground bg-muted">
      <div className="max-w-screen-2xl w-full px-4 md:px-8 xl:px-12 mx-auto">
        <div
          className={classNames(
            "grid sm:grid-cols-2 gap-x-12 gap-y-6",
            "xl:flex xl:justify-between",
            "py-8"
          )}
        >
          <FooterSection section={COMPANY_SECTION} />
          <FooterSection section={SERVICES_SECTION} />
          <FooterSection section={SOCIAL_SECTION} />
          <FooterSection section={LEGAL_SECTION} />
        </div>

        <Separator />

        <div className="flex flex-col justify-between items-center gap-4 py-8">
          <span className="text-sm font-medium">2025 © All rights reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
