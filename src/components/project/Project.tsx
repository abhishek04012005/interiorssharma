'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Project.module.css';
import Project1 from '../../assets/projects/jpmorgan.png'
import Project2 from '../../assets/projects/mgm.png'
import Project3 from '../../assets/projects/ihc.png'
import Project4 from '../../assets/projects/ishwaryahealth.png'
import Project5 from '../../assets/projects/galpha.jpg'
import Project6 from '../../assets/projects/sd.jpg'

const projects = [
  {
    id: 1,
    title: 'JP Morgan Tata Ticno',
    category: 'Commercial',
    image: Project1,
    description: 'Corporate office interiors with sleek design, collaborative zones, and smart lighting.',
    location: 'Andheri, Mumbai, India',
    area: '3200 sq.ft',
    duration: '4 months'
  },
  {
    id: 2,
    title: 'MGM Hospital ',
    category: 'Healthcare',
    image: Project2,
    description: 'Functional and hygienic hospital interiors with patient-centric design and durable materials.',
    location: 'Kamothe, Navi Mumbai, India',
    area: '5000 sq.ft',
    duration: '5 months'
  },
  {
    id: 3,
    title: 'Indicame Health Care',
    category: 'Commercial',
    image: Project3,
    description: 'Modern healthcare workspace with ergonomic layouts and efficient space planning.',
    location: 'Bandra, Mumbai, India',
    area: '2800 sq.ft',
    duration: '3.5 months'
  },
  {
    id: 4,
    title: 'Ishwarya Health Care Group',
    category: 'Healthcare',
    image: Project4,
    description: 'Premium healthcare interiors with advanced infrastructure and calming aesthetics.',
    location: 'Chennai, Tamil Nadu, India',
    area: '4500 sq.ft',
    duration: '6 months'
  },
  {
    id: 5,
    title: 'Galpha Laboratory',
    category: 'Commercial',
    image: Project5,
    description: 'State-of-the-art laboratory setup with precision zoning and compliance-ready finishes.',
    location: 'Thane, Maharashtra, India',
    area: '2700 sq.ft',
    duration: '4 months'
  },
  {
    id: 6,
    title: 'Shree Dhootapapeshwar Ltd',
    category: 'Industrial',
    image: Project6,
    description: 'Ayurvedic manufacturing facility with cleanroom partitions and efficient workflow design.',
    location: 'Dadar, Mumbai, India',
    area: '6000 sq.ft',
    duration: '5.5 months'
  }
];


const categories = ['All', 'Commercial', 'Residential', 'Retail'];

export default function Project() {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredProjects = selectedCategory === 'All'
        ? projects
        : projects.filter(project => project.category === selectedCategory);

    return (
        <section className={styles.projectSection}>
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Our <span className={styles.titleAccent}>Projects</span>
                    </h2>
                    <div className={styles.headerLine}></div>
                    <p className={styles.sectionDescription}>
                        Explore our portfolio of innovative designs and successful projects
                    </p>
                </div>

                <div className={styles.filterContainer}>
                    {categories.map((category) => (
                        <motion.button
                            key={category}
                            className={`${styles.filterButton} ${selectedCategory === category ? styles.active : ''
                                }`}
                            onClick={() => setSelectedCategory(category)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {category}
                        </motion.button>
                    ))}
                </div>

                <motion.div
                    className={styles.projectGrid}
                    layout
                >
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                className={styles.projectCard}
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                whileHover={{ y: -10 }}
                            >
                                <div className={styles.imageContainer}>
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={400}
                                        height={300}
                                        className={styles.projectImage}
                                    />

                                </div>
                                <div className={styles.projectInfo}>
                                    <h3 className={styles.projectTitle}>{project.title}</h3>
                                    <p className={styles.projectDescription}>{project.description}</p>
                                    <div className={styles.projectDetails}>
                                        <div className={styles.detail}>
                                            <span className={styles.label}>Location</span>
                                            <span className={styles.value}>{project.location}</span>
                                        </div>
                                        <div className={styles.detail}>
                                            <span className={styles.label}>Area</span>
                                            <span className={styles.value}>{project.area}</span>
                                        </div>
                                        <div className={styles.detail}>
                                            <span className={styles.label}>Duration</span>
                                            <span className={styles.value}>{project.duration}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}