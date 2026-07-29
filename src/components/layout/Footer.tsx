import { site } from "../../data/site";
import { GitHubIcon, LinkedInIcon, MailIcon } from "../ui/icons";

const iconLinkClass =
  "inline-flex h-10 w-10 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

export function Footer() {
  return (
    <footer className="border-t hairline">
      <div className="container-page flex flex-col items-start justify-between gap-6 py-10 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
          <span
            className="h-1.5 w-1.5 rounded-full bg-signal"
            aria-hidden="true"
          />
          © {new Date().getFullYear()} {site.name}. Built with intention.
        </div>

        <div className="flex items-center gap-1">
          <a
            href={site.contact.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className={iconLinkClass}
          >
            <GitHubIcon />
          </a>
          <a
            href={site.contact.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
            className={iconLinkClass}
          >
            <LinkedInIcon />
          </a>
          <a
            href={`mailto:${site.contact.email}`}
            aria-label="Email"
            className={iconLinkClass}
          >
            <MailIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
