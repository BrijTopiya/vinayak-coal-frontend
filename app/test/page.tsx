"use client";

import { useEffect, useState } from "react";

export default function TestPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/products')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setProducts(data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Test Products</h1>
      {products.map((p: any) => (
        <div key={p.id}>
          <h3>{p.name}</h3>
          <p>{p.description}</p>
        </div>
      ))}
    </div>
  );
}