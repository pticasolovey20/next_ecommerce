import { FooterSectionData } from "@/types/footer";

import FooterLinks from "@/components/footer/FooterLinks";

interface FooterSectionProps {
  section: FooterSectionData;
}

const FooterSection = ({ section }: FooterSectionProps) => {
  return (
    <div className="">
      <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
      <FooterLinks links={section.links} />
    </div>
  );
};

export default FooterSection;
