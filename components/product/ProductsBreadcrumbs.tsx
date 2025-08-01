"use client";

import { useProductBreadcrumbs } from "@/hooks/product/useProductBreadcrumbs";

import {
  BreadcrumbsRoot,
  BreadcrumbsList,
  BreadcrumbsItem,
  BreadcrumbsSeparator,
} from "@/ui/breadcrumbs/index";
import { MdChevronRight } from "react-icons/md";
import { Fragment } from "react";

const ProductsBreadcrumbs = () => {
  const { list } = useProductBreadcrumbs();

  return (
    <BreadcrumbsRoot separator={<MdChevronRight />}>
      <BreadcrumbsList>
        {list?.map(({ label, href, isActive }, index) => {
          const isLast = index === list.length - 1;

          return (
            <Fragment key={index}>
              <BreadcrumbsItem href={href} isActive={isActive}>
                {label}
              </BreadcrumbsItem>

              {!isLast && <BreadcrumbsSeparator />}
            </Fragment>
          );
        })}
      </BreadcrumbsList>
    </BreadcrumbsRoot>
  );
};

export default ProductsBreadcrumbs;
