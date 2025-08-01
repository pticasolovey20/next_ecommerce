"use client";

import { usePathname } from "next/navigation";
import { BreadcrumbItemData } from "@/types/breadcrumb";

export const useBreadcrumbs = (): BreadcrumbItemData[] => {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) {
    return [
      {
        label: "Home",
        href: "/",
        isActive: true,
      },
    ];
  }

  const breadcrumbs = segments.map((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/");
    const isLast = index === segments.length - 1;

    return {
      label: decodeURIComponent(segment),
      href,
      isActive: isLast,
    };
  });

  return [
    {
      label: "Home",
      href: "/",
      isActive: false,
    },

    ...breadcrumbs,
  ];
};
