import { useEffect, useState } from "react";
import VirtualizedList from "./components/VirtualizedList";

const App = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products?limit=200");
      const data = await response.json();

      if (data && data?.products) {
        setProducts(data?.products);
      } else {
        console.log("no data present");
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return <VirtualizedList products={products} />;
};

export default App;
