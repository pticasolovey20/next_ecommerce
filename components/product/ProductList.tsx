"use client";

import { PRODUCTS_PER_PAGE } from "@/constants/product";
import { useProducts } from "@/hooks/product/useProducts";
import { ProductData } from "@/types/product";

import ProductListSkeleton from "@/components/product/ProductListSkeleton";
import ProductCard from "@/components/product/ProductCard";

const ProductList = () => {
  const { isLoading, products, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useProducts(PRODUCTS_PER_PAGE);

  if (isLoading) return <ProductListSkeleton />;

  return (
    <div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-4">
        {products?.map((product: ProductData) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {isFetchingNextPage && <ProductListSkeleton />}

      {hasNextPage && (
        <div className="flex justify-center mt-4">
          <button onClick={() => fetchNextPage()} className="font-medium text-lg cursor-pointer">
            SHOW MORE
          </button>
        </div>
      )}
    </div>
  );
};

// <div className="mt-16">
//   <h2 className="text-3xl font-light text-gray-800 text-center mb-12">Ключевые особенности</h2>
//   <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
//     <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
//       <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg">
//         🚀
//       </div>
//       <h3 className="text-xl font-semibold text-gray-700 mb-3">Невероятная производительность</h3>
//       <p className="text-gray-600 leading-relaxed">
//         Процессор Apple M3 Max обеспечивает максимальную производительность для профессиональных
//         задач и творческой работы.
//       </p>
//     </div>

//     <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
//       <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg">
//         🖥️
//       </div>
//       <h3 className="text-xl font-semibold text-gray-700 mb-3">Потрясающий дисплей</h3>
//       <p className="text-gray-600 leading-relaxed">
//         16.2-дюймовый Liquid Retina XDR дисплей с поддержкой HDR и широкой цветовой гаммой P3 для
//         точной цветопередачи.
//       </p>
//     </div>

//     <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
//       <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg">
//         🔋
//       </div>
//       <h3 className="text-xl font-semibold text-gray-700 mb-3">Долгое время работы</h3>
//       <p className="text-gray-600 leading-relaxed">
//         До 22 часов воспроизведения фильмов благодаря энергоэффективной архитектуре Apple Silicon.
//       </p>
//     </div>

//     <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
//       <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg">
//         🔧
//       </div>
//       <h3 className="text-xl font-semibold text-gray-700 mb-3">Профессиональные возможности</h3>
//       <p className="text-gray-600 leading-relaxed">
//         Идеален для видеомонтажа, 3D-моделирования, разработки и других профессиональных задач.
//       </p>
//     </div>
//   </div>
// </div>;

export default ProductList;
