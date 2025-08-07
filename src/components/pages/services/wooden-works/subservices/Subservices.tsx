'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './Subservices.module.css';

interface SubItemDetailProps {
  parentService: {
    title: string;
    path: string;
  };
  subItem: {
    name: string;
    description: string;
    image: string;
  };
}

export default function SubItemDetail({ parentService, subItem }: SubItemDetailProps) {
  return (
    <div className={styles.container}>
      {/* Breadcrumb */}
      <div className={styles.breadcrumb}>
        <Link href="/services">Services</Link>
        <span className={styles.separator}>/</span>
        <Link href={parentService.path}>{parentService.title}</Link>
        <span className={styles.separator}>/</span>
        <span className={styles.current}>{subItem.name}</span>
      </div>
      {/* Hero Section */}
      <motion.section 
        className={styles.heroSection}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.heroImageContainer}>
          <Image
            src={subItem.image}
            alt={subItem.name}
            fill
            priority
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <motion.h1 
            className={styles.title}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {subItem.name}
          </motion.h1>
          <div className={styles.headerLine}></div>
          <motion.p 
            className={styles.description}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {subItem.description}
          </motion.p>
        </div>
      </motion.section>
      {/* Contact Section */}
      <section className={styles.contactSection}>
        <div className={styles.contactContent}>
          <h2>Ready to Start Your Project?</h2>
          <p>Our expert team is here to help bring your vision to life</p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/contact" className={styles.contactButton}>
              Get Free Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}


