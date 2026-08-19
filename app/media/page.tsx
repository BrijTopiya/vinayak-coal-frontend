import "./media.css";

const newsData = [
  {
    title: "Carbon Expands Operations to New Region",
    date: "5 Aug 2026",
    excerpt: "We are excited to announce our expansion into new markets, strengthening our supply network.",
  },
  {
    title: "Carbon Partners with Local Suppliers",
    date: "22 Jul 2026",
    excerpt: "A new partnership aimed at improving delivery times and product quality for our clients.",
  },
  {
    title: "Sustainability Initiative Launched",
    date: "10 Jul 2026",
    excerpt: "Our new initiative focuses on reducing environmental impact across all operations.",
  },
];

const galleryImages = [
  "photo/pexels-hartmut-35650708.jpg",
  "photo/pexels-orlando-s-197680330-13205416.jpg",
  "photo/pexels-radoslaw-sikorski-36097686-38529706.jpg",
  "photo/pexels-wolfgang-weiser-467045605-29856763.jpg",
];

export default function Media() {
  return (
    <div className="media-page">
      <section className="about-banner">
  <h1>MEDIA CORNER</h1>
</section>

      <section className="media-news">
        <h2>Latest News</h2>
        <div className="news-grid">
          {newsData.map((item, index) => (
            <div className="news-card" key={index}>
              <span className="news-date">{item.date}</span>
              <h3>{item.title}</h3>
              <p>{item.excerpt}</p>
            </div>
          ))}
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
    </div>
  );
}