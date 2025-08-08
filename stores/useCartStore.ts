import { ProductData } from "@/types/product";
import { create } from "zustand";

interface CartItem extends ProductData {
  quantity: number;
}

interface CartState {
  isCartOpen: boolean;
  cartList: CartItem[];

  openCart: () => void;
  closeCart: () => void;

  addProduct: (product: ProductData, quantity?: number) => void;
  removeProduct: (id: string) => void;

  clearCart: () => void;

  incrementQuantity: (id: string) => void;
  decrementQuantity: (id: string) => void;

  getItemQuantity: (id: string) => number;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartState>((set, get) => ({
  isCartOpen: false,
  cartList: [],

  openCart: () => set({ isCartOpen: true }),
  closeCart: () => set({ isCartOpen: false }),

  addProduct: (product, quantity = 1) => {
    const cartList = get().cartList;
    const existingProduct = cartList.find((item) => item.id === product.id);

    get().openCart();

    if (existingProduct) {
      set((state) => ({
        cartList: state.cartList.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        ),
      }));
    } else {
      set((state) => ({
        cartList: [{ ...product, quantity }, ...state.cartList],
      }));
    }
  },

  removeProduct: (id: string) => {
    set((state) => ({
      cartList: state.cartList.filter((product) => product.id !== id),
    }));
  },

  incrementQuantity: (id: string) => {
    console.log(id);

    set((state) => ({
      cartList: state.cartList.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      ),
    }));
  },

  decrementQuantity: (id: string) => {
    const item = get().cartList.find((item) => item.id === id);

    if (item && item.quantity > 1) {
      set((state) => ({
        cartList: state.cartList.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        ),
      }));
    } else {
      get().removeProduct(id);
    }
  },

  clearCart: () => {
    set({ cartList: [] });
  },

  getItemQuantity: (id: string) => {
    const item = get().cartList.find((item) => item.id === id);

    return item ? item.quantity : 0;
  },

  getTotalPrice: () => {
    const cartList = get().cartList;

    return cartList.reduce((total, item) => {
      const price = item.price || 0;

      return total + price * item.quantity;
    }, 0);
  },
}));
