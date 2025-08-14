import React from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';
import { FaArrowDown } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.overlay}></div>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>
          <span className={styles.welcomeText}
          >Welcome to</span>
          <span className={styles.companyName}>Sharma Interiors</span>
        </h1>
        <p className={styles.subtitle}>
          Timeless Interiors, Legacy in Style.
        </p>
        <div className={styles.cta}>
          <Link href="/works" className={styles.primaryBtn}>
            Explore Works
            <span className={styles.btnArrow}>→</span>
          </Link>
          <Link href="/contact" className={styles.secondaryBtn}>
            Contact Us
          </Link>
        </div>
      </div>
      <div className={styles.scrollIndicator}>
        <div className={styles.mouse}>
          <FaArrowDown className={styles.scrollIcon} />
        </div>
        <span>Scroll Down</span>
      </div>
    </section>
  );
};

export default Hero;