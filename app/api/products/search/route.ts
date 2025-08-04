import { NextRequest, NextResponse } from "next/server";
import { prismaClient } from "@/lib/prismaClient";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    const query = searchParams.get("query") || "";

    if (!query || query.trim().length < 2) {
      return NextResponse.json(
        { success: false, message: "Search query must be at least 2 characters" },
        { status: 400 }
      );
    }

    const where = {
      OR: [
        {
          title: {
            contains: query.trim(),
            mode: "insensitive" as const,
          },
        },
        {
          description: {
            contains: query.trim(),
            mode: "insensitive" as const,
          },
        },
        {
          category: {
            contains: query.trim(),
            mode: "insensitive" as const,
          },
        },
      ],
    };

    const products = await prismaClient.product.findMany({
      where,
      orderBy: {
        id: "desc",
      },
    });

    return NextResponse.json({
      success: true,
      products,
      query: query.trim(),
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
