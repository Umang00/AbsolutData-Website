import { motion } from 'framer-motion';

export const PageWrapper = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`min-h-[calc(100vh-80px)] ${className}`}
    >
      {children}
    </motion.div>
  );
};
