import { NavigationItemData } from "@/types/navigation";

export const NAVIGATION: NavigationItemData[] = [
  {
    label: "Home",
    href: "/",
    route: "public",
  },
  {
    label: "About Us",
    href: "/about",
    route: "public",
  },
  {
    label: "Contact",
    href: "/contact",
    route: "private",
  },
];
