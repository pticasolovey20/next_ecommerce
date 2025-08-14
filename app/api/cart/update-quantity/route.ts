import { cookies } from "next/headers";
import { cartService } from "@/services/CartService";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    const { productId, quantity } = body;

    if (!productId || quantity === undefined) {
      return NextResponse.json(
        { success: false, message: "productId and quantity are required" },
        { status: 400 }
      );
    }

    if (quantity < 0) {
      return NextResponse.json(
        { success: false, message: "quantity cannot be negative" },
        { status: 400 }
      );
    }

    const cookieStore = await cookies();
    const sessionId = cookieStore.get("sessionId")?.value;

    if (!sessionId) {
      return NextResponse.json(
        { success: false, message: "No active cart session" },
        { status: 400 }
      );
    }

    const cart = await cartService.getCart(sessionId);

    if (!cart) {
      return NextResponse.json({ success: false, message: "Cart not found" }, { status: 404 });
    }

    const updatedCart = await cartService.updateProductQuantity(
      sessionId,
      cart.id,
      productId,
      quantity
    );

    return NextResponse.json({
      success: true,
      cart: updatedCart,
      message:
        quantity === 0 ? "Product removed from cart" : "Product quantity updated successfully",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
