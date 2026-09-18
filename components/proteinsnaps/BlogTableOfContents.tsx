"use client";

import { useState } from "react";

const TOC_ITEMS = [
  { id: "why-is-protein-so-important", label: "Why Is Protein So Important?" },
  {
    id: "how-much-protein-do-you-need-per-day",
    label: "How Much Protein Do You Need Per Day?",
  },
  {
    id: "protein-intake-by-body-weight",
    label: "Protein Intake by Body Weight",
  },
  {
    id: "how-much-protein-do-you-need-to-build-muscle",
    label: "How Much Protein Do You Need to Build Muscle?",
  },
  {
    id: "how-much-protein-should-you-eat-for-weight-loss",
    label: "How Much Protein Should You Eat for Weight Loss?",
  },
  {
    id: "how-much-protein-is-in-common-foods",
    label: "How Much Protein Is in Common Foods?",
  },
  {
    id: "how-can-you-reach-your-protein-goal-every-day",
    label: "How Can You Reach Your Protein Goal Every Day?",
  },
  { id: "does-protein-timing-matter", label: "Does Protein Timing Matter?" },
  {
    id: "why-track-nutrition-and-fitness-together",
    label: "Why Track Nutrition and Fitness Together?",
  },
  { id: "frequently-asked-questions", label: "Frequently Asked Questions" },
  { id: "the-bottom-line", label: "The Bottom Line" },
] as const;

export function BlogTableOfContents() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="ps-blog-toc" aria-label="Table of contents">
      <button
        type="button"
        className="ps-blog-toc-toggle"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        In This Article
        <span className="ps-blog-toc-chevron" aria-hidden="true">
          {open ? "▲" : "▼"}
        </span>
      </button>
      <div className={`ps-blog-toc-panel${open ? " is-open" : ""}`}>
        <p className="ps-blog-toc-heading">In This Article</p>
        <ol className="ps-blog-toc-list">
          {TOC_ITEMS.map((item, index) => (
            <li key={item.id}>
              <a href={`#${item.id}`}>
                <span className="ps-blog-toc-num">{index + 1}.</span>
                {item.label}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
