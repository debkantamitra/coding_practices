import React from "react";
import type { Product } from "./ProductCard";
import ProductCard from "./ProductCard";

interface Props {
  products: Product[];
  targetRef: React.Ref<HTMLDivElement>;
}

const ProductList = ({ products, targetRef }: Props) => {
  return (
    <div className="product_list">
      {products.map((product, index) => {
        if (index === products.length - 1) {
          return <ProductCard targetRef={targetRef} key={product.id} {...product} />;
        } else {
          return <ProductCard key={product.id} {...product} />;
        }
      })}
    </div>
  );
};

export default ProductList;
