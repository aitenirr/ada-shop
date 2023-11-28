import axios from "axios";
import ProductCard from "../ProductCard/ProductCard";
import { useState } from "react";

function ProductList() {
  const [products, setPoducts] = useState([]);
  console.log("products", products);
  async function getProducts() {
    const response = await axios.get("https://dummyJson.com/products");
    setPoducts(response.data.products);
  }

  return (
    <div className="container mx-auto px-8">
      <div className="flex justify-between">
        <button onClick={getProducts}>get products</button>
        <h1 className="text-4xl">New Arrivals</h1>
        <button className="btn hidden md:block">More products →</button>
      </div>
      <div className="flex flex-wrap justify-between">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
      <button className="btn block md:hidden">More products →</button>
    </div>
  );
}

export default ProductList;
