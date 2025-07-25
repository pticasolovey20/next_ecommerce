export interface FooterLinkData {
  id: string;
  href: string;
  label: string;
}

export interface FooterSectionData {
  index: number;
  title: string;
  links: FooterLinkData[];
}
