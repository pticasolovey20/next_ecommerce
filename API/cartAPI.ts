import axiosInstance from "@/axios/axiosInstance";
import { CartResponseData } from "@/types/cart";

export const fetchCart = async (): Promise<CartResponseData> => {
  const { data } = await axiosInstance.get<CartResponseData>("/api/cart");

  return data;
};
