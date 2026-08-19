import "./price.css";

const priceData = [
  { product: "Indonesian Coal – 4,200 GAR", price: "~US$62 / MT", updated: "17 Aug 2026" },
  { product: "African Coal – Richards Bay", price: "~US$106 / MT", updated: "17 Aug 2026" },
  { product: "USA Coal – 6,900 NAR", price: "₹ 4,600 / MT", updated: "17 Aug 2026" },
  { product: "Lignite Coal", price: "~US$120–160 / MT", updated: "17 Aug 2026" },
];

export default function Price() {
  return (
    <div className="price-page">
      <section className="about-banner">
  <h1>LATEST PRICE</h1>
</section>

      <section className="price-table-section">
        <h2>Current Market Rates</h2>
        <p className="price-note">
          Prices are updated regularly based on market conditions. Contact us
          for bulk order pricing.
        </p>

        <div className="price-table-wrapper">
          <table className="price-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Last Updated</th>
              </tr>
            </thead>
            <tbody>
              {priceData.map((item, index) => (
                <tr key={index}>
                  <td>{item.product}</td>
                  <td className="price-value">{item.price}</td>
                  <td>{item.updated}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <a href="/contact" className="btn btn-primary">
          Contact Us for Bulk Orders
        </a>
      </section>
    </div>
  );
}