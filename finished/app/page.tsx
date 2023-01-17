import ProductInfo from "@/components/ProductInfo";
import AddToCart from "@/components/AddToCart";
import Description from "@/components/Description";
import Header from "@/components/Header";
import StoreInitializer from "@/components/StoreInitializer";

import { useStore } from "@/src/store";

export default async function Home() {
  const dataRes = await fetch("http://localhost:8080/product.json");
  const data = (await dataRes.json()) as {
    name: string;
    description: string;
    image: string;
    price: number;
  };

  useStore.setState({ name: data.name, price: data.price });

  return (
    <main className="p-5">
      <StoreInitializer name={data.name} price={data.price} />
      <Header />
      <div className="grid grid-cols-2 gap-2">
        <ProductInfo description={data.description} image={data.image} />
        <div>
          <Description description={data.description} />
          <AddToCart />
        </div>
      </div>
    </main>
  );
}
