'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Work.module.css';
import { FaWrench, FaLayerGroup, FaColumns, FaChessBoard } from 'react-icons/fa';
import Link from 'next/link';
import { motion } from 'framer-motion';
import WoodenWorks from '../../assets/woodenworks/woodenworks.jpg'
import PanellingWorkings from '../../assets/panellingworks/panellingworks.jpg'
import Partitions from '../../assets/partitionworks/partitionworks.jpg'
import Ceilings from '../../assets/ceilling/ceiling.jpg'
import QuotePopup from '@/custom/popupModel/PopUpModel';

const woodenWorks = [
  {
    id: 1,
    title: 'Wooden Works',
    subtitle: 'Commercial',
    description: 'Elegant wooden interiors that blend functionality, timeless craftsmanship, warmth, durability, and natural beauty.',
    image: WoodenWorks,
    icon: <FaWrench className={styles.cardIcon} />,
    buttonText: 'Explore More',
    link: 'wooden-works'
  },
  {
    id: 2,
    title: 'Paneling',
    subtitle: 'Commercial',
    description: `Paneling is where structure meets style—whether you're dressing up walls or ceilings, it's a powerful tool for adding texture, warmth, and personality to interiors.`,
    image: PanellingWorkings,
    icon: <FaLayerGroup className={styles.cardIcon} />,
    buttonText: 'Explore More',
    link: 'paneling'
  },
  {
    id: 3,
    title: 'Partitions',
    subtitle: 'Commercial',
    description: 'Elegant space division with practical privacy, seamless flow, modern design, modern versatility, visual balance, acoustic comfort, and thoughtful detailing.',
    image: Partitions,
    icon: <FaColumns className={styles.cardIcon} />,
    buttonText: 'Explore More',
    link: 'partitions'
  },
  {
    id: 4,
    title: 'Ceilings',
    subtitle: 'Commercial',
    description: 'Ceilings shape the soul of a space - offering structure, style, and sensory impact. From sleek suspended grids to ornate coffered patterns, they balance acoustics, lighting, and visual flow.',
    image: Ceilings,
    icon: <FaChessBoard className={styles.cardIcon} />,
    buttonText: 'Explore More',
    link: 'ceilings'

  }
];

const Work = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedWork, setSelectedWork] = useState('');

  const handleQuoteClick = (workTitle: string) => {
    setSelectedWork(workTitle);
    setIsPopupOpen(true);
  };


  return (
    <>
      <section className={styles.workSection}>
        <div className={styles.container}> <div className={styles.workGrid}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Our
              <span className={styles.titleAccent}>Works</span>
            </h2>
            <div className={styles.headerLine}></div>
            <p className={styles.sectionDescription}>
              Crafting premium spaces with precision and passion
            </p>
          </div>
          {woodenWorks.map((work, index) => (
            <motion.div
              key={work.id}
              className={`${styles.workCard} ${index % 2 === 0 ? styles.imageLeft : styles.imageRight}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className={styles.imageSection}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    className={styles.workImage}
                    priority={index < 2}
                  />
                  <motion.div
                    className={styles.imageOverlay}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                    </motion.div>
                  </motion.div>
                </div>
              </div>
              <motion.div
                className={styles.contentSection}
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.3, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className={styles.icon}>{work.icon}</div>
                <h3 className={styles.workTitle}>{work.title}</h3>
                <h4 className={styles.workSubtitle}>{work.subtitle}</h4>
                <div className={styles.contentLine}></div>
                <p className={styles.workDescription}>{work.description}</p>
                <motion.div className={styles.cardActions}>
                  <button className={styles.exploreButton}>
                    <Link href={`/services/${work.link}`}>
                      Explore More
                    </Link>
                  </button>
                  <button
                    className={styles.contactButton}
                    onClick={() => handleQuoteClick(work.title)}
                  >
                    Get Quote
                  </button>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
        </div>

      </section>
      <QuotePopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        selectedWork={selectedWork}
      />
    </>
  );
};

export default Work;