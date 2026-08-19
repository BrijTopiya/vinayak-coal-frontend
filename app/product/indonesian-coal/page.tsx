"use client";

import { useEffect, useState } from "react";
import "../products-detail.css";
import "./indonesian-coal.css";

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
  "/photo/w1.jpg",
  "/photo/w2.jpg",
  "/photo/w3.jpg",
  "/photo/w4.jpg",
];

export default function IndonesianCoal() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/products/category/${encodeURIComponent("Indonesian Coal")}`)
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
        <h1>INDONESIAN COAL</h1>
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
            src="/photo/Indonesian1.jpg"
            alt="Indonesian Coal"
            className="detail-img"
          />
          <p>
            Indonesia is one of the world's largest coal producers, known
            for consistently high-quality reserves. Carbon works directly
            with proven, locally-backed suppliers to bring this coal to
            Indian factories and enterprises, offering guidance on
            specifications, quantity, pricing, and shipping terms.
          </p>
          <p>
            As a trusted importer, we take pride in delivering quality
            product on time, building strong relationships through reliable
            and cost-effective service.
          </p>

          <h2>Advantages of Indonesian Coal</h2>
          <ul className="check-list-page">
            <li><i className="fa-solid fa-circle-check"></i> Average calorific value of 3400 to 6000 GAR</li>
            <li><i className="fa-solid fa-circle-check"></i> Available at a reasonable, competitive price</li>
            <li><i className="fa-solid fa-circle-check"></i> Highly effective across various coal-based industries</li>
            <li><i className="fa-solid fa-circle-check"></i> Easy to transport with lower environmental impact</li>
          </ul>
        </div>

        {/* Right column */}
        <div className="col-right">
          <h2>Why Choose Carbon for Indonesian Coal?</h2>
          <ul className="check-list-page">
            <li><i className="fa-solid fa-circle-check"></i> We import significant volumes each year, ensuring stable supply for factories and enterprises</li>
            <li><i className="fa-solid fa-circle-check"></i> Direct quality checks at source before importing</li>
            <li><i className="fa-solid fa-circle-check"></i> Guaranteed consistency across every shipment</li>
            <li><i className="fa-solid fa-circle-check"></i> Fair, transparent pricing on all orders</li>
            <li><i className="fa-solid fa-circle-check"></i> Prompt, professional purchasing and delivery process</li>
            <li><i className="fa-solid fa-circle-check"></i> Efficient warehouse and freight network to meet demand</li>
          </ul>
          <p>
            If you're looking for a dependable Indonesian coal supplier,
            Carbon combines customer satisfaction, product quality, and
            on-time delivery as the core of how we do business.
          </p>

          <img
            src="/photo/Indonesian2.jpg"
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