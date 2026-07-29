import { useEffect, useState } from "react";
import { site } from "../../data/site";
import { FileDownIcon } from "../ui/icons";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-3" : "py-5"
      }`}
    >
      <div className="container-page flex items-center justify-between">
        <a
          href="#top"
          className="group flex items-center gap-2.5"
          aria-label="Home"
          onClick={closeMenu}
        >
          <span className="relative inline-flex h-2 w-2 items-center justify-center">
            <span className="relative z-10 h-2 w-2 rounded-full bg-signal signal-dot" />
          </span>
          <span className="font-mono text-sm tracking-tight text-foreground">
            oluwashina
            <span className="text-muted-foreground">.dev</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {item.label}
            </a>
          ))}
          <a
            href={site.resumeUrl}
            download={site.resumeDownloadName}
            className="ml-2 inline-flex items-center gap-2 rounded-md border hairline px-3 py-1.5 text-sm text-foreground transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Résumé
            <FileDownIcon />
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border hairline text-foreground md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">Toggle menu</span>
          <div className="relative h-3 w-4" aria-hidden="true">
            <span
              className={`absolute left-0 top-0 h-px w-full bg-current transition-transform ${menuOpen ? "translate-y-1.5 rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 top-3 h-px w-full bg-current transition-transform ${menuOpen ? "-translate-y-1.5 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>

      {menuOpen && (
        <div id="mobile-menu" className="container-page mt-3 md:hidden">
          <nav
            className="glass flex flex-col rounded-xl border border-border p-2"
            aria-label="Mobile"
          >
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-md px-3 py-2.5 text-sm text-foreground/90 transition-colors hover:bg-secondary"
              >
                {item.label}
              </a>
            ))}
            <a
              href={site.resumeUrl}
              download={site.resumeDownloadName}
              onClick={closeMenu}
              className="mt-1 inline-flex items-center gap-2 rounded-md bg-foreground px-3 py-2.5 text-sm font-medium text-background"
            >
              Download résumé
              <FileDownIcon />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
