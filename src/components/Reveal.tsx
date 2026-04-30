import { motion, useReducedMotion } from 'framer-motion'

export default function Reveal({
  children,
  className,
  delay = 0,
  y = 18,
  scale = 1,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  y?: number
  scale?: number
}) {
  const reduced = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduced ? { opacity: 1 } : { opacity: 0, y, scale: scale === 1 ? 0.995 : scale }}
      whileInView={reduced ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  )
}

