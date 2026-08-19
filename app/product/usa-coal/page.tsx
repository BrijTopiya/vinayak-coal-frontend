"use client";

import { useEffect, useState } from "react";
import "./usa-coal.css";

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
  "/photo/y1.jpg",
  "/photo/y2.jpg",
  "/photo/y3.jpg",
  "/photo/y4.jpg",
];

export default function UsaCoal() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/products/category/${encodeURIComponent("USA Coal")}`)
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
        <h1>USA COAL</h1>
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
            src="/photo/Usa1.jpg"
            alt="USA Coal"
            className="detail-img"
          />
          <p>
            The United States coal is a widely traded energy resource available in various grades, 
            including bituminous, sub-bituminous, and anthracite. It is valued for its diverse quality 
            specifications, good calorific value, and suitability for different industrial applications. 
            USA coal is commonly used in power generation, steel production, cement manufacturing, and industrial processes.
          </p>
          <p>
            Depending on the source, it can offer different levels of ash, moisture, sulfur, and calorific value. 
            Established mining operations, transportation networks, and export infrastructure support the supply of 
            USA coal to domestic and international markets.
          </p>

          <h2>Advantages of USA Coal</h2>
          <ul className="check-list-page">
            <li><i className="fa-solid fa-circle-check"></i> Provides strong and consistent energy for industrial applications</li>
            <li><i className="fa-solid fa-circle-check"></i> Available in bituminous, sub-bituminous, and other grades</li>
            <li><i className="fa-solid fa-circle-check"></i> Suitable for power generation, steel production, cement, and manufacturing</li>
            <li><i className="fa-solid fa-circle-check"></i> Established mining, transportation, and port infrastructure supports international trade.</li>
          </ul>
        </div>

        {/* Right column */}
        <div className="col-right">
          <h2>Why Choose Carbon for USA Coal?</h2>
          <ul className="check-list-page">
            <li><i className="fa-solid fa-circle-check"></i> Suitable grades can be selected according to calorific value and application</li>
            <li><i className="fa-solid fa-circle-check"></i> Specifications are considered for ash, moisture, sulfur, and energy value</li>
            <li><i className="fa-solid fa-circle-check"></i> Cost-effective solutions for regular and bulk requirements</li>
            <li><i className="fa-solid fa-circle-check"></i> Suitable for customers looking for consistent coal availability</li>
            <li><i className="fa-solid fa-circle-check"></i> Appropriate for power, cement, steel, and other industrial uses</li>
            <li><i className="fa-solid fa-circle-check"></i> Assistance with sourcing, specifications, documentation, and supply coordination</li>
          </ul>
          <p>
            USA coal is available in a wide range of grades and quality specifications.
            It is suitable for power plants and various heavy industrial applications.
            Different coal grades offer flexibility based on energy and operational requirements.
            Strong mining and transportation infrastructure supports reliable supply.
            Its established export network makes USA coal accessible to international buyers.
          </p>

          <img
            src="/photo/Usa2.jpg"
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