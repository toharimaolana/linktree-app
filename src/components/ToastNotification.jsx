import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const ToastNotification = ({ message, isVisible, onClose }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 450, damping: 25 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center space-x-2.5 rounded-full border border-lime-500/40 bg-neutral-900/95 px-4 py-2.5 shadow-2xl backdrop-blur-md text-neutral-100"
        >
          <CheckCircle2 className="h-4 w-4 text-lime-400" />
          <span className="font-mono text-xs font-semibold text-lime-300 tracking-wide">
            {message}
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ToastNotification;
