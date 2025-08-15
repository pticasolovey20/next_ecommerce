import { FooterLinkData } from "@/types/footer";
import { classNames } from "@/utils/classNames";

interface FooterLinksProps {
  alignmentClassName: string;
  links: FooterLinkData[];
}

const FooterLinks = ({ alignmentClassName, links }: FooterLinksProps) => {
  return (
    <ul className={classNames("flex flex-col gap-2", alignmentClassName)}>
      {links.map(({ id, label }) => (
        <li key={id}>
          <a href="/faq" target="_blank" className="text-muted-foreground">
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default FooterLinks;
