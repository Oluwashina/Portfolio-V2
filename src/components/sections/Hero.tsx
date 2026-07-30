import { motion, useReducedMotion } from "framer-motion";
import { site } from "../../data/site";
import { ArrowRightIcon, FileDownIcon } from "../ui/icons";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
      };

  return (
    <section
      id="top"
      className="relative overflow-hidden pb-24 pt-40 sm:pb-32 sm:pt-48"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 grid-lines opacity-60"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[520px] w-[900px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--signal) 35%, transparent), transparent 70%)",
        }}
      />

      <div className="container-page">
        <motion.div {...fadeUp}>
          <span className="inline-flex items-center gap-2 rounded-full border hairline bg-secondary/40 px-3 py-1 font-mono text-xs text-muted-foreground">
            <span className="relative inline-flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-signal opacity-75 [animation:signal-pulse_2.4s_ease-in-out_infinite]" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signal" />
            </span>
            {site.availability}
          </span>
        </motion.div>

        <motion.h1
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mt-8 max-w-5xl text-balance text-[clamp(2.5rem,6.4vw,5.75rem)] font-medium leading-[1.02] tracking-[-0.035em] text-foreground"
        >
          {site.title}
          <br />
          <span className="text-muted-foreground">{site.tagline}</span>
        </motion.h1>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground"
        >
          {site.intro}
        </motion.p>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-transform hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            View my work
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href={site.resumeUrl}
            download={site.resumeDownloadName}
            className="inline-flex items-center gap-2 rounded-md border hairline px-4 py-2.5 text-sm text-foreground transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Download résumé
            <FileDownIcon />
          </a>
          <a
            href={site.contact.calendly}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-md border hairline px-4 py-2.5 text-sm text-foreground transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Book a call
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        </motion.div>

        <motion.dl
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-20 grid grid-cols-2 gap-x-8 gap-y-6 border-t hairline pt-10 sm:grid-cols-4"
        >
          {site.stats.map((stat) => (
            <div key={stat.label}>
              <dt className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {stat.label}
              </dt>
              <dd className="mt-2 text-sm text-foreground">{stat.value}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
