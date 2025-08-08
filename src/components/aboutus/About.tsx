import React from 'react';
import Image from 'next/image';
import styles from './About.module.css';
import { FaTools, FaUsers, FaMedal, FaClock } from 'react-icons/fa';
import Hero1Image from '../../assets/about.jpg'

const stats = [
  {
    id: 1,
    icon: <FaTools />,
    number: '500+',
    label: 'Projects Completed'
  },
  {
    id: 2,
    icon: <FaUsers />,
    number: '300+',
    label: 'Happy Clients'
  },
  {
    id: 3,
    icon: <FaMedal />,
    number: '15+',
    label: 'Years Experience'
  },
  {
    id: 4,
    icon: <FaClock />,
    number: '24/7',
    label: 'Customer Support'
  }
];

const About = () => {
  return (
    <section className={styles.aboutSection}>      
      <div className={styles.container}>
        <div className={styles.statsGrid}>
              {stats.map((stat) => (
                <div key={stat.id} className={styles.statCard}>
                  <div className={styles.statIcon}>{stat.icon}</div>
                  <h3 className={styles.statNumber}>{stat.number}</h3>
                  <p className={styles.statLabel}>{stat.label}</p>
                </div>
              ))}
            </div>
        <div className={styles.content}>
          <div className={styles.imageSection}>
            <div className={styles.mainImage}>
              <Image
                src={Hero1Image}
                alt="Interior Design Work"
                width={600}
                height={400}
                className={styles.image}
              />
            </div>
            <div className={styles.overlayImage}>
              {/* <Image
                src={Hero1Image}
                alt="Design Process"
                width={300}
                height={200}
                className={styles.image}
              /> */}
            </div>
          </div>

          <div className={styles.textContent}>
            <h2 className={styles.title}>
              About <span className={styles.highlight}>Sharma Interiors</span>
            </h2>
            <div className={styles.headerLine}></div>
             {/* <div className={styles.statsGrid}>
              {stats.map((stat) => (
                <div key={stat.id} className={styles.statCard}>
                  <div className={styles.statIcon}>{stat.icon}</div>
                  <h3 className={styles.statNumber}>{stat.number}</h3>
                  <p className={styles.statLabel}>{stat.label}</p>
                </div>
              ))}
            </div> */}
            <p className={styles.description}>
              With over 15 years of experience, Sharma Interiors has been transforming spaces into extraordinary environments. We specialize in premium interior solutions, combining functionality with aesthetic excellence.
            </p>
            <p className={styles.description}>
              Our commitment to quality craftsmanship and innovative design has made us a trusted name in the industry. We take pride in delivering projects that exceed client expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;