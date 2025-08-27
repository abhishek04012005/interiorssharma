'use client';
import React, { useState } from 'react';
import styles from './Contact.module.css';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { FaPhone } from "react-icons/fa6";
import { supabase } from '../../supabase/Supabase'
import { toast } from 'react-hot-toast';
import Popup from '@/custom/message-popup/PopUp';

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
    dropdown: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contacts')
        .insert([
          {
            name: formData.name,
            phone: formData.phone,
            dropdown: formData.dropdown,
            message: formData.message,
            created_at: new Date().toISOString()
          }
        ]);


      if (error) throw error;

      setShowPopup(true);
      setFormData({ name: '', phone: '', dropdown: '', message: '' });
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to send message');
    } finally {
      setIsSubmitting(false);
    }
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
                name="dropdown"
                value={formData.dropdown}
                onChange={handleChange}
                required
                className={styles.selectInput}
              >
                <option value="" disabled>Select Service</option>
                {subjects.map((dropdown) => (
                  <option key={dropdown} value={dropdown}>
                    {dropdown}
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
              <button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>

            <Popup
              isOpen={showPopup}
              onClose={() => setShowPopup(false)}
              message="Thank you! Your message has been sent successfully."
            />
          </div>



        </div>

          <div className={styles.map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.747606245659!2d72.8403254!3d19.423308199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4121a8960f0971d%3A0x4dc86d5e2721ed6a!2sSharma%20Interiors!5e0!3m2!1sen!2sin!4v1756292748208!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

      </div>
    </section>
  );
};

export default Contact;