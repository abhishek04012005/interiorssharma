'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Privacy.module.css';
import { FaChild, FaUserLock, FaInfoCircle, FaEnvelope } from 'react-icons/fa';

const sections = [
  {
    id: 'introduction',
    title: 'Introduction',
    icon: <FaInfoCircle />,
    content: `At Sharma Interiors, we value your privacy and are committed to protecting your personal information. 
              This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website 
              or use our services.`
  },
  {
    id: 'collection',
    title: 'Information We Collect',
    icon: <FaUserLock />,
    subsections: [
      {
        title: 'Personal Information',
        items: ['Name and contact details', 'Email address', 'Phone number', 'Address information']
      },
      {
        title: 'Usage Information',
        items: ['Browser type and version', 'Operating system', 'Pages visited on our website', 'Time and date of visits']
      }
    ]
  },
  {
    id: 'usage',
    title: 'How We Use Your Information',
    icon: <FaChild />,
    items: [
      'To provide and maintain our services',
      'To communicate with you about our services',
      'To improve our website and services',
      'To send promotional materials and updates',
      'To comply with legal obligations'
    ]
  }
];

export default function Privacy() {
  const [activeSection, setActiveSection] = useState('introduction');

  return (
    <div className={styles.privacy}>
      <div className={styles.container}>
        <motion.section
          className={styles.header}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Privacy Policy</h1>
          <div className={styles.headerLine}></div>
          <p>Last updated: August 2025</p>
        </motion.section>

        <div className={styles.wrapper}>
          <nav className={styles.sidebar}>
            <ul>
              {sections.map((section) => (
                <motion.li
                  key={section.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button
                    className={`${styles.navButton} ${activeSection === section.id ? styles.active : ''}`}
                    onClick={() => setActiveSection(section.id)}
                  >
                    <span className={styles.icon}>{section.icon}</span>
                    {section.title}
                  </button>
                </motion.li>
              ))}
            </ul>
          </nav>

          <div className={styles.content}>
            {sections.map((section) => (
              <motion.section
                key={section.id}
                className={`${styles.section} ${activeSection === section.id ? styles.visible : ''}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{
                  opacity: activeSection === section.id ? 1 : 0,
                  x: activeSection === section.id ? 0 : 20
                }}
                transition={{ duration: 0.5 }}
              >
                <h2>{section.title}</h2>
                {section.content && <p>{section.content}</p>}

                {section.subsections && section.subsections.map((subsection, index) => (
                  <motion.div
                    key={index}
                    className={styles.subsection}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <h3>{subsection.title}</h3>
                    <ul>
                      {subsection.items.map((item, i) => (
                        <motion.li
                          key={i}
                          whileHover={{ x: 10 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}

                {section.items && (
                  <ul className={styles.itemsList}>
                    {section.items.map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ x: 10 }}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                )}
              </motion.section>
            ))}

            <motion.section
              className={styles.contactSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <h2>Contact Us</h2>
              <div className={styles.contactCard}>
                <FaEnvelope className={styles.contactIcon} />
                <div className={styles.contactInfo}>
                  <p>Email: contact@interiorssharma.com</p>
                  <p>Phone: +91 9975662217</p>
                  <p>Address: House No. 2696/49, Hansa Soc., Nalasopara (E), Palghar-401209</p>
                </div>
              </div>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  );
}