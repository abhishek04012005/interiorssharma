'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Project.module.css';
import Project1 from '../../assets/projects/1.jpg';
import Project2 from '../../assets/projects/2.jpg'

const projects = [
    {
        id: 1,
        title: 'Modern Office Interior',
        category: 'Commercial',
        image: Project1,
        description: 'Contemporary workspace design with optimal functionality',
        location: 'Mumbai, India',
        area: '2500 sq.ft',
        duration: '3 months'
    },
    {
        id: 2,
        title: 'Luxury Villa Design',
        category: 'Residential',
        image: Project2,
        description: 'High-end residential interior with premium finishes',
        location: 'Delhi, India',
        area: '4000 sq.ft',
        duration: '6 months'
    },

];

const categories = ['All', 'Commercial', 'Residential', 'Retail'];

export default function Project() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    // const [selectedProject, setSelectedProject] = useState<number | null>(null);

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