'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ServiceItem } from '@/data/services';
import styles from './WoodenWorks.module.css';

interface WoodenWorksProps {
    service: ServiceItem;
}

export default function WoodenWorks({ service }: WoodenWorksProps) {
    return (
        <div className={styles.container}>
            {/* Hero Section */}
            <motion.section
                style={{
                    backgroundImage: `url(${service.heroBackground.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
                className={styles.heroSection}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className={styles.heroOverlay} />
                <div className={styles.heroContent}>
                    <motion.h1
                        className={styles.mainTitle}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        {service.title}
                    </motion.h1>
                    <div className={styles.headerLine}></div>
                    <motion.p
                        className={styles.mainDescription}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        {service.description}
                    </motion.p>
                </div>
            </motion.section>

            {/* Services Overview */}
            <section className={styles.servicesOverview}>
                <div className={styles.sectionHeader}>
                    {/* <h2 className={styles.sectionTitle}>Our Work</h2> */}
                    {/* <div className={styles.sectionLine}></div> */}
                </div>

                {/* <div className={styles.servicesGrid}>
                    {service.subItems.map((item, index) => (
                        <motion.div
                            key={index}
                            className={styles.serviceCard}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                        >
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className={styles.serviceImage}
                                    priority={index < 2}
                                />
                                <motion.div
                                    className={styles.imageOverlay}
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className={styles.overlayContent}>
                                        <h3 className={styles.overlayTitle}>{item.name}</h3>
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Link href={item.path} className={styles.viewGalleryBtn}>
                                                View Gallery
                                            </Link>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </div>
                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>{item.name}</h3>
                                <p className={styles.cardDescription}>{item.description}</p>
                                <motion.div
                                    className={styles.cardActions}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                >
                                    <Link href={item.path} className={styles.readMoreBtn}>
                                        Read More
                                    </Link>
                                    <Link href="/contact" className={styles.contactBtn}>
                                        Get Quote
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div> */}

                <div className={styles.servicesGrid}>
                    {service.subItems.map((item, index) => (
                        <motion.div
                            key={index}
                            className={`${styles.serviceCard} ${index % 2 === 0 ? styles.imageLeft : styles.imageRight}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className={styles.imageSection}>
                                <div className={styles.imageWrapper}>
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className={styles.serviceImage}
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
                                            <Link href={item.path} className={styles.viewGalleryBtn}>
                                                View Gallery
                                            </Link>
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
                                <h3 className={styles.cardTitle}>{item.name}</h3>
                                <div className={styles.contentLine}></div>
                                <p className={styles.cardDescription}>{item.description}</p>
                                <motion.div className={styles.cardActions}>
                                    <Link href={item.path} className={styles.readMoreBtn}>
                                        Explore Details
                                    </Link>
                                    <Link href="/contact" className={styles.contactBtn}>
                                        Get Quote
                                    </Link>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

            </section>

            {/* Features Section */}
            <section className={styles.featuresSection}>
                <div className={styles.featuresGrid}>
                    <div className={styles.featureCard}>
                        <div className={styles.featureIcon}>🎨</div>
                        <h3>Custom Design</h3>
                        <p>Tailored solutions for your unique space</p>
                    </div>
                    <div className={styles.featureCard}>
                        <div className={styles.featureIcon}>✨</div>
                        <h3>Premium Quality</h3>
                        <p>Finest materials and craftsmanship</p>
                    </div>
                    <div className={styles.featureCard}>
                        <div className={styles.featureIcon}>⚡</div>
                        <h3>Quick Delivery</h3>
                        <p>Timely completion of projects</p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section
                className={styles.ctaSection}
                style={{ backgroundImage: `url(${service.ctaBackground})` }}
            >
                <div className={styles.ctaOverlay} />
                <div className={styles.ctaContent}>
                    <h2 className={styles.ctaTitle}>Ready to Transform Your Space?</h2>
                    <p className={styles.ctaText}>
                        Let&apos;s discuss your project and bring your vision to life
                    </p>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Link href="/contact" className={styles.ctaButton}>
                            Get Free Consultation
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
