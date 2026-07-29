import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { projects } from "../../data/projects";
import type { Project } from "../../data/projects";
import { SectionHeader } from "../ui/SectionHeader";
import { ArrowRightIcon, CheckIcon } from "../ui/icons";

function CaseStudyPanel({ project }: { project: Project }) {
  return (
    <div className="grid gap-10 border-t hairline p-6 sm:p-8 lg:grid-cols-5">
      <div className="space-y-8 lg:col-span-3">
        <div>
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            The problem
          </div>
          <p className="mt-3 text-base leading-relaxed text-foreground/90">
            {project.problem}
          </p>
        </div>

        <div>
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Architectural decisions
          </div>
          <ul className="mt-3 space-y-3">
            {project.architecture.map((item) => (
              <li key={item} className="flex gap-3">
                <CheckIcon className="mt-1 h-4 w-4 flex-none text-signal" />
                <span className="text-base leading-relaxed text-foreground/90">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            What was hard
          </div>
          <ul className="mt-3 space-y-3">
            {project.challenges.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1 w-1 flex-none rounded-full bg-muted-foreground" />
                <span className="text-base leading-relaxed text-foreground/90">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="space-y-8 lg:col-span-2">
        <div>
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Measurable impact
          </div>
          <dl className="mt-4 space-y-3">
            {project.impact.map((item) => (
              <div
                key={item.label}
                className="rounded-lg border hairline bg-surface p-4"
              >
                <dt className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {item.label}
                </dt>
                <dd className="mt-1 text-sm text-foreground">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Stack
          </div>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="rounded-full border hairline px-3 py-1 font-mono text-xs text-muted-foreground"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(project.defaultOpen ?? false);
  const prefersReducedMotion = useReducedMotion();
  const displayUrl = project.url?.replace(/^https?:\/\//, "");

  return (
    <motion.article
      initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
      className="group overflow-hidden rounded-2xl border hairline bg-surface transition-colors hover:border-foreground/20"
    >
      <div className="flex w-full flex-col gap-6 p-6 sm:flex-row sm:items-start sm:justify-between sm:p-8">
        <div className="flex-1">
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <span>{project.number}</span>
            <span className="h-px w-6 bg-hairline" aria-hidden="true" />
            <span>{project.category}</span>
          </div>

          <button
            type="button"
            aria-expanded={open}
            aria-controls={`case-${project.id}`}
            onClick={() => setOpen((value) => !value)}
            className="mt-4 w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
          >
            <h3 className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
              {project.title}
            </h3>
            <p className="mt-2 max-w-2xl text-pretty text-base text-muted-foreground">
              {project.subtitle}
            </p>
          </button>

          <div className="mt-4 flex flex-wrap items-center gap-x-1 gap-y-2 font-mono text-xs text-muted-foreground">
            <span>{project.client}</span>
            {project.url && displayUrl && (
              <>
                <span aria-hidden="true">,</span>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground underline-offset-2 transition-colors hover:text-signal hover:underline"
                >
                  {displayUrl}
                </a>
              </>
            )}
            <span aria-hidden="true">,</span>
            <span>{project.role}</span>
          </div>
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-controls={`case-${project.id}`}
          onClick={() => setOpen((value) => !value)}
          className="flex shrink-0 items-center gap-3 sm:pt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
        >
          <span className="hidden font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground sm:inline">
            {open ? "Hide case study" : "Read case study"}
          </span>
          <span
            className={`inline-flex h-9 w-9 items-center justify-center rounded-full border hairline text-foreground transition-transform ${open ? "rotate-90 bg-signal text-signal-foreground" : ""}`}
            aria-hidden="true"
          >
            <ArrowRightIcon />
          </span>
        </button>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`case-${project.id}`}
            initial={prefersReducedMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <CaseStudyPanel project={project} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

export function Work() {
  return (
    <section id="work" className="container-page py-28 sm:py-36">
      <SectionHeader
        label="Featured projects"
        title="Production work, in depth."
        description="A short list of applications I've shipped across fintech, crypto, and SaaS. Each one owned from architecture through delivery."
      />

      <div className="mt-16 space-y-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
