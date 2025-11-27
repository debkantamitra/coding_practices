export interface Product {
  id: number;
  title: string;
  thumbnail: string;
}

interface Props {
  targetRef?: React.Ref<HTMLDivElement>;
}

const ProductCard = ({ id, title, thumbnail, targetRef }: Product & Props) => {
  return (
    <div className="product_card" ref={targetRef}>
      <img src={thumbnail} alt={`${title}_${id}`} />
      <p>
        {title} {id}
      </p>
    </div>
  );
};

export default ProductCard;
