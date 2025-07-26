import axiosInstance from "@/axios/axiosInstance";

class ProductService {
  async getProducts(page: number = 1, limit: number = 10) {
    try {
      const { data } = await axiosInstance.get(`/api/product?page=${page}&limit=${limit}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}

export const productService = new ProductService();
