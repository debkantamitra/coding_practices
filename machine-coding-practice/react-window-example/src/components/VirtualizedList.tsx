import { List } from "react-window";
import type { ProductDto } from "./ProductCard";
import ProductCard from "./ProductCard";

interface Props {
  products: ProductDto[];
}

const VirtualizedList = ({ products }: Props) => {
  return (
    <List
      rowComponent={ProductCard}
      rowCount={products.length}
      rowProps={{ products }}
      rowHeight={100}
      style={{ height: window.innerHeight }}
    />
  );
};

export default VirtualizedList;
