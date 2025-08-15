import { cookies } from "next/headers";
import { cartService } from "@/services/CartService";
import { generateSessionId } from "@/helpers/generateSessionId";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const cookieStore = await cookies();
    let sessionId = cookieStore.get("sessionId")?.value;

    if (!sessionId) {
      sessionId = generateSessionId();
    }

    let cart = await cartService.getCart(sessionId);
    if (!cart) cart = await cartService.createCart(sessionId);

    const response = NextResponse.json({ success: true, cart });

    if (!cookieStore.get("sessionId")?.value) {
      response.cookies.set("sessionId", sessionId, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 24 * 60 * 60,
      });
    }

    return response;
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { success: false, message: error instanceof Error ? error.message : "Unknown error" },
        { status: 500 }
      );
    }
  }
}
