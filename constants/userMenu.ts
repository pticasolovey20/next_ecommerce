import { UserMenuItemData } from "@/types/userMenu";

import { CgProfile } from "react-icons/cg";
import { MdFavorite } from "react-icons/md";
import { HiShoppingCart } from "react-icons/hi";

export const userMenu: UserMenuItemData[] = [
  { id: 1, label: "Profile", icon: CgProfile, disabled: true },
  { id: 2, label: "Favorites", icon: MdFavorite, disabled: true },
  { id: 3, label: "Cart", icon: HiShoppingCart, disabled: true },
];
