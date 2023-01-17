import { create } from "zustand";

export const useStore = create<{
  name: string;
  price: number;
  cartTotal: number;
}>((set) => ({
  name: "",
  price: 0,
  cartTotal: 0,
}));
