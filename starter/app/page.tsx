import ProductInfo from "@/components/ProductInfo";
import AddToCart from "@/components/AddToCart";
import Description from "@/components/Description";
import Header from "@/components/Header";

export default async function Home() {
  const dataRes = await fetch("http://localhost:8080/product.json");
  const data = (await dataRes.json()) as {
    name: string;
    description: string;
    image: string;
    price: number;
  };

  return (
    <main className="p-5">
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
