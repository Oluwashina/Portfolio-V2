const resumeFile = "Oluwashina Kure-Ojo - Senior Frontend Engineer.pdf";

export const site = {
  name: "Oluwashina Kure-Ojo",
  domain: "oluwashina.dev",
  title: "Senior Frontend Engineer",
  tagline: "building scalable, high performance web applications.",
  intro:
    "I build modern digital products that combine clean architecture, exceptional user experiences, and scalable frontend systems. I partner with product managers, designers, and backend engineers to turn complex business requirements into intuitive interfaces.",
  availability: "Available for Remote Opportunities",
  resumeFile,
  resumeUrl: `/${encodeURI(resumeFile)}`,
  resumeDownloadName: "Oluwashina-Kure-Ojo-Senior-Frontend-Engineer.pdf",
  stats: [
    { label: "Experience", value: "6+ yrs" },
    { label: "Features shipped", value: "20+" },
    { label: "Focus", value: "Fintech & SaaS" },
    { label: "Availability", value: "Remote" },
  ],
  contact: {
    email: "thedevoluwashina@gmail.com",
    phone: "+234 706 082 5698",
    phoneHref: "tel:+2347060825698",
    github: "https://github.com/Oluwashina",
    linkedin: "https://www.linkedin.com/in/oluwashina-kure-ojo",
    calendly: "https://calendly.com/shinzbaba/30min",
  },
  nav: [
    { label: "Work", href: "#work" },
    { label: "Experience", href: "#experience" },
    { label: "Expertise", href: "#expertise" },
    { label: "Principles", href: "#principles" },
    { label: "Contact", href: "#contact" },
  ],
} as const;
