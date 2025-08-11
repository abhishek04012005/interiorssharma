'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { FaUsers, FaQuoteRight, FaSignOutAlt, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './AdminNavbar.module.css';
import { toast } from 'react-hot-toast';
import Image from 'next/image';
import Logo from "../../assets/logo.png"

export default function AdminNavbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    // Handle scroll effects
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const navElement = document.getElementById('mobile-nav');
            if (isMobileMenuOpen && navElement && !navElement.contains(event.target as Node)) {
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMobileMenuOpen]);

    const handleLogout = () => {
        document.cookie = 'adminAuth=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';
        localStorage.removeItem('adminAuth');
        toast.success('Logged out successfully');
        router.push('/admin/login');
        router.refresh();
    };

    const navLinks = [
        {
            path: '/admin/dashboard/contact',
            label: 'Contact Requests',
            icon: <FaUsers />
        },
        {
            path: '/admin/dashboard/enquiry',
            label: 'Quote Requests',
            icon: <FaQuoteRight />
        }
    ];

    return (
        <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.navContainer}>
                <motion.div
                    className={styles.logo}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link href="/admin/dashboard">
                        <Image 
                            className={styles.logoImage} 
                            src={Logo} 
                            alt="Sharma Interiors" 
                            width={150} 
                            height={50}
                            priority 
                        />
                    </Link>
                </motion.div>

                <div className={styles.mobileContainer} id="mobile-nav">
                    <button
                        className={styles.mobileMenuButton}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                    >
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>

                    <AnimatePresence>
                        <motion.div
                            className={`${styles.navLinks} ${isMobileMenuOpen ? styles.active : ''}`}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    href={link.path}
                                    className={`${styles.navLink} ${pathname === link.path ? styles.active : ''}`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <motion.span
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={styles.linkContent}
                                    >
                                        {link.icon}
                                        <span>{link.label}</span>
                                    </motion.span>
                                </Link>
                            ))}

                            <motion.button
                                onClick={handleLogout}
                                className={styles.logoutButton}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaSignOutAlt />
                                <span>Logout</span>
                            </motion.button>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
            {isMobileMenuOpen && <div className={styles.overlay} onClick={() => setIsMobileMenuOpen(false)} />}
        </nav>
    );
}