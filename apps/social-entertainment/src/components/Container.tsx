import { clsx } from "clsx";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={clsx("mx-auto w-full max-w-(--page-max) px-(--gutter)", className)}
    >
      {children}
    </div>
  );
}
