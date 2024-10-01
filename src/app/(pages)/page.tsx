import ProductItem from "@/components/product/ProductItem";
import { products } from "@/core";

export default function Home() {
  return (
    <div className="flex flex-col gap-5 py-10 container">
      {products.map((prod) => (
        <ProductItem key={prod.id} product={prod} />
      ))}
    </div>
  );
}
