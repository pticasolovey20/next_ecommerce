import { FooterLinkData } from "@/types/footer";
import { classNames } from "@/utils/classNames";

interface FooterLinksProps {
  alignmentClassName: string;
  links: FooterLinkData[];
}

const FooterLinks = ({ alignmentClassName, links }: FooterLinksProps) => {
  return (
    <ul className={classNames("flex flex-col", alignmentClassName)}>
      {links.map(({ id, href, label }) => (
        <li key={id}>
          <a href={href} target="_blank" className="text-muted-foreground">
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default FooterLinks;
