'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';
import { FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';
import Logo from '../../assets/logo.png'

const services = [
  {
    id: 1,
    title: 'Wooden Works',
    path: '/services/wooden-works',
    subItems: [
      { name: 'Conferece Table', path: '/services/wooden-works/conference-table' },
      { name: 'Wooden Flooring', path: '/services/wooden-works/wooden-flooring' },
      { name: 'File Storage', path: '/services/wooden-works/file-storage' },
      { name: 'Workstation Table', path: '/services/wooden-works/workstation-table' }
    ]
  },
  {
    id: 2,
    title: 'Partitions Works',
    path: '/services/partitions',
    subItems: [
      { name: 'Hilux Partition', path: '/services/partitions/hilux' },
      { name: 'Gypsum Partition', path: '/services/partitions/gypsum' },
      { name: 'Aluminium Partition', path: '/services/partitions/aluminium' },
      { name: 'Glass Partition', path: '/services/partitions/glass' },
      { name: 'HPL Toilet Partition and Door', path: '/services/partitions/hpl-toilet' }
    ]
  },
  {
    id: 3,
    title: 'Ceiling Works',
    path: '/services/ceiling',
    subItems: [
      { name: 'Hilux False Ceiling', path: '/services/ceiling/hilux' },
      { name: 'Gypsum False Ceiling', path: '/services/ceiling/gypsum' },
      { name: 'Armstrong Ceiling Grid', path: '/services/ceiling/armstrong' },
    ]
  },
  {
    id: 4,
    title: 'Paneling Works',
    path: '/services/paneling',
    subItems: [
      { name: 'ACP Sheet Paneling', path: '/services/paneling/acp-sheet' },
    ]
  }
];

const Footer = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerGrid}>
          {/* Company Info */}
          <div className={styles.footerSection}>
            <Image
              src={Logo}
              alt="Sharma Interiors"
              width={180}
              height={55}
              className={styles.footerLogo}
              priority
            />
            <p className={styles.companyDesc}>
              Transforming spaces into extraordinary experiences through innovative design and exceptional craftsmanship.
            </p>
            <div className={styles.socialLinks}>
              {[
                { icon: <FaFacebookF />, href: 'https://facebook.com' },
                { icon: <FaTwitter />, href: 'https://twitter.com' },
                { icon: <FaInstagram />, href: 'https://instagram.com' },
                { icon: <FaLinkedinIn />, href: 'https://linkedin.com' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={styles.socialIcon}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Quick Links</h3>
            <ul className={styles.footerLinks}>
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Projects', path: '/projects' },
                { name: 'Contact', path: '/contact' }
              ].map((link, index) => (
                <li key={index}>
                  <Link href={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Our Services</h3>
            <ul className={styles.servicesDropdown}>
              {services.map((service) => (
                <li key={service.id} className={styles.dropdownItem}>
                  <div
                    className={styles.menuItem}
                    onClick={() => toggleDropdown(service.id)}
                  >
                    <Link href={service.path}>{service.title}</Link>
                    <span className={`${styles.dropdownToggle} ${openDropdown === service.id ? styles.active : ''}`}>
                      +
                    </span>
                  </div>
                  <ul className={`${styles.dropdownContent} ${openDropdown === service.id ? styles.active : ''}`}>
                    {service.subItems.map((item, index) => (
                      <li key={index}>
                        <Link href={item.path}>{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Contact Us</h3>
            <div className={styles.contactInfo}>
              {[
                { icon: <FaPhone />, content: '+91 9975662217', href: 'tel:+91 9975662217' },
                { icon: <FaEnvelope />, content: 'contact@interiorssharma.com', href: 'mailto:contact@interiorssharma.com' },
                { icon: <FaMapMarkerAlt />, content: `House No. 2696/49, Hansa Soc., Hari Om Nagar, Santosh Bhuvan, Nalasopara (E), Palghar-401209`, href: 'https://maps.google.com' }
              ].map((contact, index) => (
                <p key={index}>
                  {contact.icon}{' '}
                  <a href={contact.href} target={contact.href.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer">
                    {contact.content}
                  </a>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.footerBottomContent}>
          <p>&copy; {new Date().getFullYear()} Sharma Interiors. All rights reserved.</p>
          <div className={styles.footerBottomLinks}>
            <Link href="/privacy">Privacy Policy</Link> 
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;





