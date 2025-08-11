import { FooterSectionData } from "@/types/footer";
import { classNames } from "@/utils/classNames";

import FooterLinks from "@/components/footer/FooterLinks";

interface FooterSectionProps {
  section: FooterSectionData;
  index?: number;
}

const FooterSection = ({ section, index }: FooterSectionProps) => {
  const isOddSection = index ? index % 2 === 0 : true;

  const alignmentClassName = isOddSection
    ? "items-start"
    : "items-start sm:items-end xl:items-start";

  return (
    <div className={classNames("flex flex-col", alignmentClassName)}>
      <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
      <FooterLinks alignmentClassName={alignmentClassName} links={section.links} />
    </div>
  );
};

export default FooterSection;
