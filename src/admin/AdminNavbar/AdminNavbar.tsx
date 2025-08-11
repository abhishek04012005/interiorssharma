"use client";
import { useState, useEffect, JSX } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { FaUsers, FaQuoteRight, FaSignOutAlt } from 'react-icons/fa';
import styles from './AdminNavbar.module.css';
import { toast } from 'react-hot-toast';
import Image from 'next/image';
import Logo from "../../assets/logo.png";

interface NavItem {
  id: number;
  title: string;
  path: string;
  icon: JSX.Element;
}

const navItems: NavItem[] = [
  { id: 1, title: 'Contact Requests', path: '/admin/dashboard/contact', icon: <FaUsers /> },
  { id: 2, title: 'Quote Requests', path: '/admin/dashboard/enquiry', icon: <FaQuoteRight /> },
];

export default function AdminNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    document.cookie = 'adminAuth=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';
    localStorage.removeItem('adminAuth');
    toast.success('Logged out successfully');
    router.push('/admin/login');
    router.refresh();
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        <Link href="/admin/dashboard" className={styles.logo}>
          <Image 
            className={styles.logoImage} 
            src={Logo} 
            alt="Sharma Interiors" 
            width={150} 
            height={50} 
            priority
          />
        </Link>

        <div 
          className={`${styles.hamburger} ${isOpen ? styles.active : ''}`} 
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className={styles.hamburgerIcon}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <ul className={`${styles.navMenu} ${isOpen ? styles.active : ''}`}>
          {navItems.map((item) => (
            <li key={item.id} className={styles.navItem}>
              <Link 
                href={item.path} 
                className={`${styles.navLink} ${pathname === item.path ? styles.active : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
          <li className={styles.navItem}>
            <button onClick={handleLogout} className={styles.logoutButton}>
              <FaSignOutAlt />
              <span>Logout</span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}