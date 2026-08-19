import "./products.css";

const products = [
  {
    icon: "fa-fire",
    name: "Indonesian Coal",
    desc: "High-quality imported coal with consistent calorific value, ideal for industrial burning and factory use.",
  },
  {
    icon: "fa-globe",
    name: "African Coal",
    desc: "Premium-grade coal sourced from African suppliers, known for reliable energy output and quality standards.",
  },
  {
    icon: "fa-flag-usa",
    name: "USA Coal",
    desc: "Trusted imported coal from the United States, offering strong calorific value for large-scale industrial needs.",
  },
  {
    icon: "fa-layer-group",
    name: "Lignite",
    desc: "Cost-effective brown coal, well-suited for power generation and industrial heating applications.",
  },
];

export default function Products() {
  return (
    <div className="products-page">
      <section className="products-banner">
        <h1 className="page-banner-title" data-text="OUR PRODUCTS">
          Our Products
        </h1>
        
      </section>

      <section className="products-intro">
        <h2>What We Supply</h2>
        <p>
          Carbon offers a diverse range of quality coal products, sourced
          from trusted suppliers and delivered reliably to meet the energy
          needs of factories and enterprises across the region.
        </p>
      </section>

      <section className="products-grid">
        {products.map((item, index) => (
          <div className="product-card" key={index}>
            <div className="product-icon">
              <i className={`fa-solid ${item.icon}`}></i>
            </div>
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </section>

      <section className="products-cta">
        <h2>Need a custom quote?</h2>
        <p>Reach out to our team for pricing tailored to your requirements.</p>
        <a href="/contact" className="btn btn-primary">Contact Us</a>
      </section>
    </div>
  );
}