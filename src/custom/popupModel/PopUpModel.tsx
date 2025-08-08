import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import styles from './PopUpModel.module.css';

interface QuotePopupProps {
  isOpen: boolean;
  onClose: () => void;
  selectedWork?: string;
}

export default function QuotePopup({ isOpen, onClose, selectedWork }: QuotePopupProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: selectedWork || 'Wooden Works',
  });

  const services = [
    'Wooden Works',
    'Paneling',
    'Partitions',
    'Ceilings'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Add your form submission logic here
      console.log('Form submitted:', formData);
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        service: selectedWork || 'Wooden Works',
      });
      
      onClose();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className={styles.popup}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={e => e.stopPropagation()}
          >
            <button className={styles.closeButton} onClick={onClose}>
              <IoClose />
            </button>

            <div className={styles.popupContent}>
              <h2 className={styles.title}>Request a Quote</h2>
              <div className={styles.headerLine} />
              <p className={styles.subtitle}>Fill in your details and we'll get back to you</p>

              <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formGroup}>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className={styles.input}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      required
                      className={styles.input}
                    />
                  </div>

              

                <div className={styles.formGroup}>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={styles.select}
                    required
                  >
                    {services.map(service => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>


                <motion.button
                  type="submit"
                  className={styles.submitButton}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Submit Request
                </motion.button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}