"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/config/navLinks";
import styles from "./NavLinks.module.scss"; // move to its own module

interface NavLinksProps {
  className?: string;
}
export default function NavLinks({ className = "" }: NavLinksProps) {
  const pathname = usePathname();

  return (
    <nav className={`${styles.navLinks} ${className}`}>
      {NAV_LINKS.map(({ label, href }) => {
        const isActive = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className={isActive ? styles.activeLink : undefined}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
