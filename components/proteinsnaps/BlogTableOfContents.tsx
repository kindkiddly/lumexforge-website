"use client";

import { useState } from "react";

export type BlogTocItem = {
  id: string;
  label: string;
};

export function BlogTableOfContents({ items }: { items: BlogTocItem[] }) {
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
          {items.map((item, index) => (
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
