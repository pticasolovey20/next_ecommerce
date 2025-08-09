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
            orderBy: {
              createdAt: "desc",
            },
          },
        },
      });

      return cart;
    } catch (error) {
      console.error(`Error fetching cart for session ${sessionId}:`, error);
      throw new Error("Failed to fetch cart");
    }
  }

  async createCart(sessionId: string) {
    try {
      const cart = await this.prismaClient.cart.create({
        data: { sessionId },
        include: {
          items: {
            orderBy: {
              createdAt: "desc",
            },
          },
        },
      });

      return cart;
    } catch (error) {
      console.error(`Error creating cart for session ${sessionId}:`, error);
      throw new Error("Failed to create cart");
    }
  }
}

export const cartService = new CartService(prismaClient);
