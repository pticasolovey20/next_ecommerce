import { FooterSectionData } from "@/types/footer";
import { classNames } from "@/utils/classNames";

import FooterLinks from "@/components/footer/FooterLinks";

interface FooterSectionProps {
  section: FooterSectionData;
}

const FooterSection = ({ section }: FooterSectionProps) => {
  const isOddSection = section.index % 2 === 0;

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
