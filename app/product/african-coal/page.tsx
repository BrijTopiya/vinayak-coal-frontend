"use client";

import { useEffect, useState } from "react";
import "./african-coal.css";

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  image_url: string | null;
  calorific_value: string;
  price: string;
}

const galleryImages = [
  "/photo/x1.jpg",
  "/photo/x2.jpg",
  "/photo/x3.jpg",
  "/photo/x4.jpg",
];

export default function AfricanCoal() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/products/category/${encodeURIComponent("African Coal")}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="product-detail-page">
      <section className="about-banner">
        <h1>AFRICAN COAL</h1>
      </section>

      <div className="product-header">
        <h3>Our Product</h3>
      </div>

      {/* API Product Listing */}
      <section className="product-listing">
        {loading ? (
          <p>Loading products...</p>
        ) : products.length === 0 ? (
          <p>No products available right now.</p>
        ) : (
          <div className="product-listing-grid">
            {products.map((product) => (
              <div className="product-listing-card" key={product.id}>
                {product.image_url && (
                  <img
                    src={`http://127.0.0.1:8000/storage/${product.image_url}`}
                    alt={product.name}
                  />
                )}
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p><strong>Calorific Value:</strong> {product.calorific_value}</p>
                <p><strong>Price:</strong> ₹{product.price}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="two-col-detail">
        {/* Left column */}
        <div className="col-left">
          <img
            src="/photo/African1.jpg"
            alt="African Coal"
            className="detail-img"
          />
          <p>
            South African coal is an important source of energy for power generation, cement production, 
            steel manufacturing, and industrial applications. Major producing regions offer different coal 
            grades with varying calorific values, ash, moisture, and sulfur content. African coal is valued 
            for its good energy output, competitive pricing, and availability in multiple specifications.
          </p>
          <p>
            Depending on the grade and origin, African coal can be selected to meet specific industrial fuel 
            requirements, making it a suitable option for both regular and bulk buyers.
          </p>

          <h2>Advantages of African Coal</h2>
          <ul className="check-list-page">
            <li><i className="fa-solid fa-circle-check"></i> Suitable for power generation and industrial applications</li>
            <li><i className="fa-solid fa-circle-check"></i> Available in different calorific-value and quality specifications</li>
            <li><i className="fa-solid fa-circle-check"></i> Widely used in power plants, cement, steel, and boilers</li>
            <li><i className="fa-solid fa-circle-check"></i> Major producing regions support regular bulk shipments</li>
          </ul>
        </div>

        {/* Right column */}
        <div className="col-right">
          <h2>Why Choose Carbon for African Coal?</h2>
          <ul className="check-list-page">
            <li><i className="fa-solid fa-circle-check"></i> Consistent coal quality for industrial requirements</li>
            <li><i className="fa-solid fa-circle-check"></i> Coal selected based on calorific value, ash, moisture, and sulfur</li>
            <li><i className="fa-solid fa-circle-check"></i> Suitable for power, cement, steel, and other industries</li>
            <li><i className="fa-solid fa-circle-check"></i> Different coal grades available as per requirements</li>
            <li><i className="fa-solid fa-circle-check"></i> Stable sourcing for regular and bulk requirements</li>
            <li><i className="fa-solid fa-circle-check"></i> Smooth coordination from sourcing to delivery</li>
          </ul>
          <p>
            African coal is sourced from major mining regions across the continent.
            It is available in different grades to meet various industrial requirements.
            Its good calorific value makes it suitable for efficient energy generation.
            African coal is widely used in power plants, cement factories, and heavy industries.
            Reliable supply, competitive pricing, and export availability make it a valuable fuel option.
          </p>

          <img
            src="/photo/African2.jpg"
            alt="Coal power plant"
            className="detail-img2"
          />
        </div>
      </section>

      <section className="media-gallery">
        <h2>Photo Gallery</h2>
        <div className="gallery-grid">
          {galleryImages.map((img, index) => (
            <div className="gallery-item" key={index}>
              <img src={img} alt={`Gallery ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>

      <section className="products-cta">
        <h2>Need a custom quote?</h2>
        <p>Reach out to our team for pricing tailored to your requirements.</p>
        <a href="/contact" className="btn btn-primary">Contact Us</a>
      </section>
    </div>
  );
}