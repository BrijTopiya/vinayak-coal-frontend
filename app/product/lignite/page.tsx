"use client";

import { useEffect, useState } from "react";
import "./lignite.css";

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
  "/photo/z1.jpg",
  "/photo/z2.jpg",
  "/photo/z3.jpg",
  "/photo/z4.jpg",
];

export default function Lignite() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/products/category/${encodeURIComponent("Lignite")}`)
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
        <h1>LIGNITE</h1>
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
            src="/photo/Lignite1.jpg"
            alt="Lignite"
            className="detail-img"
          />
          <p>
           Lignite coal, commonly known as brown coal, is a low-rank coal with high moisture content and relatively 
           low carbon concentration. It has a lower calorific value compared with sub-bituminous and bituminous coal. 
           Lignite is mainly used for electricity generation, industrial boilers, and heating applications, especially 
           in power plants located near mining areas.
          </p>
          <p>
            Its availability and relatively low production cost make it an important fuel source in regions with large 
            lignite reserves. Due to its high moisture content, lignite is generally less suitable for long-distance 
            transportation.
          </p>

          <h2>Advantages of Lignite</h2>
          <ul className="check-list-page">
            <li><i className="fa-solid fa-circle-check"></i> Widely available in regions with large coal reserves</li>
            <li><i className="fa-solid fa-circle-check"></i> Commonly used as fuel for thermal power plants</li>
            <li><i className="fa-solid fa-circle-check"></i> Provides a steady fuel supply for nearby power plants</li>
            <li><i className="fa-solid fa-circle-check"></i> Suitable for boilers and various heating processes</li>
          </ul>
        </div>

        {/* Right column */}
        <div className="col-right">
          <h2>Why Choose Carbon for Lignite?</h2>
          <ul className="check-list-page">
            <li><i className="fa-solid fa-circle-check"></i> Lignite sourced from dependable mining regions</li>
            <li><i className="fa-solid fa-circle-check"></i> Quality selected according to required moisture, ash, and calorific value</li>
            <li><i className="fa-solid fa-circle-check"></i> Suitable for large-volume industrial and power-generation requirements</li>
            <li><i className="fa-solid fa-circle-check"></i> Well suited for thermal power generation</li>
            <li><i className="fa-solid fa-circle-check"></i> Support throughout sourcing, documentation, and supply coordination</li>
            <li><i className="fa-solid fa-circle-check"></i> Specifications can be matched according to customer needs</li>
          </ul>
          <p>
            Carbon provides reliable and cost-effective lignite solutions for power plants and industrial applications.
            We focus on sourcing lignite with suitable calorific value, moisture, ash, and sulfur specifications.
            Our approach ensures consistent quality and dependable supply for bulk requirements.
            We offer competitive pricing and flexible solutions based on customer requirements.
          </p>

          <img
            src="/photo/Lignite2.jpg"
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