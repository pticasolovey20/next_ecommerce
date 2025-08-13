import axiosInstance from "@/axios/axiosInstance";
import { CartResponseData } from "@/types/cart";

export const fetchCart = async (): Promise<CartResponseData> => {
  const { data } = await axiosInstance.get<CartResponseData>("/api/cart");

  return data;
};

export const fetchAddProductToCart = async (productId: string): Promise<CartResponseData> => {
  const { data } = await axiosInstance.post<CartResponseData>("/api/cart", { productId });

  return data;
};

export const fetchRemoveProductFromCart = async (productId: string): Promise<CartResponseData> => {
  const { data } = await axiosInstance.delete<CartResponseData>("/api/cart", {
    data: {
      productId,
    },
  });

  return data;
};
