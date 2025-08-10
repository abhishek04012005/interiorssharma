'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Tos.module.css';
import { FaHandshake, FaFileContract, FaUserShield, FaMoneyBillWave, FaCopyright } from 'react-icons/fa';
import { div } from 'framer-motion/client';

const sections = [
    {
        id: 'acceptance',
        title: 'Acceptance of Terms',
        icon: <FaHandshake />,
        content: `By accessing and using the services of Sharma Interiors, you acknowledge that you have read, 
              understood, and agree to be bound by these Terms of Service. These terms constitute a legally 
              binding agreement between you and Sharma Interiors.`
    },
    {
        id: 'services',
        title: 'Services',
        icon: <FaFileContract />,
        subsections: [
            {
                title: 'Interior Design Services',
                items: [
                    'Consultation and design planning',
                    'Space planning and layout design',
                    'Material and finish selection',
                    'Project management and execution',
                    'Post-installation support'
                ]
            },
            {
                title: 'Service Limitations',
                items: [
                    'Services subject to availability',
                    'Geographical service area restrictions may apply',
                    'Timeline estimates are approximate'
                ]
            }
        ]
    },
    {
        id: 'payments',
        title: 'Payment Terms',
        icon: <FaMoneyBillWave />,
        items: [
            'Advance payment of 50% required to initiate project',
            'Remaining payment due upon project completion',
            'All prices are in Indian Rupees (INR)',
            'Payment methods: Bank transfer, UPI, Cash',
            'Cancellation fees may apply'
        ]
    },
    {
        id: 'intellectual',
        title: 'Intellectual Property',
        icon: <FaCopyright />,
        content: `All designs, drawings, and concepts created by Sharma Interiors remain our intellectual property. 
              Clients may not reproduce or use these designs without explicit written permission.`
    },
    {
        id: 'privacy',
        title: 'Privacy & Data',
        icon: <FaUserShield />,
        content: `We respect your privacy and handle your personal information in accordance with our Privacy Policy. 
              By using our services, you consent to our collection and use of data as described in the Privacy Policy.`
    }
];

export default function Tos() {
    const [activeSection, setActiveSection] = useState('acceptance');
    const [isAnimating, setIsAnimating] = useState(false);

    const handleSectionChange = (sectionId: string) => {
        setIsAnimating(true);
        setActiveSection(sectionId);
        setTimeout(() => setIsAnimating(false), 500);
    };

    return (
        <div className={styles.terms}>
            <div className={styles.container}>
                <motion.section
                    className={styles.header}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1>Terms of Service</h1>
                    <div className={styles.headerLine}></div>
                    <p>Last updated: August 2025</p>
                </motion.section>

                <div className={styles.wrapper}>
                    <motion.nav
                        className={styles.sidebar}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        {sections.map((section) => (
                            <motion.button
                                key={section.id}
                                className={`${styles.navButton} ${activeSection === section.id ? styles.active : ''}`}
                                onClick={() => handleSectionChange(section.id)}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span className={styles.icon}>{section.icon}</span>
                                {section.title}
                            </motion.button>
                        ))}
                    </motion.nav>

                    <div className={styles.content}>
                        {sections.map((section) => (
                            <motion.div
                                key={section.id}
                                className={`${styles.section} ${activeSection === section.id ? styles.visible : ''}`}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{
                                    opacity: activeSection === section.id ? 1 : 0,
                                    x: activeSection === section.id ? 0 : 20,
                                }}
                                transition={{ duration: 0.5 }}
                            >
                                <motion.h2
                                    className={styles.sectionTitle}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    {section.title}
                                </motion.h2>

                                {section.content && (
                                    <motion.p
                                        className={styles.sectionContent}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        {section.content}
                                    </motion.p>
                                )}

                                {section.subsections && section.subsections.map((subsection, index) => (
                                    <motion.div
                                        key={index}
                                        className={styles.subsection}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 * index }}
                                    >
                                        <h3>{subsection.title}</h3>
                                        <ul>
                                            {subsection.items.map((item, i) => (
                                                <motion.li
                                                    key={i}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.1 * i }}
                                                >
                                                    {item}
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                ))}

                                {section.items && (
                                    <motion.ul
                                        className={styles.itemsList}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        {section.items.map((item, index) => (
                                            <motion.li
                                                key={index}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.1 * index }}
                                            >
                                                {item}
                                            </motion.li>
                                        ))}
                                    </motion.ul>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}