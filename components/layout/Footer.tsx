"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  const [productsOpen, setProductsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerOverlay}>
        <div className={styles.footerMain}>
          {/* Column 1: Logo + About */}
          <div className={styles.footerCol}>
            <div className={styles.footerLogo}>
              VINAYAK COAL CORPORATION LLP
            </div>
            <p>
              VINAYAK COAL CORPORATION LLP was established in 2026 with the objective of setting
              up new heights and glory in the business. We are one of the
              leading suppliers of quality energy solutions.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className={styles.footerCol}>
            <h3>Quick Links</h3>
            <ul>
  <li><Link href="/">Home</Link></li>
  <li><Link href="/about">About Us</Link></li>
  <li><Link href="/business">Our Business</Link></li>

  <li className={styles.dropdown}>
  <span className={styles.dropdownToggle}>
    Our Products <i className="fa-solid fa-chevron-down"></i>
  </span>

  <div className={styles.dropdownMenu}>
    <Link href="/product/indonesian-coal" className={styles.dropdownItem}>Indonesian Coal</Link>
    <Link href="/product/african-coal" className={styles.dropdownItem}>African Coal</Link>
    <Link href="/product/usa-coal" className={styles.dropdownItem}>USA Coal</Link>
    <Link href="/product/lignite" className={styles.dropdownItem}>Lignite</Link>
  </div>
</li>

  <li><Link href="/media">Media Corner</Link></li>
  <li><Link href="/contact">Contact Us</Link></li>
  <li><Link href="/privacy">Privacy Policy</Link></li>
  <li><Link href="/terms">Terms and Condition</Link></li>
</ul>
          </div>

          {/* Column 3: Contact Us - Carbon Solution */}
          <div className={styles.footerCol}>
            <h3>Contact Us</h3>
            <h4>VINAYAK COAL CORPORATION LLP</h4>
            <div className={styles.contactItem}>
              <i className="fa-solid fa-location-dot"></i>
              <p>FIRST FLOOR, SURVEY NO. 1291, PLOT NO. 6 & 21,UMA MARKET, OFFICE NO. 127,PANCHASAR ROAD,MORBI, GUJARAT – 363642, INDIA.</p>
            </div>
            <div className={styles.contactItem}>
              <i className="fa-solid fa-envelope"></i>
              <p>info@carbon.com</p>
            </div>
            <div className={styles.contactItem}>
              <i className="fa-solid fa-phone"></i>
              <p>+91 98273 *****</p>
            </div>
          </div>

          
          
        </div>

        <button className={styles.scrollTop} onClick={scrollToTop}>
          <i className="fa-solid fa-arrow-up"></i>
        </button>
        <a
        
          href="https://wa.me/919827300000"
          target="_blank"
          rel="noreferrer"
          className={styles.whatsappFloat}
        >
          <i className="fa-brands fa-whatsapp"></i>
        </a>

        <div className={styles.footerBottom}>
          <p>© Copyright {new Date().getFullYear()} by Carbon Solution | Developed By Uest.tech</p>
          <div className={styles.footerSocials}>
            <a href="#"><i className="fa-brands fa-linkedin"></i></a>
            <a href="#"><i className="fa-brands fa-facebook"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
            <a href="#"><i className="fa-brands fa-youtube"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;