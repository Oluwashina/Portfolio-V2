import { motion, useReducedMotion } from "framer-motion";
import { principles } from "../../data/principles";
import { SectionHeader } from "../ui/SectionHeader";

export function Principles() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="principles" className="container-page py-28 sm:py-36">
      <SectionHeader
        label="Engineering principles"
        title="How I make decisions."
        description="These are the rules I actually apply in code review and design docs. They explain most of what shipped in the case studies above."
      />

      <div className="mt-14 grid gap-x-16 gap-y-10 md:grid-cols-2">
        {principles.map((principle, index) => (
          <motion.article
            key={principle.number}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="border-t hairline pt-6"
          >
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-signal-soft">
              {principle.number}
            </div>
            <h3 className="mt-3 text-xl font-medium tracking-tight text-foreground">
              {principle.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {principle.description}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
