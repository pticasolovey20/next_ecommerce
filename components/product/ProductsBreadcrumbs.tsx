"use client";

import { useProductBreadcrumbs } from "@/hooks/product/useProductBreadcrumbs";

import {
  BreadcrumbsRoot,
  BreadcrumbsList,
  BreadcrumbsItem,
  BreadcrumbsSeparator,
} from "@/ui/breadcrumbs/index";
import { MdChevronRight } from "react-icons/md";

const ProductsBreadcrumbs = () => {
  const { list } = useProductBreadcrumbs();

  return (
    <BreadcrumbsRoot separator={<MdChevronRight />}>
      <BreadcrumbsList className="truncate">
        {list?.map(({ label, href, isActive }, index) => {
          const isLast = index === list.length - 1;

          return (
            <li key={index} className="flex items-center gap-2">
              <BreadcrumbsItem href={href} isActive={isActive} className={isLast ? "truncate" : ""}>
                {label}
              </BreadcrumbsItem>

              {!isLast && <BreadcrumbsSeparator />}
            </li>
          );
        })}
      </BreadcrumbsList>
    </BreadcrumbsRoot>
  );
};

export default ProductsBreadcrumbs;
