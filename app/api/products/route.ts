import { NextRequest, NextResponse } from "next/server";
import { prismaClient } from "@/lib/prismaClient";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");

    const products = await prismaClient.product.findMany({
      skip: (page - 1) * limit,
      take: limit,
    });

    const total = await prismaClient.product.count();
    const totalPages = Math.ceil(total / limit);

    return NextResponse.json({
      success: true,
      products,
      pagination: {
        limit,
        total,
        page,
        totalPages,
        hasNextPage: page < totalPages,
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { success: false, message: error instanceof Error ? error.message : "Unknown error" },
        { status: 500 }
      );
    }
  }
}
