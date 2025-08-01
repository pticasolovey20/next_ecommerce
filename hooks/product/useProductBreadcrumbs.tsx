"use client";

import { useBreadcrumbs } from "@/hooks/useBreadcrumbs";
import { usePathname } from "next/navigation";
import { useProductById } from "@/hooks/product/useProductById";
import { BreadcrumbItemData } from "@/types/breadcrumb";
import { useEffect, useState } from "react";
import { UseProductBreadcrumbsReturn } from "@/hooks/product/types";

export const useProductBreadcrumbs = (): UseProductBreadcrumbsReturn => {
  const baseBreadcrumbs = useBreadcrumbs();
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  const isProductPage = segments.length === 2 && segments[0] === "products";
  const productId = isProductPage ? segments[1] : undefined;

  const { product, isLoading } = useProductById(productId);
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItemData[]>(baseBreadcrumbs);

  useEffect(() => {
    const updated = baseBreadcrumbs.map((item, index, array) => {
      if (item.label === "products") {
        return {
          ...item,
          label: "Products",
        };
      }

      const isLast = index === array.length - 1;

      if (isLast && isProductPage && product && !isLoading) {
        return {
          ...item,
          label: product.title,
        };
      }

      return item;
    });

    setBreadcrumbs(updated);
  }, [baseBreadcrumbs, product, isLoading, isProductPage]);

  return {
    list: breadcrumbs,
  };
};
