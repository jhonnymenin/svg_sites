import { clsx } from "clsx";

/** Wide container, tight gutters — content fills ~93 % of the viewport (§2). */
export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={clsx("mx-auto w-full max-w-(--page-max) px-(--gutter)", className)}>{children}</div>;
}
