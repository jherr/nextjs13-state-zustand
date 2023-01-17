"use client";

import { useStore } from "@/src/store";

import VisualWrapper from "./VisualWrapper";

export default function CartTotal() {
  const cartTotal = useStore((state) => state.cartTotal);
  return (
    <VisualWrapper name="CartTotal">
      <div className="flex items-center">
        <div className="text-2xl">Total: ${cartTotal.toFixed(2)}</div>
        <div>
          <button
            type="button"
            className="ml-5 inline-flex items-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            onClick={() => {
              useStore.setState({ cartTotal: 0 });
            }}
          >
            Clear
          </button>
        </div>
      </div>
    </VisualWrapper>
  );
}
