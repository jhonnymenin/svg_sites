"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "./cn";
import { MicroLink } from "./MicroLink";
import { SectionHead } from "./SectionHead";

/**
 * A six-up row that stays a single row at every width (§10): on wide screens it
 * is a plain grid; below xl it becomes a snap carousel that bleeds off the right
 * edge. Arrow buttons appear only when there is somewhere to go.
 */
export function Rail({
  id,
  title,
  label,
  tone,
  viewAll,
  children,
}: {
  id: string;
  title: string;
  label: string;
  tone: "light" | "dark";
  viewAll: { href: string; text: string };
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLUListElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false, scrollable: false });

  const update = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setEdges({ start: el.scrollLeft < 4, end: el.scrollLeft > max - 4, scrollable: max > 4 });
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    update();
    el.addEventListener("scroll", update, { passive: true });
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", update);
      ro.disconnect();
    };
  }, [update]);

  const page = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    const card = el.querySelector("li");
    const step = card ? card.getBoundingClientRect().width + 14 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step * (el.clientWidth > 700 ? 2 : 1), behavior: "smooth" });
  };

  const btn = cn(
    "hidden h-9 w-9 items-center justify-center border transition-colors duration-200 disabled:opacity-30 md:flex",
    tone === "dark"
      ? "border-gold/60 text-gold enabled:hover:bg-gold enabled:hover:text-forest"
      : "border-forest/40 text-forest enabled:hover:bg-forest enabled:hover:text-cream"
  );

  const controls = edges.scrollable ? (
    <div className="flex gap-2">
      <button type="button" aria-label={`Previous ${label}`} className={btn} style={{ borderRadius: 2 }} disabled={edges.start} onClick={() => page(-1)}>
        <ArrowLeft size={16} strokeWidth={1.75} />
      </button>
      <button type="button" aria-label={`More ${label}`} className={btn} style={{ borderRadius: 2 }} disabled={edges.end} onClick={() => page(1)}>
        <ArrowRight size={16} strokeWidth={1.75} />
      </button>
    </div>
  ) : null;

  return (
    <>
      <SectionHead
        id={id}
        title={title}
        tone={tone}
        aside={
          <div className="flex items-center gap-6">
            <MicroLink
              href={viewAll.href}
              className={cn("max-sm:hidden", tone === "dark" ? "text-gold" : "text-forest")}
            >
              {viewAll.text}
            </MicroLink>
            {controls}
          </div>
        }
      />
      <ul
        ref={ref}
        aria-label={label}
        className={cn(
          "rail -mx-(--gutter) mt-5 flex snap-x snap-mandatory scroll-px-(--gutter) gap-3 overflow-x-auto px-(--gutter) pt-1 pb-2 md:gap-[14px] lg:mt-6",
          "xl:mx-0 xl:grid xl:grid-cols-6 xl:overflow-visible xl:px-0 xl:pb-0"
        )}
      >
        {children}
      </ul>
      <MicroLink
        href={viewAll.href}
        className={cn("mt-6 sm:hidden", tone === "dark" ? "text-gold" : "text-forest")}
      >
        {viewAll.text}
      </MicroLink>
    </>
  );
}

/** Rail item sizing: 74vw on phones, fixed ~236px on tablet, a sixth of the row on desktop. */
export const railItem = "w-[74vw] max-w-[320px] shrink-0 snap-start md:w-[220px] xl:w-auto xl:max-w-none";
