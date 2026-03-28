import { motion } from 'framer-motion'

export default function ScrollReveal({ children, delay = 0, x = 0, y = 20, duration = 0.5 }) {
  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration,
        delay,
        ease: [0.25, 1, 0.5, 1] // Snappy ease-out
      }}
    >
      {children}
    </motion.div>
  )
}
