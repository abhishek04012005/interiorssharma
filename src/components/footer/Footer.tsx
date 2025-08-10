'use client';
import React from 'react';
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
            <div className={styles.footerSlogen}>
              Timeless Interiors, Legacy in Style.
            </div>
            <p className={styles.companyDesc}>

              Transforming commercial spaces into extraordinary experiences .
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
                { name: 'Works', path: '/works' },
                { name: 'Projects', path: '/projects' },
                { name: 'Contact', path: '/contact' },
                { name: 'Admin', path: '/admin' }

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
            <ul className={styles.footerLinks}>
              {services.map((service) => (
                <li key={service.id} className={styles.dropdownItem}>
                  <Link href={service.path}>{service.title}</Link>
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
                { icon: <FaMapMarkerAlt />, content: `House No. 2696/49, Hansa Soc., Hari Om Nagar, Santosh Bhuvan, Nalasopara (E), Palghar-401209`, href: 'https://www.google.com/maps/place/Om+Nagar+Rd,+Vasai+West,+Nala+Sopara,+Vasai-Virar,+Maharashtra+401202/@19.3914537,72.8245959,17.21z/data=!4m10!1m2!2m1!1sHouse+No.+2696%2F49,+Hansa+Soc.,+Hari+Om+Nagar,+Santosh+Bhuvan,+Nalasopara+(E),+Palghar-401209!3m6!1s0x3be7aeb7923072f9:0xd0d980a192937b3!8m2!3d19.391465!4d72.8258795!15sClxIb3VzZSBOby4gMjY5Ni80OSwgSGFuc2EgU29jLiwgSGFyaSBPbSBOYWdhciwgU2FudG9zaCBCaHV2YW4sIE5hbGFzb3BhcmEgKEUpLCBQYWxnaGFyLTQwMTIwOZIBBXJvdXRl4AEA!16s%2Fg%2F1hc4bgg42?entry=ttu&g_ep=EgoyMDI1MDgwNi4wIKXMDSoASAFQAw%3D%3D' }
              ].map((contact, index) => (
                <p key={index}>
                  <div>{contact.icon}</div>
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





