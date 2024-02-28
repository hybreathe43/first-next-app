"use client";
import { useEffect, useState } from "react";

const ProductList = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data = await fetch("https://dummyjson.com/products");
        const pro = await data.json();
        setProduct(pro.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {product &&
        product.map((data, index) => <h1 key={index}>{data.title}</h1>)}
    </div>
  );
};

export default ProductList;
