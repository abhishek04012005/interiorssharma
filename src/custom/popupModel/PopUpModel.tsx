import { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import styles from './PopUpModel.module.css';
import { supabase } from '@/supabase/Supabase';
import toast from 'react-hot-toast';
import Popup from '../message-popup/PopUp';

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const services = [
    'Wooden Works',
    'Paneling',
    'Partitions',
    'Ceilings'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('quote_requests')
        .insert([
          {
            name: formData.name,
            phone: formData.phone,
            service: formData.service,
            created_at: new Date().toISOString()
          }
        ]);



      if (error) throw error;

      setShowSuccessPopup(true);
      setFormData({
        name: '',
        phone: '',
        service: selectedWork || 'Wooden Works',
      });

      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to submit quote request');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (!isOpen) return null;

  return (
    <>
      <div className={styles.modalContainer}>
        <div className={styles.overlay} onClick={onClose} />
        <div className={styles.popup}>
          <button className={styles.closeButton} onClick={onClose}>
            <IoClose />
          </button>

          <div className={styles.popupContent}>
            <h2 className={styles.title}>Request a Quote</h2>
            <div className={styles.headerLine} />
            <p className={styles.subtitle}>Fill in your details and we&apos;ll get back to you</p>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGrid}>
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

              <button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Request'}
              </button>
            </form>
          </div>
        </div>
      </div>
      <Popup
        isOpen={showSuccessPopup}
        onClose={() => setShowSuccessPopup(false)}
        message="Your quote request has been submitted successfully!"
      />
    </>
  );
}