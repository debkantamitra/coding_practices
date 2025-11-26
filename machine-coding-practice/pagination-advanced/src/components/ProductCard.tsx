export interface Product {
    id: number;
    title: string;
    thumbnail: string;
}

const ProductCard = ({id, title, thumbnail}: Product) => {
  return (
    <div className="product_card">
        <img src={thumbnail} alt={`${title}_${id}`} />
        <p>{title} {id}</p>
    </div>
  )
}

export default ProductCard