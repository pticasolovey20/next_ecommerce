import { prismaClient } from "@/lib/prismaClient";
import { PrismaClient } from "@prisma/client";

class CartService {
  private prismaClient: PrismaClient;

  constructor(prismaClient: PrismaClient) {
    this.prismaClient = prismaClient;
  }

  async getCart(sessionId: string) {
    try {
      const cart = await this.prismaClient.cart.findUnique({
        where: { sessionId },

        include: {
          items: {
            include: { product: true },
            orderBy: { createdAt: "desc" },
          },
        },
      });

      return cart;
    } catch (error) {
      console.error(`Error fetching cart for session ${sessionId}:`, error);
      throw error instanceof Error ? error : new Error("Failed to fetch cart");
    }
  }

  async createCart(sessionId: string) {
    try {
      const cart = await this.prismaClient.cart.create({
        data: { sessionId },

        include: {
          items: {
            include: { product: true },
            orderBy: { createdAt: "desc" },
          },
        },
      });

      return cart;
    } catch (error) {
      console.error(`Error creating cart for session ${sessionId}:`, error);
      throw error instanceof Error ? error : new Error("Failed to create cart");
    }
  }

  async addProductToCart(sessionId: string, cartId: string, productId: string) {
    try {
      await this.prismaClient.cartItem.upsert({
        where: {
          cartId_productId: {
            cartId: cartId,
            productId: productId,
          },
        },

        create: {
          cartId: cartId,
          productId: productId,
          quantity: 1,
        },

        update: {
          quantity: { increment: 1 },
        },

        include: { product: true },
      });

      const updatedCart = await this.prismaClient.cart.findUnique({
        where: { sessionId },

        include: {
          items: {
            include: { product: true },
            orderBy: { createdAt: "desc" },
          },
        },
      });

      return updatedCart;
    } catch (error) {
      console.error(`Error adding product ${productId} to cart ${sessionId}:`, error);
      throw error instanceof Error ? error : new Error("Failed to add the product");
    }
  }
}

export const cartService = new CartService(prismaClient);
