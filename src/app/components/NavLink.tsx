"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "./lib/utils";

interface NavLinkProps {
  href: string;
  className?: string;
  activeClassName?: string;
  pendingClassName?: string; // you could handle it with state if needed
  children: React.ReactNode;
}

export function NavLink({
  href,
  className,
  activeClassName,
  children,
}: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(className, isActive && activeClassName)}
    >
      {children}
    </Link>
  );
}
