import Hero from "@/components/layout/Hero";
import OurReach from "@/components/layout/OurReach";
import styles from "./home.module.css";


export default function Home() {
  return (
    <div className={styles.home}>
      {/* Hero with video carousel */}
      <Hero />

      {/* Features */}
      {/* Features */}
<section className={styles.features}>
  <div className={styles.featureCard}>
    <div className={styles.featureIcon}>
      <i className="fa-solid fa-box-open"></i>
    </div>
    <h3>Markets And Product</h3>
    <p>
      We physically source commodities and products from our supplier
      base - and sell them to customers all over India.
    </p>
  </div>

  <div className={styles.featureCard}>
    <div className={styles.featureIcon}>
      <i className="fa-solid fa-gears"></i>
    </div>
    <h3>Processing</h3>
    <p>
      The upgrades to the raw coal handling section enable more than
      50 thousand MT of coal every month to be crushed.
    </p>
  </div>

  <div className={styles.featureCard}>
    <div className={styles.featureIcon}>
      <i className="fa-solid fa-truck-fast"></i>
    </div>
    <h3>Delivery</h3>
    <p>
      We physically source commodities and products from our supplier
      base - and sell them to customers all over India.
    </p>
  </div>

  <div className={styles.featureCard}>
    <div className={styles.featureIcon}>
      <i className="fa-solid fa-circle-check"></i>
    </div>
    <h3>Quality</h3>
    <p>
      We serve the best quality coal which empowers more fertility
      for your business.
    </p>
  </div>
</section>

      {/* About Our Company */}
      <section className={styles.aboutCompany}>
        <div className={styles.aboutCompanyImage}>
          <img
            src="photo/pexels-nici-gottstein-138431104-10313427.jpg"
            alt="About Company"
          />
          <div className={styles.statsCard}>
            <div className={styles.statItem}>
              <h3><span>2</span> Million</h3>
              <p>Coal Imported</p>
            </div>
            <div className={styles.statItem}>
              <h3><span>800</span> Cr</h3>
              <p>Group Revenue</p>
            </div>
            <div className={styles.statItem}>
              <h3><span>1,200</span></h3>
              <p>Total Customer Base Worldwide</p>
            </div>
          </div>
        </div>

        <div className={styles.aboutCompanyContent}>
          <span className={styles.sectionLabel}>About Our Company</span>
          <h2>We&apos;re More than a Coal Company</h2>
          <p>
            Carbon serves quality energy solutions at the best price. This is
            very important for factories and huge enterprises for getting
            effective productivity.
          </p>

          <ul className={styles.checkList}>
            <li><i className="fa-solid fa-circle-check"></i> Excellent Service</li>
            <li><i className="fa-solid fa-circle-check"></i> Best Quality Material</li>
            <li><i className="fa-solid fa-circle-check"></i> Always Challenging Rate</li>
          </ul>

          <a href="/business" className="btn btn-primary">Learn More</a>
        </div>
      </section>

      <OurReach />

      {/* About preview */}
      <section className={styles.aboutPreview}>
        <img
          src="photo/FactoryLayout.jpg"
          alt="About"
        />
        <div className={styles.content}>
          <h2>About Us</h2>
          <p>
            Carbon is committed to providing quality energy solutions with
            reliability and trust. We are one of the leading suppliers,
            focused on sustainability and customer satisfaction.
          </p>
        </div>
      </section>

      {/* Testimonials */}
<section className={styles.testimonials}>
  <span className={styles.testimonialsLabel}>Clients Feedbacks</span>
  <h2>What They're Talking About Company</h2>
  <a href="/contact" className="btn btn-primary">Read All Reviews</a>

  <div className={styles.reviewsRow}>
    <div className={styles.ratingCard}>
      <p className={styles.ratingCompany}>Carbon Solution</p>
      <p className={styles.ratingScore}>4.8 <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star-half-stroke"></i></p>
      <p className={styles.ratingCount}>Based on 81 reviews</p>
      <a href="#" className={styles.reviewBtn}>
        <i className="fa-brands fa-google"></i> Review us on
      </a>
    </div>

    <div className={styles.reviewCard}>
      <div className={styles.reviewHeader}>
        <div className={styles.reviewAvatar}>B</div>
        <div>
          <p className={styles.reviewName}>Keval G.</p>
          <p className={styles.reviewDate}>3 years ago</p>
        </div>
        <i className="fa-brands fa-google"></i>
      </div>
      <p className={styles.reviewStars}>★★★★★</p>
      <p className={styles.reviewText}>
        Best quality coal supplier in India, trusted and most affordable
        rate in the market.
      </p>
    </div>

    <div className={styles.reviewCard}>
      <div className={styles.reviewHeader}>
        <div className={styles.reviewAvatar}>K</div>
        <div>
          <p className={styles.reviewName}>Suresh K.</p>
          <p className={styles.reviewDate}>4 years ago</p>
        </div>
        <i className="fa-brands fa-google"></i>
      </div>
      <p className={styles.reviewStars}>★★★★★</p>
      <p className={styles.reviewText}>
        One of the leading imported coal suppliers, excellent customer
        service and better rates than the market.
      </p>
    </div>

    <div className={styles.reviewCard}>
      <div className={styles.reviewHeader}>
        <div className={styles.reviewAvatar}>S</div>
        <div>
          <p className={styles.reviewName}>Rajesh S.</p>
          <p className={styles.reviewDate}>4 years ago</p>
        </div>
        <i className="fa-brands fa-google"></i>
      </div>
      <p className={styles.reviewStars}>★★★★☆</p>
      <p className={styles.reviewText}>
        Best imported coal delivered across India. Always their first
        priority is delivering the best material.
      </p>
    </div>
  </div>
</section>

      {/* CTA */}
<section className={styles.cta}>
  <div className={styles.ctaIcon}>
    <i className="fa-solid fa-bolt"></i>
  </div>
  <h2>Ready to power your business?</h2>
  <p>
    Get in touch with our team for reliable energy solutions, competitive
    pricing, and delivery you can count on.
  </p>
  <div className={styles.ctaButtons}>
    <a href="/contact" className="btn btn-white">Contact Us</a>
    <a href="/price" className={styles.ctaOutlineBtn}>View Pricing</a>
  </div>
</section>
    </div>
  );
}