import axiosInstance from "@/axios/axiosInstance";
import { CartResponseData, CartItemMutationValue } from "@/types/cart";

export const fetchCart = async (): Promise<CartResponseData> => {
  const { data } = await axiosInstance.get<CartResponseData>("/api/cart/get");

  return data;
};

export const fetchAddCartItem = async (productId: string): Promise<CartResponseData> => {
  const { data } = await axiosInstance.post<CartResponseData>("/api/cart/post", { productId });

  return data;
};

export const fetchRemoveCartItem = async (productId: string): Promise<CartResponseData> => {
  const { data } = await axiosInstance.delete<CartResponseData>("/api/cart/delete", {
    data: {
      productId,
    },
  });

  return data;
};

export const fetchUpdateCartItemQuantity = async ({
  productId,
  quantity,
}: CartItemMutationValue) => {
  const { data } = await axiosInstance.patch(`/api/cart/update-quantity`, { productId, quantity });

  return data;
};
