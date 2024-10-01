import { products } from "@/core";

const ProductPage = (props: any) => {
  const id = +props.params.id;
  const product = products.find((prod) => prod.id === id);

  return <div>{product?.name || "Produto"}</div>;
};

export default ProductPage;
