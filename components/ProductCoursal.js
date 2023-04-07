import React from "react";
import { useState, useRef } from "react";
import ReactImageMagnify from "react-image-magnify";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const images = [
  "/images/img-01.png",

  "/images/img-02.png",
  "/images/img-04.png",
];

function ProductCoursal() {
  // const [img, setImg] = useState();
  // const handelHover = (image, i) => {
  //   setImg(image);
  // };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const CustomDot = ({ index, onClick, active }) => {
    return (
      <button
        onClick={(e) => {
          onClick();
          e.preventDefault();
        }}
        className="default-div"
      >
        {
          <img
            className={active ? "img_wrap active-product" : "img_wrap"}
            src={images[index]}
          />
        }
      </button>
    );
  };

  return (
    <>
      <Carousel
        showDots
        swipeable={true}
        draggable={true}
        responsive={responsive}
        ssr
        infinite={true}
        deviceType={"desktop"}
        customDot={<CustomDot />}
      >
        {images.map((img, i) => (
          // <img
          //   onMouseOver={() => handelHover(img)}
          //   key={i}
          //   className="img-fluid"
          //   src={img}
          // />

          <ReactImageMagnify
            key={i}
            {...{
              smallImage: {
                alt: "Wristwatch by Ted Baker London",
                isFluidWidth: true,
                src: img,
              },
              enlargedImagePosition: "over",
              largeImage: {
                src: img,
                width: 1200,
                height: 1800,
              },
              enlargedImageContainerDimensions: {
                width: "150%",
                height: "150%",
              },
            }}
          />
        ))}
      </Carousel>
    </>
  );
}

export default ProductCoursal;
