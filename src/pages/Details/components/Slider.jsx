import axios from "axios";
import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { useParams } from "react-router-dom";

function Slider() {
  const params = useParams();
  const [product, setProduct] = useState(null);
  console.log("product: ", product);

  async function getSingleProduct() {
    const response = await axios.get(
      "https://dummyjson.com/products/" + params.id
    );
    setProduct(response.data);
  }

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <button onClick={getSingleProduct}>Get Product</button>
        LOADING...
      </div>
    );
  }

  return (
    <div>
      <Carousel showThumbs={false} showStatus={false} showIndicators={false}>
        {product.images.map((item) => (
          <div>
            <img src={item} alt="" />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Slider;
