import React from 'react';
import Image from 'next/image';
import styles from './Work.module.css';
import WoodenWork from '../../assets/work/wooden_work.jpg'
import Panelling from '../../assets/work/panelling.jpg'
import Paritation from '../../assets/work/partiation.jpg'
import Ceiling from '../../assets/work/ceiling.png'
import { FaWrench, FaLayerGroup, FaColumns, FaChessBoard } from 'react-icons/fa';

const woodenWorks = [
  {
    id: 1,
    title: 'Wooden Works',
    subtitle: 'Commercial',
    description: 'Elegant wooden interiors that blend functionality, timeless craftsmanship, warmth, durability, and natural beauty.',
    image: WoodenWork,
    icon: <FaWrench className={styles.cardIcon} />,
    buttonText: 'Explore More'
  },
  {
    id: 2,
    title: 'Paneling',
    subtitle: 'Commercial',
    description: `Paneling is where structure meets style—whether you're dressing up walls or ceilings, it's a powerful tool for adding texture, warmth, and personality to interiors.`,
    image: Panelling,
    icon: <FaLayerGroup className={styles.cardIcon} />,
    buttonText: 'Explore More'
  },
  {
    id: 3,
    title: 'Partitions',
    subtitle: 'Commercial',
    description: 'Elegant space division with practical privacy, seamless flow, modern design, modern versatility, visual balance, acoustic comfort, and thoughtful detailing.',
    image: Paritation,
    icon: <FaColumns className={styles.cardIcon} />,
    buttonText: 'Explore More'
  },
  {
    id: 4,
    title: 'Ceilings',
    subtitle: 'Commercial',
    description: 'Ceilings shape the soul of a space - offering structure, style, and sensory impact. From sleek suspended grids to ornate coffered patterns, they balance acoustics, lighting, and visual flow.',
    image: Ceiling,
    icon: <FaChessBoard className={styles.cardIcon} />,
    buttonText: 'Explore More'
  }
  ,
  {
    id: 5,
    title: 'Ceilings',
    subtitle: 'Commercial',
    description: 'Ceilings shape the soul of a space - offering structure, style, and sensory impact. From sleek suspended grids to ornate coffered patterns, they balance acoustics, lighting, and visual flow.',
    image: Ceiling,
    icon: <FaChessBoard className={styles.cardIcon} />,
    buttonText: 'Explore More'
  }
  ,
  {
    id: 6,
    title: 'Ceilings',
    subtitle: 'Commercial',
    description: 'Ceilings shape the soul of a space - offering structure, style, and sensory impact. From sleek suspended grids to ornate coffered patterns, they balance acoustics, lighting, and visual flow.',
    image: Ceiling,
    icon: <FaChessBoard className={styles.cardIcon} />,
    buttonText: 'Explore More'
  }
];

const Work = () => {
  return (
    <section className={styles.workSection}>
      <div className={styles.container}>
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

        <div className={styles.workGrid}>
          {woodenWorks.map((work) => (
            <div key={work.id} className={styles.workCard}>
              <div className={styles.imageWrapper}>
                <Image
                  src={work.image}
                  alt={work.title}
                  width={400}
                  height={300}
                  className={styles.workImage}
                />
                <div className={styles.overlay}>
                  <button className={styles.viewButton}>
                    Explore More
                    <span className={styles.buttonArrow}>→</span>
                  </button>
                </div>
              </div>
              <div className={styles.workInfo}>
                <div className={styles.textContent}>
                  <h3 className={styles.workTitle}>{work.title}</h3>
                  <h4 className={styles.workSubtitle}>{work.subtitle}</h4>
                  <p className={styles.workDescription}>{work.description}</p>
                  <div className={styles.buttonWrapper}>
                  <button className={styles.exploreButton}>
                    {work.buttonText}
                  </button>
                </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;