import type { ReactNode } from 'react';

/** Same green as footer brand: Protein<span>Snaps</span> */
export const brandSnapsClassName = 'text-[#00e6a8]';

export function BrandName() {
  return (
    <>
      Protein<span className={brandSnapsClassName}>Snaps</span>
    </>
  );
}

/** Split visible copy on "ProteinSnaps" while keeping SEO/schema strings unchanged. */
export function textWithBrandName(text: string): ReactNode {
  if (!text.includes('ProteinSnaps')) return text;
  const parts = text.split('ProteinSnaps');
  const nodes: ReactNode[] = [];
  parts.forEach((part, i) => {
    if (part) nodes.push(part);
    if (i < parts.length - 1) nodes.push(<BrandName key={`brand-${i}`} />);
  });
  return nodes;
}
