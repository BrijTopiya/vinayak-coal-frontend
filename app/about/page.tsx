import "./about.css";


export default function About() {
  return (
    <div className="about-page">
      <section className="about-banner">
  <h1>ABOUT US</h1>
</section>

      
<section className="foundation-section">
  <div className="foundation-text">
    <span className="foundation-label">Our Company</span>
    <h2>A Foundation Built on Quality</h2>
    <p>
      <strong>
        Carbon was founded with a simple goal: deliver reliable, high-quality
        energy solutions to businesses across India.
      </strong>{" "}
      Starting with a small supplier network, we grew into a trusted partner
      for factories and enterprises that depend on consistent, affordable
      energy sources. Our mission is built on quality sourcing, sustainable
      practices, and long-term relationships with the customers we serve.
    </p>
  </div>

  <div className="foundation-image">
    <img
      src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80"
      alt="Carbon team at a supply site"
    />
    <p className="image-caption">The Carbon team at one of our supply sites.</p>
  </div>
</section>

<section className="mission-section">
  <div className="mission-image">
    <img
      src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80"
      alt="Carbon supply operations"
    />
  </div>

  <div className="mission-text">
    <span className="foundation-label">Our Mission</span>
    <h2>Reliability Matters</h2>
    <p>
      From the start, we saw a bigger picture than just supplying coal. We
      understood that factories and enterprises depend on a steady, trusted
      source of energy to keep operations running. Since our founding, we've
      made it our mission to deliver consistent quality at fair prices,
      partnering with suppliers across regions to build a network our
      customers can rely on. Because being a good partner means showing up
      every time, without compromise.
    </p>
  </div>
</section>

{/* Our Values */}
<section className="values-section">
  <div className="values-text">
    <span className="foundation-label">Our Values</span>
    <h2>Consistent Supply, Stronger Business</h2>
    <p>
      At Carbon, our commitment extends beyond just delivering energy
      products. We believe in a responsible approach — one that respects
      long-term partnerships, treats our supplier network fairly, and
      supports the communities where we operate. By maintaining strict
      quality checks and transparent pricing, we help our clients plan with
      confidence and avoid costly disruptions. It's our promise to provide
      energy solutions that are not only reliable for your operations but
      also fair to everyone involved in getting them to you. We're more
      than just a supplier; we're a partner invested in your business
      running smoothly, season after season.
    </p>
  </div>

  <div className="values-image">
    <img
      src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80"
      alt="Carbon team collaborating"
    />
  </div>
</section>

      <section className="about-content">
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            Carbon is committed to providing quality solutions to meet your
            energy needs. With years of experience and a dedicated team, we
            focus on sustainability, reliability, and customer satisfaction.
          </p>
          <p>
            Our mission is to grow together with our clients and partners,
            building a cleaner and better future for everyone.
          </p>
        </div>

        <div className="about-stats">
          <div className="stat-card">
            <h3>10+</h3>
            <p>Years of Experience</p>
          </div>
          <div className="stat-card">
            <h3>500+</h3>
            <p>Happy Clients</p>
          </div>
          <div className="stat-card">
            <h3>50+</h3>
            <p>Projects Completed</p>
          </div>
        </div>
      </section>
    </div>
  );
}