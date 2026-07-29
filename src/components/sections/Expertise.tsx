import { motion, useReducedMotion } from "framer-motion";
import { skillCategories } from "../../data/skills";
import { SectionHeader } from "../ui/SectionHeader";

export function Expertise() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="expertise" className="container-page py-28 sm:py-36">
      <SectionHeader
        label="Tech stack"
        title="The tools I ship with."
        description="Grouped by what they actually do on a project. The list is short on purpose: depth over breadth."
      />

      <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, index) => (
          <motion.article
            key={category.title}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="group relative bg-background p-7 transition-colors hover:bg-surface"
          >
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              <span>{category.number}</span>
              <span className="h-px w-4 bg-hairline" aria-hidden="true" />
            </div>
            <h3 className="mt-4 text-lg font-medium tracking-tight text-foreground">
              {category.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {category.description}
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border hairline px-2.5 py-1 font-mono text-xs text-muted-foreground"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
