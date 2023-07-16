"use client";
import { useEffect, useState } from 'react';
import ProductInfo from '@/components/ProductInfo';
import AddToCart from '@/components/AddToCart';
import Description from '@/components/Description';
import Header from '@/components/Header';
import StoreInitializer from '@/components/StoreInitializer';
import { useStore } from '@/src/store';

type Product = {
  name: string;
  description: string;
  image: string;
  price: number;
};

export default function Home() {
  const [data, setData] = useState<Product | null>(null);
console.log(data,"data")
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/hello');
        if (response.ok) {
          const jsonData = await response.json();
          setData(jsonData);
        } else {
          console.error('Failed to fetch homepage data:', response.status);
        }
      } catch (error) {
        console.error('Error fetching homepage data:', error);
      }
    };

    fetchData();
  }, []);

    if (data) {
      useStore.setState({ name: data.name, price: data.price });
    }


  return (
    <main className="p-5">
    <StoreInitializer name={data?.name || ''} price={data?.price || 0} />
    <Header />
    <div className="grid grid-cols-2 gap-2">
      <ProductInfo description={data?.description || ''} image={data?.image || ''} />
      <div>
        <Description description={data?.description || ''} />
        <AddToCart />
      </div>
    </div>
  </main>
  );
}
