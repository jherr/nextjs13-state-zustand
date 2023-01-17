"use client";

import VisualWrapper from "./VisualWrapper";

import { useStore } from "@/src/store";

export default function AddToCart() {
  const { name, price } = useStore();
  return (
    <VisualWrapper name="AddToCart">
      <h1 className="font-bold text-3xl">{name}</h1>
      <p className="text-2xl">Price ${price.toFixed(2)}</p>
      <div className="flex justify-end">
        <button
          type="button"
          className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          onClick={() => {
            useStore.setState((state) => ({
              cartTotal: state.cartTotal + price,
            }));
          }}
        >
          Add to Cart
        </button>
      </div>
    </VisualWrapper>
  );
}
