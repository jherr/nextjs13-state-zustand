"use client";

import { useRef } from "react";

import { useStore } from "@/src/store";

function StoreInitializer({ name, price }: { name: string; price: number }) {
  const initialized = useRef(false);
  if (!initialized.current) {
    useStore.setState({ name, price });
    initialized.current = true;
  }
  return null;
}

export default StoreInitializer;
