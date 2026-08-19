"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "./Header.module.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <div className={styles.headerWrapper}>
      <div className={styles.topBar}>
        <div className={styles.socialIcons}>
          <a href="#"><i className="fa-brands fa-linkedin"></i></a>
          <a href="#"><i className="fa-brands fa-facebook"></i></a>
          <a href="#"><i className="fa-brands fa-instagram"></i></a>
          <a href="#"><i className="fa-brands fa-youtube"></i></a>
          <span className={styles.tagline}>Wakanda</span>
        </div>
        <div className={styles.contactInfo}>
          <span><i className="fa-solid fa-envelope"></i> info@carbon.com</span>
          <span><i className="fa-solid fa-phone"></i> 98273 *****</span>
        </div>
      </div>

      <header className={styles.header}>
        <div className={styles.logo}>
        <Image src="/CompanyLogo.png" alt="Carbon Solution Logo" width={150} height={45} />
        </div>
        <button className={styles.hamburger} onClick={() => setMenuOpen((prev) => !prev)}>
          <i className={menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
        </button>

        <nav className={menuOpen ? `${styles.navLinks} ${styles.active}` : styles.navLinks}>
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link href="/business" onClick={() => setMenuOpen(false)}>Our Business</Link>

          <div className={styles.dropdown}>
            <span className={styles.dropdownToggle} onClick={() => setProductsOpen((p) => !p)}>
              Our Products <i className="fa-solid fa-chevron-down"></i>
            </span>

            <div className={productsOpen ? `${styles.dropdownMenu} ${styles.dropdownActive}` : styles.dropdownMenu}>
            <Link href="/product/indonesian-coal" onClick={() => { setMenuOpen(false); setProductsOpen(false); }}>Indonesian Coal</Link>
            <Link href="/product/african-coal" onClick={() => { setMenuOpen(false); setProductsOpen(false); }}>African Coal</Link>
            <Link href="/product/usa-coal" onClick={() => { setMenuOpen(false); setProductsOpen(false); }}>USA Coal</Link>
            <Link href="/product/lignite" onClick={() => { setMenuOpen(false); setProductsOpen(false); }}>Lignite</Link>
            </div>
          </div>

          <Link href="/price" onClick={() => setMenuOpen(false)}>Latest Price</Link>
          <Link href="/media" onClick={() => setMenuOpen(false)}>Media Corner</Link>
        </nav>

        <Link href="/contact" className={styles.btnContact} onClick={() => setMenuOpen(false)}>
          CONTACT US
        </Link>
      </header>
    </div>
  );
};

export default Header;