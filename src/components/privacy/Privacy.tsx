'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './Privacy.module.css';

export default function Privacy() {
  return (
    <div className={styles.container}>
      {/* Header Section */}
      <motion.section 
        className={styles.header}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Privacy Policy</h1>
        <div className={styles.headerLine}></div>
        <p>Last updated: August 2025</p>
      </motion.section>

      {/* Content Sections */}
      <div className={styles.content}>
        <motion.section 
          className={styles.section}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2>Introduction</h2>
          <p>
            At Sharma Interiors, we value your privacy and are committed to protecting your personal information. 
            This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website 
            or use our services.
          </p>
        </motion.section>

        <motion.section 
          className={styles.section}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2>Information We Collect</h2>
          <h3>Personal Information</h3>
          <ul>
            <li>Name and contact details</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Address information</li>
          </ul>
          <h3>Usage Information</h3>
          <ul>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Pages visited on our website</li>
            <li>Time and date of visits</li>
          </ul>
        </motion.section>

        <motion.section 
          className={styles.section}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2>How We Use Your Information</h2>
          <ul>
            <li>To provide and maintain our services</li>
            <li>To communicate with you about our services</li>
            <li>To improve our website and services</li>
            <li>To send promotional materials and updates</li>
            <li>To comply with legal obligations</li>
          </ul>
        </motion.section>

        <motion.section 
          className={styles.section}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2>Data Protection</h2>
          <p>
            We implement appropriate security measures to protect your personal information 
            against unauthorized access, alteration, disclosure, or destruction.
          </p>
        </motion.section>

        <motion.section 
          className={styles.section}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal information</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Withdraw consent for data processing</li>
            <li>Object to data processing</li>
          </ul>
        </motion.section>

        <motion.section 
          className={styles.section}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <h2>Contact Us</h2>
          <p>
            If you have any questions about our Privacy Policy, please contact us at:
          </p>
          <div className={styles.contactInfo}>
            <p>Email: privacy@sharmainteriors.com</p>
            <p>Phone: +91 XXX XXX XXXX</p>
            <p>Address: Your Company Address</p>
          </div>
        </motion.section>
      </div>
    </div>
  );
}