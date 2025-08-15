import { motion, AnimatePresence } from 'framer-motion';
import styles from './PopUp.module.css';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
}

const Popup = ({ isOpen, onClose, message }: PopupProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className={styles.popup}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
          >
            <IoMdCheckmarkCircleOutline className={styles.icon} />
            <h3>{message}</h3>
            <button onClick={onClose}>Close</button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Popup;