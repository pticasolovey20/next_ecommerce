import { FooterLinkData } from "@/types/footer";

interface FooterLinksProps {
  links: FooterLinkData[];
}

const FooterLinks = ({ links }: FooterLinksProps) => {
  return (
    <ul>
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
