import {
  COMPANY_SECTION,
  SERVICES_SECTION,
  SOCIAL_SECTION,
  LEGAL_SECTION,
} from "@/constants/footer";
import { classNames } from "@/utils/classNames";

import FooterSection from "@/components/footer/FooterSection";
import Separator from "@/ui/Separator";
import PaymentList from "@/components/footer/PaymentList";

const Footer = () => {
  return (
    <footer className="px-4 py-8 bg-muted">
      <div className="max-w-screen-2xl w-full mx-auto">
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-x-6 gap-y-4">
          <FooterSection section={COMPANY_SECTION} />
          <FooterSection section={SERVICES_SECTION} />
          <FooterSection section={SOCIAL_SECTION} />
          <FooterSection section={LEGAL_SECTION} />
        </div>

        <Separator />

        <div
          className={classNames(
            "flex flex-col justify-between items-center gap-4",
            "text-sm font-medium"
          )}
        >
          <span>2025 © All rights reserved</span>

          <PaymentList />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
