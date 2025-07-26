import { NextRequest, NextResponse } from "next/server";

const PRODUCTS = Array.from({ length: 100 }, (_, index) => ({
  id: index + 1,
  title: `Product Title ${index + 1}`,
  description: `Very looooong product description for product ${index + 1}`,
  price: Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000,
  rating: +(Math.random() * 4 + 1).toFixed(1),
}));

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");

    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const totalPages = Math.ceil(PRODUCTS.length / limit);

    const products = PRODUCTS.slice(startIndex, endIndex);

    return NextResponse.json({
      success: true,
      products,

      pagination: {
        limit,
        total: PRODUCTS.length,

        page,
        totalPages,
        hasNextPage: page < totalPages,
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({
        success: false,
        message: error.message,
      });
    }
  }
}
