import { PrismaClient } from "@prisma/client";
import { PRODUCTS } from "@/constants/product";

const prismaClient = new PrismaClient();

async function main() {
  for (const product of PRODUCTS) {
    await prismaClient.product.create({
      data: {
        title: product.title,
        description: product.description,
        category: product.category,

        price: product.price,
        oldPrice: product.oldPrice,
        discount: product.discount,
        rating: product.rating,

        assets: product.assets,
        features: product.features,
      },
    });
  }

  console.log("Seed completed.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prismaClient.$disconnect();
  });
