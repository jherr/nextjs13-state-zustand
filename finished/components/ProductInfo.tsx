import Image from "next/image";

import VisualWrapper from "./VisualWrapper";

import { useStore } from "@/src/store";

export default function ProductInfo({
  description,
  image,
}: {
  description: string;
  image: string;
}) {
  return (
    <VisualWrapper rsc name="ProductInfo">
      <Image src={image} alt="Product Name" width={600} height={488} />
      <h1 className="text-3xl font-bold border-t-2 border-fuchsia-400 mt-2 pt-2">
        {useStore.getState().name}
      </h1>
      <p className="mt-2 italic">{description}</p>
    </VisualWrapper>
  );
}
