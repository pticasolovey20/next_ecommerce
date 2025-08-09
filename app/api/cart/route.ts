import { cookies } from "next/headers";
import { cartService } from "@/services/CartService";
import { generateSessionId } from "@/helpers/generateSessionId";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const cookieStore = await cookies();
    const existingSessionId = cookieStore.get("sessionId")?.value;

    let cart;

    if (existingSessionId) {
      cart = await cartService.getCart(existingSessionId);
    }

    if (!cart) {
      const newSessionId = existingSessionId || generateSessionId();
      cart = await cartService.createCart(newSessionId);

      if (!existingSessionId) {
        const response = NextResponse.json({ success: true, cart });

        response.cookies.set("sessionId", newSessionId, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "lax",
          maxAge: 24 * 60 * 60,
        });

        return response;
      }
    }

    return NextResponse.json({ success: true, cart });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { success: false, message: error instanceof Error ? error.message : "Unknown error" },
        { status: 500 }
      );
    }
  }
}
