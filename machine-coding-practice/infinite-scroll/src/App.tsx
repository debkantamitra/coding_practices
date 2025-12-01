import { useEffect, useRef, useState } from "react";
import ProductList from "./components/ProductList";
import type { Product } from "./components/ProductCard";

const PAGE_SIZE = 10;

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isFetching, setIsFetching] = useState(true);
  const [productList, setProductList] = useState<Product[] | null>(null);
  const skip = currentPage * PAGE_SIZE - PAGE_SIZE;
  const targetRef = useRef<HTMLDivElement>(null);
  const [hasMore, setHasMore] = useState(true);

  const getProducts = async () => {
    if (!hasMore) return;
    setIsFetching(true);

    try {
      const res = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${skip}`
      );
      const data = await res.json();

      if (data && data?.products.length > 0) {
        setProductList((prev) => [...(prev ?? []), ...data?.products]);
      } else {
        setHasMore(false);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setIsFetching(false);
    }
  };

  const handleInfiniteScroll = (entries: IntersectionObserverEntry[]) => {
    if (entries && entries[0].intersectionRatio > 0.99) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if (targetRef.current) {
      const observer = new IntersectionObserver(handleInfiniteScroll, {
        threshold: 1,
      });

      observer.observe(targetRef.current);

      return () => {
        if (targetRef.current) observer.unobserve(targetRef.current);
      };
    }
  }, [productList]);

  useEffect(() => {
    getProducts();
  }, [currentPage]);

  return (
    <>
      {productList && productList?.length > 0 ? (
        <ProductList products={productList} targetRef={targetRef} />
      ) : !isFetching && (
        <div className="msg_container">No products to show</div>
      )}

      {isFetching && (
        <div className="msg_container">Loading...</div>
      )}
    </>
  );
};

export default App;
