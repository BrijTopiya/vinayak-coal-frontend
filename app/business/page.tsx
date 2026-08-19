
import styles from "./business.module.css";

const businessAreas = [
  {
    icon: 'fa-box',
    title: 'Supply & Distribution',
    description: 'Efficient sourcing and distribution network ensuring consistent coal supply to our clients across regions.',
  },
  {
    icon: 'fa-truck',
    title: 'Logistics & Transport',
    description: 'Reliable transportation solutions that keep your operations running smoothly without delays.',
  },
  {
    icon: 'fa-handshake',
    title: 'Trading Solutions',
    description: 'Strategic trading partnerships that create value for both suppliers and buyers in the market.',
  },
  {
    icon: 'fa-leaf',
    title: 'Sustainable Practices',
    description: 'Committed to environmentally responsible operations that support a cleaner future.',
  },
];

const features = [
  {
    icon: 'fa-medal',
    title: 'Quality Assured',
    description: 'Every shipment tested for consistent calorific value and purity.',
  },
  {
    icon: 'fa-clock',
    title: 'On-Time Delivery',
    description: 'Strong logistics network ensures deliveries without delays.',
  },
  {
    icon: 'fa-tags',
    title: 'Competitive Pricing',
    description: 'Direct sourcing means better rates without middlemen.',
  },
  {
    icon: 'fa-headset',
    title: '24/7 Support',
    description: 'Our team is available round the clock for client queries.',
  },
];

const states = ['Gujarat', 'Maharashtra', 'Rajasthan', 'Madhya Pradesh', 'Punjab'];

const stats = [
  { number: '15+', label: 'Years of Experience' },
  { number: '500+', label: 'Happy Clients' },
  { number: '10K+', label: 'Tonnes Supplied' },
  { number: '5+', label: 'States Covered' },
];

const steps = [
  { step: '01', title: 'Sourcing', description: 'Quality coal sourced directly from trusted mines and suppliers.' },
  { step: '02', title: 'Quality Check', description: 'Every batch tested and verified to meet industry standards.' },
  { step: '03', title: 'Transport', description: 'Reliable logistics network ensures timely, safe delivery.' },
  { step: '04', title: 'Delivery', description: 'Coal reaches your site on schedule, every time.' },
];

export default function OurBusinessPage() {
  return (
    
      <div className="about-page">
      <section className="about-banner">
  <h1>OUR BUSINESS</h1>
</section>

      {/* What We Do */}
      <section className={styles.businessSection}>
        <h2>What We Do</h2>
        <p className={styles.subtitle}>
          Vinayak Coal Corporation operates across multiple areas of the energy
          sector, delivering quality solutions to meet the diverse needs of our
          clients. Our business is built on trust, reliability, and a commitment
          to sustainable growth.
        </p>
        <div className={styles.grid4}>
          {businessAreas.map((item, index) => (
            <div className={styles.card} key={index}>
              <div className={styles.iconWrapper}>
                <i className={`fas ${item.icon}`}></i>
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={styles.businessSection}>
        <h2>Why Choose Us</h2>
        <div className={styles.grid4}>
          {features.map((f, i) => (
            <div className={styles.item} key={i}>
              <div className={styles.iconWrapperSmall}>
                <i className={`fas ${f.icon}`}></i>
              </div>
              <h3>{f.title}</h3>
              <p>{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Coverage Area */}
      <section className={styles.coverageSection}>
        <h2>Where We Supply</h2>
        <p className={styles.subtitle}>
          Serving clients across multiple states with reliable coal supply.
        </p>
        <div className={styles.tags}>
          {states.map((s, i) => (
            <span className={styles.tag} key={i}>{s}</span>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className={styles.statsSection}>
        <div className={styles.statsGrid}>
          {stats.map((item, index) => (
            <div className={styles.statCard} key={index}>
              <h3>{item.number}</h3>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className={styles.businessSection}>
        <h2>How We Work</h2>
        <div className={styles.timeline}>
          {steps.map((item, index) => (
            <div className={styles.step} key={index}>
              <div className={styles.stepNumber}>{item.step}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <h2>Looking for Reliable Coal Supply?</h2>
        <p>Get in touch with our team for pricing, availability, and delivery details.</p>
        <div className={styles.ctaButtons}>
    <a href="/contact" className="btn btn-white">Contact Us</a>
    
  </div>
      </section>
    </div>
  );
}