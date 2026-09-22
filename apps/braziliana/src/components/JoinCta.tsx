"use client";

import type { ReactNode } from "react";
import { requestJoin, type Role } from "./JoinForm";

/** A link-styled control that scrolls to the Join form and pre-ticks a role. */
export function JoinCta({ role, className, children }: { role?: Role; className?: string; children: ReactNode }) {
  return (
    <a
      href="#join"
      className={className}
      onClick={(e) => {
        e.preventDefault();
        requestJoin(role);
      }}
    >
      {children}
    </a>
  );
}
