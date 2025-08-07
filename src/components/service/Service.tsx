import React from 'react';
import styles from './Service.module.css';

const services = [
  {
    id: 1,
    title: 'All Interiors',
    icon: '🏠',
    description: 'Complete interior solutions for your space'
  },
  {
    id: 2,
    title: 'Wooden File Storage',
    icon: '📁',
    description: 'Custom wooden storage solutions'
  },
  {
    id: 3,
    title: 'Wooden Work Station Table',
    icon: '🪑',
    description: 'Ergonomic workstation designs'
  },
  {
    id: 4,
    title: 'Wooden Conference Table',
    icon: '🏢',
    description: 'Professional meeting room solutions'
  },
  {
    id: 5,
    title: 'Hilux Partition',
    icon: '🏗️',
    description: 'Modern space division solutions'
  },
  {
    id: 6,
    title: 'Hilux False Ceiling',
    icon: '⚡',
    description: 'Elegant ceiling designs'
  },
  {
    id: 7,
    title: 'Gypsum Partition',
    icon: '🧱',
    description: 'Versatile space separation'
  },
  {
    id: 8,
    title: 'Gypsum False Ceiling',
    icon: '✨',
    description: 'Artistic ceiling solutions'
  },
  {
    id: 9,
    title: 'Armstrong Ceiling Grid',
    icon: '🔲',
    description: 'Professional ceiling systems'
  },
  {
    id: 10,
    title: 'Aluminum Partitions',
    icon: '🪟',
    description: 'Modern partitions with windows'
  },
  {
    id: 11,
    title: 'ACP Sheet Paneling',
    icon: '🏢',
    description: 'Premium wall paneling solutions'
  },
  {
    id: 12,
    title: 'Glass Partition Work',
    icon: '🪟',
    description: 'Elegant glass divider solutions'
  },
  {
    id: 13,
    title: 'Wooden Flooring',
    icon: '🪵',
    description: 'Premium wooden floor installations'
  },
  {
    id: 14,
    title: 'HPL Toilet Partition',
    icon: '🚪',
    description: 'High-quality bathroom solutions'
  }
];

const Services = () => {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Our Services</h2>
        <p className={styles.sectionSubtitle}>Comprehensive Interior Solutions</p>
        
        <div className={styles.servicesGrid}>
          {services.map((service) => (
            <div key={service.id} className={styles.serviceCard}>
              <div className={styles.serviceIcon}>{service.icon}</div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
              <button className={styles.learnMore}>Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;