import { motion, useReducedMotion } from "framer-motion";
import { experience } from "../../data/experience";
import { SectionHeader } from "../ui/SectionHeader";

export function Experience() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="experience" className="container-page py-28 sm:py-36">
      <SectionHeader
        label="Experience"
        title="Six years building production frontends."
        description="Roles across fintech, agritech, and research where I've partnered with product, design, and backend teams to ship software real users depend on."
      />

      <ol className="mt-14 divide-y divide-[color:var(--hairline)] border-y hairline">
        {experience.map((entry, index) => (
          <motion.li
            key={`${entry.company}-${entry.period}`}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            className="grid grid-cols-1 gap-4 py-8 sm:grid-cols-12 sm:gap-8"
          >
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground sm:col-span-3">
              {entry.period}
            </div>
            <div className="sm:col-span-4">
              <div className="text-base font-medium text-foreground">
                {entry.title}
              </div>
              <div className="mt-1 font-mono text-xs text-muted-foreground">
                {entry.company}
              </div>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground sm:col-span-5">
              {entry.description}
            </p>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
