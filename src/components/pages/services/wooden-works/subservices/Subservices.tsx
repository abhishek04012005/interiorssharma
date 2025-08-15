'use client';
import React, { JSX, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaCheck, FaTools, FaClock, FaStar, FaArrowRight } from 'react-icons/fa';
import styles from './Subservices.module.css';
import { ServiceItem, SubItem } from '@/data/services';
import QuotePopup from '../../../../../custom/popupModel/PopUpModel';

interface SubItemDetailProps {
  parentService: ServiceItem;
  subItem: SubItem;
}

export default function SubItemDetail({ parentService, subItem }: SubItemDetailProps) {
  const [activeSection, setActiveSection] = useState('overview');
  const [isQuotePopupOpen, setIsQuotePopupOpen] = useState(false);

  const getIconComponent = (iconName: string) => {
    const icons: { [key: string]: JSX.Element } = {
      quality: <FaStar className={styles.featureIcon} />,
      customize: <FaTools className={styles.featureIcon} />,
      durability: <FaClock className={styles.featureIcon} />
    };
    return icons[iconName] || <FaStar className={styles.featureIcon} />;
  };

  const availableSections = [
    'overview',
    ...(subItem.features ? ['features'] : []),
    ...(subItem.specifications ? ['specifications'] : []),
    ...(subItem.process ? ['process'] : [])
  ];

  return (
    <div className={styles.container}>
      {/* Breadcrumb */}
      <div className={styles.breadcrumb}>
        <Link href="/">Home</Link>
        <span className={styles.separator}>/</span>
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
            {subItem.shortDescription || subItem.description}
          </motion.p>
          <motion.button
            className={styles.quoteButton}
            onClick={() => setIsQuotePopupOpen(true)}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Get Quote
          </motion.button>
        </div>
      </motion.section>

     

      {/* Content Sections */}
      <div className={styles.contentSection}>
        {/* {activeSection === 'overview' && ( */}
          <div className={styles.overviewContent}>
            <h2>Overview</h2>
            <p>{subItem.description}</p>
            {subItem.benefits && (
              <div className={styles.benefits}>
                <h3>Benefits</h3>
                <div className={styles.benefitsList}>
                  {subItem.benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      className={styles.benefitItem}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <FaCheck className={styles.checkIcon} />
                      <span>{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        {/* )} */}

        {/* {activeSection === 'features' && subItem.features && ( */}
          <div className={styles.featuresContent}>
            <h2>Features</h2>
            <div className={styles.featuresGrid}>
              {subItem.features && subItem.features.map((feature, index) => (
                <motion.div
                  key={index}
                  className={styles.featureCard}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {getIconComponent(feature.icon)}
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        {/* )} */}

        {/* {activeSection === 'specifications' && subItem.specifications && ( */}
          <div className={styles.specificationsContent}>
            <h2>Specifications</h2>
            <div className={styles.specificationsGrid}>
              {subItem.specifications &&
                Object.entries(subItem.specifications).map(([key, value], index) => (
                  <motion.div
                    key={key}
                    className={styles.specCard}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <h3>{key.charAt(0).toUpperCase() + key.slice(1)}</h3>
                    <p>{value}</p>
                  </motion.div>
                ))}
            </div>
          </div>
         {/* )} */}

        {/* {activeSection === 'process' && subItem.process && ( */}
          <div className={styles.processContent}>
            <h2>{subItem.process?.title}</h2>
            <div className={styles.processSteps}>
              {subItem.process?.steps.map((step, index) => (
                <motion.div
                  key={index}
                  className={styles.processStep}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={styles.stepNumber}>{index + 1}</div>
                  <div className={styles.stepContent}>
                    <p>{step}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        {/* )} */}
      </div>

      {/* Contact Section */}
      <section className={styles.contactSection}>
        <div className={styles.contactContent}>
          <h2>Ready to Start Your Project?</h2>
          <p>Get expert consultation for your {subItem.name.toLowerCase()} needs</p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <button 
              className={styles.contactButton}
              onClick={() => setIsQuotePopupOpen(true)}
            >
              Get Free Consultation <FaArrowRight className={styles.arrowIcon} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Quote Popup */}
      <QuotePopup
        isOpen={isQuotePopupOpen}
        onClose={() => setIsQuotePopupOpen(false)}
        selectedWork={subItem.name}
      />
    </div>
  );
}