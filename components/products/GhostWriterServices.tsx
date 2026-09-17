"use client";

import { motion } from "framer-motion";

export type GwhIconId =
  | "quill"
  | "palette"
  | "layout"
  | "brush"
  | "edit"
  | "ebook"
  | "globe"
  | "brand";

export type GwhService = {
  title: string;
  detail: string;
  icon: GwhIconId;
};

/** Line icons for GhostWriterHunt service cards */
function GwhServiceIcon({ icon }: { icon: GwhIconId }) {
  const common = {
    width: 44,
    height: 44,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  switch (icon) {
    case "quill":
      return (
        <svg {...common}>
          <path d="M4 20c2-1 4.5-1.5 7-4l7-8a2.5 2.5 0 0 0-3.5-3.5l-8 7c-2.5 2.5-3 5-4 8z" />
          <path d="M13.5 6.5l4 4" />
        </svg>
      );
    case "palette":
      return (
        <svg {...common}>
          <path d="M12 3a9 9 0 1 0 0 18h1.2a2.2 2.2 0 0 0 0-4.4H12" />
          <circle cx="7.5" cy="10" r="1" fill="currentColor" stroke="none" />
          <circle cx="10.5" cy="7.5" r="1" fill="currentColor" stroke="none" />
          <circle cx="14.5" cy="8" r="1" fill="currentColor" stroke="none" />
          <circle cx="16.5" cy="11.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "layout":
      return (
        <svg {...common}>
          <path d="M4 5a1 1 0 0 1 1-1h6v16H5a1 1 0 0 1-1-1V5z" />
          <path d="M13 4h6a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-6V4z" />
          <path d="M7 8h2M7 12h2" />
        </svg>
      );
    case "brush":
      return (
        <svg {...common}>
          <path d="M14.5 4.5l5 5-8.5 8.5H6v-5l8.5-8.5z" />
          <path d="M12.5 6.5l5 5" />
          <path d="M6 19c0-1.5 1-2.5 2.5-2.5" />
        </svg>
      );
    case "edit":
      return (
        <svg {...common}>
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
          <path d="M9 16l3 3" />
        </svg>
      );
    case "ebook":
      return (
        <svg {...common}>
          <rect x="6" y="3" width="12" height="18" rx="2" />
          <path d="M9 7h6M9 11h6M9 15h4" />
        </svg>
      );
    case "globe":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18z" />
          <path d="M16 7l2-2M18 12h3" />
        </svg>
      );
    case "brand":
      return (
        <svg {...common}>
          <circle cx="12" cy="8" r="3.5" />
          <path d="M5 20c1.5-3.5 4-5 7-5s5.5 1.5 7 5" />
          <path d="M17.5 4.5l.6 1.4 1.5.3-1.1 1.1.2 1.5-1.2-.7-1.2.7.2-1.5-1.1-1.1 1.5-.3.6-1.4z" />
        </svg>
      );
    default:
      return null;
  }
}

/**
 * GhostWriterHunt services — cream full-bleed section with white gold cards.
 * Visual presentation only; service titles/details come from parent data.
 */
export function GhostWriterServices({ services }: { services: GwhService[] }) {
  return (
    <div className="lf-gwh-services">
      <div className="lf-gwh-services-inner">
        <header className="lf-gwh-services-head">
          <h3 className="lf-gwh-services-title">Our Services</h3>
          <p className="lf-gwh-services-lead">
            Everything your book needs, crafted by professionals.
          </p>
        </header>

        <div className="lf-gwh-grid">
          {services.map((service, i) => (
            <motion.article
              key={service.title}
              className="lf-gwh-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut", delay: i * 0.1 },
              }}
              whileHover={{
                y: -6,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              viewport={{ once: true, margin: "-40px" }}
            >
              <span className="lf-gwh-icon">
                <GwhServiceIcon icon={service.icon} />
              </span>
              <h4 className="lf-gwh-card-title">{service.title}</h4>
              <p className="lf-gwh-card-desc">{service.detail}</p>
            </motion.article>
          ))}
        </div>

        {/* Soft gold rule before the next products block */}
        <div className="lf-gwh-divider" aria-hidden="true" />
      </div>
    </div>
  );
}
