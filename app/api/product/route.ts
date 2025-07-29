import { NextRequest, NextResponse } from "next/server";
import { PRODUCTS } from "@/constants/product";

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
