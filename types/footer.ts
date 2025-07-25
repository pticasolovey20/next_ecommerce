export interface FooterLinkData {
  id: string;
  href: string;
  label: string;
}

export interface FooterSectionData {
  title: string;
  links: FooterLinkData[];
}
