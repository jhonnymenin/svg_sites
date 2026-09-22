import { clsx } from "clsx";

/** The page's only link style: uppercase, tracked, followed by an arrow that shifts +4px. */
export function MicroLink({
  href,
  children,
  className,
  label,
  style,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  /** Accessible name when the visible text is ambiguous out of context. */
  label?: string;
  style?: React.CSSProperties;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      style={style}
      className={clsx(
        "group inline-flex items-center gap-2 font-display text-[13px] font-medium uppercase leading-none tracking-[0.08em]",
        className
      )}
    >
      <span className="relative">
        {children}
        <span className="absolute -bottom-[5px] left-0 h-px w-0 bg-current transition-[width] duration-200 group-hover:w-full" />
      </span>
      <span aria-hidden className="micro-arrow">
        →
      </span>
    </a>
  );
}
