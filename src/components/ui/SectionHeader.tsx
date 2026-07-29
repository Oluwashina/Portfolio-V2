import { motion, useReducedMotion } from "framer-motion";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
}

export function SectionHeader({
  label,
  title,
  description,
}: SectionHeaderProps) {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-50px" },
        transition: { duration: 0.4 },
      };

  return (
    <div className="max-w-3xl">
      <motion.div {...fadeUp}>
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
          <span className="section-label-line" aria-hidden="true" />
          {label}
        </div>
      </motion.div>

      <motion.h2
        {...fadeUp}
        transition={{ duration: 0.4, delay: 0.05 }}
        className="mt-5 text-balance text-3xl font-medium tracking-[-0.02em] text-foreground sm:text-4xl md:text-5xl"
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          {...fadeUp}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-5 max-w-2xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
