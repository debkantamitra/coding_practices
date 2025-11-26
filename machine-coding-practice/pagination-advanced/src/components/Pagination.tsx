import { useEffect, useState } from "react";
import ProductCard, { type Product } from "./ProductCard";

const Pagination = () => {
  const PAGE_SIZE = 10;
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState<Product[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const getProducts = async () => {
    try {
      setIsLoading(true);

      const res = await fetch("https://dummyjson.com/products?limit=100");
      const data = await res.json();

      if (data && data.products) {
        setProducts(data.products);
        setTotalPages(data.products.length / PAGE_SIZE);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return isLoading ? (
    <div className="loader">Loading...</div>
  ) : (
    <>
      <div className="container">
        {products
          ?.slice(currentPage * PAGE_SIZE - PAGE_SIZE, currentPage * PAGE_SIZE)
          ?.map((prod) => (
            <ProductCard {...prod} />
          ))}
      </div>
      <div className="pagination">
        <button
          className="pagination_btn static"
          onClick={() => {
            if (currentPage === 1) {
              setCurrentPage(totalPages);
            } else {
              setCurrentPage((prev) => prev - 1);
            }
          }}
        >
          Prev
        </button>

        {products?.slice(0, 10).map((_, index) => {
          const pageNum = index + 1;
          const isActive = pageNum === currentPage;

          return (
            <button
              className={`pagination_btn ${isActive ? "active" : ""}`}
              onClick={() => setCurrentPage(pageNum)}
              key={pageNum}
            >
              {pageNum}
            </button>
          );
        })}

        <button
          className="pagination_btn static"
          onClick={() => {
            if (currentPage === totalPages) {
              setCurrentPage(1);
            } else {
              setCurrentPage((prev) => prev + 1);
            }
          }}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Pagination;
