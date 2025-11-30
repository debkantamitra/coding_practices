import type { RowComponentProps } from "react-window";

export interface ProductDto {
  id: number;
  title: string;
  thumbnail: string;
}

interface Props {
  products: ProductDto[];
}

const ProductCard = ({ index, style, products }: Props & RowComponentProps) => {
  const { id, thumbnail, title } = products[index];

  return (
    <div key={id} className="product_card" style={{ ...style }}>
      <img src={thumbnail} alt={`${id}_${title}`} width={60} height={60} />
      <p>{title}</p>
    </div>
  );
};

export default ProductCard;
