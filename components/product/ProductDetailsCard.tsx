"use client";

import { useProductById } from "@/hooks/product/useProductById";

import Image from "next/image";

interface ProductDetailsCardProps {
  productId: string;
}

const ProductDetailsCard = ({ productId }: ProductDetailsCardProps) => {
  const { product } = useProductById(productId);

  return (
    <div>
      <div className="flex flex-col lg:flex-row lg:gap-4">
        {/* LEFT SIDE */}
        <div className="relative lg:max-w-[50%] w-full">
          <div className="sticky top-20 w-full">
            <div className="w-full border p-4">
              <div className="flex flex-col items-center gap-4 lg:hidden">
                <div className="relative w-full h-[250px] border">
                  <Image
                    fill
                    priority
                    src={product?.assets[0].src || ""}
                    alt={product?.assets[0].alt || ""}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div>
                  <ul className="flex items-center gap-2">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <div key={index} className="w-4 h-4 border" />
                    ))}
                  </ul>
                </div>
              </div>

              <div className="hidden lg:block w-full apsect-suare">
                <div className="flex gap-4">
                  <div>
                    <ul className="flex flex-col gap-4">
                      {Array.from({ length: 4 }).map((_, index) => (
                        <li key={index}>
                          <div className="w-24 h-24 border"></div>
                        </li>
                      ))}
                    </ul>

                    <button className="border px-4 mt-4">MORE...</button>
                  </div>

                  <div className="flex-1 flex items-center">
                    <div className="w-full aspect-square border">
                      <div className="relative w-full h-full">
                        <Image
                          fill
                          priority
                          src={product?.assets[0].src || ""}
                          alt={product?.assets[0].alt || ""}
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="lg:max-w-[50%] w-full">
          <div className="w-full border p-4 mt-4 lg:mt-0 mb-4">
            <div className="">
              <h1 className="text-3xl">{product?.title}</h1>

              <div className="mt-4">
                <ul className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <li key={index}>
                      <div className="w-4 h-4 border" />
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-4 mt-2">
                  <div className="inline-flex">
                    <span>CODE:</span>
                    <span>XXXXXX</span>
                  </div>

                  <button className="border px-4">COPY</button>
                </div>

                <div className="flex items-center gap-2 mt-2">
                  <div className="w-4 h-4 border" />
                  <span>AVAILIBLE</span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full border p-4 my-4">
            <div className="flex items-center gap-16">
              <div>
                <span>COLOR</span>

                <ul className="flex flex-wrap items-center gap-4 mt-4">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <li key={index}>
                      <div className="flex border px-4">COLOR {index + 1}</div>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span>MODEL</span>

                <ul className="flex flex-wrap items-center gap-4 mt-4">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <li key={index}>
                      <div className="flex border px-4">MODEL {index + 1}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="w-full border p-4 my-4">
            <div>
              <span className="block text-lg">OLD PRICE</span>
              <span className="block text-xl">PRICE</span>
              <button className="border px-4 mt-4">BUY</button>
            </div>
          </div>

          <div className="w-full h-[200px] border p-4 my-4">
            <span>SERVICES</span>

            <ul className="flex items-center gap-4 mt-4 overflow-hidden">
              {Array.from({ length: 10 }).map((_, index) => (
                <li key={index}>
                  <div className="w-[300px] h-32 border"></div>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full h-[200px] border p-4 my-4 ">
            <span>ACCESSORIES</span>

            <ul className="flex items-center gap-4 mt-4 overflow-hidden">
              {Array.from({ length: 10 }).map((_, index) => (
                <li key={index}>
                  <div className="w-[300px] h-32 border"></div>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full border p-4 my-4">
            <div>
              <span>DELIVERY</span>

              <ul className="flex flex-col gap-4 mt-4">
                {Array.from({ length: 10 }).map((_, index) => (
                  <li key={index}>
                    <div className="flex items-center justify-between border px-4">
                      <div>NAME</div>

                      <span>DATE</span>

                      <div className="flex items-center gap-2">
                        <span>PRICE</span>
                        <div className="w-4 h-4 border" />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="w-full border p-4 mt-4">
            <div>
              <span>ACCEPT:</span>

              <ul className="flex flex-wrap items-center gap-4 mt-4">
                {Array.from({ length: 10 }).map((_, index) => (
                  <li key={index}>
                    <div className="w-20 h-8 border">
                      <div></div>
                      <span></span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[400px] flex flex-col border p-4 my-4">
        <span>FEATURES</span>

        <div className="flex-1 overflow-hidden">
          <div className="mt-4">
            <span>CATEGORY</span>

            <ul className="mt-4">
              {Array.from({ length: 5 }).map((_, index) => (
                <li key={index}>
                  <div className="w-full truncate">
                    <span>
                      DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION
                      DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4">
            <span>CATEGORY</span>

            <ul className="mt-4">
              {Array.from({ length: 5 }).map((_, index) => (
                <li key={index}>
                  <div className="w-full truncate">
                    <span>
                      DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION
                      DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4">
            <span>CATEGORY</span>

            <ul className="mt-4">
              {Array.from({ length: 5 }).map((_, index) => (
                <li key={index}>
                  <div className="w-full truncate">
                    <span>
                      DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION
                      DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <button className="w-fit border px-4 mt-4">MORE...</button>
      </div>

      <div className="w-full border p-4 my-4">
        <ul className="flex items-center gap-4 overflow-hidden">
          {Array.from({ length: 10 }).map((_, index) => (
            <li key={index}>
              <div className="w-[300px] h-[400px] border"></div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
