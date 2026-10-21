'use client';

import { useEffect, useId, useLayoutEffect, useRef, useState, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { calcMint } from './ui';

export type MintGlassDropdownOption<T extends string> = {
  value: T;
  label: string;
  meta?: string;
};

type MenuPos = { top: number; left: number; width: number };

export function MintGlassDropdown<T extends string>({
  icon,
  label,
  listLabel,
  value,
  options,
  onChange,
  formatDisplay,
}: {
  icon: ReactNode;
  label: string;
  listLabel: string;
  value: T;
  options: readonly MintGlassDropdownOption<T>[];
  onChange: (next: T) => void;
  formatDisplay?: (option: MintGlassDropdownOption<T>) => string;
}) {
  const [open, setOpen] = useState(false);
  const [menuPos, setMenuPos] = useState<MenuPos | null>(null);
  const [mounted, setMounted] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);
  const listId = useId();
  const current = options.find(o => o.value === value) ?? options[0];
  const display = formatDisplay ? formatDisplay(current) : current.label;

  useEffect(() => setMounted(true), []);

  const updateMenuPos = () => {
    const el = triggerRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setMenuPos({ top: r.bottom + 6, left: r.left, width: r.width });
  };

  useLayoutEffect(() => {
    if (!open) {
      setMenuPos(null);
      return;
    }
    updateMenuPos();
    const onScrollOrResize = () => updateMenuPos();
    window.addEventListener('scroll', onScrollOrResize, true);
    window.addEventListener('resize', onScrollOrResize);
    return () => {
      window.removeEventListener('scroll', onScrollOrResize, true);
      window.removeEventListener('resize', onScrollOrResize);
    };
  }, [open, options.length, display]);

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node;
      if (rootRef.current?.contains(target) || menuRef.current?.contains(target)) return;
      setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onPointer);
    document.addEventListener('touchstart', onPointer);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onPointer);
      document.removeEventListener('touchstart', onPointer);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const menu =
    open && menuPos && mounted
      ? createPortal(
          <ul
            ref={menuRef}
            id={listId}
            role="listbox"
            aria-label={listLabel}
            style={{
              position: 'fixed',
              top: menuPos.top,
              left: menuPos.left,
              width: menuPos.width,
              zIndex: 9999,
            }}
            className={calcMint.activityMenuPortal}
          >
            {options.map(opt => {
              const selected = opt.value === value;
              return (
                <li key={opt.value} role="presentation">
                  <button
                    type="button"
                    role="option"
                    aria-selected={selected}
                    className={`${calcMint.activityOption} ${selected ? calcMint.activityOptionOn : ''}`}
                    onClick={() => {
                      onChange(opt.value);
                      setOpen(false);
                    }}
                  >
                    <span className="min-w-0 flex-1 leading-snug">{opt.label}</span>
                    {opt.meta ? (
                      <span
                        className={`${calcMint.activityOptionMeta} ${selected ? calcMint.activityOptionMetaOn : ''}`}
                      >
                        {opt.meta}
                      </span>
                    ) : null}
                  </button>
                </li>
              );
            })}
          </ul>,
          document.body,
        )
      : null;

  return (
    <>
      <div
        ref={rootRef}
        className={`${calcMint.activityBox} ${open ? calcMint.activityBoxOpen : calcMint.activityBoxIdle}`}
      >
        <button
          ref={triggerRef}
          type="button"
          className={`${calcMint.activityTrigger} ${calcMint.fieldInner}`}
          aria-expanded={open}
          aria-haspopup="listbox"
          aria-controls={listId}
          onClick={() => setOpen(o => !o)}
        >
          <div className={calcMint.fieldIcon}>{icon}</div>
          <div className="min-w-0 flex-1">
            <span className={calcMint.fieldLabel}>{label}</span>
            <p className={calcMint.activityValue}>{display}</p>
          </div>
          <svg
            className={`${calcMint.activityChevron} ${open ? 'rotate-180' : ''}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
      </div>
      {menu}
    </>
  );
}
