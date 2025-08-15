import { cookies } from "next/headers";
import { cartService } from "@/services/CartService";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest) {
  try {
    const body = await request.json();
    const { productId } = body;

    if (!productId) {
      return NextResponse.json(
        { success: false, message: "productId is required" },
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

    const updatedCart = await cartService.removeProductFromCart(sessionId, cart.id, productId);

    return NextResponse.json({
      success: true,
      cart: updatedCart,
      message: "Item removed from cart successfully",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
