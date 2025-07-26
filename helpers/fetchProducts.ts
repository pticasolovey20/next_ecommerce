import axiosInstance from "@/axios/axiosInstance";

export const fetchProducts = async () => {
  try {
    const { data } = await axiosInstance.get("/api/product");
    return data.products;
  } catch (error) {
    console.log(error);
  }
};
