import { useEffect, useState } from "react";
import Carousel from "./components/Carousel";

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchImages = () => {
    fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
      .then((response) => response.json())
      .then((json) => setImages(json))
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div>
      <h1>Carousel Component</h1>

      <Carousel
        images={images}
        imageLimit={10}
        customPrevButton={(onClick) => (
          // @ts-ignore
          <button className="nav-btn prev" onClick={onClick}>
            {"<<"}
          </button>
        )}
        customNextButton={(onClick) => (
          // @ts-ignore
          <button className="nav-btn next" onClick={onClick}>
            {">>"}
          </button>
        )}
        isLoading={isLoading}
        imgPerSlide={3}
        onImgClick={(img, index) => {
          console.log(img, index);
        }}
      />
    </div>
  );
};

export default App;
