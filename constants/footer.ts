import { FooterSectionData } from "@/types/footer";

export const COMPANY_SECTION: FooterSectionData = {
  index: 1,
  title: "About Company",
  links: [
    { id: "about", href: "#", label: "About Us" },
    { id: "careers", href: "#", label: "Careers" },
    { id: "news", href: "#", label: "News" },
    { id: "investors", href: "#", label: "Investors" },
    { id: "sustainability", href: "#", label: "Sustainability" },
    { id: "corporate", href: "#", label: "Corporate Clients" },
  ],
};

export const SERVICES_SECTION: FooterSectionData = {
  index: 2,
  title: "Services",
  links: [
    { id: "marketplace", href: "#", label: "Sell With Us" },
    { id: "affiliate", href: "#", label: "Affiliate Program" },
    { id: "api", href: "#", label: "Developer API" },
    { id: "wholesale", href: "#", label: "Wholesale" },
    { id: "gift-cards", href: "#", label: "Gift Cards" },
    { id: "loyalty", href: "#", label: "Loyalty Program" },
  ],
};

export const SOCIAL_SECTION: FooterSectionData = {
  index: 3,
  title: "Follow Us",
  links: [
    { id: "facebook", href: "#", label: "Facebook" },
    { id: "instagram", href: "#", label: "Instagram" },
    { id: "twitter", href: "#", label: "Twitter" },
    { id: "youtube", href: "#", label: "YouTube" },
    { id: "telegram", href: "#", label: "Telegram" },
    { id: "tiktok", href: "#", label: "TikTok" },
  ],
};

export const LEGAL_SECTION: FooterSectionData = {
  index: 4,
  title: "Legal Information",
  links: [
    { id: "privacy", href: "#", label: "Privacy Policy" },
    { id: "terms", href: "#", label: "Terms of Service" },
    { id: "cookies", href: "#", label: "Cookie Policy" },
    { id: "sitemap", href: "#", label: "Sitemap" },
    { id: "licenses", href: "#", label: "Licenses" },
  ],
};

export const PAYMENT_METHODS = [
  { name: "VISA", code: "VISA" },
  { name: "MasterCard", code: "MC" },
  { name: "PayPal", code: "PP" },
  { name: "Google Pay", code: "GPay" },
];
