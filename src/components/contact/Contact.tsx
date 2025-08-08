'use client';
import React, { useState } from 'react';
import styles from './Contact.module.css';
import { FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { FaPhone } from "react-icons/fa6";

const contactInfo = [
  {
    id: 1,
    icon: <FaPhone />,
    title: 'Phone',
    details: '+91 9975662217',
    link: 'tel:+919975662217'
  },
  {
    id: 2,
    icon: <FaEnvelope />,
    title: 'Email',
    details: 'contact@interiorssharma.com',
    link: 'mailto:contact@interiorssharma.com'
  },
  {
    id: 3,
    icon: <FaMapMarkerAlt />,
    title: 'Location',
    details: `House No. 2696/49, Hansa Soc., 
              Hari Om Nagar, Santosh Bhuvan, 
              Nalasopara (E), Palghar-401209`,
    link: 'https://maps.google.com'
  },

];

const subjects = [
  'Wooden Works',
  'Panelling',
  'Partitions',
  'Ceilings'
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Get in <span className={styles.titleAccent}>Touch</span>
          </h2>
          <div className={styles.headerLine}></div>
          <p className={styles.sectionDescription}>
            Let&apos;s discuss your interior design project
          </p>
        </div>

        <div className={styles.contactGrid}>
          <div className={styles.contactInfo}>
            {contactInfo.map((info) => (
              <a
                key={info.id}
                href={info.link}
                className={styles.infoCard}
                target={info.link.startsWith('http') ? '_blank' : '_self'}
                rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
              >
                <div className={styles.iconWrapper}>{info.icon}</div>
                <div className={styles.infoContent}>
                  <h3>{info.title}</h3>
                  <p>{info.details}</p>
                </div>
              </a>
            ))}
          </div>

          <div className={styles.formWrapper}>
            <form onSubmit={handleSubmit} className={styles.contactForm}>
              <div className={styles.formGrid}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className={styles.selectInput}
              >
                <option value="" disabled>Select Service</option>
                {subjects.map((subject) => (
                  <option key={subject} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
              ></textarea>
              <button type="submit" className={styles.submitButton}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;