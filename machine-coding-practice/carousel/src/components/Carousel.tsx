import { useEffect, useRef, useState } from "react";

type Img = { id: number; url: string; title: string };

interface Props {
  images: Img[];
  imageLimit: number;
  customPrevButton?: (onClick: Function) => void;
  customNextButton?: (onClick: Function) => void;
  isLoading: boolean;
  imgPerSlide: number;
  onImgClick?: (img: Img, index: number) => void;
}

const Carousel = ({
  images,
  imageLimit,
  customNextButton,
  customPrevButton,
  isLoading,
  imgPerSlide,
  onImgClick,
}: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imgRef = useRef<HTMLDivElement>(null);
  const [imgWidth, setImgWidth] = useState<number>(0);

  const handleNext = () => {
    if (currentIndex === imageLimit - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex === 0) {
      setCurrentIndex(imageLimit - 1);
    } else {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  useEffect(() => {
    if (imgRef.current) {
      setImgWidth(imgRef.current?.offsetWidth);
    }
  }, [images]);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div
      className="carousel"
      style={{
        position: "relative",
        overflow: "hidden",
        width: imgWidth * imgPerSlide,
      }}
    >
      <div
        className="img-container"
        style={{ transform: `translateX(-${currentIndex * imgWidth}px)` }}
      >
        {images.slice(0, imageLimit).map((img, index) => {
          return (
            <div
              className="img-component"
              ref={imgRef}
              key={img.id}
              onClick={() => onImgClick?.(img, index)}
            >
              <p>{img.id}</p>
              <p>{img?.title}</p>
            </div>
          );
        })}
      </div>

      <>
        {customPrevButton ? (
          customPrevButton(handlePrev)
        ) : (
          <button className="nav-btn prev" onClick={handlePrev}>
            {"<"}
          </button>
        )}
      </>

      <>
        {customNextButton ? (
          customNextButton(handleNext)
        ) : (
          <button className="nav-btn next" onClick={handleNext}>
            {">"}
          </button>
        )}
      </>
    </div>
  );
};

export default Carousel;
