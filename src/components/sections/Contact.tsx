import { FormEvent, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "../../data/site";
import { SectionHeader } from "../ui/SectionHeader";
import { ArrowRightIcon } from "../ui/icons";

const contactLinks = [
  {
    label: "Email",
    value: site.contact.email,
    href: `mailto:${site.contact.email}`,
  },
  {
    label: "Schedule",
    value: "Book a 30 min call",
    href: site.contact.calendly,
    external: true,
  },
  { label: "Phone", value: site.contact.phone, href: site.contact.phoneHref },
  {
    label: "GitHub",
    value: "github.com/Oluwashina",
    href: site.contact.github,
    external: true,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/oluwashina-kure-ojo",
    href: site.contact.linkedin,
    external: true,
  },
  {
    label: "Résumé",
    value: "Download PDF ↓",
    href: site.resumeUrl,
    downloadName: site.resumeDownloadName,
  },
];

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const prefersReducedMotion = useReducedMotion();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio inquiry${form.company ? ` from ${form.company}` : ""}`,
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}${form.company ? `\nCompany: ${form.company}` : ""}\n\n${form.message}`,
    );

    window.location.href = `mailto:${site.contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="container-page py-28 sm:py-36">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <SectionHeader
            label="Contact"
            title="Let's build something great together."
            description="Whether you're hiring a Senior Frontend Engineer, launching a new product, or looking to improve an existing application, I'd like to hear about your project."
          />

          <div className="mt-10 space-y-2 font-mono text-sm">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group flex items-center justify-between gap-4 rounded-md border border-transparent px-3 py-2.5 transition-colors hover:border-[color:var(--hairline)] hover:bg-secondary/40"
                {...(link.downloadName
                  ? { download: link.downloadName }
                  : {})}
                {...(link.external
                  ? { target: "_blank", rel: "noreferrer noopener" }
                  : {})}
              >
                <span className="text-muted-foreground">{link.label}</span>
                <span className="text-foreground transition-colors group-hover:text-signal">
                  {link.value}
                </span>
              </a>
            ))}
          </div>
        </div>

        <motion.form
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          onSubmit={handleSubmit}
          className="space-y-4 rounded-2xl border hairline bg-surface p-6 sm:p-8"
        >
          <div>
            <label
              htmlFor="name"
              className="mb-1.5 block font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-md border hairline bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-signal/60 focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-md border hairline bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-signal/60 focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          <div>
            <label
              htmlFor="company"
              className="mb-1.5 block font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground"
            >
              Company (optional)
            </label>
            <input
              id="company"
              name="company"
              type="text"
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
              className="w-full rounded-md border hairline bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-signal/60 focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-1.5 block font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full resize-y rounded-md border hairline bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-signal/60 focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>


          <button
            type="submit"
            className="group inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-transform hover:-translate-y-px disabled:opacity-60"
          >
            Send message
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </motion.form>
      </div>
    </section>
  );
}
