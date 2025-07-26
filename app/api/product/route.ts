import { NextResponse } from "next/server";

export async function GET() {
  try {
    const products = Array.from({ length: 20 }).map((_, index) => ({
      id: index + 1,
      title: "Product Title",
      description: "Very looooong product description",
      price: 1000,
    }));

    return NextResponse.json({ success: true, products });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ success: false, message: error.message });
    }
  }
}
